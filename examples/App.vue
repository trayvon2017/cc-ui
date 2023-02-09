<!--
 * @Description: 
 * @Date: 2023-02-09 10:14:41
 * @LastEditors: cfb
 * @LastEditTime: 2023-02-09 18:24:21
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
      <ul style="height: 100%; overflow: auto">
        <li>你好1h</li>
        <li>你好2h</li>
        <li>你好3h</li>
        <li>你好4h</li>
        <li>你好5h</li>
        <li>你好6h</li>
        <li>你好7h</li>
        <li>你好8h</li>
        <li>你好9h</li>
        <li>你好10h</li>
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
