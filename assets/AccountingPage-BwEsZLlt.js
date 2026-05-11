import { c as createLucideIcon, a as useLiveQuery, r as reactExports, j as jsxRuntimeExports, W as Wallet, g as reactDomExports, d as db } from "./index-BTZOdFbx.js";
import { D as Download, a as exportDataToExcel } from "./excel-CynLbYPp.js";
import { T as Trash2, P as PenLine, X } from "./x-DB75rJK6.js";
import { P as Plus } from "./plus-C4x7aL-b.js";
import { D as DollarSign } from "./dollar-sign-DR0LHXXY.js";
import { A as ArrowUpRight } from "./arrow-up-right-COMw6_kn.js";
import { A as ArrowDownLeft } from "./arrow-down-left-LuMKkXhv.js";
import { S as Save } from "./save-CGRPoqZ4.js";
import "./index-D-Ubi8Nr.js";
import "./index-Bi1k753w.js";
const __iconNode$3 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",
      key: "pzmjnu"
    }
  ],
  ["path", { d: "M21.21 15.89A10 10 0 1 1 8 2.83", key: "k2fpak" }]
];
const ChartPie = createLucideIcon("chart-pie", __iconNode$2);
const __iconNode$1 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode);
const AccountingPage = () => {
  const settings = useLiveQuery(() => db.settings.toArray());
  const accounts = useLiveQuery(() => db.accounts.toArray());
  const transactions = useLiveQuery(() => db.transactions.toArray());
  const currency = settings?.find((s) => s.key === "currency")?.value || localStorage.getItem("currency") || "$";
  const totalBalance = accounts?.reduce((acc, curr) => acc + curr.balance, 0) || 0;
  const [isAddModalOpen, setIsAddModalOpen] = reactExports.useState(false);
  const [editingId, setEditingId] = reactExports.useState(null);
  const [formName, setFormName] = reactExports.useState("");
  const [formBalance, setFormBalance] = reactExports.useState(0);
  const [editingNameId, setEditingNameId] = reactExports.useState(null);
  const [editingNameValue, setEditingNameValue] = reactExports.useState("");
  const [selectedIds, setSelectedIds] = reactExports.useState(null);
  const [viewingMovementsAccId, setViewingMovementsAccId] = reactExports.useState(null);
  const [dateStart, setDateStart] = reactExports.useState("");
  const [dateEnd, setDateEnd] = reactExports.useState("");
  const openAddModal = (account) => {
    if (account) {
      setEditingId(account.id || null);
      setFormName(account.name);
      setFormBalance(account.balance);
    } else {
      setEditingId(null);
      setFormName("");
      setFormBalance(0);
    }
    setIsAddModalOpen(true);
  };
  reactExports.useEffect(() => {
    const handleBack = () => {
      if (isAddModalOpen) {
        if (confirm("¿Deseas cancelar los cambios y cerrar?")) {
          setIsAddModalOpen(false);
        }
      } else if (viewingMovementsAccId) {
        setViewingMovementsAccId(null);
      } else if (selectedIds !== null) {
        setSelectedIds(null);
      }
    };
    window.addEventListener("close-current-modal", handleBack);
    return () => window.removeEventListener("close-current-modal", handleBack);
  }, [isAddModalOpen, viewingMovementsAccId, selectedIds]);
  const saveAccount = async () => {
    if (!formName.trim()) return;
    if (editingId) {
      await db.accounts.update(editingId, { name: formName, balance: formBalance });
    } else {
      await db.accounts.add({ name: formName, balance: formBalance });
    }
    setIsAddModalOpen(false);
  };
  const deleteAccount = async (id) => {
    if (id && confirm("¿Eliminar esta cuenta? Las transacciones vinculadas quedarán con la referencia original.")) {
      await db.accounts.delete(id);
    }
  };
  const deleteSelected = async () => {
    if (!selectedIds || selectedIds.length === 0) return;
    if (confirm(`⚠️ ALERTA: ¿Estás seguro de que deseas eliminar las ${selectedIds.length} cuentas seleccionadas?

Esta acción es irreversible y afectará el balance consolidado. Las transacciones asociadas ya no estarán vinculadas a estas cuentas.`)) {
      await db.accounts.bulkDelete(selectedIds);
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
  const startRename = (acc) => {
    setEditingNameId(acc.id || null);
    setEditingNameValue(acc.name);
  };
  const confirmRename = async (id) => {
    if (editingNameValue.trim()) {
      await db.accounts.update(id, { name: editingNameValue.trim() });
    }
    setEditingNameId(null);
  };
  const getTxAmount = (tx) => {
    if (tx.type === "transfer" || tx.type === "expense" || tx.type === "income") return Number(tx.unitPrice || 0);
    const items = tx.items || [];
    const sub = items.reduce((s, i) => s + Number(i.unitPrice || 0) * Number(i.quantity || 0), 0);
    return sub * (tx.includesTax ? 1 + Number(tx.taxRate || 0) / 100 : 1);
  };
  const getAccountTxs = (accId) => {
    let accTxs = transactions?.filter((t) => (t.accountId === accId || t.toAccountId === accId) && t.status === "confirmed") || [];
    if (dateStart) {
      accTxs = accTxs.filter((t) => new Date(t.date) >= new Date(dateStart));
    }
    if (dateEnd) {
      const end = new Date(dateEnd);
      end.setHours(23, 59, 59, 999);
      accTxs = accTxs.filter((t) => new Date(t.date) <= end);
    }
    return accTxs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };
  const computeStatsForAccount = (accId) => {
    const accTxs = transactions?.filter((t) => (t.accountId === accId || t.toAccountId === accId) && t.status === "confirmed") || [];
    let inflows = 0;
    let outflows = 0;
    accTxs.forEach((t) => {
      const amount = getTxAmount(t);
      if (t.type === "transfer") {
        if (t.toAccountId === accId) inflows += amount;
        else outflows += amount;
      } else if (t.type === "sale" || t.type === "income") {
        inflows += amount;
      } else {
        outflows += amount;
      }
    });
    return { count: accTxs.length, inflows, outflows };
  };
  const handleExportSummary = () => {
    if (!accounts) return;
    const exportData = accounts.map((acc) => {
      const stats = computeStatsForAccount(acc.id);
      return {
        name: acc.name,
        inflows: stats.inflows,
        outflows: stats.outflows,
        count: stats.count
      };
    });
    exportDataToExcel("accounting_summary", exportData);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-section p-4 sm:p-8 animate-fade-in flex flex-col w-full max-w-[1750px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl font-black mb-2 tracking-tight", children: [
          "Gestión ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Contable" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium text-sm italic", children: "Control de cuentas, balances y flujos de efectivo." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: handleExportSummary,
            className: "flex items-center gap-2 px-6 py-4 rounded-xl bg-slate-900 border border-white/5 hover:border-slate-500 transition-colors text-slate-400 hover:text-white group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 18, className: "group-hover:scale-110 transition-transform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px] hidden sm:inline", children: "Exportar Resumen" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => selectedIds === null ? setSelectedIds([]) : setSelectedIds(null), className: `flex items-center gap-2 px-6 py-4 rounded-xl transition-all ${selectedIds !== null ? "bg-indigo-600 text-white shadow-lg" : "bg-slate-900 border border-white/5 text-slate-400 hover:text-white"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 18 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px] hidden sm:inline", children: selectedIds !== null ? "Cancelar Selección" : "Selección Múltiple" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openAddModal(), className: "btn-primary flex items-center gap-2 px-6 py-4 shadow-xl shadow-blue-500/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18, strokeWidth: 3 }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-black uppercase tracking-widest text-[10px]", children: "Nueva Cuenta" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1 p-10 rounded-2xl bg-blue-600 border-none shadow-2xl shadow-blue-500/30 relative overflow-hidden group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-4 -bottom-4 opacity-30 text-white group-hover:scale-110 transition-transform duration-700 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { size: 160 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-black uppercase tracking-[0.2em] mb-2 opacity-90 text-center w-full", children: "Balance Consolidado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl font-black tracking-tighter mb-8", children: [
            currency,
            totalBalance.toLocaleString()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/20 w-fit px-4 py-2 rounded-full backdrop-blur-md border border-white/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartPie, { size: 14 }),
            " ",
            accounts?.length || 0,
            " cuentas activas"
          ] })
        ] })
      ] }),
      selectedIds !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 mb-4 p-6 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black text-white tracking-tight", children: "Modo de Selección Múltiple" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium text-indigo-400", children: [
            selectedIds.length,
            " elementos seleccionados"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedIds(accounts?.map((a) => a.id) || []), className: "px-6 py-3 bg-slate-900 text-slate-300 font-bold uppercase tracking-widest text-[10px] rounded hover:text-white transition-colors border border-white/10", children: "Seleccionar Todos" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: deleteSelected, disabled: selectedIds.length === 0, className: `px-6 py-3 font-bold uppercase tracking-widest text-[10px] rounded transition-colors ${selectedIds.length > 0 ? "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/20" : "bg-slate-800 text-slate-500 cursor-not-allowed"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 16, className: "inline-block mr-2 -mt-0.5" }),
            " Eliminar Seleccionados"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 pb-20", children: accounts?.map((acc) => {
        const stats = computeStatsForAccount(acc.id);
        const isSelected = selectedIds !== null && selectedIds.includes(acc.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            onClick: () => selectedIds !== null ? toggleSelection(acc.id) : setViewingMovementsAccId(acc.id),
            className: `glass-card p-6 border-white/5 relative overflow-hidden group cursor-pointer min-h-[220px] flex flex-col justify-between transition-all ${isSelected ? "ring-2 ring-indigo-500 bg-indigo-500/10" : ""}`,
            style: !isSelected ? { background: "var(--glass-card-bg)", border: "1px solid var(--border)" } : {},
            children: [
              selectedIds !== null && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-6 left-6 w-6 h-6 rounded flex items-center justify-center shrink-0 border-2 transition-colors z-20 ${isSelected ? "bg-indigo-500 border-indigo-500 text-white" : "border-slate-600"}`, children: isSelected && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 h-2.5 bg-white rounded-sm" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 p-4 opacity-[0.05] group-hover:scale-125 transition-transform duration-700 pointer-events-none text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { size: 80 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex justify-between items-start mb-4 ${selectedIds !== null ? "pl-10" : ""}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1", children: editingNameId === acc.id ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", onClick: (e) => e.stopPropagation(), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        className: "flex-1 text-lg font-black py-2 px-3 bg-slate-800 border border-blue-500/50 rounded-xl text-white outline-none",
                        value: editingNameValue,
                        onChange: (e) => setEditingNameValue(e.target.value),
                        onKeyDown: (e) => e.key === "Enter" && confirmRename(acc.id),
                        autoFocus: true
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => confirmRename(acc.id), className: "p-3 bg-blue-600 rounded-xl text-white hover:bg-blue-500 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16 }) })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-black uppercase tracking-widest", style: { color: "var(--text-main)" }, children: acc.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        onClick: (e) => {
                          e.stopPropagation();
                          startRename(acc);
                        },
                        className: "md:opacity-0 md:group-hover:opacity-100 transition-opacity p-2 text-slate-400 hover:text-blue-400 rounded-lg",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 16 })
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 rounded-lg bg-blue-500/10 text-blue-500 md:opacity-0 md:group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { size: 18 }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-4xl md:text-3xl font-black tracking-tight mb-6", style: { color: "var(--text-main)" }, children: [
                  currency,
                  acc.balance.toLocaleString()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-slate-100 dark:bg-slate-800/40 rounded-xl border border-slate-300 dark:border-white/5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-slate-500 uppercase mb-1", children: "Efectivo Disponible" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base font-black text-emerald-600 dark:text-emerald-400", children: [
                      currency,
                      (transactions?.filter((t) => t.accountId === acc.id && t.paymentMethodDetail === "cash" && t.status === "confirmed").reduce((sum, t) => sum + (t.type === "sale" || t.type === "income" || t.type === "transfer" && t.toAccountId === acc.id ? getTxAmount(t) : -getTxAmount(t)), 0) || 0).toLocaleString()
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-slate-100 dark:bg-slate-800/40 rounded-xl border border-slate-300 dark:border-white/5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-black text-slate-500 uppercase mb-1", children: "Digital Disponible" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base font-black text-blue-600 dark:text-blue-400", children: [
                      currency,
                      (acc.balance - (transactions?.filter((t) => t.accountId === acc.id && t.paymentMethodDetail === "cash" && t.status === "confirmed").reduce((sum, t) => sum + (t.type === "sale" || t.type === "income" || t.type === "transfer" && t.toAccountId === acc.id ? getTxAmount(t) : -getTxAmount(t)), 0) || 0)).toLocaleString()
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-widest mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20", children: [
                    "Entradas: ",
                    currency,
                    stats.inflows.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-red-600 dark:text-red-400 bg-red-500/10 px-3 py-1.5 rounded-full border border-red-500/20", children: [
                    "Salidas: ",
                    currency,
                    stats.outflows.toLocaleString()
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 pt-4 border-t border-slate-200 dark:border-white/5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: (e) => {
                    e.stopPropagation();
                    openAddModal(acc);
                  }, className: "flex-1 flex items-center justify-center gap-2 py-3 bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-blue-500 rounded-xl transition-all text-[10px] font-black uppercase tracking-widest", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { size: 14 }),
                    " Editar"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: (e) => {
                    e.stopPropagation();
                    deleteAccount(acc.id);
                  }, className: "flex-1 flex items-center justify-center gap-2 py-3 bg-red-500/5 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all text-[10px] font-black uppercase tracking-widest", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 14 }),
                    " Eliminar"
                  ] })
                ] })
              ] })
            ]
          },
          acc.id
        );
      }) })
    ] }),
    viewingMovementsAccId && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center z-[120] p-4 sm:p-8 animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card w-full max-w-4xl max-h-[90vh] border-white/10 shadow-3xl flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "p-6 border-b border-white/5 flex justify-between items-center bg-slate-900/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-black uppercase tracking-tight text-white", children: [
              "Movimientos de ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: accounts?.find((a) => a.id === viewingMovementsAccId)?.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1", children: "Historial detallado de operaciones" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setViewingMovementsAccId(null);
            setDateStart("");
            setDateEnd("");
          }, className: "p-2 text-slate-500 hover:text-white transition-colors bg-white/5 rounded-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 bg-slate-900/30 border-b border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 10 }),
              " Fecha Desde"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "w-full text-xs bg-slate-800 border-white/10 text-white p-3 rounded-lg", value: dateStart, onChange: (e) => setDateStart(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 10 }),
              " Fecha Hasta"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "w-full text-xs bg-slate-800 border-white/10 text-white p-3 rounded-lg", value: dateEnd, onChange: (e) => setDateEnd(e.target.value) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
            setDateStart("");
            setDateEnd("");
          }, className: "py-3 px-4 rounded-lg bg-white/5 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-white border border-white/5", children: "Limpiar Filtros" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => exportDataToExcel("movimientos_cuenta", getAccountTxs(viewingMovementsAccId)),
              className: "py-3 px-4 rounded-lg bg-blue-600 text-[9px] font-black uppercase tracking-widest text-white shadow-lg shadow-blue-500/20",
              children: "Descargar Reporte"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto p-4 space-y-3 bg-slate-950/20", children: getAccountTxs(viewingMovementsAccId).length > 0 ? getAccountTxs(viewingMovementsAccId).map((tx) => {
          const amount = getTxAmount(tx);
          const isIncome = tx.type === "sale" || tx.type === "income" || tx.type === "transfer" && tx.toAccountId === viewingMovementsAccId;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-white/10 transition-all group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${isIncome ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/10" : "bg-red-500/10 text-red-400 border-red-500/10"}`, children: isIncome ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownLeft, { size: 22 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-bold truncate text-slate-100 uppercase tracking-tight", children: tx.type === "transfer" ? `Trf. ${tx.accountId === viewingMovementsAccId ? "Enviada" : "Recibida"}` : tx.category || tx.note || "Operación sin concepto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 font-black uppercase tracking-widest", children: new Date(tx.date).toLocaleDateString() }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-slate-700" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 font-black uppercase tracking-widest", children: tx.paymentMethodDetail === "cash" ? "💵 Efectivo" : "💳 Digital" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: `font-black text-2xl ${isIncome ? "text-emerald-400" : "text-red-400"}`, children: [
              isIncome ? "+" : "-",
              currency,
              amount.toLocaleString()
            ] }) })
          ] }, tx.id);
        }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-24 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 32, className: "text-slate-600" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-black text-slate-500 uppercase tracking-widest", children: "No se encontraron movimientos" })
        ] }) })
      ] }) }),
      document.body
    ),
    isAddModalOpen && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center z-[110] p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-8 w-full max-w-md border-white/10 shadow-2xl relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsAddModalOpen(false), className: "absolute top-6 right-6 p-2 text-slate-500 hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-black mb-8 tracking-tight text-white", children: [
          editingId ? "Editar" : "Nueva",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "Cuenta" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2", children: "Nombre de la Cuenta" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "w-full bg-slate-900 border-white/10 p-4 rounded-xl text-white outline-none focus:border-blue-500 transition-colors",
                placeholder: "Ej. Cristian, INSURA",
                value: formName,
                onChange: (e) => setFormName(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2", children: [
              "Saldo Inicial (",
              currency,
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "number",
                className: "w-full bg-slate-900 border-white/10 p-4 rounded-xl text-white outline-none font-black text-xl focus:border-blue-500 transition-colors",
                value: formBalance,
                onChange: (e) => setFormBalance(Number(e.target.value))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsAddModalOpen(false), className: "flex-1 py-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors", children: "Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: saveAccount, className: "flex-1 btn-primary flex items-center justify-center gap-2 py-4 text-xs font-black uppercase tracking-widest", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { size: 16 }),
            " ",
            editingId ? "Actualizar" : "Crear"
          ] })
        ] })
      ] }) }),
      document.body
    )
  ] });
};
export {
  AccountingPage,
  AccountingPage as default
};
