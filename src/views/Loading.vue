<template>
  <div
    class="container-fluid loading d-flex justify-content-center align-items-center"
  >
    <div
      class="loader"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="500"
      data-aos-once="true"
    >
      <div class="duo duo1">
        <div class="dot dot-a"></div>
        <div class="dot dot-b"></div>
      </div>
      <div class="duo duo2">
        <div class="dot dot-a"></div>
        <div class="dot dot-b"></div>
      </div>
    </div>
    <h2 class="position-absolute">GoPorto</h2>
    <h4 class="position-absolute">
      <span class="font-weight-light">Coded and Designed by </span> Nuno Pereira
      Sousa & Tiago de Pina
    </h4>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  created() {
    this.$notify({
      group: "foo",
      type: "success",
      title: "Hello, <b> Welcome </b>",
      text: "Enjoy GoPorto!",
      duration: 2900
    });
    setTimeout(() => this.$router.push({ path: "/home" }), 3000);
  },
  mounted() {
    setTimeout(function() {
      $(".loading").addClass("hidden");
    }, 2500);
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  position: fixed;
  background: #fefefa;
  width: 100%;
  height: 100vh;
  opacity: 1;
  transition: 0.5s;
  visibility: visible;
  h2 {
    font-family: "Geared Slab";
    font-weight: 600;
    bottom: 90%;
    color: #e9d496;
  }
  h4 {
    span {
      font-weight: 200;
    }
    font-weight: 400;
    bottom: 5%;
    color: #20252b;
  }
  .loading.hidden {
    opacity: 0;
    visibility: hidden;
  }
  .loader {
    position: relative;
    width: 80px;
    margin: 100px auto;
  }

  .duo {
    height: 20px;
    width: 50px;
    background: rgba(80, 133, 165, 0);
    position: absolute;
  }

  .duo,
  .dot {
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  .duo1 {
    left: 0;
  }

  .duo2 {
    left: 30px;
  }

  .dot {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #5085a5;
    position: absolute;
  }

  .dot-a {
    left: 0px;
  }

  .dot-b {
    right: 0px;
  }

  .duo1 {
    animation-name: spin;
  }

  .duo2 {
    animation-name: spin;
    animation-direction: reverse;
  }

  .duo2 .dot-b {
    animation-name: onOff;
  }

  .duo1 .dot-a {
    opacity: 0;
    animation-name: onOff;
    animation-direction: reverse;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

@keyframes onOff {
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>
