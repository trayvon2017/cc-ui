<template>
  <div class="cc-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'cc-button',
  props: {
    type: String
  }
}
</script>

<style>
  .cc-button {
      display: inline-block;
      padding: 3px 6px;
      background: #000;
      color: #fff;
  }
</style>
