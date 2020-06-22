<template>
  <div class="panel panel-default pl-4">
    <div class="card" style="width: 17.5rem;">
      <div class="card-body text-left">
        <div class="panel-heading" role="tab" v-bind:id="'headingOne2' + id">
          <h4 class="card-title pb-3">{{ form.title }}</h4>
          <p class="card-text pl-2">
            <span class="font-weight-bold">Author:</span>
            {{ form.userName }}
          </p>
          <p class="card-text pl-2">
            <span class="font-weight-bold">Followers:</span>
            {{ form.followedCount }}
          </p>
        </div>
        <button
          class="btn btn-link mt-5 d-inline-block"
          data-toggle="collapse"
          v-bind:data-target="'#collapseOne2' + id"
          aria-expanded="true"
          v-bind:aria-controls="'collapseOne2' + id"
        >
          <i class="far fa-file-alt"></i>
        </button>

        <button
          class="btn btn-link mt-5 d-inline-block"
          @click="followItinerary(id)"
          v-html="buttonText"
        ></button>
        <button
          class="btn btn-link mt-5 d-inline-block"
          @click="showItinerary(id)"
        >
          <i class="far fa-eye" style="color: #363636; font-size: 1.1em;"></i>
        </button>
      </div>
    </div>
    <div
      v-bind:id="'collapseOne2' + id"
      class="panel-collapse collapse in"
      v-bind:aria-labelledby="'headingOne2' + id"
      style="transition: all 0.5s ease-in-out;"
    >
      <div class="card-body pl-0 pt-lg-4 pb-lg-0">
        <ul class="text-left fa-ul" v-html="myList"></ul>
      </div>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

//
<script>
import { mapGetters } from "vuex";
export default {
  name: "ItineraryCard",
  props: ["id"],
  data() {
    return {
      form: {
        title: "",
        userName: "",
        followedCount: 0
      },

      buttonText: "Follow",

      mylist: "",
      myCategories: [],
      itinerary: "",
      itineraies: ""
    };
  },
  computed: {
    ...mapGetters({
      getItineraryById: "getItineraryById",
      getItineraries: "getItineraries",
      getFollowByIds: "getFollowByIds",
      getLoggedUser: "getLoggedUser",
      getNumFollowers: "getNumFollowers"
    })
  },
  methods: {
    createList() {
      this.myList = "";
      this.myCategories = [];

      for (const elements of this.itinerary.Visitelocations) {
        if (!this.myCategories.find(cat => cat == elements.category)) {
          this.myCategories.push(elements.category);
        }
      }

      for (const cat of this.myCategories) {
        this.myList += `<p class="font-weight-bold">${cat}</p>`;

        for (const point of this.itinerary.Visitelocations) {
          if (point.category == cat) {
            this.myList += `<li class="pl-2 pb-3 w-100">
                              <span class="fa-li"
                                ><i
                                  class="fas fa-angle-right"
                                  style="color: #5085a5; font-size: 1.2em"
                                ></i></span
                              >${point.name} ;</li>`;
          }
        }
      }
    },
    async upFollow(id) {
      this.$store.commit("SET_ITINERARY_ID", {
        itinerary: {
          id_itinerary: id
        }
      });

      try {
        await this.$store.dispatch("addNewFollowedItinerary");
      } catch (err) {
        alert(err);
        return err;
      }

      try {
        await this.$store.dispatch("getAllFollowedItinerary");
      } catch (err) {
        alert(err);
        return err;
      }
      this.form.followedCount = this.getNumFollowers(id);
    },
    async downFollow(id) {
      this.$store.commit("SET_ITINERARY_ID", {
        itinerary: {
          id_itinerary: id
        }
      });

      try {
        await this.$store.dispatch("deleteFollowedItinerary");
      } catch (err) {
        alert(err);
        return err;
      }

      try {
        await this.$store.dispatch("getAllFollowedItinerary");
      } catch (err) {
        alert(err);
        return err;
      }

      this.form.followedCount = this.getNumFollowers(id);
    },

    buttonTextDefiner() {
      if (this.getFollowByIds(this.id, this.getLoggedUser.id)) {
        this.buttonText =
          "<i class='far fa-thumbs-down' style='color: #363636; font-size: 1.1em;'></i>";
      } else {
        this.buttonText =
          "<i class='far fa-thumbs-up' style='color: #363636; font-size: 1.1em;'></i>";
      }
    },

    followItinerary(id) {
      // this.itinerary = this.getItineraryById(id);
      // this.$store.commit("SET_SELECTED_ITINERARY", this.itinerary);
      if (this.getFollowByIds(id, this.getLoggedUser[0].id_user)) {
        this.downFollow(id);

        this.$snotify.warning("Itierary unfollow!", "Done", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      } else {
        this.upFollow(id);
        this.$snotify.success("Itierary followed!", "Done", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      }
      this.buttonTextDefiner();
      this.form.title = this.itinerary.name;
      this.form.userName = this.itinerary.username;
    },
    showItinerary(id) {
      this.itinerary = this.getItineraryById(id);
      this.$store.commit("SET_SELECTED_ITINERARY", this.itinerary);
      this.$router.push({
        name: "my-trip"
      });
    }
  },
  created() {
    this.itinerary = this.getItineraryById(this.id);
    this.form.title = this.itinerary.name;
    this.form.userName = this.itinerary.username;
    this.form.followedCount = this.getNumFollowers(this.id);
    this.createList();
    this.buttonTextDefiner();
  }
};
</script>

<style lang="scss" scope>
::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  margin-top: 1em;
  background-color: rgba(151, 151, 151, 0.8);
  border-radius: 10px;
}
h3 {
  font-family: "Geared Slab";
  color: #5085a5;
  margin-bottom: 1.4em;
}

.card {
  background-color: rgba(54, 54, 54, 0.2) !important;
  border-radius: 4px !important;
  border-color: transparent !important;
  h4 {
    font-family: "Geared Slab";
    text-align: center;
    color: #5085a5;
  }

  .btn {
    color: #363636;
    cursor: pointer;
    display: block;
    position: relative;
    background: transparent !important;
    border: 1.5px solid rgba(54, 54, 54, 0.7);
    margin: 4px;
    text-decoration: none !important;
    &:hover {
      color: #5085a5 !important;
      background-color: transparent;
      text-shadow: nfour;
      border: 1.5px solid #5085a5;
      i {
        color: #5085a5 !important;
      }
    }
  }
}

.panel-collapse {
  background-color: rgba(54, 54, 54, 0.8);
  max-height: 200px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  border-radius: 0 0 6px 6px;
  color: #ffffff;
  width: 17.5em;
  ul {
    li {
      font-family: "Muli";
    }
  }
  p.font-weight-bold {
    font-size: 1.3rem;
    font-family: "Geared Slab";
  }
}
</style>
