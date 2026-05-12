import { c as createLucideIcon, a as useLiveQuery, r as reactExports, i as useTheme, b as useAuth, j as jsxRuntimeExports, S as ShieldCheck, d as db } from "./index-DTZBx3tV.js";
import { D as Download, d as downloadTemplate, p as parseExcelFile, e as executeBulkImport, a as exportDataToExcel } from "./excel-BBt0spIL.js";
import { backupService } from "./backupService-BduLnXDg.js";
import { C as Capacitor } from "./index-D-Ubi8Nr.js";
import { I as Image } from "./image-DGTWQISh.js";
import { D as DollarSign } from "./dollar-sign-TWyVlCEK.js";
import { C as CircleCheckBig } from "./circle-check-big-BJ0awTHl.js";
import { T as TriangleAlert } from "./triangle-alert-BXvleW2S.js";
import "./index-DeK-ZssG.js";
const __iconNode$7 = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
];
const Cloud = createLucideIcon("cloud", __iconNode$7);
const __iconNode$6 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M8 13h2", key: "yr2amv" }],
  ["path", { d: "M14 13h2", key: "un5t4a" }],
  ["path", { d: "M8 17h2", key: "2yhykz" }],
  ["path", { d: "M14 17h2", key: "10kma7" }]
];
const FileSpreadsheet = createLucideIcon("file-spreadsheet", __iconNode$6);
const __iconNode$5 = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
];
const Monitor = createLucideIcon("monitor", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
      key: "kfwtm"
    }
  ]
];
const Moon = createLucideIcon("moon", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$3);
const __iconNode$2 = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode$2);
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
];
const Sun = createLucideIcon("sun", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
function SettingsPage() {
  const settings = useLiveQuery(() => db.settings.toArray());
  const [bizName, setBizName] = reactExports.useState("");
  const [currency, setCurrency] = reactExports.useState("$");
  const [logo, setLogo] = reactExports.useState("");
  const [googleClientId, setGoogleClientId] = reactExports.useState(localStorage.getItem("googleClientId") || "");
  const { theme, setTheme } = useTheme();
  const products = useLiveQuery(() => db.products.toArray());
  const contacts = useLiveQuery(() => db.contacts.toArray());
  const accounts = useLiveQuery(() => db.accounts.toArray());
  const transactions = useLiveQuery(() => db.transactions.toArray());
  const [importType, setImportType] = reactExports.useState("products");
  const [previewData, setPreviewData] = reactExports.useState([]);
  const [previewErrors, setPreviewErrors] = reactExports.useState([]);
  const [isImporting, setIsImporting] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (settings) {
      setBizName(settings.find((s) => s.key === "bizName")?.value || localStorage.getItem("bizName") || "Mi Empresa");
      const currentCurrency = settings.find((s) => s.key === "currency")?.value || localStorage.getItem("currency") || "$";
      setCurrency(currentCurrency);
      setLogo(settings.find((s) => s.key === "logo")?.value || "");
      setGoogleClientId(settings.find((s) => s.key === "googleClientId")?.value || "");
    }
  }, [settings]);
  const save = async () => {
    await db.settings.put({ key: "bizName", value: bizName });
    await db.settings.put({ key: "currency", value: currency });
    await db.settings.put({ key: "logo", value: logo });
    await db.settings.put({ key: "googleClientId", value: googleClientId });
    localStorage.setItem("bizName", bizName);
    localStorage.setItem("currency", currency);
    alert("Configuración guardada correctamente. Reiniciando para aplicar cambios...");
    window.location.reload();
  };
  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setLogo(reader.result);
      reader.readAsDataURL(file);
    }
  };
  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const result = await parseExcelFile(file, importType);
      setPreviewData(result.valid);
      setPreviewErrors(result.errors);
    } catch (err) {
      alert("Error al leer el archivo: " + err.message);
    }
    e.target.value = "";
  };
  const confirmImport = async () => {
    if (previewData.length === 0) return;
    setIsImporting(true);
    try {
      await executeBulkImport(importType, previewData);
      alert(`¡Éxito! Se importaron ${previewData.length} registros nuevos.`);
      setPreviewData([]);
      setPreviewErrors([]);
    } catch (err) {
      alert("Error al guardar en base de datos: " + err.message);
    } finally {
      setIsImporting(false);
    }
  };
  const handleExport = () => {
    let data = [];
    if (importType === "products") data = products || [];
    else if (importType === "buyers") data = contacts?.filter((c) => c.type === "buyer" || c.type === "both") || [];
    else if (importType === "sellers") data = contacts?.filter((c) => c.type === "seller" || c.type === "both") || [];
    else if (importType === "accounts") data = accounts || [];
    else if (importType === "transactions") data = transactions || [];
    if (data.length === 0) {
      alert("No hay datos para exportar en esta categoría.");
      return;
    }
    exportDataToExcel(importType, data);
  };
  const isAndroid = Capacitor.isNativePlatform();
  const [backupFolderName, setBackupFolderName] = reactExports.useState(
    localStorage.getItem("backupFolderName")
  );
  const [isSyncing, setIsSyncing] = reactExports.useState(false);
  const [lastSync, setLastSync] = reactExports.useState(localStorage.getItem("lastSync"));
  const [hasSource, setHasSource] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const checkStatus = async () => {
      if (isAndroid) {
        setHasSource(true);
        return;
      }
      const source = await backupService.getDirectorySource();
      setHasSource(!!source);
    };
    checkStatus();
  }, []);
  const handleChooseFolder = async () => {
    const ok = await backupService.selectDirectory();
    if (ok) {
      setHasSource(true);
      const source = await backupService.getDirectorySource();
      const name = typeof source === "string" ? "Android Share" : source?.name || "Carpeta Elegida";
      setBackupFolderName(name);
      localStorage.setItem("backupFolderName", name);
      alert("✅ Carpeta configurada correctamente.");
    }
  };
  const handleManualBackup = async () => {
    setIsSyncing(true);
    try {
      const ok = await backupService.performAutoBackup();
      if (ok) {
        const now = (/* @__PURE__ */ new Date()).toLocaleString();
        setLastSync(now);
        localStorage.setItem("lastSync", now);
        if (!isAndroid) alert("✅ Backup realizado con éxito.");
      } else {
        if (!isAndroid) alert("No se pudo realizar el backup.");
      }
    } catch (e) {
      alert("Error: " + e.message);
    } finally {
      setIsSyncing(false);
    }
  };
  const handleImport = async () => {
    const ok = confirm("⚠️ ¡ATENCIÓN! Esto borrará todos los datos actuales y restaurará la copia seleccionada. ¿Continuar?");
    if (!ok) return;
    try {
      const success = await backupService.importBackup();
      if (success) {
        alert("✅ Datos restaurados. Reiniciando...");
        window.location.reload();
      } else {
        alert("No se pudo restaurar. Verificá que el archivo sea un backup válido.");
      }
    } catch (e) {
      alert("Error durante la restauración: " + e.message);
    }
  };
  const { user, isPremium } = useAuth();
  const [isCloudSyncing, setIsCloudSyncing] = reactExports.useState(false);
  const [cloudBackups, setCloudBackups] = reactExports.useState([]);
  const [lastCloudSync, setLastCloudSync] = reactExports.useState(localStorage.getItem("lastCloudSync"));
  reactExports.useEffect(() => {
    if (user && isPremium) {
      loadCloudBackups();
    }
  }, [user, isPremium]);
  const loadCloudBackups = async () => {
    if (!user) return;
    const backups = await backupService.listCloudBackups(user.id);
    setCloudBackups(backups);
  };
  const handleCloudSync = async () => {
    if (!user || !isPremium) return;
    setIsCloudSyncing(true);
    try {
      const ok = await backupService.syncToCloud(user.id);
      if (ok) {
        const now = (/* @__PURE__ */ new Date()).toISOString();
        setLastCloudSync(now);
        localStorage.setItem("lastCloudSync", now);
        await loadCloudBackups();
        alert("✅ Sincronización en la nube completada.");
      } else {
        alert("No se pudo sincronizar con la nube.");
      }
    } catch (e) {
      alert("Error en Cloud Sync: " + e.message);
    } finally {
      setIsCloudSyncing(false);
    }
  };
  const handleRestoreFromCloud = async (fileName) => {
    if (!user || !isPremium) return;
    const ok = confirm("⚠️ ¡ATENCIÓN! Esto reemplazará todos los datos locales con la copia de la nube. ¿Continuar?");
    if (!ok) return;
    setIsCloudSyncing(true);
    try {
      const success = await backupService.restoreFromCloud(user.id, fileName);
      if (success) {
        alert("✅ Datos restaurados desde la nube. Reiniciando...");
        window.location.reload();
      } else {
        alert("Error al restaurar desde la nube.");
      }
    } catch (e) {
      alert("Error: " + e.message);
    } finally {
      setIsCloudSyncing(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-section p-8 max-w-[1750px] mx-auto animate-fade-in flex flex-col gap-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "text-center md:text-left pt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-black mb-2 tracking-tight", children: [
        "Ajustes & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Herramientas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-400 font-medium", children: "Personaliza la identidad y migra tus datos." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-8 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase tracking-widest mb-3", children: "Identidad Visual" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-6 p-6 bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] group hover:border-blue-500/30 transition-all cursor-pointer relative overflow-hidden", children: [
            logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, className: "w-24 h-24 object-contain rounded-xl shadow-lg", alt: "Logo" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 bg-slate-800 rounded-xl flex items-center justify-center text-slate-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { size: 40 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", onChange: handleLogoUpload, className: "absolute inset-0 opacity-0 cursor-pointer", accept: "image/*" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold text-slate-400", children: "Clic para cambiar logo" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2", children: "Nombre de la Empresa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: bizName,
              onChange: (e) => setBizName(e.target.value),
              className: "w-full",
              placeholder: "Nombre comercial..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2", children: "Moneda del Sistema" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-500", size: 18 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: currency,
                onChange: (e) => setCurrency(e.target.value),
                className: "w-full input-with-icon",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "$", children: "$ (Dólar / Peso)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "€", children: "€ (Euro)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "£", children: "£ (Libra)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "ARS$", children: "ARS$ (Peso Argentino)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MXN$", children: "MXN$ (Peso Mexicano)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Bs.", children: "Bs. (Boliviano/Ves)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "S/", children: "S/ (Sol)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "G/", children: "G/ (Guaraní)" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: save, className: "btn-primary w-full py-4 uppercase tracking-widest text-xs font-black mt-4", children: "Guardar Identidad" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-card p-8 space-y-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest mb-3 italic opacity-50", children: "Visualización" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-black mb-4 tracking-tight", children: [
          "Preferencia de ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-500", children: "Tema" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-[var(--text-muted)] mb-6", children: "Eligí entre modo claro, oscuro (la actual), o seguí la configuración de tu sistema." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setTheme("light"),
              className: `flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all group ${theme === "light" ? "bg-blue-500/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]" : "bg-[var(--bg-input)] border-transparent hover:border-white/10"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-full transition-transform duration-500 ${theme === "light" ? "bg-blue-500 text-white scale-110" : "bg-slate-800 text-slate-500 group-hover:scale-110"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 20 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-widest ${theme === "light" ? "text-blue-400" : "text-slate-500"}`, children: "Modo Claro" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setTheme("dark"),
              className: `flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all group ${theme === "dark" ? "bg-slate-800 border-white/20" : "bg-[var(--bg-input)] border-transparent hover:border-white/10"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-full transition-transform duration-500 ${theme === "dark" ? "bg-white text-slate-900 scale-110" : "bg-slate-800 text-slate-500 group-hover:scale-110"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 20 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-widest ${theme === "dark" ? "text-white" : "text-slate-500"}`, children: "Modo Oscuro" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setTheme("system"),
              className: `flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all group ${theme === "system" ? "bg-indigo-500/10 border-indigo-500/50" : "bg-[var(--bg-input)] border-transparent hover:border-white/10"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded-full transition-transform duration-500 ${theme === "system" ? "bg-indigo-500 text-white scale-110" : "bg-slate-800 text-slate-500 group-hover:scale-110"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { size: 20 }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-black uppercase tracking-widest ${theme === "system" ? "text-indigo-400" : "text-slate-500"}`, children: "Sistema" })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-8 border-blue-500/20 bg-blue-600/5 flex flex-col gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-blue-500/10 rounded text-blue-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold tracking-tight text-blue-400", children: "Respaldo de Seguridad" })
        ] }),
        isAndroid ? (
          /* ---- ANDROID: Share Sheet ---- */
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-blue-500/10 border border-blue-500/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-blue-300 font-semibold mb-1", children: "📤 Exportar vía Share Sheet" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-400 leading-relaxed", children: [
                "Generamos el archivo de backup y se abre el menú nativo de Android para que elijas el destino: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold", children: "Google Drive" }),
                ", ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold", children: "OneDrive" }),
                ", correo, WhatsApp, etc."
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: handleManualBackup,
                  disabled: isSyncing,
                  className: "w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all disabled:opacity-50",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 18, className: isSyncing ? "animate-spin" : "" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest", children: isSyncing ? "Generando..." : "Exportar y compartir backup" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: handleImport,
                  className: "w-full flex items-center justify-center gap-3 p-3 rounded-xl border border-amber-500/20 text-amber-500 hover:bg-amber-500/10 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 16 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest", children: "Importar backup (Restaurar)" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 bg-slate-900/40 rounded-xl border border-dashed border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] text-slate-500 leading-relaxed text-center", children: [
                "💡 Para ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "restaurar" }),
                ': primero descargá el archivo .db desde Drive/OneDrive a tu teléfono, luego usá "Importar backup" y seleccioná el archivo desde Descargas.'
              ] }),
              lastSync && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] text-emerald-500/70 text-center mt-1", children: [
                "✓ Último backup: ",
                lastSync
              ] })
            ] })
          ] })
        ) : (
          /* ---- WEB/ELECTRON: Carpeta local / File System Access ---- */
          /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-slate-400 leading-relaxed -mt-2", children: [
              "Guarda tus datos en una carpeta local, ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold", children: "Google Drive" }),
              " o ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold", children: "OneDrive" }),
              " sincronizada en tu PC."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex flex-col gap-3 p-4 rounded border ${hasSource ? "bg-emerald-500/5 border-emerald-500/20" : "bg-slate-900/60 border-white/5"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-3 rounded ${hasSource ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-800 text-slate-500"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 22 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1", children: "Estado del Respaldo" }),
                hasSource ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-sm text-emerald-400", children: [
                    "📁 ",
                    backupFolderName || "Carpeta configurada"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[9px] text-slate-400 mt-0.5", children: [
                    "Último: ",
                    lastSync || "Pendiente"
                  ] })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-500 italic", children: "No configurado" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: handleChooseFolder,
                  className: "px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded bg-slate-800 text-slate-400 hover:bg-blue-600 hover:text-white transition-all",
                  children: hasSource ? "Cambiar" : "Elegir Carpeta"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: handleManualBackup,
                  disabled: !hasSource || isSyncing,
                  className: `w-full flex items-center justify-center gap-3 p-4 rounded border transition-all ${!hasSource ? "opacity-40 cursor-not-allowed text-slate-600" : "border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 18, className: isSyncing ? "animate-spin" : "" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest", children: isSyncing ? "Guardando..." : "Exportar datos ahora" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  onClick: handleImport,
                  className: "w-full flex items-center justify-center gap-3 p-3 rounded border border-amber-500/20 text-amber-500 hover:bg-amber-500/10 transition-all",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 16 }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest", children: "Importar datos (Restaurar)" })
                  ]
                }
              )
            ] })
          ] })
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `glass-card p-8 border-indigo-500/20 bg-indigo-600/5 flex flex-col gap-5 relative overflow-hidden ${!isPremium ? "opacity-80" : ""}`, children: [
        !isPremium && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-slate-900/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center p-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-indigo-500 rounded-full mb-3 shadow-[0_0_20px_rgba(99,102,241,0.5)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 24, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-black text-white mb-2 uppercase tracking-tighter", children: "Función Premium" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-200 mb-4 max-w-[200px]", children: "La sincronización en la nube protege tus datos automáticamente y permite usarlos en múltiples dispositivos." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-6 py-2 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-indigo-400 transition-all", children: "Ver Planes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-indigo-500/10 rounded text-indigo-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { size: 20 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold tracking-tight text-indigo-400", children: "Sincronización en la Nube" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400 leading-relaxed -mt-2", children: "Respaldo automático y seguro en nuestros servidores. Accede a tu información desde cualquier lugar." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: handleCloudSync,
              disabled: isCloudSyncing || !isPremium,
              className: `w-full flex items-center justify-center gap-3 p-4 rounded-xl transition-all ${isPremium ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "bg-slate-800 text-slate-500"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { size: 18, className: isCloudSyncing ? "animate-spin" : "" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-black uppercase tracking-widest", children: isCloudSyncing ? "Sincronizando..." : "Sincronizar ahora" })
              ]
            }
          ),
          lastCloudSync && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-center text-slate-500", children: [
            "Última sincronización: ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-indigo-400 font-bold", children: new Date(lastCloudSync).toLocaleString() })
          ] })
        ] }),
        isPremium && cloudBackups.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3", children: "Respaldos Disponibles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 max-h-[150px] overflow-y-auto pr-2 custom-scrollbar", children: cloudBackups.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 bg-slate-900/60 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold text-slate-300", children: b.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-slate-500", children: new Date(b.created_at).toLocaleString() })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => handleRestoreFromCloud(b.name),
                className: "p-2 text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-all opacity-0 group-hover:opacity-100",
                title: "Restaurar este respaldo",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14 })
              }
            )
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card p-8 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 bg-emerald-500/10 rounded-lg text-emerald-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { size: 20 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold tracking-tight", children: "Importación Masiva (Excel)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-400 mb-6", children: "Empezá a usar la app al instante migrando tus datos desde otras planillas o sistemas." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2", children: "¿Qué querés importar?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "w-full mb-6",
              value: importType,
              onChange: (e) => {
                setImportType(e.target.value);
                setPreviewData([]);
                setPreviewErrors([]);
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "products", children: "📦 Productos e Inventario" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "buyers", children: "👥 Clientes (Compradores)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "sellers", children: "🚛 Proveedores" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "accounts", children: "🏦 Cuentas Contables y Saldos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "transactions", children: "🧾 Historial de Venta/Compra" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => downloadTemplate(importType), className: "flex flex-col items-center justify-center p-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] hover:border-blue-500 transition-colors gap-2 text-[var(--text-main)] group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 24, className: "text-blue-500 group-hover:scale-110 transition-transform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-widest text-center", children: [
                  "1. Bajar",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Plantilla"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex flex-col items-center justify-center p-4 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-500 transition-colors gap-2 cursor-pointer group relative overflow-hidden shadow-lg shadow-emerald-500/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { size: 24, className: "group-hover:scale-110 transition-transform" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-black uppercase tracking-widest text-center", children: [
                  "2. Subir",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  "Excel Lleno"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "absolute inset-0 opacity-0 cursor-pointer", accept: ".xlsx, .xls, .csv", onChange: handleFileChange })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleExport, className: "flex items-center justify-center gap-3 p-4 rounded-2xl bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all text-blue-500 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileSpreadsheet, { size: 20, className: "group-hover:scale-110 transition-transform" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-black uppercase tracking-[0.2em]", children: "Exportar Datos Actuales a Excel" })
            ] })
          ] })
        ] }),
        (previewData.length > 0 || previewErrors.length > 0) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-4 rounded-2xl bg-slate-950 border border-slate-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-sm mb-3", children: "Vista Previa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "text-emerald-400 mb-1", size: 20 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-black text-emerald-400", children: previewData.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-emerald-500/70", children: "Válidas" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 bg-red-500/10 border border-red-500/20 rounded-xl p-3 flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "text-red-400 mb-1", size: 20 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-black text-red-400", children: previewErrors.length }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase font-bold text-red-500/70", children: "Errores" })
            ] })
          ] }),
          previewErrors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-xs text-red-400 space-y-1 mb-4 max-h-24 overflow-y-auto", children: [
            previewErrors.slice(0, 5).map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "Fila ",
              e.row,
              ": ",
              e.error
            ] }, i)),
            previewErrors.length > 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
              "...y ",
              previewErrors.length - 5,
              " más"
            ] })
          ] }),
          previewData.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: confirmImport,
              className: "w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black uppercase text-xs rounded-xl transition-all shadow-lg shadow-emerald-500/20",
              disabled: isImporting,
              children: isImporting ? "Importando..." : "Confirmar Importación Masiva"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
export {
  SettingsPage as default
};
