<template>
  <div class="itineariesCatalog">
    <div class="container">
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>Itineraries </span>
            <span>Catalog</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-12 mt-3 p-0"
          v-for="itinerary in filterByFollows"
          :key="itinerary.id"
        >
          <ItineraryCard :id="itinerary.id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItineraryCard from "@/components/ItineraryCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "itineariesCatalog",
  components: { ItineraryCard },

  data: function() {
    return {
      itineraries: [],
      list: ""
    };
  },
  created() {
    this.$store.commit("SET_ITINERARIES", {
      itineraries: JSON.parse(localStorage.getItem("itineraries"))
    });
    this.itineraries = this.getItineraries;
  },
  computed: {
    ...mapGetters(["getItineraries"]),
    filterByFollows() {
      this.orderByFollows();
      return this.itineraries;
    }
  },
  methods: {
    compareFollows(a, b) {
      if (a.fallowedCount < b.fallowedCount) return 1;
      if (a.fallowedCount > b.fallowedCount) return -1;
      else return 0;
    },
    orderByFollows() {
      this.itineraries.sort(this.compareFollows);
    }
  }
};
</script>

<style lang="scss" scoped>
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
  background-color: rgba(151, 151, 151, 0.4);
  border-radius: 10px;
}
.container {
  .row:first-child {
    .col-12 {
      h2 {
        margin: 2em 0 2em 0;
        font-family: "Geared Slab";
        font-size: 1.6em;
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
          font-weight: 400;
          color: #5085a5;
        }
        span:nth-child(2) {
          font-weight: 200;
        }
      }
    }
  }
  .row {
    max-height: 70vh;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
