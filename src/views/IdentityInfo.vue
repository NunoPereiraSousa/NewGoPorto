<template>
  <div class="identity-info">
    <div class="container-fluid p-0 section1 position-relative">
      <img :src="identity.image" alt class="img-fluid" />
      <div class="container section1">
        <div class="position-absolute" id="aboveImage">
          <div class="row">
            <div class="col-12 position-absolute">
              <h2>{{ identity.name }}</h2>
              <a href="#" id="backpackAddBtn" @click="addTobackpack()">
                <i
                  class="fas fa-hiking d-inline-block"
                  style="color: #ebecec; font-size: 30px"
                ></i>
                <h3 class="ml-lg-3 d-inline-block">Add to backpack</h3>
              </a>
              <a href="#section2" id="arrowDown">
                <i
                  class="fas fa-chevron-down"
                  style="font-size: 2em; color: #fefefa"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a href="#" id="manual">
      <a href="#location">
        <p>
          <i class="fas fa-angle-right" style="color: #6a8ca1"></i> Location
        </p>
      </a>
      <a href="#information">
        <p>
          <i class="fas fa-angle-right" style="color: #6a8ca1"></i> Information
        </p>
      </a>
      <a href="#comments">
        <p>
          <i class="fas fa-angle-right" style="color: #6a8ca1"></i> Comments
        </p>
      </a>
      <a href="#share">
        <p>
          <i class="fas fa-angle-right" style="color: #6a8ca1"></i> Share
          Comment
        </p>
      </a>
    </a>
    <div class="container" id="section2">
      <div class="row" id="location">
        <div class="col-12">
          <h3 class="secondTitle" style="margin-top: 2em">Location</h3>
          <div class="google-map" id="myMap"></div>
        </div>
      </div>
      <div class="row" id="information">
        <div class="col-12">
          <h3 class="secondTitle">Information</h3>
          <p
            class="lead text-justify"
            style="color: #363636; font-family: 'Muli'; font-weight: 300; padding-right: 2em"
          >
            {{ identity.information }}
          </p>
        </div>
      </div>
      <div class="row" id="comments">
        <div class="col-12">
          <h3 class="secondTitle">Comments</h3>
          <ul
            class="list-group comments list-group-flush pl-lg-2 pr-lg-2 mb-lg-3"
          >
            <li class="list-group-item mr-lg-3">
              <div
                class="row m-0 h-25"
                id="commentsRow"
                v-for="comment in filterCommentsDateTime"
                :key="comment.id"
              >
                <div class="col-lg-2">
                  <div class="d-flex align-items-center">
                    <img
                      :src="comment.photo"
                      :alt="comment.username"
                      class="img-fluid"
                      id="commentImg"
                    />
                  </div>
                  <p
                    class="mt-lg-1 mb-0 mr-0"
                    @click="visiteAccount(comment.id_user, comment.username)"
                    style="cursor: pointer; white-space: nowrap;overflow: hidden;text-overflow: ellipsis;max-width: 200px;color: #363636;"
                  >
                    {{ comment.username }}
                  </p>
                  <div
                    class="d-lg-flex align-items-center justify-content-start"
                  >
                    <star-rating
                      read-only
                      :rating="comment.num_star"
                      :show-rating="false"
                      :star-size="15"
                      :border-width="1"
                      :padding="5"
                      active-color="#e9d496"
                    ></star-rating>
                  </div>
                </div>
                <div class="col-lg-10">
                  <div class="text-justify">
                    <p class="mb-0">
                      <small>{{ comment.date_hour }}</small>
                    </p>
                    <p style="padding-right: 2em">{{ comment.comment_text }}</p>
                  </div>
                </div>
                <hr class="mx-auto" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="row" id="share">
        <div class="col-12">
          <h3 class="secondTitle">Post Your Comment</h3>
          <form @submit.prevent="addComment()" class>
            <div class="form-group">
              <textarea
                class="form-control"
                rows="4"
                placeholder="Say something about it"
                v-model="form.content"
              ></textarea>
            </div>
            <div class="d-flex justify-content-between">
              <div class="form-group pt-3 pb-3 d-inline-block">
                <star-rating
                  :model="form.rating"
                  @rating-selected="setRating"
                  v-bind:star-size="30"
                  v-bind:border-width="0"
                  v-bind:padding="2"
                  increment="0.25"
                  inactive-color="#5085a5"
                  active-color="#e9d496"
                  text-class="font-family: 'Muli'"
                ></star-rating>
              </div>
              <div class="pt-lg-3 pb-lg-4 d-inline-block">
                <button type="submit" class="btn btn-primary text-uppercase">
                  Submit
                </button>
              </div>
            </div>
          </form>
          <p class="text-justify font-italic">
            This can be a crussial information for the next person that is
            interested in visiting {{ identity.name }}. Please leave your honest
            appreciation about it. Thank you. Our GoPorto team.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import $ from "jquery";

