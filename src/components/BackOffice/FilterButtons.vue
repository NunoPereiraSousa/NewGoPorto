<template>
  <div class="col-lg-12 pb-lg-4 pb-3 pt-lg-5 d-flex justify-content-start">
    <button type="button" class="btn btn-primary pl-lg-5 pr-lg-5"></button>
    <button type="button" class="btn btn-primary pl-lg-5 pr-lg-5"></button>
  </div>
</template>

<script>
export default {
  props: ["titleOne", "titleTwo", "event"],
  data: function() {
    return {
      users: []
    };
  },
  created() {
    this.$store.commit("SET_USERS", {
      users: JSON.parse(localStorage.getItem("users"))
    });

    this.$store.commit(
      "SET_LOGGED_USER",
      JSON.parse(localStorage.getItem("loggedUser"))
    );

    this.user = this.$store.getters.getLoggedUser;
    this.users = this.$store.getters.getUsers;
  }
};
</script>

<style scoped>
button {
  margin-left: 3.5rem;
  background-color: #5085a5;
  opacity: 0.8;
  border: none;
  font-family: "Geared Slab";
  color: #ffffff;
  font-size: 1.3rem;
}

button:hover {
  background-color: #e9d496;
  border: none;
}

button:active {
  background-color: #e9d496 !important;
  border: none !important;
  border-color: transparent;
  box-shadow: none !important;
}

button:focus {
  background-color: #e9d496;
  border: none;
  box-shadow: none !important;
}
</style>
