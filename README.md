# highlightjs-vtl

[![npm version](https://img.shields.io/npm/v/highlightjs-vtl)](https://www.npmjs.com/highlightjs-vtl)
[![build](https://img.shields.io/github/actions/workflow/status/jasmaa/highlightjs-vtl/build.yml)](https://github.com/jasmaa/highlightjs-vtl/actions)

Highlight.js syntax for VTL

## Use in browser

Get `hljs-vtl.min.js` from [latest
release](https://github.com/jasmaa/highlightjs-vtl/releases) or build
`hljs-vtl.min.js` with:

```
yarn build
```

Include in HTML page:

```html
<pre>
  <code class="language-vtl">
    vtl code...
  </code>
</pre>
...
<link rel="stylesheet" href="path/to/theme.css" />
<script src="path/to/highlight.min.js"></script>
<script src="path/to/hljs-vtl.min.js"></script>
<script>
  hljs.registerLanguage("vtl", hljsvtl);
  hljs.highlightAll();
</script>
```

## Use in Node

Install packages:

```
npm install highlight.js
npm install highlightjs-vtl
```

Import modules in Node:

```js
const hljs = require("highlight.js");
const hljsVtl = require("highlightjs-vtl");

const code = `
#set( $name = "Velocity" )
Hello $name World!
`;

hljs.registerLanguage("vtl", hljsVtl);
const result = hljs.highlight(code, {
  language: "vtl",
});
```
