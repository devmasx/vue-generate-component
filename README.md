# Vue js component generator [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

CLI util for easy generate Vue js component

## Installation

```
npm install vue-generate-component -g git+https://github.com/devmasx/vue-generate-component.git
```

## Usage

```
vgc --help
```

### Create new component

```bash
vgc Button
```

Will generate files:

**src/components/Button/Button.vue**
**src/components/Button/Button.scss**

```javascript
//src/components/Button/Button.vue -->
<template>
  <div>Button</div>
</template>

<script>
  export default {
    name: "Button",
    props: {}
  };
</script>

<style lang="scss" scoped src="./Button.scss"></style>
```