export default {
  data: function() {
    return {
      identity: {},
      comments: [],
      users: [],
      loggedUser: "",
      visitedUser: "",
      form: {
        id: "",
        content: "",
        rating: 0
      },
      favouritesList: [],
      map: "",
      identities: []
    };
  },
  mounted() {
    this.renderMap();
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 500) {
        $("#manual").fadeIn();
      } else {
        $("#manual").fadeOut();
      }
    });
  },
  async created() {
    // !<get itinerary
    try {
      await this.$store.dispatch("getIdentity");
    } catch (err) {
      alert(err);
      return err;
    }
    // !get itinerary>

    // !get comments
    try {
      await this.$store.dispatch("getCommentsIdIdentity");
    } catch (err) {
      alert(err);
      return err;
    }
    // !get comments

    // if (JSON.parse(localStorage.getItem("users"))) {
    //   this.$store.commit("SET_USERS", {
    //     users: JSON.parse(localStorage.getItem("users"))
    //   });
    // }

    // if (JSON.parse(localStorage.getItem("comments"))) {
    //   this.$store.commit("SET_COMMENTS", {
    //     comments: JSON.parse(localStorage.getItem("comments"))
    //   });
    // }

    // if (JSON.parse(localStorage.getItem("favoritesList"))) {
    //   this.$store.commit("SET_FAVORITES_LIST", {
    //     list: JSON.parse(localStorage.getItem("favoritesList"))
    //   });
    // }
    //  *important
    this.loggedUser = this.getLoggedUser;
    this.identity = this.getIdentity;
    //  *important

    // * important
    this.comments = this.getCommentsByIdentity(this.identity.id);
    // *important
    this.favouritesList = this.getFavoritesList;
    this.identities = this.getIdentities;
    this.renderMap();
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
      getIdentities: "getIdentities"
    }),
    filterCommentsDateTime() {
      this.sortCommentsByDateTime();
      return this.comments;
    }
  },
  methods: {
    // async getItinerary() {},

    // async getCommentsIdIdentity() {},

    renderMap() {
      const location = new google.maps.LatLng(
        this.identity.lat,
        this.identity.lng
      );

      const myMapOptions = {
        center: location,
        zoom: 17,
        mapTypeId: "hybrid"
      };

      const map = new google.maps.Map(
        document.getElementById("myMap"),
        myMapOptions
      );

      const contentString = `
          <div id="content">
            <h5>${this.identity.name}</h5>
          </div>
        `;

      const infowindow = new google.maps.InfoWindow({ content: contentString });

      const marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.BOUNCE
      });

      marker.addListener("click", () => infowindow.open(map, marker));
    },
    getCurrentDateTime() {
      let today = new Date();
      let date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();
      let time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let dateTime = date + ", " + time;
      return dateTime;
    },
    async addComment() {
      this.form.id = this.getCommentsLastId;
      this.$store.commit("NEW_COMMENT", {
        content: this.form.content,
        rating: this.form.rating,
        date: this.getCurrentDateTime()
      });

      try {
        await this.$store.dispatch("addNewComment");
      } catch (err) {
        alert(err);
        return err;
      }
      this.$snotify.success("Comment successfully sent!", "Done", {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
      this.form.content = "";
      // !get comments
      try {
        await this.$store.dispatch("getCommentsIdIdentity");
      } catch (err) {
        alert(err);
        return err;
      }
      // !get comments

      this.comments = this.getCommentsByIdentity(this.identity.id);
    },
    compareDateTime(a, b) {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      else return 0;
    },
    sortCommentsByDateTime() {
      this.comments.sort(this.compareDateTime);
    },
    visiteAccount(id, username) {
      this.$store.commit("SET_VISITED_USER_ID", id);

      this.$router.push({
        name: "other-user-profile",
        params: { username: username }
      });
    },
    setRating(rating) {
      this.form.rating = rating;
    },
    async addTobackpack() {
      if (
        !this.getFavoriteByIds(
          this.loggedUser[0].id_user,
          JSON.parse(localStorage.getItem("identity_id"))
        )
      ) {
        alert("ali po");
        this.$snotify.success("Added to your favourites!", "Done", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });

        try {
          await this.$store.dispatch("addNewFavorite");
        } catch (err) {
          alert(err);
          return err;
        }
      } else {
        this.$snotify.warning(
          "The identity was removed from your 'favorites' list!",
          "Done",
          {
            timeout: 2000,
            showProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          }
        );

        try {
          await this.$store.dispatch("deleteFavorite");
        } catch (err) {
          alert(err);
          return err;
        }
      }

      try {
        await this.$store.dispatch("getAllFavorite");
        this.favouritesList = this.getFavoritesList;
      } catch (err) {
        alert(err);
        return err;
      }

      // this.$store.commit("SET_FAVORITES_LIST", {
      //   list: this.favouritesList
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 0.6rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(151, 151, 151, 0.4);
  border-radius: 0.5rem;
}
a:hover {
  text-decoration: none;
}

#manual {
  display: none;
  position: fixed;
  bottom: 12%;
  left: 90%;
  z-index: 999;
  text-decoration: none;
  p {
    color: #363636;
    transition: letter-spacing 0.5s;
    letter-spacing: none;
    font-size: 1.05em;
    &:hover {
      text-decoration: none;
      color: #5085a5;
      letter-spacing: 1px;
      i {
        transform: translateX(-2px);
        transition: 0.5s;
      }
    }
  }
}
.container-fluid {
  img {
    height: 95vh;
    width: 100vw;
    margin: 0 0 6em 0;
  }
  #aboveImage {
    top: 0%;
    left: 50%;
    transform: translate(-50%);
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 0;
    width: 100%;
    height: 95vh;
  }
  .row {
    width: 100vw;
    height: 95vh;
    .col-12 {
      width: 100vw;
      height: 85vh;
      top: 15%;
      left: 15%;
      h2 {
        margin: 2em 0 1em 0;
        font-family: "Geared Slab";
        font-size: 1.8em;
        color: #fefefa;
        position: relative;
        padding: 0px 0px 20px 0px;
        font-weight: 300;
        letter-spacing: 1px;
        &:after {
          position: absolute;
          content: "";
          left: 0;
          right: 0;
          bottom: 0;
          width: 10%;
          height: 2px;
          background: #6a8ca1;
        }
      }
      #arrowDown {
        position: absolute;
        left: 35%;
        bottom: 20%;
        i.fa-chevron-down {
          animation: upDown 1s infinite alternate ease-in-out;
        }
      }
    }
  }
}

