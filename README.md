# svelte-web-component
Creating a web component from a svelte component

Inspired by the [BBC article](https://www.bbc.co.uk/news/uk-politics-67361138) where they have a scrolly inside a webpage using a template and shadow-root, I did some exploring and found Svelte can compile components to web components. 

This is a proof of concept that this works. 

## The how
Using the library project template from `npm create svelte@latest` and following [this recipe](https://github.com/sveltejs/kit/issues/10320#issue-1789185724) to do another vite build step on the packaged files to generate some standalone iife .js files. These files can be then loaded from a webpage and then the web-component can be used, see the `test-page` folder.

## And in a bit more detail
For library projects, your interesting stuff is in `lib` and then how it works is in `routes`. I've created a svelte component inside `lib` and added
```
<svelte:options customElement="count-er> to the .svelte file.
```

Also added `compilerOptions` to `svelte.config.js`
```
compilerOptions:{customElement:true}
```

Then you need to package up the files to create a `dist` folder. Vite is then run on this `dist/index.js` to create some more files which can be added to a page.

Compilation happens with the command `vite build && vite -c vite.webcomponents.config.js build`

## Did you really need to do this?
There was a way of using the old svelte template and rollup to generate standalone .js files but this version uses vite. See [phptuts](https://phptuts.github.io/svelte-docs/webcomponents/) or [logrocket](https://blog.logrocket.com/build-web-components-svelte/#building-your-web-components) for a walkthrough.

This is basically a non-typescript version of Tropix126's [sveltekit-package-template](https://github.com/Tropix126/sveltekit-package-template/tree/master)
