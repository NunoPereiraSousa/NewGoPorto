<template>
  <div class="create-trip">
    <div class="container section1">
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>Trip</span>
            <span>Details</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <form>
            <div class="form-row align-items-center">
              <!-- Location -->
              <div class="col-lg-4 col-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i
                        class="fas fa-map-marker-alt pr-1 pl-1 d-inline-block"
                        style="font-size: 1.5em;"
                      ></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Location"
                    v-model="form.location"
                  />
                </div>
              </div>
              <div class="col-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <!-- // Location -->
            </div>
            <div class="form-row align-items-center">
              <!-- Trip Title -->
              <div class="col-lg-4 col-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i
                        class="fas fa-file-signature d-inline-block"
                        style="font-size: 1.5em;"
                      ></i>
                    </div>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Trip Title"
                    v-model="form.title"
                  />
                </div>
              </div>
              <div class="col-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <!-- // Trip Title -->
            </div>
            <div class="form-row align-items-center">
              <!-- Number Kids -->
              <div class="col-lg-4 col-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i
                        class="fas fa-child pl-1 pr-1 d-inline-block"
                        style="font-size: 1.5em;"
                      ></i>
                    </div>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Number of Kids"
                    v-model="form.kids"
                  />
                </div>
              </div>
              <div class="col-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <!-- // Number Kids -->
            </div>
            <div class="form-row align-items-center">
              <!-- Number Adults -->
              <div class="col-lg-4 col-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i
                        class="fas fa-male pl-2 pr-2 d-inline-block"
                        style="font-size: 1.5em;"
                      ></i>
                    </div>
                  </div>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Number of Adults"
                    v-model="form.adults"
                  />
                </div>
              </div>
              <div class="col-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <!-- // Number Adults -->
            </div>
            <div class="form-row align-items-center">
              <!-- Food -->
              <div class="col-lg-4 col-12">
                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <i
                        class="fas fa-utensils pr-1 d-inline-block"
                        style="font-size: 1.5em;"
                        for="inputGroupSelect01"
                      ></i>
                    </div>
                  </div>
                  <select
                    class="custom-select"
                    id="inputGroupSelect01"
                    v-model="form.food"
                  >
                    <option value selected>Do you want to stop to eat?</option>
                    <option value="yes">Of Course!</option>
                    <option value="no">No, thank you!</option>
                  </select>
                </div>
              </div>
              <div class="col-8">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
              <!-- // Food -->
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="container section2">
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>Choose</span>
            <span>Places to Visit</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <p class="mt-1" style="color: #000">My To Do's List</p>
          <ul
            class="list-group list-group-flush text-left items"
            style="background-color: transparent"
          >
            <div v-html="letToDosOutput"></div>
          </ul>
        </div>
        <div class="col-9">
          <ul class="list-unstyled list-inline d-flex justify-content-between">
            <li
              class="list-inline-item"
              v-for="category in categories"
              :key="category.id_category"
            >
              <a
                v-if="selectedCategory != `${category.category_name}`"
                href="#"
                class="btn-floating active btn-sm rgba-white-slight mx-1"
                @click="setCategory(category.category_name)"
                >{{ category.category_name }}</a
              >
              <a
                v-else
                id="painted"
                href="#"
                class="btn-floating active btn-sm rgba-white-slight mx-1"
                @click="setCategory(category.category_name)"
                >{{ category.category_name }}</a
              >
            </li>
          </ul>
          <ul
            class="list-group list-group-flush pl-lg-2 pr-lg-2 pt-lg-4 pr-lg-2 mb-lg-3 pt-4"
          >
            <div class="row">
              <div
                class="col-lg-3 pb-3"
                id="col"
                v-for="identity in filterCatalog"
                :key="identity.id_identity"
              >
                <div
                  style="cursor: pointer;"
                  @click="
                    addOrRemoveToList(
                      identity.id_identity,
                      identity.category_name
                    )
                  "
                >
                  <ItineraryPlaceCard
                    :image="identity.image"
                    :title="identity.name"
                  />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <button
            tag="button"
            class="btn btn-primary mt-5"
            @click="addItinerary()"
          >
            <span class="btn-label">Generate Trip</span>
          </button>
        </div>
      </div>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
