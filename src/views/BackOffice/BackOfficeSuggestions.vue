<template>
  <div>
    <div class="container">
      <h3 class="pb-lg-3 pb-2 pt-lg-5 mx-auto text-center">Suggestions</h3>
      <div class="row text-center" style="padding: 5% 0 5% 0;">
        <div class="col-lg-4 col-md-12 col-sm-12 cards">
          <i
            style="font-size: 44px; color: #5085a5;"
            class="fas fa-lightbulb pt-xl-5"
          ></i>
          <h4 class="text-center pb-4 pt-5 mx-auto w-75">
            {{ getSuggestions.length }} Total Suggestions
          </h4>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 cards">
          <i
            style="font-size: 44px; color: #5085a5;"
            class="fa fa-check pt-xl-5"
          ></i>
          <h4 class="text-center pb-4 pt-5 mx-auto w-75">
            {{ getSuggestionsByStatusName("accepted").length }} Accepted
          </h4>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 cards">
          <i
            style="font-size: 44px; color: #5085a5;"
            class="fa fa-times pt-xl-5"
          ></i>
          <h4 class="text-center pb-4 pt-5 mx-auto w-75">
            {{ getSuggestionsByStatusName("not-accepted").length }} Not Accepted
          </h4>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="container">
        <div class="row mb-lg-5">
          <div
            class="col-lg-6 pb-lg-4 pb-3 pt-lg-5 d-flex justify-content-start"
          >
            <button
              type="button"
              class="btn btn-primary pl-lg-5 pr-lg-5 filters"
              @click="orderByCategory()"
            >
              Order By Category
            </button>
            <button
              type="button"
              class="btn btn-primary pl-lg-5 pr-lg-5 filters"
              @click="orderByName()"
            >
              Order By Name
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 tableCol d-flex justify-content-center">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Username</th>
                  <th scope="col">Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Content</th>
                  <th scope="col">Status</th>
                  <th scope="col">Accept</th>
                  <th scope="col">Reject</th>
                </tr>
              </thead>
              <tbody
                v-for="suggestion in filterByStatus"
                :key="suggestion.id_suggestion"
              >
                <tr v-if="suggestion.status === 'pendant'">
                  <td>{{ suggestion.id_suggestion }}</td>
                  <td>{{ suggestion.username }}</td>
                  <td id="name">
                    {{
                      suggestion.new_identity.charAt(0).toUpperCase() +
                        suggestion.new_identity.slice(1)
                    }}
                  </td>
                  <td>
                    {{
                      suggestion.category_name.charAt(0).toUpperCase() +
                        suggestion.category_name.slice(1)
                    }}
                  </td>
                  <td>
                    <div id="content" v-if="suggestion.content !== ''">
                      {{
                        suggestion.content.charAt(0).toUpperCase() +
                          suggestion.content.slice(1)
                      }}
                    </div>
                    <div v-else>-----</div>
                  </td>
                  <td>
                    {{
                      suggestion.status.charAt(0).toUpperCase() +
                        suggestion.status.slice(1)
                    }}
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary table text-center"
                      @click="
                        acceptSuggestion(
                          suggestion.id_suggestion,
                          suggestion.id_user
                        )
                      "
                    >
                      <i
                        class="fas fa-check"
                        style="font-size: 30px; color: #32CD32	;"
                      ></i>
                    </button>
                  </td>
                  <td>
                    <button
                      class="btn btn-primary table text-center"
                      @click="
                        refuseSuggestion(
                          suggestion.id_suggestion,
                          suggestion.id_user
                        )
                      "
                    >
                      <i
                        class="fa fa-times"
                        style="font-size: 34px; color: #ffbf00;"
                      ></i>
                    </button>
                  </td>
                </tr>
                <tr v-else>
                  <td>{{ suggestion.id_suggestion }}</td>
                  <td>{{ suggestion.username }}</td>
                  <td>
                    {{
                      suggestion.new_identity.charAt(0).toUpperCase() +
                        suggestion.new_identity.slice(1)
                    }}
                  </td>
                  <td>
                    {{
                      suggestion.category_name.charAt(0).toUpperCase() +
                        suggestion.category_name.slice(1)
                    }}
                  </td>
                  <td>
                    <div v-if="suggestion.content !== ''">
                      {{
                        suggestion.content.charAt(0).toUpperCase() +
                          suggestion.content.slice(1)
                      }}
                    </div>
                    <div class="text-center" v-else>-----</div>
                  </td>
                  <td>
                    {{
                      suggestion.status.charAt(0).toUpperCase() +
                        suggestion.status.slice(1)
                    }}
                  </td>
                  <td class="text-center">
                    <i
                      class="fas fa-check"
                      style="font-size: 30px; color: rgba(32, 37, 43, 0.4);"
                    ></i>
                  </td>
                  <td class="text-center">
                    <i
                      class="fa fa-times"
                      style="font-size: 34px; color: rgba(32, 37, 43, 0.4);"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data: function() {
    return {
      suggestions: [],
      notifications: [],
      loggedUser: "",
      filterCategory: ""
    };
  },
  async created() {
    try {
      await this.$store.dispatch("getAllSuggestions");
      this.suggestions = this.getSuggestions;
    } catch (err) {
      this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
      return err;
    }

    if (JSON.parse(localStorage.getItem("error"))) {
      if (JSON.parse(localStorage.getItem("error")) == 500) {
        this.$router.push({ name: "errorPage" }); // *CHANGES THE LOCATION
      }
    }
  },
  computed: {
    ...mapGetters([
      "getSuggestionsByStatusName",
      "getSuggestions",
      "getSuggestionIndexById",
      "getSuggestionByIds"
    ]),
    filterByStatus() {
      this.orderByStatus();
      return this.suggestions;
    }
  },
  methods: {
    async acceptSuggestion(id_suggestion, id_user) {
      this.$store.commit("SET_NOTIFICATION_DATA", {
        id_notif: null,
        id_user: id_user,
        id_suggestion: id_suggestion,
        answer: "Suggestion accepted!",
        id_status: "1"
      });
      try {
        await this.$store.dispatch("updateSuggestion");
      } catch (err) {
        this.$notify({
          group: "foo",
          type: "error",
          title: "Oops",
          text: `${err}`,
          duration: 5000
        });
        return err;
      }
      try {
        await this.$store.dispatch("addNewNotification");
      } catch (err) {
        this.$notify({
          group: "foo",
          type: "error",
          title: "Oops",
          text: `${err}`,
          duration: 5000
        });
        return err;
      }
      try {
        await this.$store.dispatch("getAllSuggestions");
        this.suggestions = this.getSuggestions;
      } catch (err) {
        this.$notify({
          group: "foo",
          type: "error",
          title: "Oops",
          text: `${err}`,
          duration: 5000
        });
        return err;
      }
      this.$notify({
        group: "foo",
        type: "success",
        title: "Suggestion <b> Accepted </b>",
        text: "The suggstion list was updated successfully!",
        duration: 5000
      });
    },
    async refuseSuggestion(id_suggestion, id_user) {
      this.$store.commit("SET_NOTIFICATION_DATA", {
        id_notif: null,
        id_user: id_user,
        id_suggestion: id_suggestion,
        answer: "Suggestion regected!",
        id_status: "2"
      });
      try {
        await this.$store.dispatch("updateSuggestion");
      } catch (err) {
        this.$notify({
          group: "foo",
          type: "error",
          title: "Oops",
          text: `${err}`,
          duration: 5000
        });
        return err;
      }
      try {
        await this.$store.dispatch("addNewNotification");
      } catch (err) {
        this.$notify({
          group: "foo",
          type: "error",
          title: "Oops",
          text: `${err}`,
          duration: 5000
        });
        return err;
      }
      try {
        await this.$store.dispatch("getAllSuggestions");
        this.suggestions = this.getSuggestions;
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

      this.$notify({
        group: "foo",
        type: "success",
        title: "Suggestion <b> Not Accepted </b>",
        text: "The suggstion list was updated successfully!",
        duration: 5000
      });
    },
    compareCategory(a, b) {
      if (a.category_name < b.category_name) return -1;
      if (a.category_name > b.category_name) return 1;
      else return 0;
    },
    orderByCategory() {
      this.suggestions.sort(this.compareCategory);
    },
    compareName(a, b) {
      if (a.new_identity.toLowerCase() < b.new_identity.toLowerCase())
        return -1;
      if (a.new_identity.toLowerCase() > b.new_identity.toLowerCase()) return 1;
      else return 0;
    },
    orderByName() {
      this.suggestions.sort(this.compareName);
    },
    compareStatus(a, b) {
      if (a.status < b.status) return 1;
      if (a.status > b.status) return -1;
      else return 0;
    },
    orderByStatus() {
      this.suggestions.sort(this.compareStatus);
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
.btn.table,
.btn-primary.table:hover,
.btn-primary.table:focus,
.btn-primary.table:active,
.btn-primary.table:active:focus:not(:disabled):not(.disabled),
.btn.table:focus,
.btn.table:active,
.btn.table:hover {
  box-shadow: none !important;
  outline: 0;
  border: none;
  background-color: transparent !important;
}

.container:first-child {
  padding-bottom: 3%;
  .col-lg-4.cards {
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
  .filters {
    background-color: transparent !important;
    border: none;
    flex: 1 1 auto;
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
        width: 80%;
        border-radius: 1px;
        left: 0;
      }
    }
  }
}

h3 {
  font-family: "Geared Slab";
  color: #5085a5;
  border-bottom: 1px solid rgba(32, 37, 43, 0.2);
  width: 20%;
  font-size: 2em;
  letter-spacing: 0.8px;
}

.tableCol {
  max-height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

table.table-bordered > thead > tr > th,
table.table-bordered > tbody > tr > td {
  border: 3px solid #ffffff;
}

#content {
  max-height: 10vh;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}

button.filters {
  margin-left: 3.5rem;
  background-color: #5085a5;
  opacity: 0.8;
  border: none;
  font-family: "Geared Slab";
  color: #ffffff;
  font-size: 1.3rem;
}

button.filters:hover {
  background-color: #e9d496;
  border: none;
}

button.filters:active {
  background-color: #e9d496 !important;
  border: none !important;
  border-color: transparent;
  box-shadow: none !important;
}

button.filters:focus {
  background-color: #e9d496;
  border: none;
  box-shadow: none !important;
}
</style>
