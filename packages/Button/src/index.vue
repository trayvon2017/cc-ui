<template>
  <div class="dc-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'dc-button',
  props: {
    type: String
  }
}
</script>

<style>
  .dc-button {
      display: inline-block;
      padding: 3px 6px;
      background: #000;
      color: #fff;
  }
</style>
