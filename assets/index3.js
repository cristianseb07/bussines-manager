const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web2.js","./index4.js","./index.js","./web3.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index.js";
import { r as registerPlugin } from "./index4.js";
function s(t) {
  t.CapacitorUtils.Synapse = new Proxy(
    {},
    {
      get(e, n) {
        return new Proxy({}, {
          get(w, o) {
            return (c, p, r) => {
              const i = t.Capacitor.Plugins[n];
              if (i === void 0) {
                r(new Error(`Capacitor plugin ${n} not found`));
                return;
              }
              if (typeof i[o] != "function") {
                r(new Error(`Method ${o} not found in Capacitor plugin ${n}`));
                return;
              }
              (async () => {
                try {
                  const a = await i[o](c);
                  p(a);
                } catch (a) {
                  r(a);
                }
              })();
            };
          }
        });
      }
    }
  );
}
function u(t) {
  t.CapacitorUtils.Synapse = new Proxy(
    {},
    {
      get(e, n) {
        return t.cordova.plugins[n];
      }
    }
  );
}
function f(t = false) {
  typeof window > "u" || (window.CapacitorUtils = window.CapacitorUtils || {}, window.Capacitor !== void 0 && !t ? s(window) : window.cordova !== void 0 && u(window));
}
var Directory;
(function(Directory2) {
  Directory2["Documents"] = "DOCUMENTS";
  Directory2["Data"] = "DATA";
  Directory2["Library"] = "LIBRARY";
  Directory2["Cache"] = "CACHE";
  Directory2["External"] = "EXTERNAL";
  Directory2["ExternalStorage"] = "EXTERNAL_STORAGE";
  Directory2["ExternalCache"] = "EXTERNAL_CACHE";
  Directory2["LibraryNoCloud"] = "LIBRARY_NO_CLOUD";
  Directory2["Temporary"] = "TEMPORARY";
})(Directory || (Directory = {}));
var Encoding;
(function(Encoding2) {
  Encoding2["UTF8"] = "utf8";
  Encoding2["ASCII"] = "ascii";
  Encoding2["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
const FilesystemDirectory = Directory;
const FilesystemEncoding = Encoding;
const Filesystem = registerPlugin("Filesystem", {
  web: () => __vitePreload(() => import("./web2.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url).then((m) => new m.FilesystemWeb())
});
f();
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get Directory() {
    return Directory;
  },
  get Encoding() {
    return Encoding;
  },
  Filesystem,
  FilesystemDirectory,
  FilesystemEncoding
}, Symbol.toStringTag, { value: "Module" }));
const Share = registerPlugin("Share", {
  web: () => __vitePreload(() => import("./web3.js"), true ? __vite__mapDeps([3,1]) : void 0, import.meta.url).then((m) => new m.ShareWeb())
});
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Share
}, Symbol.toStringTag, { value: "Module" }));
export {
  Directory as D,
  Encoding as E,
  Filesystem as F,
  Share as S,
  index as a,
  index$1 as i
};
