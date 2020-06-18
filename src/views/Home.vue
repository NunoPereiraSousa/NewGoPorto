<template>
  <div class="home">
    <div class="container-fluid section1 p-0" id="home">
      <div class="container d-flex justify-content-center">
        <div class="row">
          <div
            class="col-12 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <h2 class="mb-3">Looking for something to do in Porto?</h2>
            <p class="lead">
              Explore this lovely city full of enerny, passion and beauty
            </p>
            <hr />
            <router-link
              :to="{ name: 'create-trip' }"
              class="btn btn-primary mt-3"
            >
              <i class="fas fa-chevron-right pr-4" style="font-size: 0.8em;"></i
              >Plan Now
              <i class="fas fa-chevron-left pl-4" style="font-size: 0.8em;"></i>
            </router-link>
          </div>
        </div>
        <div class="position-absolute">
          <a href="#categories">
            <i
              class="fas fa-chevron-down"
              style="font-size: 2em; color: #fefefa"
            ></i>
          </a>
        </div>
        <a href="#home" id="arrowUp">
          <i
            class="fas fa-chevron-circle-up d-none d-xl-block"
            style="font-size: 2.2em; color: #5085a5"
          ></i>
        </a>
      </div>
    </div>
    <div class="container section2" id="categories">
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>Know More About</span>
            <span>Porto</span>
          </h2>
        </div>
      </div>
      <div class="row cards">
        <div
          class="col-lg-3 col-md-6 col-12 mt-lg-2 mt-4"
          v-for="category in myCategories"
          :key="category.id_category"
        >
          <div @click="setCatalogCategory(category.category_name)">
            <CategoryCard
              :image="category.photo"
              :title="category.category_name"
              class="text-center"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid parallax"></div>
    <div class="container section3">
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>Most Followed</span>
            <span>Itineraries</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-lg-3 d-flex justify-content-center"
          v-for="itinerary in famouseItinerary"
          :key="itinerary.id"
        >
          <div id="drop" aria-multiselectable="true">
            <ItineraryCard :id="itinerary.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryCard from "../components/CategoryCard.vue";
import ItineraryCard from "@/components/ItineraryCard.vue";
import $ from "jquery";
import { mapGetters } from "vuex";

export default {
  name: "home",
  components: {
    CategoryCard,
    ItineraryCard
  },
  data: function() {
    return {
      constructure: "",
      itinerary: "",
      itineraies: "",
      itineraries: [],
      famouseItinerary: [],
      myList: "",
      myCategories: []
    };
  },
  computed: {
    ...mapGetters({
      getItineraryById: "getItineraryById",
      getItineraries: "getItineraries",
      getCategories: "getCategories"
    })
  },
  async created() {
    try {
      await this.$store.dispatch("allCategories");
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

    this.$store.commit("SET_ITINERARIES", {
      itineraries: JSON.parse(localStorage.getItem("itineraries"))
    });
    let max = 4;
    this.$store.commit("SET_IN_LOG_IN_AND_REG", { bool: false });
    this.user = this.getLoggedUser;
    this.itineraries = this.getItineraries;
    this.itineraies = this.getItineraries;

    this.itineraies.sort(this.orderByFollowers);

    if (this.itineraies.length < max) {
      max = this.itineraies.length;
    }

    if (this.itineraies.length > 0) {
      for (let i = 0; i < max; i++) {
        this.famouseItinerary.push(this.itineraies[i]);
      }
    }

    this.myCategories = this.getCategories;
  },
  methods: {
    setCatalogCategory(selectedCategory) {
      this.$store.commit("SET_MONUMENTS_SELECTED_CATEGORY", {
        category: selectedCategory
      });
      this.goToCatalog();
    },
    goToCatalog() {
      this.$router.push({
        name: "places-catalog"
      });
    },
    orderByFollowers(a, b) {
      if (a.fallowedCount > b.fallowedCount) return -1;
      if (a.fallowedCount < b.fallowedCount) return 1;
      else return 0;
    }
  },
  mounted() {
    $(document).scroll(function() {
      var y = $(this).scrollTop();
      if (y > 500) {
        $("#arrowUp").fadeIn();
      } else {
        $("#arrowUp").fadeOut();
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.section1 {
  position: relative;
  background-image: url("../assets/Porto.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 105vh;
  .container {
    width: 100%;
    height: 115vh;
    .row {
      position: absolute;
      top: 8%;
    }
    .col-12 {
      h2 {
        font-family: "Geared Slab";
        font-size: 1.8em;
        color: #fefefa;
      }
      p.lead {
        font-family: "Muli";
        font-size: 1.1em;
        color: #fff;
        font-weight: 400;
      }
      hr {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #fefefa;
        width: 30%;
      }
      .btn {
        position: relative;
        display: inline-block;
        cursor: pointer;
        outline: none;
        border: 0;
        text-decoration: none;
        border-radius: 15px;
        font-size: 1.3em;
        letter-spacing: 0.02em;
        font-family: "Geared Slab";
        &.btn {
          transition: all 0.5s cubic-bezier(0.65, -0.25, 0.25, 1.95);
          color: #fefefa;
          padding: 0.15rem 2rem;
          background: rgba(54, 54, 54, 0.95);
          text-transform: uppercase;
          &:hover,
          &:focus,
          &:active {
            letter-spacing: 0.05em;
          }
        }
      }
    }
    .position-absolute {
      bottom: 20%;
      i.fa-chevron-down {
        animation: upDown 1s infinite alternate ease-in-out;
      }
    }
    #arrowUp {
      display: none;
      position: fixed;
      bottom: 12%;
      left: 93%;
      z-index: 999;
      &:hover {
        text-decoration: none;
      }
    }
  }
}

.section2 {
  .row:first-child {
    .col-12 {
      h2 {
        margin: 3em 0;
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
  .row.cards {
    margin-bottom: 6em;
  }
}

.section3 {
  .row:first-child {
    .col-12 {
      h2 {
        margin: 3em 0;
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
  #drop {
    margin-bottom: 4em;
  }
}

.parallax {
  background-image: url("../assets/porto2.jpg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100vw;
  height: 60vh;
}

@keyframes upDown {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(10px);
  }
}
</style>
