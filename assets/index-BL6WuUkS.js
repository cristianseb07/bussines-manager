const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-BevIyEVv.js","./index-D-Ubi8Nr.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./index-BTZOdFbx.js";
import { r as registerPlugin } from "./index-D-Ubi8Nr.js";
const App = registerPlugin("App", {
  web: () => __vitePreload(() => import("./web-BevIyEVv.js"), true ? __vite__mapDeps([0,1]) : void 0, import.meta.url).then((m) => new m.AppWeb())
});
export {
  App
};
