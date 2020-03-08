<template>
  <div class="cardContainer text-center">
    <img class="img-fluid navImages" :src="image" />
    <div class="banner text-center">
      <p class="lead pt-0">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: ["image", "title"]
};
</script>

<style lang="scss" scoped>
.cardContainer {
  cursor: pointer;
  position: relative;
  .navImages {
    width: 100%;
    height: 10em;
    border-radius: 2%;
  }
  .banner {
    position: absolute;
    width: 100%;
    border-radius: 0% 0% 2% 2%;
    height: 20%;
    top: 80.5%;
    left: 0%;
    background-color: #5085a5;
    opacity: 0.8;
    p {
      font-family: "Muli";
      color: #fefefa;
      font-size: 1.2em;
      font-weight: 400;
    }
  }
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
