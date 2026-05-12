import { c as createLucideIcon, a as useLiveQuery, r as reactExports, j as jsxRuntimeExports, h as UserPlus, g as reactDomExports, U as Users, M as Mail, d as db } from "./index-BbO_2nLg.js";
import { D as Download, a as exportDataToExcel } from "./excel-NCvEsed_.js";
import { T as Trash2, X, P as PenLine } from "./x-BeblcN_0.js";
import { S as Search } from "./search-D-3R_Zqc.js";
import { S as Save } from "./save-FAsAsVCs.js";
import "./index-D-Ubi8Nr.js";
import "./index-B2mSapSJ.js";
const __iconNode$4 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M10 12h4", key: "a56b0p" }],
  ["path", { d: "M10 8h4", key: "1sr2af" }],
  ["path", { d: "M14 21v-3a2 2 0 0 0-4 0v3", key: "1rgiei" }],
  [
    "path",
    {
      d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
      key: "secmi2"
    }
  ],
  ["path", { d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16", key: "16ra0t" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const ContactsPage = () => {
  const contacts = useLiveQuery(() => db.contacts.toArray());
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [typeFilter, setTypeFilter] = reactExports.useState("all");
  const [selectedIds, setSelectedIds] = reactExports.useState(null);
  const emptyContact = () => ({
    name: "",
    type: "buyer",
    phone: "",
    email: "",
    address: "",
    city: "",
    province: "",
    cuit: "",
    notes: ""
  });
  const [formContact, setFormContact] = reactExports.useState(emptyContact());
  const openModal = (contact) => {
    if (contact) {
      setEditingId(contact.id || null);
      setFormContact({
        name: contact.name,
        type: contact.type,
        phone: contact.phone || "",
        email: contact.email || "",
        address: contact.address || "",
        city: contact.city || "",
        province: contact.province || "",
        cuit: contact.cuit || "",
        notes: contact.notes || ""
      });
    } else {
      setEditingId(null);
      setFormContact(emptyContact());
    }
    setIsModalOpen(true);
  };
  reactExports.useEffect(() => {
    const handleBack = () => {
      if (isModalOpen) {
        if (confirm("¿Deseas cancelar los cambios y cerrar?")) {
          setIsModalOpen(false);
        }
      } else if (selectedIds !== null) {
        setSelectedIds(null);
      }
    };
    window.addEventListener("close-current-modal", handleBack);
    return () => window.removeEventListener("close-current-modal", handleBack);
  }, [isModalOpen, selectedIds]);
  const saveContact = async () => {
    if (!formContact.name) return;
    try {
      if (editingId) {
        await db.contacts.update(editingId, formContact);
      } else {
        await db.contacts.add(formContact);
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error al guardar contacto:", error);
    }
  };
  const deleteContact = async (id) => {
    if (confirm("¿Estás seguro de que deseas eliminar este contacto?")) {
      await db.contacts.delete(id);
    }
  };
  const deleteSelected = async () => {
    if (!selectedIds || selectedIds.length === 0) return;
    if (confirm(`⚠️ ALERTA: ¿Estás seguro de que deseas eliminar los ${selectedIds.length} contactos seleccionados?

Esta acción es irreversible y podría afectar las operaciones asociadas.`)) {
      await db.contacts.bulkDelete(selectedIds);
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
  const filtered = contacts?.filter((c) => {
    const matchesType = typeFilter === "all" || c.type === typeFilter;
    const q = searchTerm.toLowerCase();
    const matchesSearch = !q || c.name.toLowerCase().includes(q) || c.cuit?.includes(q) || c.city?.toLowerCase().includes(q);
    return matchesType && matchesSearch;
  });
  const filterPillStyle = (active) => ({
    padding: "8px 18px",
    borderRadius: "999px",
    fontWeight: 900,
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    cursor: "pointer",
    transition: "all 0.2s",
    border: active ? "1px solid rgba(59,130,246,0.5)" : "1px solid rgba(51,65,85,0.4)",
    background: active ? "rgba(59,130,246,0.15)" : "rgba(15,23,42,0.4)",
    color: active ? "#60a5fa" : "#64748b"
  });
  const counts = {
    all: contacts?.length || 0,
    buyer: contacts?.filter((c) => c.type === "buyer").length || 0,
    seller: contacts?.filter((c) => c.type === "seller").length || 0,
    both: contacts?.filter((c) => c.type === "both").length || 0
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-section p-8 animate-in fade-in duration-700 w-full max-w-[1750px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-black mb-2 tracking-tight", children: [
          "Directorio de ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Contactos" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-sm", children: "Gestiona tus relaciones comerciales." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => exportDataToExcel(typeFilter === "seller" ? "sellers" : "buyers", filtered || []),
            className: "flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900 border border-white/5 hover:border-slate-500 transition-colors text-slate-400 hover:text-white group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 18, className: "group-hover:scale-110 transition-transform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: "Exportar Vista" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectedIds === null ? setSelectedIds([]) : setSelectedIds(null), className: `flex items-center gap-2 px-6 py-4 rounded transition-all ${selectedIds !== null ? "bg-indigo-600 text-white shadow-lg" : "bg-slate-900 border border-white/5 text-slate-400 hover:text-white"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 18 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: selectedIds !== null ? "Cancelar Selección" : "Selección Múltiple" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openModal(), className: "btn-primary flex items-center gap-2 px-6 py-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UserPlus, { size: 20, strokeWidth: 3 }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold uppercase tracking-wider text-xs", children: "Nuevo Contacto" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: [
        { val: "all", label: `Todos (${counts.all})` },
        { val: "buyer", label: `Compradores (${counts.buyer})` },
        { val: "seller", label: `Proveedores (${counts.seller})` },
        { val: "both", label: `Ambos (${counts.both})` }
      ].map(({ val, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTypeFilter(val), style: filterPillStyle(typeFilter === val), children: label }, val)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-[220px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none", size: 18 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Buscar por nombre, CUIT o localidad...",
            className: "search-input w-full pr-4 py-3 bg-slate-900/40 border-slate-800/60 focus:bg-slate-900 transition-all rounded text-sm",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value)
          }
        )
      ] })
    ] }),
    selectedIds !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-white tracking-tight", children: "Modo de Selección Múltiple" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-indigo-400", children: [
          selectedIds.length,
          " elementos seleccionados"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedIds(filtered?.map((c) => c.id) || []), className: "px-6 py-3 bg-slate-900 text-slate-300 font-bold uppercase tracking-widest text-[10px] rounded hover:text-white transition-colors border border-white/10", children: "Seleccionar Todos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: deleteSelected, disabled: selectedIds.length === 0, className: `px-6 py-3 font-bold uppercase tracking-widest text-[10px] rounded transition-colors ${selectedIds.length > 0 ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20" : "bg-slate-800 text-slate-500 cursor-not-allowed"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16, className: "inline-block mr-2 -mt-0.5" }),
          " Eliminar Seleccionados"
        ] })
      ] })
    ] }),
    isModalOpen && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center z-[100] p-4 animate-fade-in modal-overlay-fix", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-6 sm:p-10 w-full border-white/5 shadow-2xl relative overflow-y-auto modal-card-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsModalOpen(false), className: "absolute top-8 right-8 p-2 text-slate-500 hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 28 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center ${formContact.type === "buyer" ? "bg-blue-500/10 text-blue-400" : "bg-orange-500/10 text-orange-400"} border border-white/5`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 24 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-black tracking-normal", children: [
            editingId ? "Editar" : "Nuevo",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${formContact.type === "buyer" ? "text-blue-400" : "text-orange-400"} uppercase italic text-xl`, children: formContact.type === "buyer" ? "Cliente" : "Proveedor" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Nombre Completo *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  className: "w-full",
                  placeholder: "Ej. Juan Pérez o Distribuidora ABC",
                  value: formContact.name,
                  onChange: (e) => setFormContact((f) => ({ ...f, name: e.target.value }))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Tipo de Contacto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "select",
                  {
                    className: "w-full",
                    value: formContact.type,
                    onChange: (e) => setFormContact((f) => ({ ...f, type: e.target.value })),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "buyer", children: "Cliente" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "seller", children: "Proveedor / Vendedor" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "DNI / CUIT" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "w-full",
                    placeholder: "Opcional",
                    value: formContact.cuit || "",
                    onChange: (e) => setFormContact((f) => ({ ...f, cuit: e.target.value }))
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Número de Teléfono" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "w-full input-with-icon",
                    placeholder: "Ej. +54 9 11 ...",
                    value: formContact.phone,
                    onChange: (e) => setFormContact((f) => ({ ...f, phone: e.target.value }))
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Correo Electrónico" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "w-full input-with-icon",
                    placeholder: "ejemplo@correo.com",
                    value: formContact.email,
                    onChange: (e) => setFormContact((f) => ({ ...f, email: e.target.value }))
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Dirección" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    className: "w-full input-with-icon",
                    placeholder: "Calle, Ciudad, Provincia",
                    value: formContact.address,
                    onChange: (e) => setFormContact((f) => ({ ...f, address: e.target.value }))
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "Notas Generales" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  className: "w-full h-24 p-4 !text-sm",
                  placeholder: "Información adicional relevante...",
                  value: formContact.notes,
                  onChange: (e) => setFormContact((f) => ({ ...f, notes: e.target.value }))
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-12 pt-8 border-t border-white/5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsModalOpen(false), className: "flex-1 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors", children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: saveContact, className: "btn-primary flex items-center justify-center gap-3 py-4 shadow-xl shadow-blue-500/10 text-[10px] font-black uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 18 }),
            " ",
            editingId ? "Actualizar" : "Guardar",
            " Contacto"
          ] })
        ] })
      ] }) }),
      document.body
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 overflow-y-auto flex-1 px-2 pb-8 items-center w-full", children: [
      filtered?.sort((a, b) => a.name.localeCompare(b.name)).map((contact) => {
        const isSelected = selectedIds !== null && selectedIds.includes(contact.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => selectedIds !== null ? toggleSelection(contact.id) : openModal(contact),
            className: `glass-card border-white/5 group hover:border-white/20 transition-all flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 p-5 md:p-4 w-full max-w-[1400px] bg-slate-900/10 min-h-[100px] cursor-pointer ${isSelected ? "ring-2 ring-indigo-500 bg-indigo-500/10" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 w-full md:min-w-[280px] md:w-auto", children: [
                selectedIds !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-6 h-6 rounded flex items-center justify-center shrink-0 border-2 transition-colors ${isSelected ? "bg-indigo-500 border-indigo-500 text-white" : "border-slate-600"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 bg-white rounded-sm" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-14 h-14 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-500 group-hover:scale-110 ${contact.type === "buyer" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : contact.type === "seller" ? "bg-orange-500/10 text-orange-400 border-orange-500/20" : "bg-violet-500/10 text-violet-400 border-violet-500/20"}`, children: contact.type === "buyer" ? /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 28, "md-size": 22, strokeWidth: 1.5 }) : contact.type === "seller" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { size: 28, "md-size": 22, strokeWidth: 1.5 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { size: 28, "md-size": 22, strokeWidth: 1.5 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-lg font-black tracking-tight group-hover:text-blue-400 transition-colors uppercase whitespace-nowrap overflow-hidden text-ellipsis mb-1", children: contact.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${contact.type === "buyer" ? "bg-blue-500/10 text-blue-400" : contact.type === "seller" ? "bg-orange-500/10 text-orange-400" : "bg-violet-500/10 text-violet-400"}`, children: contact.type === "buyer" ? "Cliente" : contact.type === "seller" ? "Proveedor" : "Ambos" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:contents gap-4 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:min-w-[150px] md:px-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1", children: "Identificación" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-xs font-mono text-slate-400", children: contact.cuit || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700 italic", children: "Sin CUIT" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:flex-1 md:min-w-[200px] md:px-6 md:border-x md:border-white/[0.03] space-y-2 md:space-y-1", children: [
                  contact.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-slate-400 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "text-blue-500/50" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: contact.phone })
                  ] }),
                  contact.email && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-slate-400 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14, className: "text-blue-500/50" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-medium", children: contact.email })
                  ] }),
                  !contact.phone && !contact.email && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700 text-xs italic", children: "Sin datos de contacto" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:min-w-[200px] md:px-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1", children: "Localidad" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-slate-400 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "text-red-500/50" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: [contact.city, contact.province].filter(Boolean).join(", ") || /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-700 italic", children: "No especificada" }) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-3 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 md:translate-x-4 md:group-hover:translate-x-0 w-full md:w-auto justify-end pt-4 md:pt-0 border-t md:border-t-0 border-white/5",
                  onClick: (e) => e.stopPropagation(),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        onClick: () => openModal(contact),
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
                        onClick: () => deleteContact(contact.id),
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
          contact.id
        );
      }),
      (!filtered || filtered.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-[1400px] py-32 text-center rounded-[30px] border border-dashed border-white/10 bg-white/[0.01]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 64, className: "text-slate-800 mx-auto mb-6 opacity-20", strokeWidth: 1 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-slate-500 uppercase tracking-widest mb-2", children: "Directorio Vacío" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-600 font-medium italic mb-8", children: typeFilter === "all" ? "No hay contactos registrados" : `Sin ${typeFilter === "buyer" ? "compradores" : typeFilter === "seller" ? "proveedores" : "contactos"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openModal(), className: "px-8 py-3 bg-blue-600 text-white font-black hover:scale-105 transition-transform rounded-xl uppercase tracking-widest text-[10px]", children: "+ Agregar contacto" })
      ] })
    ] })
  ] });
};
export {
  ContactsPage,
  ContactsPage as default
};
