<template>
  <div>
    <div class="container title pt-3 pt-lg-5 pb-lg-4" id="section1">
      <div class="row">
        <div class="col-12">
          <h2>
            <span>My</span>
            <span>Backpack</span>
          </h2>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container" id="backpack">
        <div class="row w-75 mx-auto">
          <div class="col-lg-6 col-12">
            <ul
              v-if="myfavouriteList.length > 0"
              class="list-group list-group-flush"
            >
              <p class="lead text-center">Favourite Places</p>
              <li
                class="list-group-item text-left"
                v-for="favorite in myfavouriteList"
                :key="favorite.id_user"
              >
                <p
                  class="btn btn-primary"
                  @click="saveIdentity(favorite.id_identity)"
                >
                  {{ favorite.name }}
                  <i
                    class="fas fa-angle-double-right pl-2"
                    style="color: #5085a5"
                  ></i>
                </p>
              </li>
            </ul>

            <ul v-else class="list-group list-group-flush">
              <p class="lead text-center">Favourite Places</p>
              <li class="list-group-item">
                <p class="btn btn-primary">There are no Favourites</p>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-12">
            <ul class="list-group list-group-flush" v-if="myFollows.length > 0">
              <p class="lead text-center">Fallowed Itineraries</p>
              <li
                class="list-group-item text-left"
                v-for="follow in myFollows"
                :key="follow.id_user"
              >
                <p
                  class="btn btn-primary"
                  @click="folowItinerary(follow.id_itinerary)"
                >
                  {{ follow.name }}
                  <i
                    class="fas fa-angle-double-right pl-2"
                    style="color: #5085a5"
                  ></i>
                </p>
              </li>
            </ul>
            <ul v-else class="list-group list-group-flush">
              <p class="lead text-center">Fallowed Itineraries</p>
              <li class="list-group-item">
                <p class="btn btn-primary">Nothing to show</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="row pt-5 pb-5 w-75 mx-auto">
          <div class="col-12">
            <p class="lead text2">
              Your backpack will be updated automatically after you add
              something on it! You can acess to your backpack items quicker by
              pressing on the item's name.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      myfavouriteList: [],
      loggedUser: {},
      identity: {},
      myFollows: [],
      itinerary: {}
    };
  },
  async created() {
    try {
      await this.$store.dispatch("getAllFollowedItinerary");
    } catch (err) {
      if (JSON.parse(localStorage.getItem("error")) == 500) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
      }
      return err;
    }
    try {
      await this.$store.dispatch("allItineraries");
    } catch (err) {
      if (JSON.parse(localStorage.getItem("error")) == 500) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
      }
      return err;
    }

    try {
      await this.$store.dispatch("allFullItineraries");
    } catch (err) {
      if (JSON.parse(localStorage.getItem("error")) == 500) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
      }
      return err;
    }

    // todo
    try {
      await this.$store.dispatch("getAllFavorite");
    } catch (err) {
      if (JSON.parse(localStorage.getItem("error")) == 500) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
      }
      return err;
    }

    if (JSON.parse(localStorage.getItem("error"))) {
      if (JSON.parse(localStorage.getItem("error")) == 500) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
      }
    }

    this.loggedUser = this.getLoggedUser;

    this.myfavouriteList = this.getMyFavorites(this.loggedUser[0].id_user);
    this.myFollows = this.getMyFollowsById(this.loggedUser[0].id_user);
  },
  methods: {
    saveIdentity(id) {
      this.identity = this.getIdentityByIds(id);
      // this.$store.commit("SET_IDENTITY_SELECTED", this.identity);
      this.$store.commit("SET_IDENTITY_SELECTED_ID", id);
      this.$router.push({
        name: "identity-info",
        params: { name: this.identity.name }
      });
    },

    folowItinerary(id) {
      this.itinerary = this.getItineraryById(id);
      this.$store.commit("SET_SELECTED_ITINERARY", this.itinerary);
      this.$router.push({
        name: "myTrip"
      });
      this.$notify({
        group: "foo",
        type: "success",
        title: "Itinerary <b> Followed </b>",
        text: "This itinerary was added to your list",
        duration: 5000
      });
    }
  },
  computed: {
    ...mapGetters({
      getIdentity: "getIdentity",
      getIdentityById: "getIdentityById",
      getComments: "getComments",
      getCommentsLastId: "getCommentsLastId",
      getLoggedUser: "getLoggedUser",
      getCommentsByIdentity: "getCommentsByIdentity",
      getUserByInput: "getUserByInput",
      getFavoritesList: "getFavoritesList",
      getFavoriteByIds: "getFavoriteByIds",
      getFavoritesByDifferentIds: "getFavoritesByDifferentIds",
      getMyFavorites: "getMyFavorites",
      getIdentityByIds: "getIdentityByIds",
      getMyFollowsById: "getMyFollowsById",
      getItineraryById: "getItineraryById"
    })
  }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar-track.list-group {
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 6px;
  background-color: #ffffff;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(151, 151, 151, 0.4);
  border-radius: 10px;
}

#section1 {
  h2 {
    margin: 2em 0 2em 0;
    font-family: "Geared Slab";
    font-size: 1.8em;
    color: #363636;
    position: relative;
    padding: 0px 0px 20px 0px;
    &:after {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      bottom: 0;
      width: 10%;
      height: 3px;
      background: #5085a5;
    }
    span:first-child {
      font-weight: 200;
    }
    span:nth-child(2) {
      font-weight: 400;
      color: #5085a5;
    }
  }
}

.container-fluid {
  width: 100vw;
  background: #ebecec;
  #backpack {
    .row {
      background: #ebecec;
      .col-lg-6 {
        p.lead {
          font-weight: 400;
          color: #5085a5;
        }
        ul.list-group {
          max-height: 45vh;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
          background-color: #fefefa;
          margin-top: 3em;

          .list-group-item {
            background-color: #fefefa;
          }
          p.lead {
            font-size: 1.6em;
            letter-spacing: 1px;
          }
        }
        .btn {
          background-color: transparent !important;
          border: none;
          border-radius: 1px;
          padding: 12px 0 12px 0;
          text-transform: uppercase;
          position: relative;
          overflow: hidden;
          color: #20252b;
          font-family: "Muli";
          font-size: 1em;
          &:after {
            position: absolute;
            transition: 0.5s;
            content: "";
            width: 0;
            left: 0;
            bottom: 0;
            border-radius: 1px;
            width: 30%;
            height: 1.5px;
            background: #5085a5;
            opacity: 0.5;
          }
          &:hover {
            cursor: pointer;
            border-radius: 1px;
            &:after {
              width: 60%;
              border-radius: 1px;
              left: 0;
            }
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
      }
    }
    .row:last-child {
      p.lead {
        color: #5085a5;
        font-weight: 400;
        font-size: 1.3em;
      }
    }
  }
}
</style>
