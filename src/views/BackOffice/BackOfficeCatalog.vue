<template>
  <div>
    <vue-snotify></vue-snotify>
    <div class="container stats">
      <h3 class="pb-lg-3 pb-2 pt-lg-5 mx-auto text-center">Identities</h3>
      <div class="row text-center" style="padding: 5% 0 5% 0;">
        <div class="col-lg-6 col-md-12 col-sm-12 cards">
          <i
            style="font-size: 44px; color: #5085a5;"
            class="fa fa-user pt-xl-5"
          ></i>
          <h4 class="text-center pb-4 pt-5 mx-auto w-75">
            {{ getIdentities.length }} Places
          </h4>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 cards">
          <i
            style="font-size: 44px; color: #5085a5;"
            class="fa fa-user pt-xl-5"
          ></i>
          <h4 class="text-center pb-4 pt-5 mx-auto w-75">
            {{ getCategories.length }} Categories
          </h4>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container">
        <div class="row mb-lg-2" style="background-color: #f0f0f0">
          <div class="col-lg-4">
            <select
              class="form-control mx-auto mt-4 w-75 text-uppercase"
              v-model="filterCategories"
            >
              <option value="all">Choose Category</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.name"
                >{{ category.name }}</option
              >
            </select>
          </div>
          <div class="col-lg-4">
            <input
              type="text"
              class="form-control mx-auto mt-4 w-75"
              id="searchBar"
              placeholder="Search By Name"
              v-model="search"
            />
          </div>
          <div class="col-lg-4 mb-lg-5">
            <button
              type="button"
              class="btn btn-primary pl-lg-5 pr-lg-5 filters"
              @click="orderByName()"
            >
              Order By By A - Z
            </button>
          </div>
        </div>
        <div class="row mb-5 cardsRow mx-auto">
          <div
            class="col-4"
            v-for="identity in filterByCategory"
            :key="identity.id"
          >
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title text-center">{{ identity.name }}</h5>
                <p class="lead pt-3 pb-4 text-center font-italic">
                  {{ identity.category }}
                </p>
                <div
                  class="pt-2 d-flex justify-content-around"
                  style="border-top: 2px solid #fff"
                >
                  <button
                    type="button"
                    class="btn btn-primary btnIcons"
                    @click="editIdentity(identity.id)"
                    data-toggle="modal"
                    data-target="#editIdentityModal"
                  >
                    <i
                      class="fa fa-wrench"
                      style="font-size: 30px; color: rgba(32, 37, 43, 0.4);"
                    ></i>
                  </button>
                  <button
                    class="btn btn-primary icon-btn btnIcons"
                    @click="removeIdentity(identity.id)"
                  >
                    <i
                      class="fa fa-times"
                      style="font-size: 34px; color: rgba(32, 37, 43, 0.4);"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="pb-lg-5 pb-5">
              <button
                type="button"
                class="btn btn-primary w-75 border"
                id="addIdentity"
                data-toggle="modal"
                data-target="#addIdentityModal"
              >
                <span></span>
                Add Identity
              </button>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="pb-lg-5 pb-5">
              <button
                type="button"
                class="btn btn-primary w-75 border"
                id="addCategory"
                data-toggle="modal"
                data-target="#addCategoryModal"
              >
                <span></span>
                Add Category
              </button>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="pb-lg-5 pb-5">
              <button
                type="button"
                class="btn btn-primary w-75 border"
                id="removeCategory"
                data-toggle="modal"
                data-target="#removeCategoryModal"
              >
                <span></span>
                Remove Category
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Identity Modal -->
    <div
      class="modal fade"
      id="addIdentityModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="addIdentityModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h5 class="pb-4 pt-1 mx-auto d-inline-block">Add Identity</h5>
            <button
              type="button"
              class="close d-inline-block"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <form class="w-75 mx-auto" @submit.prevent="addIdentity()">
              <div class="form-group pb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  v-model="form.name"
                />
              </div>
              <div class="form-group pb-3">
                <select class="form-control" v-model="form.category">
                  <option value>Choose the identity category</option>
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.name"
                    >{{ category.name }}</option
                  >
                </select>
              </div>
              <div class="form-group pb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Information"
                  v-model="form.information"
                />
              </div>
              <div class="form-group pb-3">
                <input
                  type="url"
                  class="form-control"
                  placeholder="Image"
                  v-model="form.image"
                />
              </div>
              <div class="form-group pb-3">
                <input
                  type="url"
                  class="form-control"
                  placeholder="Webite"
                  v-model="form.webite_link"
                />
              </div>
              <div class="form-group pb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Kids Allowed?"
                  v-model="form.kids_allowed"
                />
              </div>

              <div class="form-group pb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="latitude"
                  v-model="form.lat"
                />
              </div>

              <div class="form-group pb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="longitude"
                  v-model="form.lng"
                />
              </div>
              <SubmitModalForm />
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Identity Modal -->

    <!-- Edit Identity Modal -->
    <div
      class="modal fade"
      id="editIdentityModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h5 class="pb-4 pt-1 mx-auto d-inline-block">Edit Identity</h5>
            <button
              type="button"
              class="close d-inline-block"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <form class="w-75 mx-auto" @submit.prevent="updateIdentity()">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  v-model="form.name"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Category"
                  v-model="form.category"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Information"
                  v-model="form.information"
                />
              </div>
              <div class="form-group">
                <input
                  type="url"
                  class="form-control"
                  placeholder="Image"
                  v-model="form.image"
                />
              </div>
              <div class="form-group">
                <input
                  type="url"
                  class="form-control"
                  placeholder="Main Webite"
                  v-model="form.webite_link"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Kids Allowed?"
                  v-model="form.kids_allowed"
                />
              </div>

              <div class="form-group pb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="latitude"
                  v-model="form.lat"
                />
              </div>

              <div class="form-group pb-3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="longitude"
                  v-model="form.lng"
                />
              </div>
              <SubmitModalForm />
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Edit Identity Modal -->

    <!-- Add Category Modal -->
    <div
      class="modal fade"
      id="addCategoryModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h5 class="pb-4 pt-1 mx-auto d-inline-block">Add Category</h5>
            <button
              type="button"
              class="close d-inline-block"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <form class="pb-4 w-75 mx-auto" @submit.prevent="addCategory()">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="New Category Name"
                  v-model="categoryForm.categoryName"
                />
              </div>
              <SubmitModalForm />
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Add Category Modal -->

    <!-- Remove Catgory modal -->

    <div
      class="modal fade"
      id="removeCategoryModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <h5 class="pb-4 pt-1 mx-auto d-inline-block">Remove Category</h5>
            <button
              type="button"
              class="close d-inline-block"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <form class="pb-4 w-75 mx-auto" @submit.prevent="removeCategory()">
              <div class="form-group">
                <select class="form-control" v-model="form.category">
                  <option value>Choose the identity category</option>
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.name"
                    >{{ category.name }}</option
                  >
                </select>
              </div>
              <SubmitModalForm />
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Remove Catgory modal -->
  </div>
