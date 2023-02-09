<!--
 * @Description: 
 * @Date: 2023-02-09 10:14:41
 * @LastEditors: cfb
 * @LastEditTime: 2023-02-09 19:20:52
 * @FilePath: /von-ui/examples/App.vue
-->
<template>
  <div id="app">
    <!-- <von-button type="primary">primary</von-button>
    <von-button type="success">success</von-button>
    <von-button type="warning">warning</von-button>
    <von-button type="danger">danger</von-button>
    <von-button type="info">info</von-button> -->
    <von-slider>
      <ul style="height: 100%; overflow: auto; margin: 0; padding: 0">
        <li>item1.</li>
        <li>item2.</li>
        <li>item3.</li>
        <li>item4.</li>
        <li>item5.</li>
        <li>item6.</li>
        <li>item7.</li>
        <li>item8.</li>
        <li>item9.</li>
        <li>item10.</li>
      </ul>
    </von-slider>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
