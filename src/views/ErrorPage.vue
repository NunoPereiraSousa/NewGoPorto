<template>
  <div
    class="container position-relative d-flex justify-content-center align-items-center"
  >
    <div class="row position-absolute">
      <div class="col-12">
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1200"
          data-aos-once="true"
          data-aos-easing="ease"
        >
          Error
        </h1>
        <hr
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1500"
          data-aos-once="true"
          data-aos-easing="ease"
        />
        <h4
          class="pt-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1800"
          data-aos-once="true"
          data-aos-easing="ease"
        >
          Something went wrong !!! Please try again later...
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    localStorage.setItem("identity_id", JSON.stringify(""));
    localStorage.setItem("categories", JSON.stringify([]));
    localStorage.setItem("itineraries", JSON.stringify([]));
    localStorage.setItem("followedItinerary", JSON.stringify([]));
    localStorage.setItem("error", JSON.stringify(null));
    localStorage.setItem("error", JSON.stringify(""));
    localStorage.setItem("token", JSON.stringify(""));
    localStorage.setItem("loggedUser", JSON.stringify(""));
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 76.5vh;
  font-family: "Geared Slab";
  h1 {
    font-size: 10em;
  }
  hr {
    width: 45vw;
    background: #f0f0f0;
  }
  h4 {
    color: #e9d496;
    font-weight: 500;
  }
}
</style>
