<template>
  <body id="app">
    <main class='container'>
      <div class='row'>
        <div class='col-12 slider-container'>
          <h4>Related Products</h4>
          <carousel></carousel>
        </div>
      </div>
    </main>
   </body>
</template>
<script>
import carousel  from "@/vue/components/carousel";

export default {
  name: "App",
  el: "#app",

  components: {
    carousel,
  }
};
</script>
