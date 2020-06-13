import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import AboutUs from "../views/AboutUs.vue";
import Contacts from "../views/Contacts.vue";
import OurTeam from "../views/OurTeam.vue";
import Profile from "../views/Profile.vue";
import OtherUserProfile from "../views/OtherUserProfile.vue";
import PlacesCatalog from "../views/PlacesCatalog.vue";
import ItinerariesCatalog from "../views/ItinerariesCatalog.vue";
import LoadingMap from "../views/LoadingMap.vue";
import Loading from "../views/Loading.vue";
import MyTrip from "../views/MyTrip.vue";
import CreateTrip from "../views/CreateTrip.vue";
import IdentityInfo from "../views/IdentityInfo.vue";
import MyBackpack from "../views/MyBackpack.vue";
import AdminLandingPage from "@/views/BackOffice/AdminLandingPage.vue";
import BackOfficeUsers from "@/views/BackOffice/BackOfficeUsers.vue";
import BackOfficeCatalog from "@/views/BackOffice/BackOfficeCatalog.vue";
import BackOfficeSuggestions from "@/views/BackOffice/BackOfficeSuggestions.vue";
import BackOfficeRoutes from "@/views/BackOffice/BackOfficeRoutes.vue";

import store from "../store/index.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;
      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/",
    name: "sign-in",
    component: SignIn,
    meta: {
      requireAuth: false,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      store.commit("SET_LOGGED_USER_LOG_OUT", {
        loggedUser: ""
      });

      store.commit("SET_IDENTITY_SELECTED_PROTECTION", {
        identity: ""
      });

      store.commit("SET_VISITED_USER_PROTECTION", {
        user: ""
      });
      next();
    }
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SignUp,
    meta: {
      requireAuth: false,
      mustBeAdmin: false
    }
  },
  {
    path: "/places-catalog",
    name: "places-catalog",
    component: PlacesCatalog,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;
      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUs,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;

      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;

      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/our-team",
    name: "our-team",
    component: OurTeam,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;

      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/profile/:username",
    name: "profile",
    component: Profile,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;
      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/other-user-profile/:username",
    name: "other-user-profile",
    component: OtherUserProfile,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }

      if (JSON.parse(localStorage.getItem("visitedUser"))) {
        store.commit(
          "SET_VISITED_USER",
          JSON.parse(localStorage.getItem("visitedUser"))
        );
      } else {
        store.commit("SET_VISITED_USER_PROTECTION", {
          user: ""
        });
      }

      let visited = store.getters.getVisitedUser;
      let loggedUser = store.getters.getLoggedUser;

      if (loggedUser == "") {
        next("/");
      } else {
        if (visited == "") {
          next("/Error");
        } else {
          next();
        }
      }
    }
  },
  {
    path: "/itineraries-catalog",
    name: "itineraries-catalog",
    component: ItinerariesCatalog,
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;

      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/loading-itinerary",
    name: "loading-itinerary",
    component: LoadingMap,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;
      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/loading",
    name: "loading",
    component: Loading,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;
      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/my-trip",
    name: "my-trip",
    component: MyTrip,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;
      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/create-trip",
    name: "create-trip",
    component: CreateTrip,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;

      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/identity-info/:name",
    name: "identity-info",
    component: IdentityInfo,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      alert();
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      if (JSON.parse(localStorage.getItem("identity"))) {
        store.commit(
          "SET_IDENTITY_SELECTED",
          JSON.parse(localStorage.getItem("identity"))
        );
      } else {
        store.commit("SET_IDENTITY_SELECTED_PROTECTION", {
          identity: ""
        });
      }

      let loggedUser = store.getters.getLoggedUser;

      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/my-backpack/:name",
    name: "my-backpack",
    component: MyBackpack,
    meta: {
      requireAuth: true,
      mustBeAdmin: false
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;
      if (loggedUser == "") {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/adminLandingPage",
    name: "adminLandingPage",
    component: AdminLandingPage,
    meta: {
      requireAuth: true,
      mustBeAdmin: true
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;
      if (loggedUser == "") {
        next("/");
      } else {
        if (loggedUser.id_user_type == 2) {
          next("/");
        } else {
          next();
        }
      }
    }
  },
  {
    path: "/backOfficeUsers",
    name: "backOfficeUsers",
    component: BackOfficeUsers,
    meta: {
      requireAuth: true,
      mustBeAdmin: true
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;
      if (loggedUser == "") {
        next("/");
      } else {
        if (loggedUser.id_user_type == 2) {
          next("/");
        } else {
          next();
        }
      }
    }
  },
  {
    path: "/backOfficeCatalog",
    name: "backOfficeCatalog",
    component: BackOfficeCatalog,
    meta: {
      requireAuth: true,
      mustBeAdmin: true
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;

      if (loggedUser == "") {
        next("/");
      } else {
        if (loggedUser.id_user_type == 2) {
          next("/");
        } else {
          next();
        }
      }
    }
  },
  {
    path: "/backOfficeSuggestion",
    name: "backOfficeSuggestion",
    component: BackOfficeSuggestions,
    meta: {
      requireAuth: true,
      mustBeAdmin: true
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;
      if (loggedUser == "") {
        next("/");
      } else {
        if (loggedUser.id_user_type == 2) {
          next("/");
        } else {
          next();
        }
      }
    }
  },
  {
    path: "/backOfficeRoutes",
    name: "backOfficeRoutes",
    component: BackOfficeRoutes,
    meta: {
      requireAuth: true,
      mustBeAdmin: true
    },
    beforeEnter: (to, from, next) => {
      if (JSON.parse(localStorage.getItem("loggedUser"))) {
        store.commit(
          "SET_LOGGED_USER",
          JSON.parse(localStorage.getItem("loggedUser"))
        );
      } else {
        store.commit("SET_LOGGED_USER_LOG_OUT", {
          loggedUser: ""
        });
      }
      let loggedUser = store.getters.getLoggedUser;
      if (loggedUser == "") {
        next("/");
      } else {
        if (loggedUser.id_user_type == 2) {
          next("/");
        } else {
          next();
        }
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
