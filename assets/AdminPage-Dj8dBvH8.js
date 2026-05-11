import { c as createLucideIcon, r as reactExports, b as useAuth, j as jsxRuntimeExports, s as supabase } from "./index-BTZOdFbx.js";
import { C as Clock } from "./clock-D8tTmCjZ.js";
import { C as CircleCheckBig } from "./circle-check-big-Dbflx-kL.js";
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M4.929 4.929 19.07 19.071", key: "196cmz" }]
];
const Ban = createLucideIcon("ban", __iconNode$3);
const __iconNode$2 = [
  ["path", { d: "M12 16h.01", key: "1drbdi" }],
  ["path", { d: "M12 8v4", key: "1got3b" }],
  [
    "path",
    {
      d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",
      key: "1fd625"
    }
  ]
];
const OctagonAlert = createLucideIcon("octagon-alert", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode$1);
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
const AdminPage = () => {
  const [users, setUsers] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(true);
  const { profile } = useAuth();
  const fetchUsers = async () => {
    if (profile?.role !== "admin") return;
    try {
      const { data, error } = await supabase.from("profiles").select("*");
      if (error) throw error;
      setUsers(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    fetchUsers();
  }, []);
  const toggleStatus = async (uid, currentStatus) => {
    const newStatus = currentStatus === "active" ? "blocked" : "active";
    const { error } = await supabase.from("profiles").update({ status: newStatus }).eq("uid", uid);
    if (error) {
      alert("Error: " + error.message);
    } else {
      fetchUsers();
    }
  };
  const changePlan = async (uid, newPlan) => {
    const expiresAt = /* @__PURE__ */ new Date();
    expiresAt.setDate(expiresAt.getDate() + (newPlan === "monthly" ? 30 : 365));
    const { error } = await supabase.from("profiles").update({
      plan: newPlan,
      status: "active",
      expiresAt: newPlan === "free" ? null : expiresAt.toISOString()
    }).eq("uid", uid);
    if (error) {
      alert("Error: " + error.message);
    } else {
      fetchUsers();
    }
  };
  if (loading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-20 text-center font-black animate-pulse text-blue-500 uppercase tracking-widest text-xs", children: "Conectando con Nodo SaaS..." });
  if (profile?.role !== "admin") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[60vh] flex flex-col items-center justify-center p-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6 border border-red-500/20 text-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(OctagonAlert, { size: 40 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-black italic uppercase tracking-tighter text-red-500 mb-2", children: "Acceso Denegado" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 max-w-xs font-medium", children: "No tienes permisos para visualizar este panel. Contacta con el propietario de la cuenta." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20 text-blue-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 32 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-black italic uppercase tracking-tighter gradient-text", children: "Panel Administrativo (Supabase)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 text-sm", children: "Control total de usuarios, suscripciones y dispositivos" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6", children: users.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-6 border-white/5 hover:border-blue-500/20 transition-all group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center font-black text-blue-500 border border-white/5", children: u.email.charAt(0).toUpperCase() }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-bold text-lg flex items-center gap-2", children: [
            u.email,
            u.role === "admin" && /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { size: 14, className: "text-amber-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1 text-xs text-slate-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2 py-0.5 rounded-full font-black uppercase text-[9px] ${u.status === "active" ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"}`, children: u.status }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 font-bold text-white", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { size: 12 }),
              " ",
              u.plan.toUpperCase()
            ] }),
            u.expiresAt && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-slate-400", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
              " Vence: ",
              new Date(u.expiresAt).toLocaleDateString()
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end mr-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-[10px] text-slate-500 font-bold uppercase mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 12 }),
            " Dispositivos (",
            u.devices?.length || 0,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: u.devices?.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { title: `${d.name} (${d.platform})`, className: "w-6 h-6 rounded-full bg-slate-700 border-2 border-[#1e293b] flex items-center justify-center text-[8px] font-black uppercase", children: d.platform.charAt(0) }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => toggleStatus(u.uid, u.status),
              className: `p-2 rounded-lg border transition-all ${u.status === "active" ? "border-red-500/20 text-red-400 hover:bg-red-500/10" : "border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/10"}`,
              title: u.status === "active" ? "Bloquear Usuario" : "Activar Usuario",
              children: u.status === "active" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Ban, { size: 18 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 18 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: u.plan,
              onChange: (e) => changePlan(u.uid, e.target.value),
              className: "bg-slate-800 border border-white/5 rounded-lg px-3 py-2 text-xs font-bold outline-none focus:border-blue-500/50 text-white",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "free", children: "FREE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "monthly", children: "MENSUAL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "annual", children: "ANUAL" })
              ]
            }
          )
        ] })
      ] })
    ] }) }, u.uid)) })
  ] });
};
const CreditCard = ({ size = 14, className }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
] });
export {
  AdminPage as default
};
