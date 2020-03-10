<template>
  <div class="col-lg-4 col-md-12 col-sm-12">
    <i
      :class="icon"
      style="font-size: 44px; color: #20252b;"
      class="pt-xl-5"
    ></i>
    <p class="lead text-center text-sm-justify pt-5 mx-auto w-75">
      {{ users.lenght }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "skills",
  props: ["icon"],
  data: function() {
    return {
      users: []
    };
  },
  created() {
    this.users = this.getUsers;
  },
  computed: {
    ...mapGetters({
      getUsers: "getUsers",
      getUserUsername: "getUserUsername",
      getLastId: "getLastId",
      getIndexById: "getIndexById"
    })
  }
};
</script>

<style lang="scss" scoped>
.col-lg-4 {
  border-radius: 15px;
  box-shadow: none;
  transition: box-shadow 0.5s ease-in-out;
  p {
    font-weight: 300;
    font-family: "Merriweather";
    color: #20252b;
  }
}

.col-lg-4:hover {
  box-shadow: 0 10px 50px -2px rgba(32, 37, 43, 0.2);
  border-radius: 15px;
}
</style>
