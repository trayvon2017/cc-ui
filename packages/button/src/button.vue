<!--
 * @Description: 
 * @Date: 2023-01-06 17:04:16
 * @LastEditors: cfb
 * @LastEditTime: 2023-01-07 12:27:01
 * @FilePath: /von-ui/packages/Button/src/index.vue
-->
<template>
  <div class="von-button" :class="[type ? 'von-button--' + type : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'von-button',
  props: {
    type: {
      type: String,
      default: ''
    },
  }
}
</script>
