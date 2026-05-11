import { c as createLucideIcon, u as useNavigate, a as useLiveQuery, j as jsxRuntimeExports, W as Wallet, P as Package, U as Users, d as db } from "./index-Bdp2TIFD.js";
import { T as TriangleAlert } from "./triangle-alert-Cpbgu4JT.js";
import { C as Clock } from "./clock-Doh32gBK.js";
import { A as ArrowUpRight } from "./arrow-up-right-B3fpA1z3.js";
const __iconNode$1 = [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
];
const ArrowDownRight = createLucideIcon("arrow-down-right", __iconNode$1);
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const StatCard = ({ label, value, icon: Icon, color, trend, onClick }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    onClick,
    className: `glass-card p-6 relative overflow-hidden group ${onClick ? "cursor-pointer hover:ring-2 hover:ring-blue-500/50" : ""}`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 96 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-4 rounded-2xl bg-slate-900/50 border border-slate-800 ${color} group-hover:scale-110 transition-transform duration-500`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 24 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-black text-[var(--text-muted)] uppercase tracking-widest mb-1 opacity-70", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-black tracking-normal text-[var(--text-main)]", children: value }),
            trend && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded-md mb-1 ${trend.startsWith("+") ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`, children: [
              trend.startsWith("+") ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 10, className: "mr-0.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { size: 10, className: "mr-0.5" }),
              trend
            ] })
          ] })
        ] })
      ] })
    ]
  }
);
const Dashboard = () => {
  const navigate = useNavigate();
  const settings = useLiveQuery(() => db.settings.toArray());
  const productCount = useLiveQuery(() => db.products.count());
  const contactCount = useLiveQuery(() => db.contacts.count());
  const accounts = useLiveQuery(() => db.accounts.toArray());
  const products = useLiveQuery(() => db.products.toArray());
  const lowStockProducts = useLiveQuery(() => db.products.filter((p) => p.stock <= 5).toArray());
  const recentTransactions = useLiveQuery(() => db.transactions.orderBy("date").reverse().limit(5).toArray());
  const bizName = settings?.find((s) => s.key === "bizName")?.value || localStorage.getItem("bizName") || "Empresa";
  const currency = settings?.find((s) => s.key === "currency")?.value || localStorage.getItem("currency") || "$";
  const totalBalance = accounts?.reduce((acc, curr) => acc + Number(curr.balance || 0), 0) || 0;
  const inventoryValue = products?.reduce((acc, curr) => acc + Number(curr.price || 0) * Number(curr.stock || 0), 0) || 0;
  const getTxAmount = (tx) => {
    if (tx.type === "transfer") return tx.unitPrice || 0;
    const items = tx.items || (tx.productId ? [{ productId: tx.productId, quantity: tx.quantity || 1, unitPrice: tx.unitPrice || 0 }] : []);
    const sub = items.reduce((s, i) => s + i.unitPrice * i.quantity, 0);
    return sub * (tx.includesTax ? 1 + (tx.taxRate || 0) / 100 : 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-section p-4 sm:p-8 animate-fade-in flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-12 pt-10 page-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl font-black mb-3 tracking-normal leading-tight text-[var(--text-main)]", children: [
        "Hola de nuevo, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: bizName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[var(--text-muted)] font-medium text-sm sm:text-base", children: "Aquí tienes un resumen del estado actual de tu negocio." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "dashboard-wrapper-force", className: "w-full max-w-[1750px] mx-auto mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
                  #dashboard-wrapper-force {
                    display: flex !important;
                    flex-direction: column !important;
                    gap: 1.5rem !important;
                  }
                  .dashboard-grid-force {
                    display: grid !important;
                    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                    gap: 1.5rem !important;
                    width: 100% !important;
                  }
                  .dashboard-card-force {
                    height: 100% !important;
                  }
                ` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-grid-force", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Caja Total", value: `${currency}${totalBalance.toLocaleString()}`, icon: Wallet, color: "text-emerald-300", trend: "+2.4%", onClick: () => navigate("/accounting") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Valor Inventario", value: `${currency}${inventoryValue.toLocaleString()}`, icon: Package, color: "text-blue-300", onClick: () => navigate("/stock", { state: { view: "monetized" } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Contactos", value: contactCount || 0, icon: Users, color: "text-violet-300", onClick: () => navigate("/contacts") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Existencias", value: productCount || 0, icon: Package, color: "text-orange-300", onClick: () => navigate("/stock") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dashboard-grid-force", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-8 flex flex-col dashboard-card-force cursor-pointer hover:ring-2 hover:ring-orange-500/50 transition-all", onClick: () => navigate("/stock?filter=critical"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-orange-500/10 rounded-lg text-orange-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { size: 20 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold tracking-normal text-[var(--text-main)]", children: "Stock Crítico" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black bg-orange-500/10 text-orange-500 px-2 py-1 rounded uppercase", children: "Atención" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 overflow-y-auto max-h-[300px] pr-2", children: [
            lowStockProducts?.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-4 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-orange-500/30 transition-all group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center overflow-hidden", children: p.photo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.photo, alt: p.name, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "text-slate-600", size: 18 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm", children: p.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-slate-500 mb-0.5 uppercase font-black", children: "Disponible" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-orange-400 font-black text-lg", children: p.stock })
              ] })
            ] }, p.id)),
            (!lowStockProducts || lowStockProducts.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-12 border-2 border-dashed border-white/5 rounded-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "mx-auto mb-3 text-slate-800", size: 32 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 font-medium text-sm italic", children: "Todo bajo control. No hay stock bajo." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-8 flex flex-col shrink-0 cursor-pointer hover:ring-2 hover:ring-blue-500/50 transition-all", onClick: () => navigate("/operations", { state: { filter: "recent" } }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-blue-500/10 rounded-lg text-blue-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { size: 20 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold tracking-normal text-[var(--text-main)]", children: "Últimos Movimientos" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "text-slate-700" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 overflow-y-auto max-h-[300px] pr-2", children: [
            recentTransactions?.map((tx) => {
              const product = products?.find((p) => p.id === tx.productId);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-3 hover:bg-white/[0.02] rounded-xl transition-colors border-b border-white/[0.01]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === "sale" ? "bg-red-500/10 text-red-400" : "bg-green-500/10 text-green-400"}`, children: tx.type === "sale" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 18 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-sm truncate", children: product?.name || (tx.type === "transfer" ? "Transferencia" : "Múltiples/Eliminado") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-500 font-medium uppercase", children: [
                    new Date(tx.date).toLocaleDateString(),
                    " • ",
                    tx.type === "sale" ? "Venta" : tx.type === "transfer" ? "Transf." : "Compra"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-black text-slate-200", children: [
                    tx.type === "sale" ? "-" : "+",
                    tx.items ? tx.items.reduce((s, i) => s + i.quantity, 0) : tx.quantity || 1,
                    " prod."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-slate-500 font-bold", children: [
                    currency,
                    getTxAmount(tx).toLocaleString()
                  ] })
                ] })
              ] }, tx.id);
            }),
            (!recentTransactions || recentTransactions.length === 0) && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-center py-12 italic text-sm", children: "No hay actividad reciente para mostrar." })
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  Dashboard,
  Dashboard as default
};
