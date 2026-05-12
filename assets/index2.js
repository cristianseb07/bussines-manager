const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web.js","./index4.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index.js";
import { r as registerPlugin } from "./index4.js";
const App = registerPlugin("App", {
  web: () => __vitePreload(() => import("./web.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url).then((m) => new m.AppWeb())
});
export {
  App
};
