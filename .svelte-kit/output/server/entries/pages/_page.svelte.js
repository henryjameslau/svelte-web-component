import { c as create_ssr_component } from "../../chunks/ssr.js";
import "pym.js";
import "parse-color";
const handlers = [];
if (typeof window !== "undefined") {
  const run_all = () => handlers.forEach((fn) => fn());
  window.addEventListener("scroll", run_all);
  window.addEventListener("resize", run_all);
}
if (typeof IntersectionObserver !== "undefined") {
  const map = /* @__PURE__ */ new Map();
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const update = map.get(entry.target);
        const index = handlers.indexOf(update);
        if (entry.isIntersecting) {
          if (index === -1)
            handlers.push(update);
        } else {
          update();
          if (index !== -1)
            handlers.splice(index, 1);
        }
      });
    },
    {
      rootMargin: "400px 0px"
      // TODO why 400?
    }
  );
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-1ujozk4">Welcome to your library project</h1> <p data-svelte-h="svelte-1gcp1ig">Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p> <p data-svelte-h="svelte-jl9sbz">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> <count-er></count-er> <scroll-y></scroll-y>`;
});
export {
  Page as default
};
