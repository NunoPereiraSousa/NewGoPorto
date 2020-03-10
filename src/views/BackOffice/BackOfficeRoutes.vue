<template>
  <div>
    <div class="container">
      <h2 class="pb-lg-3 pb-2 pt-lg-5 mx-auto text-center">Itineraries</h2>
      <div class="row text-center" style="padding: 5% 0 5% 0;">
        <div class="col-lg-4 col-md-12 col-sm-12 cards">
          <i
            style="font-size: 44px; color: #5085a5;"
            class="fa fa-map-marked-alt pt-xl-5"
          ></i>
          <h4 class="text-center pb-4 pt-5 mx-auto w-75">
            {{ getItineraries.length }} Total Itineraries
          </h4>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 cards">
          <i
            style="font-size: 44px; color: #5085a5;"
            class="fas fa-thumbs-up pt-xl-5"
          ></i>
          <h4 class="text-center pb-4 pt-5 mx-auto w-75">
            {{ getItinerariesVotes }} Total Follows
          </h4>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 cards">
          <i
            style="font-size: 44px; color: #5085a5;"
            class="fas fa-users pt-xl-5"
          ></i>
          <h4 class="text-center pb-4 pt-5 mx-auto w-75">
            {{ getItinerariesNPeople }} Total Persons
          </h4>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container">
        <div class="row mb-lg-5">
          <div class="col-lg-6 col-12 pt-lg-5">
            <input
              type="text"
              class="form-control w-50"
              id="searchBar"
              placeholder="Search By Username"
              v-model="search"
            />
          </div>
        </div>
        <div class="row pt-1 cardsRow mx-auto">
          <div
            class="col-4"
            v-for="itinerary in filterItineraries"
            :key="itinerary.id"
          >
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title text-center text-nowrap">
                  {{ itinerary.title }}
                </h5>
                <p class="lead pt-3 pl-4 text-left">
                  <span class="font-weight-bold">User: </span>
                  {{ itinerary.userName }}
                </p>
                <p class="lead pt-3 pl-4 text-left">
                  <span class="font-weight-bold">Follows: </span>
                  {{ itinerary.fallowedCount }}
                </p>
                <div
                  class="pt-3 pl-4 d-flex justify-content-start"
                  style="border-top: 2px solid #fff"
                >
                  <button
                    class="btn btn-primary icon-btn btnIcons"
                    @click="removeItinerary(itinerary.id)"
                  >
                    <i
                      class="fa fa-times"
                      style="font-size: 34px; color: rgba(227, 170, 2, .5);"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
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
      itineraries: [],
      search: ""
    };
  },
  created() {
    this.$store.commit("SET_ITINERARIES", {
      itineraries: JSON.parse(localStorage.getItem("itineraries"))
    });
    this.itineraries = this.getItineraries;
  },
  methods: {
    removeItinerary(id) {
      if (confirm(`Wanna remove?`)) {
        this.itineraries = this.itineraries.filter(
          itinerary => itinerary.id !== id
        );
        this.$store.commit("SET_ITINERARIES", {
          itineraries: this.itineraries
        });
      }
    },
    compareFollows(a, b) {
      if (a.fallowedCount < b.fallowedCount) return 1;
      if (a.fallowedCount > b.fallowedCount) return -1;
      else return 0;
    },
    orderByFollows() {
      this.itineraries.sort(this.compareFollows);
    }
  },
  computed: {
    ...mapGetters([
      "getItineraries",
      "getItinerariesVotes",
      "getItinerariesNPeople"
    ]),
    filterItineraries() {
      this.orderByFollows();
      if (!this.search) {
        return this.itineraries;
      } else {
        return this.itineraries.filter(itinerary =>
          itinerary.userName.toLowerCase().includes(this.search.toLowerCase())
        );
      }
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
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary:active:focus:not(:disabled):not(.disabled),
.btn:focus,
.btn:active,
.btn:hover {
  box-shadow: none !important;
  outline: 0;
  border: none !important;
}
.container:first-child {
  h2 {
    color: #5085a5;
    font-family: "Geared Slab";
    letter-spacing: 0.8px;
    border-bottom: 1px solid rgba(32, 37, 43, 0.2);
    width: 20%;
  }
  .col-lg-4.cards {
    box-shadow: none;
    border-radius: 15px;
    transition: box-shadow 0.5s ease-in-out;

    &:hover {
      box-shadow: 0 10px 50px -2px rgba(32, 37, 43, 0.2);
      border-radius: 15px;
    }
  }
}

p.lead {
  font-size: 1em;
  font-weight: 300;
  font-family: "Muli";
  color: #20252b;
}
.container-fluid {
  padding-top: 3%;
  background-color: #f0f0f0;
  width: 100vw;
  height: 120vh;
  .form-control {
    border: 0;
    box-shadow: none !important;
    color: #5085a5;
    background: transparent;
    font-family: "Geared Slab";
    font-size: 1.4em;
  }
  #searchBar {
    border-bottom: 1px solid #5085a5;
  }
  .filters {
    background-color: transparent !important;
    border: none;
    flex: 1 1 auto;
    margin: 10px;
    padding: 10px;
    text-align: center;
    border-radius: 1px;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    transition: 0.3s;
    color: #5085a5;
    font-weight: 500;
    font-family: "Geared Slab";
    font-size: 1.4em;
    &:after {
      position: absolute;
      transition: 0.3s;
      content: "";
      width: 0;
      left: 11%;
      bottom: 0;
      border-radius: 1px;
      width: 30%;
      height: 2px;
      background: #20252b;
      opacity: 0.5;
    }
    &:hover {
      cursor: pointer;
      border-radius: 1px;
      &:after {
        width: 60%;
        border-radius: 1px;
        left: 11%;
      }
    }
  }
  .col-4:first-child {
    padding-bottom: 0;
  }
  .col-4 {
    padding-bottom: 1em;
  }
  .cardsRow {
    max-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 5%;
    .card {
      border-radius: 5px;
      background-color: transparent;
      padding-top: 5%;
      border: 2.5px solid #fff;
      span {
        font-weight: 400;
        color: #20252b;
      }
      h5 {
        color: #5085a5;
      }
      button.btnIcons {
        padding-left: 0;
        padding-right: 0;
        background-color: transparent;
        border: none;
        transition: transform 1s ease;
        &:hover {
          background-color: transparent;
          border: none;
          transform: scale(1.05);
          transform: rotate(25deg);
        }
        &:active {
          background-color: transparent !important;
          border: none !important;
          border-color: transparent;
          box-shadow: none !important;
        }

        &:focus {
          background-color: transparent;
          border: none;
          box-shadow: none !important;
        }
      }
    }
  }
}
</style>
