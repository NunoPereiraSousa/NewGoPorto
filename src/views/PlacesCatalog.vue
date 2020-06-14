<template>
  <div class="placesCatalog">
    <div class="container section1">
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>Places</span>
            <span>Catalog</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <ul class="list-unstyled list-inline d-flex justify-content-between">
            <li
              class="list-inline-item"
              v-for="category in myCategories"
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
        </div>
      </div>
    </div>
    <div class="container section2">
      <div class="row">
        <div
          class="col-lg-3 col-md-6 col-12"
          v-for="identity in identities"
          :key="identity.id_identity"
        >
          <div v-on:click="saveIdentity(identity.id_identity)">
            <CatalogCard :image="identity.image" :title="identity.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CatalogCard from "../components/CatalogCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "places-catalog",
  components: {
    CatalogCard
  },

  data: function() {
    return {
      identities: [],
      identity: {},
      selectedCategory: "Monuments",
      myCategories: []
    };
  },
  async created() {
    if (JSON.parse(localStorage.getItem("selectedCategory"))) {
      this.$store.commit("SET_MONUMENTS_SELECTED_CATEGORY", {
        category: JSON.parse(localStorage.getItem("selectedCategory"))
      });

      try {
        await this.$store.dispatch("allIdentities");
      } catch (err) {
        alert(err);
        return err;
      }

      this.selectedCategory = this.getIdentitiesSelectedCategory;
      this.identities = this.getIdentitiesByCategory(this.selectedCategory);
    } else {
      this.setIdentitiesByCategory();
    }

    this.myCategories = this.getCategories;
  },
  computed: {
    ...mapGetters({
      getIdentities: "getIdentities",
      getIdentity: "getIdentity",
      getIdentityByIds: "getIdentityByIds",
      getIdentitiesByCategory: "getIdentitiesByCategory",
      getIdentitiesSelectedCategory: "getIdentitiesSelectedCategory",
      getCategories: "getCategories"
    })
  },
  methods: {
    saveIdentity(id) {
      // TODO
      // alert(id);
      this.identity = this.getIdentityByIds(id);
      // alert(`name:${this.identity.name}`);
      this.$store.commit("SET_IDENTITY_SELECTED_ID", id);
      this.$router.push({
        name: "identity-info",
        params: { name: this.identity.name }
      });
    },
    setIdentitiesByCategory() {
      this.$store.commit("SET_MONUMENTS_SELECTED_CATEGORY", {
        category: this.selectedCategory
      });

      this.identities = this.getIdentitiesByCategory(this.selectedCategory);
    },
    setCategory(category) {
      this.selectedCategory = category;
      this.setIdentitiesByCategory();
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
  height: 0.6rem;
}

.section1 {
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
    .col-12 {
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
            height: 4px;
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
    }
  }
}

.section2 {
  .row {
    max-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