#section2 {
  border-radius: 6px;
  .row:last-child {
    margin-bottom: 4em;
  }
  h3 {
    margin-top: 1em;
  }
  .row {
    &:hover {
      h3 {
        transition: 0.5s ease-in-out;
        transform: translateX(5px);
        color: #5085a5;
      }
      // .col-12 {
      //   transform-origin: center;
      //   transition: 0.5s ease-in-out;
      //   // transform: scale(1.1);
      //   margin: 4em 0;
      // }
    }
  }
  #myMap {
    height: 400px !important;
    border-radius: 4px;
  }
  .secondTitle {
    margin: 4em 0 1em 0;
    font-family: "Geared Slab";
    font-size: 1.8em;
    color: #363636;
    position: relative;
    padding: 0px 0px 18px 0px;
    font-weight: 300;
    letter-spacing: 1px;
    &:after {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      bottom: 0;
      width: 15%;
      height: 3px;
      background: #6a8ca1;
    }
  }
  p.lead {
    font-size: 1em;
    color: #363636;
    max-height: 50vh;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  // #commentsRow {
  //   margin-top: 1em;
  // }
  ul {
    max-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    hr {
      margin: 4em 0;
      width: 80%;
      background-color: #ebecec;
    }
    #commentImg {
      width: 80%;
      border-radius: 6px;
    }
  }
  textarea {
    font-family: "FontAwesome";
    font-size: 1.2em;
    background-color: transparent;
    box-shadow: none !important;
    padding: 2% 3% 2% 3%;
    border: 1px solid #5085a5;
    border-radius: 3px;
    resize: none;
  }

  textarea:hover,
  textarea:focus,
  textarea:active,
  textarea:active:focus:not(:disabled):not(.disabled),
  textarea:focus,
  textarea:active,
  textarea:hover {
    box-shadow: none !important;
    outline: 0;
    background: transparent !important;
    border: 1.1px solid #5085a5;
    border-radius: 3px;
  }

  button {
    background-color: transparent;
    font-family: "Geared Slab";
    font-size: 1.4rem;
    font-weight: 400;
    color: #5085a5;
    border: 1px solid #5085a5;
    border-radius: 3px;
    padding-left: 32px;
    padding-right: 32px;
    background-image: -webkit-linear-gradient(
      30deg,
      transparent 50%,
      transparent 50%
    );
    background-image: linear-gradient(30deg, transparent 50%, transparent 50%);
    background-size: 50rem;
    background-repeat: no-repeat;
    background-position: 0%;
    -webkit-transition: background 800ms ease-in-out;
    transition: background 800ms ease-in-out;
  }

  button:hover {
    background-position: 100%;
    color: #ffffff;
    background-color: #e9d496;
  }

  button:hover,
  button:focus,
  button:active,
  button:active:focus:not(:disabled):not(.disabled),
  button:focus,
  button:active,
  button:hover {
    box-shadow: none !important;
    outline: 0;
  }

  #myMap {
    width: 87%;
    height: 87%;
    border-radius: 4px;
    box-shadow: 1px 1px 2px rgba(151, 151, 151, 0.4);
  }
}
</style>
