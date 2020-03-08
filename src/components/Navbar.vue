<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="navbar-brand p-0 m-0">
          <img
            class="img-fluid"
            id="logo"
            src="../assets/logo.png"
            alt="GoPorto"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-4">
              <router-link :to="{ name: 'create-trip' }" class="nav-link"
                >Create Trip</router-link
              >
              <!-- <a class="nav-link" href="#">Create Trip</a> -->
            </li>
            <!-- CATALOGS FOR + LG -->
            <li class="nav-item mr-4 dropdown megamenu d-none d-lg-block">
              <a
                class="nav-link dropdown-toggle"
                style="color: #363636 !important"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Catalogs</a
              >
              <div
                class="dropdown-menu slideIn2 pb-0"
                aria-labelledby="navbarDropdown"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-6">
                      <router-link
                        :to="{ name: 'itineraries-catalog' }"
                        class="nav-link ml-lg-2"
                      >
                        <div class="cardContainer text-center">
                          <img
                            class="img-fluid navImages"
                            src="../assets/hostel.jpg"
                            alt="Hostel"
                          />
                          <div class="banner text-center">
                            <p class="lead p-0">Itineraries</p>
                          </div>
                        </div>
                      </router-link>
                    </div>
                    <div class="col-6">
                      <router-link
                        :to="{ name: 'places-catalog' }"
                        class="nav-link ml-lg-2"
                      >
                        <div class="cardContainer text-center">
                          <img
                            class="img-fluid navImages"
                            src="../assets/hotels.jpg"
                            alt="Hostel"
                          />
                          <div class="banner text-center">
                            <p class="lead p-0">Places</p>
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
                <div
                  class="dropdown-divider mx-auto w-75 mt-5"
                  style="color: #5085a5; border: 0.4px solid #5085a5"
                ></div>
                <p
                  class="text-center m-3"
                  style="color: #363636; font-size: 1.2em;"
                >
                  Having access to booking actions makes things so easier
                </p>
              </div>
            </li>
            <!-- CATALOGS FOR + LG -->
            <!-- TRANSPORTATION FOR - LG -->
            <li class="nav-item dropdown d-lg-none">
              <a
                class="nav-link dropdown-toggle"
                style="color: #363636 !important;"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Catalogs</a
              >
              <div
                class="dropdown-menu slideIn"
                style="padding-top: 0; margin-top: 0; border: none !important"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">Itineraries</a>
                <a class="dropdown-item" href="#">Places</a>
              </div>
            </li>
            <!-- TRANSPORTATION FOR - LG -->
            <!-- TRANSPORTATION FOR + LG -->
            <li class="nav-item mr-4 dropdown megamenu d-none d-lg-block">
              <a
                class="nav-link dropdown-toggle"
                style="color: #363636 !important"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Transportation</a
              >
              <div
                class="dropdown-menu slideIn pb-0"
                aria-labelledby="navbarDropdown"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-3">
                      <a
                        href="https://www.booking.com/city/pt/porto.en-gb.html?aid=356980&label=gog235jc-1DCAMouwE4xgJIH1gDaLsBiAEBmAEfuAEXyAEM2AED6AEB-AECiAIBqAIDuALP6o_wBcACAQ&sid=bf94b6c05e5854915e7936e2c876352a&inac=0&lang=en-gb&soz=1&lang_click=top;cdl=pt-pt;lang_changed=1"
                        target="_blank"
                      >
                        <div class="cardContainer text-center">
                          <img
                            class="img-fluid navImages"
                            src="../assets/Transportations/bus.jpg"
                            alt="Bus"
                          />
                          <div class="banner text-center">
                            <p class="lead p-0">Bus</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-3">
                      <a
                        href="https://www.booking.com/city/pt/porto.en-gb.html?aid=356980&label=gog235jc-1DCAMouwE4xgJIH1gDaLsBiAEBmAEfuAEXyAEM2AED6AEB-AECiAIBqAIDuALP6o_wBcACAQ&sid=bf94b6c05e5854915e7936e2c876352a&inac=0&lang=en-gb&soz=1&lang_click=top;cdl=pt-pt;lang_changed=1"
                        target="_blank"
                      >
                        <div class="cardContainer text-center">
                          <img
                            class="img-fluid navImages"
                            src="../assets/Transportations/cablecar.jpg"
                            alt="Cable Car"
                          />
                          <div class="banner text-center">
                            <p class="lead p-0">Cable Car</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-3">
                      <a href="https://www.ryanair.com/gb/en" target="_blank">
                        <div class="cardContainer text-center">
                          <img
                            class="img-fluid navImages"
                            src="../assets/Transportations/hop on hop.jpg"
                            alt="Hop on Hop"
                          />
                          <div class="banner text-center">
                            <p class="lead p-0">Hop on Hop</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-3">
                      <a href="https://www.ryanair.com/gb/en" target="_blank">
                        <div class="cardContainer text-center">
                          <img
                            class="img-fluid navImages"
                            src="../assets/Transportations/metro.jpg"
                            alt="Metro"
                          />
                          <div class="banner text-center">
                            <p class="lead p-0">Metro</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="dropdown-divider mx-auto w-75 mt-5"
                  style="color: #5085a5; border: 0.4px solid #5085a5"
                ></div>
                <p
                  class="lead text-center m-3"
                  style="color: #363636; font-size: 1.2em;"
                >
                  Having access to booking actions makes things so easier
                </p>
              </div>
            </li>
            <!-- TRANSPORTATION FOR + LG -->
            <!-- TRANSPORTATION FOR - LG -->
            <li class="nav-item dropdown d-lg-none">
              <a
                class="nav-link dropdown-toggle"
                style="color: #363636 !important;"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Transportation</a
              >
              <div
                class="dropdown-menu slideIn"
                style="padding-top: 0; margin-top: 0; border: none !important"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">Bus</a>
                <a class="dropdown-item" href="#">Cable Car</a>
                <a class="dropdown-item" href="#">Hop on Hop</a>
                <a class="dropdown-item" href="#">Metro</a>
              </div>
            </li>
            <!-- TRANSPORTATION FOR - LG -->
            <li class="nav-item dropdown d-lg-none">
              <a
                class="nav-link dropdown-toggle"
                style="color: #363636 !important;"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Gastronomy</a
              >
              <div
                class="dropdown-menu slideIn"
                style="padding-top: 0; margin-top: 0; border: none !important"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">Restaurants</a>
                <a class="dropdown-item" href="#">Bakeries</a>
              </div>
            </li>
            <!-- BOOK NOW FOR - LG -->
            <li class="nav-item dropdown d-lg-none">
              <a
                class="nav-link dropdown-toggle"
                style="color: #363636 !important;"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Book Now</a
              >
              <div
                class="dropdown-menu slideIn"
                style="padding-top: 0; margin-top: 0; border: none !important"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">Book Hostel Rooms</a>
                <a class="dropdown-item" href="#">Book Hotel Rooms</a>
                <a class="dropdown-item" href="#">Book Plane Tickets</a>
              </div>
            </li>
            <!-- BOOK NOW FOR - LG -->
            <!-- GASTRONOMY FOR + LG -->
            <li class="nav-item mr-4 dropdown megamenu d-none d-lg-block">
              <a
                class="nav-link dropdown-toggle"
                style="color: #363636 !important"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Gastronomy</a
              >
              <div
                class="dropdown-menu slideIn2 pb-0"
                aria-labelledby="navbarDropdown"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-6">
                      <a
                        href="https://www.booking.com/city/pt/porto.en-gb.html?aid=356980&label=gog235jc-1DCAMouwE4xgJIH1gDaLsBiAEBmAEfuAEXyAEM2AED6AEB-AECiAIBqAIDuALP6o_wBcACAQ&sid=bf94b6c05e5854915e7936e2c876352a&inac=0&lang=en-gb&soz=1&lang_click=top;cdl=pt-pt;lang_changed=1"
                        target="_blank"
                      >
                        <div class="cardContainer text-center">
                          <img
                            class="img-fluid navImages"
                            src="../assets/Gastronomy/restaurant.jpg"
                            alt="Hostel"
                          />
                          <div class="banner text-center">
                            <p class="lead p-0">Restaurants</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-6">
                      <a
                        href="https://www.booking.com/city/pt/porto.en-gb.html?aid=356980&label=gog235jc-1DCAMouwE4xgJIH1gDaLsBiAEBmAEfuAEXyAEM2AED6AEB-AECiAIBqAIDuALP6o_wBcACAQ&sid=bf94b6c05e5854915e7936e2c876352a&inac=0&lang=en-gb&soz=1&lang_click=top;cdl=pt-pt;lang_changed=1"
                        target="_blank"
                      >
                        <div class="cardContainer text-center">
                          <img
                            class="img-fluid navImages"
                            src="../assets/Gastronomy/Confectionary.jpg"
                            alt="Hostel"
                          />
                          <div class="banner text-center">
                            <p class="lead p-0">Bakeries</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="dropdown-divider mx-auto w-75 mt-5"
                  style="color: #5085a5; border: 0.4px solid #5085a5"
                ></div>
                <p
                  class="lead text-center m-3"
                  style="color: #363636; font-size: 1.2em;"
                >
                  Having access to gastronomy places makes things so easier
                </p>
              </div>
            </li>
            <!-- GASTRONOMY FOR + LG -->
            <!-- BOOK NOW FOR + LG -->
            <li class="nav-item dropdown megamenu d-none d-lg-block">
              <a
                class="nav-link dropdown-toggle"
                style="color: #363636 !important"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Book Now</a
              >
              <div
                class="dropdown-menu slideIn pb-0"
                aria-labelledby="navbarDropdown"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-4">
                      <a
                        href="https://www.booking.com/city/pt/porto.en-gb.html?aid=356980&label=gog235jc-1DCAMouwE4xgJIH1gDaLsBiAEBmAEfuAEXyAEM2AED6AEB-AECiAIBqAIDuALP6o_wBcACAQ&sid=bf94b6c05e5854915e7936e2c876352a&inac=0&lang=en-gb&soz=1&lang_click=top;cdl=pt-pt;lang_changed=1"
                        target="_blank"
                      >
                        <div class="cardContainer text-center">
                          <img
                            class="img-fluid navImages"
                            src="../assets/hostel.jpg"
                            alt="Hostel"
                          />
                          <div class="banner text-center">
                            <p class="lead p-0">Book Hostels</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-4">
                      <a
                        href="https://www.booking.com/city/pt/porto.en-gb.html?aid=356980&label=gog235jc-1DCAMouwE4xgJIH1gDaLsBiAEBmAEfuAEXyAEM2AED6AEB-AECiAIBqAIDuALP6o_wBcACAQ&sid=bf94b6c05e5854915e7936e2c876352a&inac=0&lang=en-gb&soz=1&lang_click=top;cdl=pt-pt;lang_changed=1"
                        target="_blank"
                      >
                        <div class="cardContainer text-center">
                          <img
                            class="img-fluid navImages"
                            src="../assets/hotels.jpg"
                            alt="Hostel"
                          />
                          <div class="banner text-center">
                            <p class="lead p-0">Book Hotels</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="col-4">
                      <a href="https://www.ryanair.com/gb/en" target="_blank">
                        <div class="cardContainer text-center">
                          <img
                            class="img-fluid navImages"
                            src="../assets/plane.jpg"
                            alt="Hostel"
                          />
                          <div class="banner text-center">
                            <p class="lead p-0">Book Plane Tickets</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="dropdown-divider mx-auto w-75 mt-5"
                  style="color: #5085a5; border: 0.4px solid #5085a5"
                ></div>
                <p
                  class="lead text-center m-3"
                  style="color: #363636; font-size: 1.2em;"
                >
                  Having access to booking actions makes things so easier
                </p>
              </div>
            </li>
            <!-- BOOK NOW FOR + LG -->
          </ul>
          <ul class="navbar-nav ml-auto d-lg-inline-block d-inline-block">
            <li
              class="nav-item dropdown mr-3 mr-lg-1 d-lg-inline-block d-inline-block"
            >
              <a
                class="nav-link dropdown-toggle"
                style="color: #363636 !important"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i
                  class="fas fa-user-circle"
                  style="font-size: 1.2em; color: #363636; opacity: 0.9;"
                ></i>
              </a>
              <div
                class="dropdown-menu slideIn"
                style="padding-top: 0; margin-top: 0; border: none !important"
                aria-labelledby="navbarDropdown"
              >
                <!-- params: { username: user.username } -->
                <router-link
                  :to="{ name: 'profile', params: { username: user.username } }"
                  class="dropdown-item"
                  >Profile</router-link
                >
                <router-link :to="{ name: 'my-backpack' }" class="dropdown-item"
                  >My Backpack</router-link
                >
                <div class="dropdown-divider"></div>
                <a
                  class="dropdown-item"
                  @click="logOut()"
                  style="cursor: pointer"
                  >LogOut</a
                >
              </div>
            </li>
            <li
              class="nav-item dropdown mr-3 mr-lg-1 d-lg-inline-block d-inline-block"
            >
              <a
                class="nav-link dropdown-toggle"
                style="color: #363636 !important"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i
                  class="fas fa-bell"
                  style="font-size: 1.2em; color: #363636; opacity: 0.9;"
                ></i>
                <span
                  style="font-weight: 400; color: #74accf; padding-left: 5px; font-size: 18px;"
                  >{{ totalNotifications }}</span
                >
              </a>
              <div
                class="dropdown-menu slideIn"
                style="padding-top: 0; margin-top: 0; border: none !important"
                aria-labelledby="navbarDropdown"
              >
                <ul
                  class="list-group list-group-flush"
                  v-for="notification in notifications"
                  :key="notification.id"
                >
                  <li class="list-group-item">
                    <p>
                      Your suggestion:
                      <span>"{{ notification.relatedTo }}"</span>.
                      <br />
                      <span>{{ notification.answear }}</span>
                    </p>

                    <button
                      type="button"
                      class="btn btn-primary btnIcon"
                      @click="checkNotification(notification.id)"
                    >
                      <div v-if="notification.status == 'not-read'">
                        <i
                          class="fas fa-eye"
                          style="color: #5085a5; font-size: 30px"
                        ></i>
                      </div>
                      <div v-else>
                        <i
                          class="fas fa-eye-slash"
                          style="color: #dbc924; font-size: 30px"
                        ></i>
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </li>
            <!-- <li class="nav-item dropdown d-lg-inline-block d-inline-block">
              <a
                class="nav-link dropdown-toggle"
                style="color: #363636 !important"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i
                  class="fas fa-globe-americas"
                  style="font-size: 1.2em; color: #363636; opacity: 0.9;"
                ></i>
              </a>
              <div
                class="dropdown-menu slideIn"
                style="padding-top: 0; margin-top: 0; border: none !important"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">EN</a>
                <a class="dropdown-item" href="#">PT</a>
                <a class="dropdown-item" href="#">ESP</a>
                <a class="dropdown-item" href="#">FR</a>
              </div>
            </li>-->
          </ul>
        </div>
      </div>
    </nav>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      user: {},
      notifications: [],
      totalNotifications: 0,
      allNotiffications: []
    };
  },
  computed: {
    ...mapGetters({
      getNotificationsByUser: "getNotificationsByUser",
      getLoggedUser: "getLoggedUser",
      getNotificationStatus: "getNotificationStatus",
      getAmountNotificationsNotReadById: "getAmountNotificationsNotReadById",
      getNotificationIndexById: "getNotificationIndexById",
      getNotifications: "getNotifications"
    })
  },
  created() {
    this.$store.commit("SET_USERS", {
      users: JSON.parse(localStorage.getItem("users"))
    });

    this.$store.commit(
      "SET_LOGGED_USER",
      JSON.parse(localStorage.getItem("loggedUser"))
    );

    if (JSON.parse(localStorage.getItem("notifications"))) {
      this.$store.commit("SET_NOTIFICATIONS", {
        notifications: JSON.parse(localStorage.getItem("notifications"))
      });
    }
    this.user = this.getLoggedUser;

    this.allNotiffications = this.getNotifications;

    this.notifications = this.getNotificationsByUser(this.user.id);

    this.totalNotifications = this.getAmountNotificationsNotReadById(
      this.getLoggedUser.id
    );
  },
  methods: {
    logOut() {
      // localStorage.removeItem("loggedUser");
      this.$store.commit("SET_LOGGED_USER_LOG_OUT", { loggedUser: "" });
      this.$router.push({ name: "sign-in" });
    },
    // notificationChecked() {
    //   this.notifications.status = "checked";
    // },
    checkNotification(id) {
      if (
        this.allNotiffications[this.getNotificationIndexById(id)].status ===
        "not-read"
      ) {
        this.allNotiffications[this.getNotificationIndexById(id)].status =
          "checked";
        this.$snotify.success("Notification checked!", "Done", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      }
      this.$store.commit("SET_NOTIFICATIONS", {
        notifications: this.allNotiffications
      });
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  font-family: "Geared Slab";
  background: #fefefa !important;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  .container {
    #logo {
      width: 70%;
      height: auto;
    }
    .navbar-nav li a {
      color: #363636 !important;
      font-size: 1.4em;
      letter-spacing: 0.5px;
    }
    .megamenu {
      position: static;
    }
    .dropdown-menu {
      background: #fefefa;
      border-top: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2) !important;
      border-left: 0.4px solid rgba(0, 0, 0, 0.2) !important;
      border-right: 0.4px solid rgba(0, 0, 0, 0.2) !important;
      border-radius: 5px;
      & a.dropdown-item {
        font-size: 1.3em;
        color: #363636 !important;
        &:hover,
        &:focus {
          background-color: #74accf;
          color: #fefefa !important;
        }
        &:active {
          background-color: #e9d496;
        }
      }
      &.slideIn {
        width: 80%;
        left: 10%;
        margin-top: -1em;
        padding-top: 4rem;
        border: none;
        -webkit-animation-name: slideIn;
        animation-name: slideIn;
        animation-duration: 0.6s;
        -webkit-animation-duration: 0.6s;
        animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
      }
      &.slideIn2 {
        width: 50%;
        left: 25%;
        margin-top: -1em;
        padding-top: 4rem;
        border: none;
        -webkit-animation-name: slideIn;
        animation-name: slideIn;
        animation-duration: 0.6s;
        -webkit-animation-duration: 0.6s;
        animation-fill-mode: both;
        -webkit-animation-fill-mode: both;
      }
      .col-6 {
        .cardContainer {
          position: relative;
          .navImages {
            width: 70%;
            height: 7.5em;
            border-radius: 2%;
          }
          .banner {
            position: absolute;
            width: 70%;
            border-radius: 0% 0% 2% 2%;
            height: 20%;
            top: 80%;
            left: 15%;
            background-color: #5085a5;
            opacity: 0.8;
            p {
              color: #fefefa;
              font-size: 1em;
            }
          }
        }
      }
      .col-4 {
        .cardContainer {
          position: relative;
          .navImages {
            width: 75%;
            height: 7.5em;
            border-radius: 2%;
          }
          .banner {
            position: absolute;
            width: 75%;
            border-radius: 0% 0% 2% 2%;
            height: 20%;
            top: 80%;
            left: 12.5%;
            background-color: #5085a5;
            opacity: 0.8;
            p {
              color: #fefefa;
              font-size: 1em;
            }
          }
        }
      }
      .col-3 {
        .cardContainer {
          position: relative;
          .navImages {
            width: 100%;
            height: 7.5em;
            border-radius: 2%;
          }
          .banner {
            position: absolute;
            width: 100%;
            border-radius: 0% 0% 2% 2%;
            height: 20%;
            top: 80%;
            left: 0%;
            background-color: #5085a5;
            opacity: 0.8;
            p {
              color: #fefefa;
              font-size: 1em;
            }
          }
        }
      }
    }
  }
}

@keyframes slideIn {
  0% {
    transform: translateY(2rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
  0% {
    transform: translateY(2rem);
    opacity: 0;
  }
}

@-webkit-keyframes slideIn {
  0% {
    -webkit-transform: transform;
    -webkit-opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    -webkit-opacity: 1;
  }
  0% {
    -webkit-transform: translateY(1rem);
    -webkit-opacity: 0;
  }
}
</style>
