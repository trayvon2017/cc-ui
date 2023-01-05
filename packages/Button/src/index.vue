<template>
  <div class="von-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'von-button',
  props: {
    type: String
  }
}
</script>

<style>
  .von-button {
      display: inline-block;
      padding: 3px 6px;
      background: #000;
      color: #fff;
  }
</style>