</template>

<script>
import SubmitModalForm from "@/components/BackOffice/SubmitModalForm.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SubmitModalForm
  },
  data: function() {
    return {
      identities: [],
      categories: [],
      form: {
        name: "",
        information: "",
        category: "",
        image: "",
        webite_link: "",
        kids_allowed: "",
        editId: 0,
        rating: 0,
        lat: 0,
        lng: 0
      },
      categoryForm: {
        id: "",
        categoryName: ""
      },
      filterCategories: "all",
      search: "",
      identitiesController: ""
    };
  },
  created() {
    this.$store.commit("SET_IDENTITY", {
      identities: JSON.parse(localStorage.getItem("identities"))
    });

    this.identities = this.getIdentities;
    this.categories = this.getCategories;
  },
  computed: {
    ...mapGetters([
      "getIdentities",
      "getIdentitiesName",
      "getIdentityLastId",
      "getIdentityById",
      "getCategories",
      "getCategoryByName",
      "getCategoriesLastId"
    ]),
    filterByCategory() {
      return this.identities.filter(identity => {
        let filterCategory = true;
        let filterSearch = true;
        if (this.filterCategories !== "") {
          filterCategory =
            identity.category == this.filterCategories ||
            this.filterCategories === "all";
        }
        if (this.search !== "") {
          filterSearch = identity.name
            .toLowerCase()
            .includes(this.search.toLowerCase());
        }
        return filterCategory && filterSearch;
      });
    }
  },
  methods: {
    addIdentity() {
      if (!this.getIdentitiesName(this.form.name)) {
        this.form.id = this.getIdentityLastId;
        this.$store.commit("NEW_IDENTITY", {
          id: this.form.id,
          name: this.form.name,
          information: this.form.information,
          category: this.form.category,
          image: this.form.image,
          webite_link: this.form.webite_link,
          kids_allowed: this.form.kids_allowed,
          rating: this.rating,
          lat: this.lat,
          lng: this.lng
        });
        this.$snotify.success("Added successfully", "Done", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
        this.clearForm();
      } else {
        this.clearForm();
        this.$snotify.error("The identity was already added!", "Error", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      }
    },
    removeIdentity(id) {
      this.identities = this.identities.filter(identity => identity.id !== id);
      this.$store.commit("SET_IDENTITY", {
        identities: this.identities
      });
      this.$snotify.success("Removed successfully", "Done", {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    },
    function(id) {
      this.identities = this.identities.filter(identity => identity.id !== id);
      this.$store.commit("SET_IDENTITY", {
        identities: this.identities
      });
    },
    editIdentity(id) {
      const identity = this.identities.filter(
        identity => identity.id === id
      )[0];
      this.form.editId = identity.id;
      this.form.name = identity.name;
      this.form.information = identity.information;
      this.form.category = identity.category;
      this.form.image = identity.image;
      this.form.webite_link = identity.webite_link;
      this.form.kids_allowed = identity.kids_allowed;
      this.form.lat = identity.lat;
      this.form.lng = identity.lng;
    },
    updateIdentity() {
      this.identities[
        this.getIdentityById(this.form.editId)
      ].name = this.form.name;
      this.identities[
        this.getIdentityById(this.form.editId)
      ].information = this.form.information;
      this.identities[
        this.getIdentityById(this.form.editId)
      ].category = this.form.category;
      this.identities[
        this.getIdentityById(this.form.editId)
      ].image = this.form.image;
      this.identities[
        this.getIdentityById(this.form.editId)
      ].webite_link = this.form.webite_link;
      this.identities[
        this.getIdentityById(this.form.editId)
      ].kids_allowed = this.form.kids_allowed;

      this.identities[
        this.getIdentityById(this.form.editId)
      ].lat = this.form.lat;

      this.identities[
        this.getIdentityById(this.form.editId)
      ].lng = this.form.lng;

      this.$store.commit("SET_IDENTITY", {
        identities: this.identities
      });
      this.$snotify.success("Edited successfully", "Done", {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    },
    addCategory() {
      if (!this.getCategoryByName(this.categoryForm.categoryName)) {
        this.categoryForm.id = this.getCategoriesLastId;
        this.$store.commit("NEW_CATEGORY", {
          id: this.categoryForm.id,
          name: this.categoryForm.categoryName
        });
        this.clearCategoryForm();
      } else {
        this.clearCategoryForm();
        this.$snotify.error("Error", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      }

      // todo (ideia de ultima hora)
      // *Fazer com que as categorias adicionadas afectam areas na plataforma
    },

    removeCategory() {
      this.categories = this.getCategories;

      this.categories = this.categories.filter(
        category => category.name !== this.form.category
      );

      this.$store.commit("SET_CATEGORIES", {
        categories: this.categories
      });
      this.categories = this.getCategories;

      this.identitiesController = this.getIdentities;

      this.identitiesController = this.identitiesController.filter(
        identity => identity.category !== this.form.category
      );

      this.$store.commit("SET_IDENTITY", {
        identities: this.identitiesController
      });

      this.identities = this.getIdentities;

      // todo (ideia de ultima hora)
      //*eliminar nos itinerarios entidades que ja foram eliminadas durante o processo
    },
    compareCategory(a, b) {
      if (a.category.toLowerCase() < b.category.toLowerCase()) return -1;
      if (a.category.toLowerCase() > b.category.toLowerCase()) return 1;
      else return 0;
    },
    orderByCategory() {
      this.identities.sort(this.compareCategory);
    },
    compareName(a, b) {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      else return 0;
    },
    orderByName() {
      this.identities.sort(this.compareName);
    },
    clearForm() {
      this.form.name = "";
      this.form.information = "";
      this.form.category = "";
      this.form.image = "";
      this.form.webite_link = "";
      this.form.kids_allowed = "";
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

.container.stats {
  padding-bottom: 3%;
  h3 {
    font-family: "Geared Slab";
    color: #5085a5;
    font-size: 2rem;
    border-bottom: 2px solid #f0f0f0;
    width: 20%;
  }
  .col-lg-6.cards {
    box-shadow: none;
    border-radius: 15px;
    transition: box-shadow 0.5s ease-in-out;

    &:hover {
      box-shadow: 0 10px 50px -2px rgba(32, 37, 43, 0.2);
      border-radius: 15px;
    }
    p {
      font-weight: 300;
      font-family: "Muli";
      color: #20252b;
    }
  }
}

.container-fluid {
  padding-top: 3%;
  background-color: #f0f0f0;
  width: 100vw;

  .form-control {
    border: 0;
    border-bottom: 1.5px solid #5085a5;
    box-shadow: none !important;
    color: #5085a5;
    background: transparent;
    font-family: "Geared Slab";
    font-size: 1.4em;
    select {
      color: #20252b;
      option {
        background: #f0f0f0 !important;
        color: #5085a5;
        text-transform: capitalize;
      }
    }
    input:focus {
      border: 1px solid #5085a5 !important;
    }
  }
  #searchBar {
    border-bottom: 1px solid #20252b;
  }
  .filters {
    background-color: transparent !important;
    border: none;
    margin: 10px;
    padding: 20px;
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
      left: 0;
      bottom: 15%;
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
        left: 0;
      }
    }
  }
  .cardsRow {
    max-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    .card {
      margin-top: 3%;
      border-radius: 5px;
      background-color: transparent;
      padding-top: 5%;
      border: 2.5px solid #fff;
      p.lead {
        font-weight: 300;
        font-family: "Muli";
        font-size: 1em;
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
      }

      button.btnIcons:hover {
        background-color: transparent;
        border: none;
        transform: scale(1.05);
        transform: rotate(25deg);
      }

      button.btnIcons:active {
        background-color: transparent !important;
        border: none !important;
        border-color: transparent;
        box-shadow: none !important;
      }

      button.btnIcons:focus {
        background-color: transparent;
        border: none;
        box-shadow: none !important;
      }
    }
  }

  .fa-lock:hover {
    color: #ffc20f;
  }
  #addIdentity,
  #removeCategory,
  #addCategory {
    margin-top: 3%;
    cursor: pointer;
    position: relative;
    border: 2px solid #5085a5;
    outline: none;
    color: #5085a5;
    background-color: transparent !important;
    font-family: "Geared Slab";
    font-size: 1.7em;
    letter-spacing: 1px;
    white-space: nowrap;
    &.border {
      &::after,
      &::before,
      span::after,
      span::before {
        content: "";
        position: absolute;
        background-color: #fff;
        transition: 0.5s ease;
      }
      &::after,
      &::before {
        height: 100%;
        width: 2px;
        top: -2px;
      }
      &::after {
        left: -2px;
      }
      &::before {
        right: -2px;
      }
      span::after,
      span::before {
        height: 2px;
        width: 100%;
        left: -2px;
      }
      span::after {
        top: -2px;
      }
      span::before {
        bottom: -2px;
      }
      &:hover:after {
        transform: translatex(-12px);
      }
      &:hover:before {
        transform: translatex(12px);
      }
      &:hover span::after {
        transform: translatey(-12px);
      }
      &:hover span::before {
        transform: translatey(12px);
      }
    }
  }
}

.modal-content {
  background-color: #ebecec;
  border-radius: 4px;
  h5 {
    font-family: "Geared Slab";
    font-size: 1.6em;
    color: #20252b;
  }
  form {
    max-height: 50vh;
    overflow-y: scroll;
    border: none;
    border-radius: 4px;
    color: #363636;
    box-shadow: none !important;
    padding-right: 1em;
    .form-group {
      padding-top: 0.5rem;
    }

    input {
      &:focus {
        border: 1px solid #5085a5 !important;
        font-family: "Muli";
        box-shadow: none !important;
      }
    }
  }
}

h3 {
  font-family: "Geared Slab";
  color: #5085a5;
  font-size: 2rem;
  letter-spacing: 0.8px;
}

img {
  width: 6%;
  height: auto;
}
</style>
