import { c as createLucideIcon, a as useLiveQuery, r as reactExports, f as useLocation, j as jsxRuntimeExports, g as reactDomExports, d as db } from "./index-BbO_2nLg.js";
import { D as Download, a as exportDataToExcel } from "./excel-NCvEsed_.js";
import { T as Trash2, X, P as PenLine } from "./x-BeblcN_0.js";
import { P as Plus } from "./plus-BzUks2v0.js";
import { S as Search } from "./search-D-3R_Zqc.js";
import { A as ArrowUpRight } from "./arrow-up-right-C27TBpSs.js";
import { A as ArrowDownLeft } from "./arrow-down-left-CIurCUdY.js";
import { C as CircleCheckBig } from "./circle-check-big-Dt2f8ZsN.js";
import "./index-D-Ubi8Nr.js";
import "./index-B2mSapSJ.js";
const __iconNode$2 = [
  ["path", { d: "m16 3 4 4-4 4", key: "1x1c3m" }],
  ["path", { d: "M20 7H4", key: "zbl0bi" }],
  ["path", { d: "m8 21-4-4 4-4", key: "h9nckh" }],
  ["path", { d: "M4 17h16", key: "g4d7ey" }]
];
const ArrowRightLeft = createLucideIcon("arrow-right-left", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["path", { d: "M16 17h6", key: "1ook5g" }],
  ["path", { d: "M19 14v6", key: "1ckrd5" }],
  [
    "path",
    {
      d: "M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955",
      key: "28k6lz"
    }
  ],
  ["path", { d: "M3.29 7 12 12l8.71-5", key: "19ckod" }],
  ["path", { d: "m7.5 4.27 8.997 5.148", key: "9yrvtv" }]
];
const PackagePlus = createLucideIcon("package-plus", __iconNode);
const ContactSearch = ({ contacts, value, onChange, typeHint }) => {
  const [query, setQuery] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  const selected = contacts.find((c) => c.id === value);
  reactExports.useEffect(() => {
    if (selected) setQuery(selected.name);
  }, [selected?.id]);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const filtered = contacts.filter((c) => {
    const matchType = typeHint === "all" || !typeHint ? true : c.type === typeHint || c.type === "both";
    const matchName = c.name.toLowerCase().includes(query.toLowerCase());
    return matchType && matchName;
  }).sort((a, b) => a.name.localeCompare(b.name)).slice(0, 1e3);
  const handleSelect = (c) => {
    onChange(c.id);
    setQuery(c.name);
    setOpen(false);
  };
  const handleClear = () => {
    setQuery("");
    onChange(void 0);
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "w-full input-with-icon text-sm",
        placeholder: "Buscar contacto...",
        value: query,
        onChange: (e) => {
          setQuery(e.target.value);
          setOpen(true);
          if (!e.target.value) onChange(void 0);
        },
        onFocus: () => setOpen(true),
        autoComplete: "off"
      }
    ),
    query && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleClear, className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 }) }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[calc(100%+4px)] left-0 right-0 bg-slate-900 border border-white/10 rounded-xl z-[120] max-h-96 overflow-y-auto shadow-2xl overscroll-contain touch-pan-y", children: filtered.length > 0 ? filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => handleSelect(c),
        className: "flex items-center gap-3 w-full px-4 py-3 text-sm text-left text-slate-300 hover:bg-blue-500/10 transition-colors",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: c.name })
      },
      c.id
    )) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 text-sm text-slate-500", children: "Sin resultados" }) })
  ] });
};
const ProductSearch = ({ products, onAdd }) => {
  const [query, setQuery] = reactExports.useState("");
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  const filtered = products.filter((p) => {
    const q = query.toLowerCase();
    return p.name.toLowerCase().includes(q) || p.code && p.code.toLowerCase().includes(q);
  }).sort((a, b) => (a.code || "").localeCompare(b.code || "", void 0, { numeric: true })).slice(0, 1e3);
  const handleSelect = (p) => {
    onAdd(p);
    setQuery("");
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative flex-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PackagePlus, { size: 16, className: "absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "w-full input-with-icon pr-4 py-3 bg-blue-500/5 border-blue-500/20 text-sm font-medium focus:bg-blue-500/10 transition-colors placeholder:text-blue-500/40",
        placeholder: "Buscar por código o nombre del producto...",
        value: query,
        onChange: (e) => {
          setQuery(e.target.value);
          setOpen(true);
        },
        onFocus: () => setOpen(true),
        autoComplete: "off"
      }
    ),
    open && query && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[calc(100%+4px)] left-0 right-0 bg-slate-800 border border-white/10 rounded-xl z-[120] overflow-y-auto max-h-[50vh] shadow-[0_20px_40px_rgba(0,0,0,0.8)] overscroll-contain touch-pan-y", children: filtered.length > 0 ? filtered.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => handleSelect(p),
        className: "flex items-center gap-3 w-full px-4 py-3 text-sm text-left text-slate-300 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0",
        children: [
          p.code && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono px-2 py-1 bg-slate-900 rounded-md text-slate-400", children: p.code }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs text-slate-500", children: [
            "Stock: ",
            p.stock
          ] })
        ]
      },
      p.id
    )) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 text-sm text-slate-500", children: "No se encontraron productos" }) })
  ] });
};
const OperationsPage = () => {
  const products = useLiveQuery(() => db.products.toArray());
  const contacts = useLiveQuery(() => db.contacts.toArray());
  const accounts = useLiveQuery(() => db.accounts.toArray());
  const settings = useLiveQuery(() => db.settings.toArray());
  const transactions = useLiveQuery(() => db.transactions.orderBy("date").reverse().toArray());
  const currency = settings?.find((s) => s.key === "currency")?.value || localStorage.getItem("currency") || "$";
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [searchTerm, setSearchTerm] = reactExports.useState("");
  const [filterStatus, setFilterStatus] = reactExports.useState("all");
  const [selectedContactId, setSelectedContactId] = reactExports.useState(void 0);
  const [displayLimit, setDisplayLimit] = reactExports.useState(void 0);
  const [selectedIds, setSelectedIds] = reactExports.useState(null);
  const location = useLocation();
  reactExports.useEffect(() => {
    if (location.state?.filter === "recent") {
      setDisplayLimit(10);
    }
  }, [location.state]);
  const emptyTx = () => ({
    type: "sale",
    status: "confirmed",
    items: [],
    contactId: void 0,
    accountId: accounts?.[0]?.id ?? 0,
    toAccountId: 0,
    paymentMethod: "cash",
    paymentMethodDetail: "cash",
    // Nuevo: Efectivo / Digital
    category: "",
    // Nuevo: Categoría para gastos/ingresos
    date: /* @__PURE__ */ new Date(),
    deliveryDate: /* @__PURE__ */ new Date(),
    paymentDate: /* @__PURE__ */ new Date(),
    isPaymentDeferred: false,
    note: "",
    includesTax: false,
    taxRate: 21
  });
  const [newTx, setNewTx] = reactExports.useState(emptyTx());
  const [editingId, setEditingId] = reactExports.useState(null);
  const openModal = (tx) => {
    if (tx) {
      setEditingId(tx.id || null);
      setNewTx({
        ...tx,
        date: new Date(tx.date),
        deliveryDate: tx.deliveryDate ? new Date(tx.deliveryDate) : new Date(tx.date),
        paymentDate: tx.paymentDate ? new Date(tx.paymentDate) : tx.isPaymentDeferred ? void 0 : new Date(tx.date)
      });
    } else {
      setEditingId(null);
      setNewTx(emptyTx());
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
  }, [isModalOpen]);
  const addProductItem = (p) => {
    const items = newTx.items || [];
    const exists = items.find((i) => i.productId === p.id);
    const price = newTx.type === "sale" ? p.salePrice ?? p.price ?? 0 : p.purchasePrice ?? p.price ?? 0;
    if (exists) {
      setNewTx({ ...newTx, items: items.map((i) => i.productId === p.id ? { ...i, quantity: i.quantity + 1 } : i) });
    } else {
      setNewTx({ ...newTx, items: [...items, { productId: p.id, quantity: 1, unitPrice: price }] });
    }
  };
  const updateItem = (index, changes) => {
    const items = [...newTx.items || []];
    items[index] = { ...items[index], ...changes };
    setNewTx({ ...newTx, items });
  };
  const removeItem = (index) => {
    const items = [...newTx.items || []];
    items.splice(index, 1);
    setNewTx({ ...newTx, items });
  };
  const calcSubtotal = () => {
    if (newTx.type === "transfer") return newTx.unitPrice || 0;
    const items = newTx.items || [];
    return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  };
  const totalAmount = calcSubtotal() * (newTx.includesTax ? 1 + (newTx.taxRate || 0) / 100 : 1);
  const applyStockChange = async (tx, reverse = false) => {
    const deliveryIsNow = !tx.deliveryDate || new Date(tx.deliveryDate) <= /* @__PURE__ */ new Date();
    if (!deliveryIsNow || tx.type === "transfer" || tx.type === "expense" || tx.type === "income") return false;
    const items = tx.items || [];
    for (const item of items) {
      const product = await db.products.get(item.productId);
      if (product) {
        let adjustment = tx.type === "sale" ? -item.quantity : item.quantity;
        if (reverse) adjustment = -adjustment;
        await db.products.update(item.productId, { stock: (product.stock || 0) + adjustment });
      }
    }
    return true;
  };
  const applyAccountChange = async (tx, reverse = false) => {
    if (tx.isPaymentDeferred && !reverse) return false;
    const paymentIsNow = !tx.paymentDate || new Date(tx.paymentDate) <= /* @__PURE__ */ new Date();
    if (!paymentIsNow && !reverse) return false;
    const amount = getTxAmount(tx);
    if (tx.type === "transfer" && tx.accountId && tx.toAccountId) {
      const fromAcc = await db.accounts.get(tx.accountId);
      const toAcc = await db.accounts.get(tx.toAccountId);
      let adj = reverse ? -amount : amount;
      if (fromAcc) await db.accounts.update(tx.accountId, { balance: fromAcc.balance - adj });
      if (toAcc) await db.accounts.update(tx.toAccountId, { balance: toAcc.balance + adj });
      return true;
    }
    if (tx.accountId) {
      const account = await db.accounts.get(tx.accountId);
      if (account) {
        const isInflow = tx.type === "sale" || tx.type === "income";
        let adjustment = isInflow ? amount : -amount;
        if (reverse) adjustment = -adjustment;
        await db.accounts.update(tx.accountId, { balance: account.balance + adjustment });
        return true;
      }
    }
    return false;
  };
  const saveTransaction = async (saveAs) => {
    const isFinancialOnly = newTx.type === "expense" || newTx.type === "income";
    if (newTx.type === "transfer") {
      if (!newTx.accountId || !newTx.toAccountId || !newTx.unitPrice) return;
    } else if (isFinancialOnly) {
      if (!newTx.unitPrice || !newTx.accountId) return;
    } else {
      if (!newTx.items || newTx.items.length === 0) return;
    }
    await db.transaction("rw", [db.transactions, db.products, db.accounts], async () => {
      if (editingId) {
        const oldTx = await db.transactions.get(editingId);
        if (oldTx && oldTx.status === "confirmed") {
          if (oldTx.stockApplied) await applyStockChange(oldTx, true);
          if (oldTx.paymentApplied) await applyAccountChange(oldTx, true);
        }
      }
      const txToSave = {
        ...newTx,
        status: saveAs,
        date: newTx.date || /* @__PURE__ */ new Date()
      };
      if (saveAs === "confirmed") {
        const stockApplied = await applyStockChange(txToSave);
        const paymentApplied = await applyAccountChange(txToSave);
        if (editingId) {
          await db.transactions.update(editingId, { ...txToSave, stockApplied, paymentApplied });
        } else {
          await db.transactions.add({ ...txToSave, stockApplied, paymentApplied });
        }
      } else {
        if (editingId) {
          await db.transactions.update(editingId, { ...txToSave, stockApplied: false, paymentApplied: false });
        } else {
          await db.transactions.add({ ...txToSave, stockApplied: false, paymentApplied: false });
        }
      }
    });
    setIsModalOpen(false);
    setNewTx(emptyTx());
    setEditingId(null);
  };
  const deleteTransaction = async (id) => {
    if (!confirm("¿Estás seguro de que deseas eliminar esta operación? Se revertirán los cambios en stock y cuentas.")) return;
    await db.transaction("rw", [db.transactions, db.products, db.accounts], async () => {
      const tx = await db.transactions.get(id);
      if (tx && tx.status === "confirmed") {
        if (tx.stockApplied) await applyStockChange(tx, true);
        if (tx.paymentApplied) await applyAccountChange(tx, true);
      }
      await db.transactions.delete(id);
    });
  };
  const deleteSelected = async () => {
    if (!selectedIds || selectedIds.length === 0) return;
    if (!confirm(`⚠️ ALERTA: ¿Estás seguro de que deseas eliminar las ${selectedIds.length} operaciones seleccionadas?

Esta acción es irreversible. Se revertirán todos los impactos en stock y cuentas asociados a estas operaciones de forma automática.`)) return;
    await db.transaction("rw", [db.transactions, db.products, db.accounts], async () => {
      for (const id of selectedIds) {
        const tx = await db.transactions.get(id);
        if (tx && tx.status === "confirmed") {
          if (tx.stockApplied) await applyStockChange(tx, true);
          if (tx.paymentApplied) await applyAccountChange(tx, true);
        }
        await db.transactions.delete(id);
      }
    });
    setSelectedIds(null);
  };
  const toggleSelection = (id) => {
    if (!selectedIds) return;
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selId) => selId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };
  const getTxAmount = (tx) => {
    if (tx.type === "transfer" || tx.type === "expense" || tx.type === "income") return tx.unitPrice || 0;
    const items = tx.items || [];
    const sub = items.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
    return sub * (tx.includesTax ? 1 + (tx.taxRate || 0) / 100 : 1);
  };
  const filteredTransactions = transactions?.filter((tx) => {
    if (filterStatus !== "all" && tx.status !== filterStatus) return false;
    if (selectedContactId && tx.contactId !== selectedContactId) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      return tx.note?.toLowerCase().includes(q);
    }
    return true;
  });
  const displayTransactions = displayLimit ? filteredTransactions?.slice(0, displayLimit) : filteredTransactions;
  const totals = {
    sales: transactions?.filter((t) => t.type === "sale" && t.status === "confirmed").reduce((s, t) => s + getTxAmount(t), 0) || 0,
    purchases: transactions?.filter((t) => t.type === "purchase" && t.status === "confirmed").reduce((s, t) => s + getTxAmount(t), 0) || 0,
    budgets: transactions?.filter((t) => t.status === "budget").length || 0
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-section p-4 sm:p-8 animate-fade-in h-full flex flex-col w-full max-w-[1750px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl font-black mb-3 tracking-normal leading-tight", children: [
          "Gestión de ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Operaciones" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-sm italic", children: "Ventas, compras y transferencias." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => exportDataToExcel("transactions", filteredTransactions || []), className: "flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900 border border-white/5 hover:border-slate-500 transition-colors text-slate-400 hover:text-white group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 18, className: "group-hover:scale-110 transition-transform" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: "Exportar Vista" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectedIds === null ? setSelectedIds([]) : setSelectedIds(null), className: `flex items-center gap-2 px-6 py-4 rounded-xl transition-all ${selectedIds !== null ? "bg-indigo-600 text-white shadow-lg" : "bg-slate-900 border border-white/5 text-slate-400 hover:text-white"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 18 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: selectedIds !== null ? "Cancelar Selección" : "Selección Múltiple" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openModal(), className: "btn-primary flex items-center gap-2 px-6 py-4 shadow-xl shadow-blue-500/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 20, strokeWidth: 3 }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: "Nueva Operación" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 relative group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors pointer-events-none", size: 18 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            type: "text",
            placeholder: "Buscar por nota o concepto...",
            className: "search-input w-full pr-4 py-4 bg-slate-900 shadow-inner rounded",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            className: "bg-slate-900 border border-white/5 rounded px-4 py-4 text-xs font-bold uppercase tracking-widest text-slate-400",
            value: filterStatus,
            onChange: (e) => setFilterStatus(e.target.value),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "Todos los Estados" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "confirmed", children: "Confirmados" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "budget", children: "Presupuestos" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-[200px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ContactSearch,
          {
            contacts: contacts || [],
            value: selectedContactId,
            onChange: setSelectedContactId,
            typeHint: "all"
          }
        ) })
      ] })
    ] }),
    selectedIds !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-white tracking-tight", children: "Modo de Selección Múltiple" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-indigo-400", children: [
          selectedIds.length,
          " elementos seleccionados"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedIds(displayTransactions?.map((t) => t.id) || []), className: "px-6 py-3 bg-slate-900 text-slate-300 font-bold uppercase tracking-widest text-[10px] rounded hover:text-white transition-colors border border-white/10", children: "Seleccionar Todos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: deleteSelected, disabled: selectedIds.length === 0, className: `px-6 py-3 font-bold uppercase tracking-widest text-[10px] rounded transition-colors ${selectedIds.length > 0 ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20" : "bg-slate-800 text-slate-500 cursor-not-allowed"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16, className: "inline-block mr-2 -mt-0.5" }),
          " Eliminar Seleccionados"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 mb-8", children: [
      { label: "Total Ingresos", val: totals.sales, color: "#22c55e" },
      { label: "Total Egresos", val: totals.purchases, color: "#ef4444" },
      { label: "Presupuestos", val: totals.budgets, color: "#f59e0b" }
    ].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-4 flex flex-col justify-center min-h-[100px] overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 truncate", children: k.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl sm:text-2xl font-black truncate leading-tight", style: { color: k.color }, children: typeof k.val === "number" && k.label !== "Presupuestos" ? `${currency}${k.val.toLocaleString()}` : k.val })
    ] }, k.label)) }),
    isModalOpen && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center z-[110] p-4 sm:p-8 animate-fade-in modal-overlay-fix", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card w-full border-white/10 shadow-3xl flex flex-col overflow-hidden modal-card-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 border-b border-white/5 flex justify-between items-center bg-slate-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl sm:text-2xl font-black tracking-normal flex items-center gap-3", children: [
            editingId ? "Editar" : "Nueva",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400 uppercase italic text-xl", children: newTx.type === "transfer" ? "Transferencia" : newTx.type === "sale" ? "Venta" : newTx.type === "purchase" ? "Compra" : newTx.type === "expense" ? "Gasto" : "Ingreso" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsModalOpen(false), className: "p-2 text-slate-500 hover:text-white transition-colors bg-white/5 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 space-y-6 lg:space-y-8 lg:border-r border-white/5 lg:pr-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "TIPO DE OPERACIÓN" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
                { val: "sale", label: "Venta", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 16 }), color: "#10b981" },
                { val: "purchase", label: "Compra", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { size: 16 }), color: "#ef4444" },
                { val: "expense", label: "Gasto", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { size: 16 }), color: "#f43f5e" },
                { val: "income", label: "Ingreso", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 16 }), color: "#3b82f6" },
                { val: "transfer", label: "Transfer.", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRightLeft, { size: 16 }), color: "#8b5cf6" }
              ].map(({ val, label, icon, color }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setNewTx((t) => ({ ...t, type: val, items: [], unitPrice: 0 })),
                  style: {
                    padding: "12px 6px",
                    borderRadius: 12,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 4,
                    border: newTx.type === val ? `1px solid ${color}60` : "1px solid rgba(51,65,85,0.4)",
                    background: newTx.type === val ? `${color}15` : "rgba(15,23,42,0.4)",
                    color: newTx.type === val ? color : "#64748b",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  },
                  children: [
                    icon,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 9, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em" }, children: label })
                  ]
                },
                val
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
              (newTx.type === "sale" || newTx.type === "purchase") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 flex justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: newTx.type === "sale" ? "Cliente" : "Proveedor" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ContactSearch, { contacts: contacts || [], value: newTx.contactId, onChange: (id) => setNewTx((t) => ({ ...t, contactId: id })), typeHint: newTx.type === "sale" ? "buyer" : "seller" })
              ] }),
              newTx.type === "transfer" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 text-red-400", children: "Desde (Origen)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full text-sm", value: newTx.accountId, onChange: (e) => setNewTx((t) => ({ ...t, accountId: Number(e.target.value) })), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 0, children: "Seleccionar origen..." }),
                    accounts?.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a.id, children: a.name }, a.id))
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 text-emerald-400", children: "Hacia (Destino)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full text-sm", value: newTx.toAccountId, onChange: (e) => setNewTx((t) => ({ ...t, toAccountId: Number(e.target.value) })), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 0, children: "Seleccionar destino..." }),
                    accounts?.filter((a) => a.id !== newTx.accountId).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a.id, children: a.name }, a.id))
                  ] })
                ] })
              ] }),
              newTx.type !== "transfer" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-slate-900/40 rounded-xl border border-white/5 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest", children: "Impacto en Cuenta / Caja" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "w-full text-xs", value: newTx.accountId, onChange: (e) => setNewTx((t) => ({ ...t, accountId: Number(e.target.value) })), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: 0, children: "Seleccionar caja/cuenta..." }),
                  accounts?.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: a.id, children: a.name }, a.id))
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["cash", "digital"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setNewTx((t) => ({ ...t, paymentMethodDetail: m })),
                    className: `flex-1 py-3 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all ${newTx.paymentMethodDetail === m ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" : "bg-slate-800 text-slate-500 border border-transparent"}`,
                    children: m === "cash" ? "Efectivo" : "Digital / Banco"
                  },
                  m
                )) })
              ] }),
              (newTx.type === "expense" || newTx.type === "income") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2", children: "Concepto / Categoría" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full text-xs", placeholder: "Ej. Combustible, Alquiler...", value: newTx.category, onChange: (e) => setNewTx((t) => ({ ...t, category: e.target.value })) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2", children: "Fecha de Operación" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      type: "date",
                      className: "w-full bg-slate-900/40 border-white/5 rounded-xl p-3 text-xs text-slate-300",
                      value: newTx.date ? `${newTx.date.getFullYear()}-${String(newTx.date.getMonth() + 1).padStart(2, "0")}-${String(newTx.date.getDate()).padStart(2, "0")}` : "",
                      onChange: (e) => {
                        const val = e.target.value;
                        if (!val) return;
                        const [y, m, d] = val.split("-").map(Number);
                        const newD = new Date(newTx.date || /* @__PURE__ */ new Date());
                        newD.setFullYear(y, m - 1, d);
                        setNewTx((t) => ({ ...t, date: newD, deliveryDate: newD, paymentDate: t.isPaymentDeferred ? t.paymentDate : newD }));
                      }
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 px-3 py-3 bg-slate-900/40 border border-amber-500/10 rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "deferPay", checked: newTx.isPaymentDeferred || false, onChange: (e) => {
                      const isDeferred = e.target.checked;
                      setNewTx((t) => ({ ...t, isPaymentDeferred: isDeferred, paymentDate: isDeferred ? void 0 : t.date }));
                    }, className: "rounded bg-slate-800 border-slate-700 text-amber-500" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "deferPay", className: "text-[10px] font-black text-amber-500 uppercase tracking-widest cursor-pointer", children: "Diferir Cobro/Pago" })
                  ] }),
                  newTx.isPaymentDeferred && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2 border-t border-white/5 animate-fade-in flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2", children: "Fecha de Pago (Opcional)" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        type: "date",
                        className: "w-full bg-slate-900/40 border-white/5 rounded-xl p-3 text-xs text-amber-500",
                        value: newTx.paymentDate ? `${newTx.paymentDate.getFullYear()}-${String(newTx.paymentDate.getMonth() + 1).padStart(2, "0")}-${String(newTx.paymentDate.getDate()).padStart(2, "0")}` : "",
                        onChange: (e) => {
                          const val = e.target.value;
                          if (!val) {
                            setNewTx((t) => ({ ...t, paymentDate: void 0 }));
                            return;
                          }
                          const [y, m, d] = val.split("-").map(Number);
                          const newD = /* @__PURE__ */ new Date();
                          newD.setFullYear(y, m - 1, d);
                          setNewTx((t) => ({ ...t, paymentDate: newD }));
                        }
                      }
                    )
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2", children: "Referencia / Nota" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "w-full bg-slate-900/40 border-white/5 rounded-xl p-3 text-xs text-slate-300 min-h-[60px]", placeholder: "Ej. Nro Factura...", value: newTx.note, onChange: (e) => setNewTx((t) => ({ ...t, note: e.target.value })) })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 flex flex-col h-full", children: newTx.type === "transfer" || newTx.type === "expense" || newTx.type === "income" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col justify-center max-w-sm mx-auto w-full space-y-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]", children: "Monto de la Operación" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 top-1/2 -translate-y-1/2 text-3xl font-black text-slate-500", children: currency }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "w-full text-6xl font-black text-center bg-transparent border-b-2 border-slate-700 focus:border-blue-500 focus:outline-none", placeholder: "0.00", value: newTx.unitPrice || "", onChange: (e) => setNewTx((t) => ({ ...t, unitPrice: Number(e.target.value) })) })
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3", children: "PRODUCTOS INCLUIDOS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ProductSearch, { products: products || [], onAdd: addProductItem })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 border border-white/5 rounded bg-slate-900/20 overflow-hidden flex flex-col min-h-[300px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-2 p-3 border-b border-white/5 bg-slate-900/60 text-[10px] font-black text-slate-500 uppercase tracking-widest", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-6", children: "Producto" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 text-center", children: "Cant." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-3 text-right", children: [
                  "Precio (",
                  currency,
                  ")"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-2 space-y-2", children: newTx.items?.map((item, idx) => {
                const p = products?.find((prod) => prod.id === item.productId);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-2 items-center p-2 rounded-xl bg-slate-900/40 border border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-6 truncate font-bold text-sm text-slate-300", children: p?.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "w-full text-center text-sm py-1 bg-slate-900", value: item.quantity, onChange: (e) => updateItem(idx, { quantity: Number(e.target.value) }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "w-full text-right text-sm py-1 bg-slate-900 text-blue-400 font-bold", value: item.unitPrice, onChange: (e) => updateItem(idx, { unitPrice: Number(e.target.value) }) }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeItem(idx), className: "text-slate-600 hover:text-red-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }) }) })
                ] }, idx);
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-t border-white/5 bg-slate-900/60 flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer text-[10px] font-black text-slate-500 uppercase", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: newTx.includesTax || false, onChange: (e) => setNewTx((t) => ({ ...t, includesTax: e.target.checked })) }),
                  " + IVA"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-slate-500 uppercase mb-1", children: "Total Transacción" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl font-black text-white", children: [
                    currency,
                    " ",
                    totalAmount.toLocaleString()
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t border-white/5 bg-slate-900/80 flex gap-4 mt-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setIsModalOpen(false), className: "px-6 text-[10px] font-black uppercase text-slate-400 hover:text-white", children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex gap-3 justify-end", children: [
            newTx.type !== "transfer" && newTx.type !== "expense" && newTx.type !== "income" && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => saveTransaction("budget"), className: "px-6 py-3 rounded-xl flex items-center gap-2 text-[10px] font-black uppercase bg-amber-500/10 text-amber-500 border border-amber-500/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16 }),
              " Presupuesto"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => saveTransaction("confirmed"), className: "btn-primary px-10 py-3 text-[11px] font-black uppercase flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 16 }),
              " ",
              editingId ? "Actualizar" : "Confirmar"
            ] })
          ] })
        ] })
      ] }) }),
      document.body
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto space-y-3 pb-8 px-1", children: [
      displayLimit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between p-4 bg-blue-600/10 border border-blue-500/20 rounded-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-blue-400", children: "Mostrando los últimos 10 movimientos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDisplayLimit(void 0), className: "text-[10px] font-black uppercase text-blue-500 hover:text-white underline", children: "Ver todos" })
      ] }),
      displayTransactions?.map((tx) => {
        const isTransfer = tx.type === "transfer";
        const isSale = tx.type === "sale";
        const isIncome = tx.type === "income";
        const isExpense = tx.type === "expense";
        const isPurchase = tx.type === "purchase";
        const isBudget = tx.status === "budget";
        const amount = getTxAmount(tx);
        const itemsArr = tx.items || (tx.productId ? [{ productId: tx.productId, quantity: tx.quantity || 1, unitPrice: tx.unitPrice || 0 }] : []);
        const mainProduct = products?.find((p) => p.id === itemsArr[0]?.productId);
        const isSelected = selectedIds !== null && selectedIds.includes(tx.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col md:flex-row items-start md:items-center gap-4 p-5 md:p-4 rounded-xl bg-slate-900/30 border border-white/5 hover:bg-slate-900/50 transition-colors group cursor-pointer ${isSelected ? "ring-2 ring-indigo-500 bg-indigo-500/10" : ""}`, onClick: () => selectedIds !== null ? toggleSelection(tx.id) : openModal(tx), children: [
          selectedIds !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `hidden md:flex w-6 h-6 rounded items-center justify-center shrink-0 border-2 transition-colors ${isSelected ? "bg-indigo-500 border-indigo-500 text-white" : "border-slate-600"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 bg-white rounded-sm" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-14 h-14 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 border ${isTransfer ? "bg-violet-500/10 text-violet-400 border-violet-500/20" : tx.type === "adjustment" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" : isBudget ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : isSale || isIncome ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-red-500/10 text-red-400 border-red-500/20"}`, children: isSale || isIncome ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 24, "md-size": 18 }) : isPurchase || isExpense ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { size: 24, "md-size": 18 }) : isTransfer ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRightLeft, { size: 24, "md-size": 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 24, "md-size": 18 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-lg md:text-sm truncate uppercase tracking-tight", children: isTransfer ? "Transferencia Interna" : isExpense || isIncome ? tx.category || (isExpense ? "Gasto General" : "Ingreso Extra") : tx.type === "adjustment" ? "Ajuste de Stock" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                mainProduct?.name || "Producto eliminado",
                itemsArr.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-xs font-normal text-slate-500 italic lowercase", children: [
                  "y ",
                  itemsArr.length - 1,
                  " más..."
                ] })
              ] }) }),
              isBudget && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 text-[9px] font-black uppercase", children: "Presupuesto" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm md:text-xs text-slate-500 truncate flex items-center gap-2", children: isTransfer ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              "De: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: accounts?.find((a) => a.id === tx.accountId)?.name }),
              " → A: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: accounts?.find((a) => a.id === tx.toAccountId)?.name })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              contacts?.find((c) => c.id === tx.contactId)?.name || (isExpense || isIncome ? "Caja General" : "Anónimo"),
              tx.accountId && ` · Cuenta: ${accounts?.find((a) => a.id === tx.accountId)?.name}`,
              tx.note && ` · "${tx.note}"`
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 shrink-0 w-full md:w-auto justify-between md:justify-end mt-2 md:mt-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left md:text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `font-black text-2xl md:text-lg ${isSale || isIncome ? "text-emerald-400" : isPurchase || isExpense ? "text-red-400" : "text-blue-400"}`, children: [
                isSale || isIncome ? "+" : isPurchase || isExpense || isTransfer ? "-" : "",
                currency,
                amount.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-slate-600 block mt-0.5 md:text-right", children: new Date(tx.date).toLocaleDateString() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", onClick: (e) => e.stopPropagation(), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openModal(tx), className: "p-3 md:p-2 bg-white/5 text-slate-400 hover:text-blue-400 rounded-xl transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 18, "md-size": 14 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deleteTransaction(tx.id), className: "p-3 md:p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 18, "md-size": 14 }) })
            ] })
          ] })
        ] }, tx.id);
      })
    ] })
  ] });
};
export {
  OperationsPage,
  OperationsPage as default
};
