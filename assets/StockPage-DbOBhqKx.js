const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DeK-ZssG.js","./index-DTZBx3tV.js","./index-D-Ubi8Nr.js"])))=>i.map(i=>d[i]);
import { c as createLucideIcon, b as useAuth, a as useLiveQuery, r as reactExports, e as useSearchParams, f as useLocation, j as jsxRuntimeExports, g as reactDomExports, P as Package, d as db, _ as __vitePreload } from "./index-DTZBx3tV.js";
import { D as Download, d as downloadTemplate, p as parseExcelFile, e as executeBulkImport, a as exportDataToExcel } from "./excel-BBt0spIL.js";
import { P as Plus } from "./plus-B6_7CH2j.js";
import { D as DollarSign } from "./dollar-sign-TWyVlCEK.js";
import { T as TriangleAlert } from "./triangle-alert-BXvleW2S.js";
import { T as Trash2, X, P as PenLine } from "./x-BC9UTZqf.js";
import { S as Search } from "./search-CbJHMnxY.js";
import { I as Image } from "./image-DGTWQISh.js";
import "./index-D-Ubi8Nr.js";
import "./index-DeK-ZssG.js";
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
const isLowStock = (p) => {
  const stock = Number(p.stock || 0);
  const min = p.minStock != null ? Number(p.minStock) : 5;
  return stock <= min;
};
const PRODUCT_LIMIT_FREE = 50;
const StockPage = () => {
  const { isPremium } = useAuth();
  const products = useLiveQuery(() => db.products.toArray()) || [];
  const settings = useLiveQuery(() => db.settings.toArray());
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [isMonetized, setIsMonetized] = reactExports.useState(false);
  const [showCriticalOnly, setShowCriticalOnly] = reactExports.useState(false);
  const [selectedIds, setSelectedIds] = reactExports.useState(null);
  const [shareProductData, setShareProductData] = reactExports.useState(null);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  reactExports.useEffect(() => {
    const filter = searchParams.get("filter") || location.state?.filter;
    const view = searchParams.get("view") || location.state?.view;
    if (view === "monetized") setIsMonetized(true);
    if (filter === "critical") setShowCriticalOnly(true);
  }, [searchParams, location.state]);
  reactExports.useEffect(() => {
    const handleBack = () => {
      if (isModalOpen) {
        if (confirm("¿Deseas cancelar los cambios y cerrar?")) {
          setIsModalOpen(false);
        }
      } else if (shareProductData) {
        setShareProductData(null);
      } else if (selectedIds !== null) {
        setSelectedIds(null);
      }
    };
    window.addEventListener("close-current-modal", handleBack);
    return () => window.removeEventListener("close-current-modal", handleBack);
  }, [isModalOpen, shareProductData, selectedIds]);
  const currency = settings?.find((s) => s.key === "currency")?.value || localStorage.getItem("currency") || "$";
  const emptyForm = () => ({
    code: "",
    name: "",
    stock: 0,
    purchasePrice: 0,
    salePrice: 0,
    price: 0,
    minStock: 0,
    category: "",
    supplier: ""
  });
  const [formProduct, setFormProduct] = reactExports.useState({ ...emptyForm(), details: "" });
  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("La imagen es demasiado grande (máx 2MB)");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormProduct((f) => ({ ...f, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  const shareProduct = async (product, options) => {
    try {
      let shareText = "";
      if (options.name) shareText += `*Producto:* ${product.name}
`;
      if (options.details && product.details) shareText += `*Detalles:* ${product.details}
`;
      if (options.name || options.details) shareText += `*Precio:* ${currency}${product.salePrice}
`;
      const shareData = {
        title: product.name,
        text: shareText.trim()
      };
      if (options.image && product.photo && product.photo.startsWith("data:image")) {
        const { Filesystem, Directory } = await __vitePreload(async () => {
          const { Filesystem: Filesystem2, Directory: Directory2 } = await import("./index-DeK-ZssG.js").then((n) => n.i);
          return { Filesystem: Filesystem2, Directory: Directory2 };
        }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
        const base64Data = product.photo.split(",")[1];
        const extension = product.photo.split(";")[0].split("/")[1] || "png";
        const fileName = `producto_${product.id}_${Date.now()}.${extension}`;
        const savedFile = await Filesystem.writeFile({
          path: fileName,
          data: base64Data,
          directory: Directory.Cache
        });
        shareData.files = [savedFile.uri];
      }
      const { Share } = await __vitePreload(async () => {
        const { Share: Share2 } = await import("./index-DeK-ZssG.js").then((n) => n.a);
        return { Share: Share2 };
      }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
      await Share.share(shareData);
      setShareProductData(null);
    } catch (error) {
      console.error("Error al compartir:", error);
      alert("No se pudo compartir el producto. Asegurate de dar permisos de archivos si compartís imagen.");
    }
  };
  const openModal = (product) => {
    if (product) {
      setEditingId(product.id || null);
      setFormProduct({
        code: product.code || "",
        name: product.name,
        stock: product.stock,
        purchasePrice: product.purchasePrice ?? product.price ?? 0,
        salePrice: product.salePrice ?? product.price ?? 0,
        price: product.price ?? 0,
        minStock: product.minStock ?? 0,
        category: product.category || "",
        supplier: product.supplier || "",
        details: product.details || "",
        photo: product.photo
      });
    } else {
      setEditingId(null);
      setFormProduct({ ...emptyForm(), details: "" });
    }
    setIsModalOpen(true);
  };
  const saveProduct = async () => {
    if (!formProduct.name) return;
    if (!isPremium && products.length >= PRODUCT_LIMIT_FREE && !editingId) {
      alert(`Límite del plan gratuito alcanzado (${PRODUCT_LIMIT_FREE} productos). Actualiza a Premium para agregar más.`);
      return;
    }
    const toSave = {
      ...formProduct,
      price: formProduct.salePrice
    };
    if (editingId) {
      await db.products.update(editingId, toSave);
    } else {
      await db.products.add(toSave);
    }
    setIsModalOpen(false);
  };
  const deleteProduct = async (id) => {
    if (id && confirm("¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.")) {
      await db.products.delete(id);
    }
  };
  const deleteSelected = async () => {
    if (!selectedIds || selectedIds.length === 0) return;
    if (confirm(`⚠️ ALERTA: ¿Estás seguro de que deseas eliminar los ${selectedIds.length} productos seleccionados?

Esta acción es irreversible y eliminará todo el registro e imágenes asociadas a los mismos.`)) {
      await db.products.bulkDelete(selectedIds);
      setSelectedIds(null);
    }
  };
  const toggleSelection = (id) => {
    if (!selectedIds) return;
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selId) => selId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };
  const filtered = products?.filter((p) => {
    const name = (p.name || "").toLowerCase();
    const code = (p.code || "").toLowerCase();
    const q = searchTerm.toLowerCase();
    const matchesSearch = name.includes(q) || code.includes(q);
    if (showCriticalOnly) return matchesSearch && isLowStock(p);
    return matchesSearch;
  }).sort((a, b) => (a.code || "").localeCompare(b.code || "", void 0, { numeric: true }));
  const totalMonetizedValue = filtered?.reduce((acc, p) => acc + Number(p.salePrice ?? p.price ?? 0) * Number(p.stock || 0), 0) || 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-section p-4 sm:p-8 animate-fade-in h-full flex flex-col w-full max-w-[1750px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl font-black mb-3 tracking-normal leading-tight", children: [
          "Gestión de ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Inventario" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-sm italic", children: "Control total sobre tus productos y niveles de stock." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadTemplate("products"), className: "flex items-center gap-2 px-6 py-4 rounded bg-slate-900 border border-white/5 hover:border-blue-500/50 transition-colors text-slate-400 hover:text-white group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 18, className: "text-blue-500/50 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: "Plantilla" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 px-6 py-4 rounded bg-slate-900 border border-white/5 hover:border-emerald-500/50 transition-colors text-slate-400 hover:text-white group cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18, className: "text-emerald-500/50 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: "Importar Excel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "hidden", accept: ".xlsx", onChange: async (e) => {
            const file = e.target.files?.[0];
            if (file) {
              try {
                const res = await parseExcelFile(file, "products");
                if (res.errors.length > 0) alert(`Se encontraron ${res.errors.length} errores.`);
                if (res.valid.length > 0) {
                  if (!isPremium && products.length + res.valid.length > PRODUCT_LIMIT_FREE) {
                    alert(`La importación excede el límite del plan gratuito (${PRODUCT_LIMIT_FREE} productos).`);
                    return;
                  }
                  await executeBulkImport("products", res.valid);
                  alert("Importación completada.");
                }
              } catch (err) {
                alert("Error al procesar el archivo.");
              }
            }
          } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => exportDataToExcel("products", filtered || []), className: "flex items-center gap-2 px-6 py-4 rounded bg-slate-900 border border-white/5 hover:border-orange-500/50 transition-colors text-slate-400 hover:text-white group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 18, className: "text-orange-500/50 group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: "Exportar Vista" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsMonetized(!isMonetized), className: `flex items-center gap-2 px-6 py-4 rounded transition-all ${isMonetized ? "bg-blue-600 text-white shadow-lg" : "bg-slate-900 border border-white/5 text-slate-400 hover:text-white"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 18 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: "Ver Monetizado" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setShowCriticalOnly(!showCriticalOnly), className: `flex items-center gap-2 px-6 py-4 rounded transition-all ${showCriticalOnly ? "bg-orange-600 text-white shadow-lg" : "bg-slate-900 border border-white/5 text-slate-400 hover:text-white"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 18 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: "Stock Crítico" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectedIds === null ? setSelectedIds([]) : setSelectedIds(null), className: `flex items-center gap-2 px-6 py-4 rounded transition-all ${selectedIds !== null ? "bg-indigo-600 text-white shadow-lg" : "bg-slate-900 border border-white/5 text-slate-400 hover:text-white"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 18 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: selectedIds !== null ? "Cancelar Selección" : "Selección Múltiple" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openModal(), className: "btn-primary flex items-center gap-2 px-6 py-4 shadow-xl shadow-blue-500/10 rounded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 20, strokeWidth: 3 }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: "Añadir Producto" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-10 w-full group", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors pointer-events-none", size: 20 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          placeholder: "Buscar por nombre o código...",
          className: "search-input w-full pr-6 py-5 bg-slate-900/40 border-white/5 focus:bg-slate-900 transition-all rounded text-sm",
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value)
        }
      )
    ] }),
    isMonetized && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 p-6 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-between animate-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1", children: "Valorización de Inventario Filtrado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-3xl font-black text-white", children: [
        currency,
        totalMonetizedValue.toLocaleString(void 0, { minimumFractionDigits: 2 })
      ] })
    ] }) }),
    selectedIds !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-white tracking-tight", children: "Modo de Selección Múltiple" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-indigo-400", children: [
          selectedIds.length,
          " elementos seleccionados"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedIds(filtered?.map((p) => p.id) || []), className: "px-6 py-3 bg-slate-900 text-slate-300 font-bold uppercase tracking-widest text-[10px] rounded hover:text-white transition-colors border border-white/10", children: "Seleccionar Todos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: deleteSelected, disabled: selectedIds.length === 0, className: `px-6 py-3 font-bold uppercase tracking-widest text-[10px] rounded transition-colors ${selectedIds.length > 0 ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20" : "bg-slate-800 text-slate-500 cursor-not-allowed"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16, className: "inline-block mr-2 -mt-0.5" }),
          " Eliminar Seleccionados"
        ] })
      ] })
    ] }),
    isModalOpen && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center z-[100] p-4 animate-fade-in modal-overlay-fix", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 sm:p-10 w-full border-white/5 shadow-2xl relative overflow-y-auto modal-card-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsModalOpen(false), className: "absolute top-8 right-8 p-2 text-slate-500 hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 28 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-black mb-8 tracking-normal", children: [
          editingId ? "Editar" : "Nuevo",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 uppercase italic text-xl", children: "Producto" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Nombre del Producto *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full", value: formProduct.name, onChange: (e) => setFormProduct((f) => ({ ...f, name: e.target.value })) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Código" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full input-with-icon", value: formProduct.code, onChange: (e) => setFormProduct((f) => ({ ...f, code: e.target.value })) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Detalles" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  className: "w-full bg-slate-900/40 border border-white/5 rounded-xl p-4 text-sm text-slate-300 focus:border-blue-500 outline-none min-h-[100px]",
                  value: formProduct.details,
                  onChange: (e) => setFormProduct((f) => ({ ...f, details: e.target.value })),
                  placeholder: "Ej. Color, talle, ubicación..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: [
                  "Compra (",
                  currency,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "w-full text-orange-400", value: formProduct.purchasePrice, onChange: (e) => setFormProduct((f) => ({ ...f, purchasePrice: Number(e.target.value) })) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: [
                  "Venta (",
                  currency,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "w-full text-emerald-400", value: formProduct.salePrice, onChange: (e) => setFormProduct((f) => ({ ...f, salePrice: Number(e.target.value) })) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Stock" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "w-full", value: formProduct.stock, onChange: (e) => setFormProduct((f) => ({ ...f, stock: Number(e.target.value) })) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Mínimo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "w-full text-amber-400", value: formProduct.minStock, onChange: (e) => setFormProduct((f) => ({ ...f, minStock: Number(e.target.value) })) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Imagen" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square rounded overflow-hidden border-2 border-dashed border-white/10 bg-slate-900/60 transition-all group/photo", children: [
              formProduct.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: formProduct.photo, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 64 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "absolute inset-0 opacity-0 cursor-pointer z-10", accept: "image/*", onChange: handlePhotoChange }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-slate-950/60 opacity-0 group-hover/photo:opacity-100 flex items-center justify-center transition-opacity pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 32 }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-8 pt-6 border-t border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsModalOpen(false), className: "flex-1 py-4 text-[10px] font-black text-slate-500", children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: saveProduct, className: "btn-primary flex-1 py-4 text-[10px] font-black", children: editingId ? "Actualizar" : "Registrar" })
        ] })
      ] }) }),
      document.body
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4 overflow-y-auto flex-1 items-center px-2 pb-8 w-full", children: filtered?.map((product) => {
      const isSelected = selectedIds !== null && selectedIds.includes(product.id);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          onClick: () => selectedIds !== null ? toggleSelection(product.id) : openModal(product),
          className: `glass-card border-white/5 group hover:border-blue-500/30 transition-all flex flex-col md:flex-row items-center gap-4 p-5 md:p-4 w-full max-w-[1400px] bg-slate-900/10 cursor-pointer min-h-[100px] ${isSelected ? "ring-2 ring-indigo-500 bg-indigo-500/10" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 w-full md:w-auto", children: [
              selectedIds !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-6 h-6 rounded flex items-center justify-center shrink-0 border-2 transition-colors ${isSelected ? "bg-indigo-500 border-indigo-500 text-white" : "border-slate-600"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 bg-white rounded-sm" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 md:w-14 md:h-14 rounded-xl overflow-hidden bg-slate-950 flex-shrink-0 border border-white/5", children: product.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.photo, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center opacity-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 24 }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-sm font-black tracking-tight group-hover:text-blue-400 transition-colors uppercase truncate mb-1", children: product.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base md:text-sm font-mono font-bold text-slate-200", children: [
                    "#",
                    product.code || "S/C"
                  ] }),
                  product.details && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-slate-400 font-medium italic truncate", children: product.details })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:contents gap-4 w-full md:w-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center md:flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-slate-600 uppercase mb-1", children: "Stock" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-2xl md:text-xl font-black ${isLowStock(product) ? "text-red-400" : "text-emerald-400"}`, children: product.stock })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right md:flex-1 md:px-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-slate-600 uppercase mb-1", children: "Precio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-2xl md:text-xl font-black", children: [
                  currency,
                  (product.salePrice ?? product.price ?? 0).toLocaleString()
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 md:opacity-0 md:group-hover:opacity-100 transition-all md:translate-x-2 md:group-hover:translate-x-0 w-full md:w-auto justify-end pt-3 md:pt-0 border-t md:border-t-0 border-white/5",
                onClick: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => setShareProductData(product),
                      className: "flex-1 md:flex-none flex items-center justify-center gap-2 p-4 md:p-3.5 bg-blue-500/10 hover:bg-blue-600 text-blue-400 hover:text-white rounded-xl border border-blue-500/20 transition-all",
                      title: "Compartir",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 20, className: "md:size-4 rotate-180" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "md:hidden font-bold uppercase tracking-wider text-[10px]", children: "Compartir" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => openModal(product),
                      className: "flex-1 md:flex-none flex items-center justify-center gap-2 p-4 md:p-3.5 bg-white/5 hover:bg-white text-slate-400 hover:text-slate-900 rounded-xl border border-white/10 transition-all group/edit",
                      title: "Editar",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 20, className: "md:size-4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "md:hidden font-bold uppercase tracking-wider text-[10px]", children: "Editar" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      onClick: () => deleteProduct(product.id),
                      className: "flex-1 md:flex-none flex items-center justify-center gap-2 p-4 md:p-3.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-xl border border-red-500/20 transition-all",
                      title: "Eliminar",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 20, className: "md:size-4" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "md:hidden font-bold uppercase tracking-wider text-[10px]", children: "Eliminar" })
                      ]
                    }
                  )
                ]
              }
            )
          ]
        },
        product.id
      );
    }) }),
    shareProductData && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center z-[110] p-4 animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-8 w-full max-w-md border-white/10 shadow-3xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-black mb-6 uppercase tracking-tight", children: [
          "Opciones de ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "Envío" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 mb-8", children: [
          { id: "all", label: "Todo junto", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { size: 24 }), opts: { name: true, details: true, image: true } },
          { id: "text", label: "Solo Texto", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 24 }), opts: { name: true, details: true, image: false } },
          { id: "image", label: "Solo Imagen", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 24 }), opts: { name: false, details: false, image: true } },
          { id: "simple", label: "Nombre + Precio", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 24 }), opts: { name: true, details: false, image: false } }
        ].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => shareProduct(shareProductData, opt.opts),
            className: "flex flex-col items-center gap-3 p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-slate-500 group-hover:text-blue-400 transition-colors", children: opt.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-widest", children: opt.label })
            ]
          },
          opt.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setShareProductData(null), className: "w-full py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors", children: "Cancelar" })
      ] }) }),
      document.body
    )
  ] });
};
export {
  StockPage,
  StockPage as default
};
