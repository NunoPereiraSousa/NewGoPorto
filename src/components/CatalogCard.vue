<template>
  <div class="cardContainer text-center">
    <img class="img-fluid navImages" :src="image" />
    <div class="banner text-center">
      <p class="lead p-0 font-weight-normal">{{ title }}</p>
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
  margin-top: 2em;
  cursor: pointer;
  position: relative;
  img {
    width: 20rem;
    height: 14rem;
    border-radius: 2%;
  }
  .banner {
    position: absolute;
    width: 100%;
    border-radius: 0% 0% 2% 2%;
    height: 17%;
    top: 84%;
    left: 0%;
    background-color: #5085a5;
    opacity: 0.8;
    p {
      font-family: "Muli";
      color: #fefefa;
      font-size: 1.2em;
    }
  }
  transition: 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
