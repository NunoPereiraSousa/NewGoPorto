<template>
  <div id="app">
    <div
      v-if="
        this.$route.name == 'sign-up' ||
          this.$route.name == 'sign-in' ||
          this.$route.name == 'loading' ||
          this.$route.name == 'LoadingMap'
      "
    >
      <router-view></router-view>
    </div>
    <div
      v-else-if="
        this.$route.name == 'adminLandingPage' ||
          this.$route.name == 'backOfficeUsers' ||
          this.$route.name == 'backOfficeCatalog' ||
          this.$route.name == 'backOfficeSuggestion' ||
          this.$route.name == 'backOfficeRoutes'
      "
    >
      <AdminNavBar />
      <router-view></router-view>
      <Footer />
    </div>
    <div v-else>
      <div v-if="this.$route.name !== 'errorPage'">
        <Navbar />
      </div>
      <router-view></router-view>
      <div v-if="this.$route.name !== 'errorPage'">
        <Footer />
      </div>
    </div>
    <notifications
      group="foo"
      classes="vue-notification"
      position="bottom right"
    />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AdminNavBar from "@/components/AdminNavBar.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Navbar,
    AdminNavBar,
    Footer
  },
  data: function() {
    return {
      user: {}
    };
  },
  computed: {
    ...mapGetters({
      getLoggedUser: "getLoggedUser"
    })
  },
  async created() {
    this.setStorage();

    if (JSON.parse(localStorage.getItem("loggedUser"))) {
      this.$store.commit(
        "SET_LOGGED_USER",
        JSON.parse(localStorage.getItem("loggedUser"))
      );
    }

    this.$store.commit("SET_IN_LOG_IN_AND_REG", { bool: false });
    // this.user = this.getLoggedUser;
  },
  methods: {
    async setStorage() {
      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
      // *All categories
      try {
        await this.$store.dispatch("allCategories");
      } catch (err) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
        return err;
      }

      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
      //* A1

      try {
        await this.$store.dispatch("allUsers");
      } catch (err) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
        return err;
      }

      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      try {
        await this.$store.dispatch("getAllFavorite");
      } catch (err) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
        return err;
      }

      try {
        await this.$store.dispatch("allItineraries");
      } catch (err) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
        return err;
      }

      try {
        await this.$store.dispatch("allFullItineraries");
      } catch (err) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
        return err;
      }

      // !!!!!!!!!!!!!!!!!!!!!!!!!!!!

      try {
        await this.$store.dispatch("allIdentities");
      } catch (err) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
        return err;
      }

      // if (JSON.parse(localStorage.getItem("selectedItinerary"))) {
      //   this.$store.commit(
      //     "SET_SELECTED_ITINERARY",
      //     JSON.parse(localStorage.getItem("selectedItinerary"))
      //   );
      // }
    }
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}

body {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  background-color: #fefefa !important;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 2px;
}

::-webkit-scrollbar {
  width: 12px;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background: rgba(54, 54, 54, 0.7);
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
// .my-style {
//   // Style of the notification itself
//   font-size: 30px;
//   .notification-title {
//     // Style for title line
//   }

//   .notification-content {
//     // Style for content
//     font-size: 30px;
//   }

//   &.my-type {
//     /*
//     Style for specific type of notification, will be applied when you
//     call notification with "type" parameter:
//     this.$notify({ type: 'my-type', message: 'Foo' })
//     */
//   }
// }
.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;

  font-size: 12px;

  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;

  &.warn {
    background: #5085a5 !important;
    border-left-color: #f48a06;
    font-size: 16px;
    margin-bottom: 2em;
  }

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }

  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }
}
</style>
