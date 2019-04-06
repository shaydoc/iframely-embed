# iframely-embed

This is a web component wrapper of the iFramely Embed Library for rich media embeds for your 
application. See https://iframely.com/

## Building Web Components with Vue CLI
https://cli.vuejs.org/guide/build-targets.html#web-component

## Targeting multiple web components with Vue CLI
https://cli.vuejs.org/guide/build-targets.html#bundle-that-registers-multiple-web-components

## Demo
https://shaydoc.github.io/iframely-embed/dist/demo.html

## How to use

```
<meta charset="utf-8">
<title>iframely-embed demo</title>
<script src="https://unpkg.com/vue"></script>
<script src="./iframely-embed.js"></script>

<div style="height:50vh;width:50vw;margin:auto">
    <iframely-embed url="..." api-key="..."></iframely-embed>
</div>
```

## Build the component
```
npm run build-web-component
```

## Development
```
npm install

npm run serve
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
