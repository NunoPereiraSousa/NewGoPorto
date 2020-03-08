<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <router-link :to="{ name: 'adminLandingPage' }">
        <img src="../assets/logo.png" alt="GoPorto" id="logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto text-center">
          <li class="nav-item">
            <a class="nav-link" @click="logOut()">
              LogOut
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: function() {
    return {
      loggedUser: ""
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("loggedUser");
      this.$router.push({ name: "signIn" });
    }
  }
};
</script>

<style scoped>
:root {
  --navBar-color: #ffffff;
  --font-color: #404041;
  --shadow-color: #ccc;
}

.bg-light {
  background-color: #ffffff !important;
}

.navbar {
  font-family: "Geared Slab" !important;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  font-size: 1.6rem;
}

a.nav-link {
  font-family: "Geared Slab";
  color: var(--font-color) !important;
  font-size: 1.6rem;
}

a:hover {
  color: #e9d496 !important;
}

.nav-item {
  margin-top: 0.3rem;
}

/* logo */
#logo {
  width: auto;
  height: 4.2rem;
}

/* .icons {
  max-width: 70%;
  height: auto;
} */

@media only screen and (max-width: 812px) {
  .navbar-nav {
    padding: 0;
    text-align: left;
  }

  a.nav-link {
    font-size: 1.2rem;
  }
}
</style>