// import $ from "jquery";
import ItineraryPlaceCard from "@/components/ItineraryPlaceCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "create-trip",
  components: { ItineraryPlaceCard },
  data: function() {
    return {
      letToDosOutput: "",
      myCategories: [], //* this category is important to do some effects an organizations please be carfull when changing it
      categories: [],
      itineraries: [],
      identities: [],
      selectedCategory: "Monuments",
      interestPoints: [],
      addValidation: false,
      form: {
        formId: "",
        title: "",
        kids: 0,
        adults: 0,
        food: "",
        locations: []
        // interestPoints: [],
      },
      loggedUser: {}
    };
  },
  async created() {
    try {
      await this.$store.dispatch("allCategories");
    } catch (err) {
      alert(err);
      return err;
    }

    try {
      await this.$store.dispatch("allIdentities");
    } catch (err) {
      alert(err);
      return err;
    }

    // this.itineraries = this.getItineraries;
    // this.identities = this.getIdentities;
    // this.loggedUser = this.getLoggedUser;
    this.categories = this.getCategories;

    // this.selectedCategory = this.getIdentitiesSelectedCategory;
    this.identities = this.getIdentitiesByCategory(this.selectedCategory);
  },
  computed: {
    ...mapGetters({
      getIdentitiesByCategory: "getIdentitiesByCategory",
      getItinerariesLastId: "getItinerariesLastId",
      getItineraries: "getItineraries",
      getIdentities: "getIdentities",
      getIdentityByIds: "getIdentityByIds",
      getLoggedUser: "getLoggedUser",
      getCategories: "getCategories"
    }),

    filterCatalog() {
      return this.identities.filter(identity => {
        let boolCategory = false;
        if (
          identity.category_name.toLowerCase() ==
          this.selectedCategory.toLowerCase()
        ) {
          boolCategory = true;
        }
        return boolCategory;
      });
    }
  },

  methods: {
    async addItinerary() {
      let newItineraryBool = true;

      if (this.interestPoints.length == 0) {
        this.$snotify.warning(
          "You must at list chose one place to Visit",
          "Oh...",
          {
            timeout: 2000,
            showProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          }
        );
        newItineraryBool = false;
        alert("Must put something here bro");
      }
      if (this.form.kids == "") {
        this.form.kids = 0;
      }

      if (this.form.adults < 1) {
        this.$snotify.warning(
          "You must at least have one adult in this trip",
          "Oh...",
          {
            timeout: 2000,
            showProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          }
        );
        alert("adult number mus be bigger then 0 bro");
        newItineraryBool = false;
      }

      if (newItineraryBool) {
        let next = true;
        let finalise = false;
        // let myItinerary = {
        //   id: this.getItinerariesLastId,
        //   title: this.form.title,
        //   kids: this.form.kids,
        //   adults: this.form.adults,
        //   food: this.form.food,
        //   Visitelocations: this.interestPoints,
        //   userId: this.loggedUser.id,
        //   userName: this.loggedUser.username,
        //   fallowedCount: 0
        // };

        this.$store.commit("SET_NEW_ITINERARY_INFO", {
          name: this.form.title,
          kids_num: this.form.kids,
          adults_num: this.form.adults,
          id_deslocation: 3
        });

        try {
          await this.$store.dispatch("addItinerary");
          next = true;
        } catch (err) {
          alert(err);
          return err;
        }
        if (next) {
          try {
            await this.$store.dispatch("itineraryLastId");
          } catch (err) {
            alert(err);
            return err;
          }

          for (const place of this.interestPoints) {
            // alert(place.id_identity);
            this.$store.commit("SET_IN_IDENTITY_ID", place.id_identity);
            try {
              await this.$store.dispatch("addIdentityItinerary");
              finalise = true;
            } catch (err) {
              alert(err);
              return err;
            }
          }
        }

        if (finalise) {
          this.seeItinerary();
        }

        // this.$store.commit("NEW_ITINERARY", myItinerary);

        // this.$store.commit("SET_SELECTED_ITINERARY", myItinerary);
      }
    },

    //  todo ---------------------
    seeItinerary() {
      alert("I am here bro progress"); //! this must be delited
      // this.$router.push({
      //   name: "my-trip"
      // });
    },

    //  todo ---------------------

    compareCategory(a, b) {
      if (a.category < b.category) {
        return 1;
      } else if (a.category > b.category) {
        return -1;
      } else {
        return 0;
      }
    },
    sortCategory() {
      this.interestPoints = this.interestPoints.sort(this.compareCategory);
    },
    setCategory(category) {
      this.selectedCategory = category;
      this.identities = this.getIdentitiesByCategory(this.selectedCategory);
    },
    addOrRemoveToList(id, categ) {
      this.identityIsSelected(id); //Todo obs : validate if the place is already chosen or not

      //  first Part  - if the place is inside
      if (this.addValidation == true) {
        this.interestPoints = this.interestPoints.filter(
          identity => identity.id_identity != id
        );
        this.$snotify.warning("Place Removed", "Alright...", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });

        // Comnfirms if there is  still in the list places from the category of the one that has been removed
        if (
          !this.interestPoints.find(points => points.category_name == categ)
        ) {
          this.myCategories = this.myCategories.filter(
            Element => Element !== categ
          );
        }

        this.addValidation = false;
      }

      // Second part - if the place is not inside
      else {
        let myIdentity = this.getIdentityByIds(id);
        this.interestPoints.push(myIdentity);

        if (!this.myCategories.find(cat => cat == myIdentity.category_name)) {
          this.myCategories.push(myIdentity.category_name);
        }

        this.addValidation = false;
      }

      this.buildIterece();
    },
    identityIsSelected(id) {
      if (this.interestPoints.find(identity => identity.id_identity == id)) {
        this.addValidation = true;
      } else {
        this.addValidation = false;
      }
    },
    buildIterece() {
      this.sortCategory();
      this.letToDosOutput = "";
      for (const cat of this.myCategories) {
        this.letToDosOutput += ` <i class="fas fa-chevron-right d-inline-block" style="color: #e9d496"><li class='list-group-item d-inline-block' style="background-color: transparent; color: black"><h5>${cat}</h5></li></i>`;

        for (const point of this.interestPoints) {
          if (point.category_name.toLowerCase() == cat.toLowerCase()) {
            this.letToDosOutput += ` <li class='list-group-item pt-0 ml-2' style="background-color: transparent; border: none">${point.name}</li>`;
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary:active:focus:not(:disabled):not(.disabled),
.btn:focus,
.btn:active,
.btn:hover {
  box-shadow: none !important;
  outline: 0;
}
.section1 {
  font-family: "Muli";
  font-size: 1em;
  .row:first-child {
    .col-12 {
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
  }
  form {
    .input-group-text {
      background-color: transparent !important;
    }
    .form-control,
    .custom-select {
      border-radius: 4px;
      color: #363636;
      background: #fefefa;
      box-shadow: none !important;
      .form-group {
        padding-top: 0.5rem;
      }

      input {
        padding: 1.4rem;
      }

      option {
        background-color: #fefefa !important;
        color: #363636;
        &:hover {
          background-color: #363636 !important;
        }
      }
    }
  }
}
.section2 {
  .row:first-child {
    .col-12 {
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
  }
  .row {
    padding: 0 0 2em 0;
    p {
      font-size: 1.4em;
      font-family: "Geared Slab";
      color: #363636;
    }
    .list-unstyled {
      overflow-y: hidden;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;

      li a {
        text-decoration: none;
        display: inline-block;
        font-size: 1.4em;
        font-family: "Geared Slab";
        color: #363636;
        &::after {
          content: "";
          display: block;
          width: 0;
          height: 2.5px;
          background: #e9d496;
          transition: width 0.3s;
        }
        &:hover::after {
          width: 100%;
        }
      }

      li a#painted {
        color: #e9d496;
      }
    }
    .list-group {
      max-height: 60vh;
      overflow-y: scroll;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      background-color: transparent;
      border-radius: 0.5rem;
    }
    .btn {
      background: transparent;
      letter-spacing: 1px;
      font-size: 1.4em;
      line-height: 1.2em;
      font-weight: 400;
      padding: 10px 32px;
      border: 1px solid #5085a5;
      overflow: hidden;
      display: inline-block;
      transition: all 0.5s;
      border-radius: 4px;
    }

    .btn:hover,
    .btn:active {
      text-decoration: none;
      color: #fff;
      border-color: #5085a5;
      background: #5085a5;
      box-shadow: 0 0 0 #5085a5;
    }

    .btn-label {
      display: inline-block;
      position: relative;
      padding-right: 0;
      transition: padding-right 0.5s;
      color: #5085a5;
      font-family: "Geared Slab", sans-serif;
      font-weight: 300;
    }
    .btn-label:after {
      content: "";
      position: absolute;
      right: -50px;
      opacity: 0;
      top: 22%;
      width: 10px;
      height: 10px;
      margin-right: -10px;
      background: rgba(0, 0, 0, 0);
      border: 3px solid #fff;
      border-top: none;
      border-right: none;
      transition: opacity 0.5s, top 0.5s, right 0.5s;
      transform: rotate(225deg);
    }

    .btn:hover .btn-label,
    .btn:active .btn-label {
      padding-right: 30px;
      color: #f5f1e7;
    }

    .btn:hover .btn-label:after,
    .btn:active .btn-label:after {
      transition: opacity 0.5s, top 0.5s, right 0.5s;
      opacity: 1;
      right: 10px;
      top: 22%;
    }
  }
}
</style>
