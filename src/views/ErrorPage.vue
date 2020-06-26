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
          Error 500
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
        <button
          type="button"
          @click="connect()"
          class="btn btn-primary mt-5"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="2100"
          data-aos-once="true"
          data-aos-easing="ease"
        >
          <i class="fas fa-chevron-right pr-4" style="font-size: 0.8em;"></i>
          Reconnect to the Server<i
            class="fas fa-chevron-left pl-4"
            style="font-size: 0.8em;"
          ></i>
        </button>
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
  },
  methods: {
    connect() {
      localStorage.setItem("identity_id", JSON.stringify(""));
      localStorage.setItem("categories", JSON.stringify([]));
      localStorage.setItem("itineraries", JSON.stringify([]));
      localStorage.setItem("followedItinerary", JSON.stringify([]));
      localStorage.setItem("error", JSON.stringify(null));
      localStorage.setItem("error", JSON.stringify(""));
      localStorage.setItem("token", JSON.stringify(""));
      localStorage.setItem("loggedUser", JSON.stringify(""));
      this.$router.push({ name: "sign-in" });
    }
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
    color: #5085a5;
    font-weight: 500;
  }
  .btn {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    text-decoration: none;
    border-radius: 15px;
    font-size: 1.3em;
    letter-spacing: 0.02em;
    font-family: "Geared Slab";
    color: #fefefa;
    padding: 0.15rem 2rem;
    background: rgba(54, 54, 54, 0.95);
    text-transform: uppercase;
  }
}

.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn.focus:active,
.btn:active:focus,
.btn:focus {
  outline: none;
  box-shadow: none;
}
</style>
