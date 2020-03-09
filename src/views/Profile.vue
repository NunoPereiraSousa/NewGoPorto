<template>
  <div class="profile">
    <div class="container" id="mainArea">
      <div class="row" id="pictureRow">
        <div class="col-lg-6 col-12">
          <img :src="editForm.image" class="img-fluid" alt="ProfilePicture" />
          <form @submit.prevent="editProfile()" class="pt-3">
            <!-- <div class="form-group">
              <img
                :src="editForm.image"
                id="picture"
                alt="Image"
                class="img-fluid"
                data-toggle="modal"
                data-target="#profilePicChange"
              />
            </div>-->
            <div class="form-row">
              <div class="form-group col-lg-12">
                <i class="fas fa-user pr-2 d-inline-block"></i>
                <input
                  type="text"
                  class="form-control d-inline-block"
                  placeholder="Name"
                  v-model="editForm.name"
                />
              </div>
              <div class="form-group col-lg-12">
                <i class="fas fa-map-marker-alt pr-2 d-inline-block"></i>
                <input
                  type="text"
                  class="form-control d-inline-block"
                  placeholder="Location"
                  v-model="editForm.location"
                />
              </div>
              <div class="form-group col-lg-12">
                <i class="fas fa-calendar-alt pr-1 d-inline-block"></i>
                <input
                  type="text"
                  class="form-control d-inline-block"
                  placeholder="Date of Birth"
                  onfocus="(this.type='date')"
                  v-model="editForm.birth"
                />
              </div>
              <div class="form-group col-lg-12">
                <i
                  class="fas fa-envelope d-inline-block"
                  style="padding-right: 1px;"
                ></i>
                <input
                  type="text"
                  class="form-control d-inline-block"
                  placeholder="Email"
                  v-model="editForm.email"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-6 col-12">
          <form @submit.prevent="addPublication()">
            <div class="form-group">
              <textarea
                v-model="newPublication"
                class="form-control mx-auto"
                rows="4"
                placeholder="What are you thinking of?"
              ></textarea>
            </div>

            <button type="submit">Publicate</button>
          </form>
          <div
            id="stories"
            v-for="publication in myPublications"
            :key="publication.id"
          >
            <div>
              <img :src="editForm.image" class="d-inline-block" alt="person" />
              <p class="d-inline-block pl-3">{{ publication.username }}</p>
              <p style="font-size: 14px">{{ publication.date }}</p>
              <p
                class="lead text-left"
                style="color: #363636; font-family: 'Muli'; font-weight: 300;"
              >
                {{ publication.content }}
              </p>

              <button @click="deletePublication(publication.id)">delete</button>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" id="suggestion">
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>Suggest &</span>
            <span>Places</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 col-12">
          <p class="text-left pb-4" style="font-family: 'Muli'; color: #363636">
            If you would like to suggest any place (ex: monument, beach, street,
            ...) that you would like see in this platform make sure you contact
            our team, ou press the button down bellow. Best regards, GoPorto
            Team.
          </p>

          <button
            class="btn btn-primary w-25"
            data-toggle="modal"
            data-target="#suggestionModal"
          >
            Suggest
          </button>
        </div>
      </div>
    </div>
    <!-- Suggest Modal -->
    <div
      class="modal fade"
      id="suggestionModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h5 class="modal-title" id="modelTitle">
              Send your suggestion here!
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addSuggestion()">
              <div class="form-group">
                <select
                  class="form-control"
                  id="exampleFormControlSelect1"
                  v-model="form.category"
                >
                  <option value>Choose the Category</option>
                  <option value="beach">Beach</option>
                  <option value="bridge">Bridge</option>
                  <option value="sports">Sports</option>
                  <option value="gastronomy">Gastronomy</option>
                  <option value="monuments">Monuments</option>
                  <option value="rivers">Rivers</option>
                  <option value="streets">Streets</option>
                  <option value="wine">Wine</option>
                </select>
              </div>
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
                  type="url"
                  class="form-control"
                  placeholder="Photo"
                  v-model="form.photo"
                />
              </div>
              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Information"
                  rows="5"
                  v-model="form.content"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-75 submitForm">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Suggest Modal -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      user: [],
      loggedUser: "",
      suggestions: [],
      users: [],
      form: {
        id: "",
        name: "",
        category: "",
        photo: "",
        content: ""
      },

      newPublication: "",
      myPublications: [],
      allPublications: [], //only usesd if needed

      editForm: {
        id: "",
        name: "",
        email: "",
        image: ""
      }
    };
  },
  created() {
    this.loggedUser = this.getLoggedUser;
    this.user = this.getUserById(this.loggedUser);
    this.users = this.getUsers;
    this.showUserData();
    this.$store.commit("SET_SUGGESTION", {
      suggestions: JSON.parse(localStorage.getItem("suggestions"))
    });

    if (JSON.parse(localStorage.getItem("loggedUser"))) {
      this.$store.commit(
        "SET_LOGGED_USER",
        JSON.parse(localStorage.getItem("loggedUser"))
      );
    }

    if (JSON.parse(localStorage.getItem("publications"))) {
      this.$store.commit("SET_PUBLICATIONS", {
        publications: JSON.parse(localStorage.getItem("publications"))
      });

      this.myPublications = this.getPublicationByUser(this.loggedUser.id);
    }
  },
  computed: {
    ...mapGetters({
      getUserById: "getUserById",
      getSuggestionsLastId: "getSuggestionsLastId",
      getSuggestionByName: "getSuggestionByName",
      getUsers: "getUsers",
      getLoggedUser: "getLoggedUser",

      // todo
      getPublicationsLastId: "getPublicationsLastId",
      getPublications: "getPublications",
      getPublicationByUser: "getPublicationByUser"
    })
  },
  methods: {
    getCurrentDate() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0");
      let yyyy = today.getFullYear();

      today = dd + "/" + mm + "/" + yyyy;
      return today;
    },
    addSuggestion() {
      if (!this.getSuggestionByName(this.form.name)) {
        this.form.id = this.getSuggestionsLastId;
        this.$store.commit("NEW_SUGGESTION", {
          id: this.form.id,
          category: this.form.category,
          name: this.form.name,
          content: this.form.content,
          date: this.getCurrentDate(),
          photo: this.form.photo,
          status: "pendant",
          userId: this.loggedUser.id,
          username: this.loggedUser.username
        });
        this.$snotify.success("Suggestion successfully sent!", "Done", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      } else {
        this.$snotify.info(
          `Someone already suggested ${this.form.name}. But thank you for the support!`,
          "Oh...",
          {
            timeout: 2000,
            showProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true
          }
        );
      }
      this.clearForm();
    },
    showUserData() {
      this.editForm.name = this.loggedUser.name;
      this.editForm.email = this.loggedUser.email;
      this.editForm.birth = this.loggedUser.birth;
      this.editForm.image = this.loggedUser.photo;
      // alert(this.editForm.image); THIS ALERT RETURNS THE EXACTLY SRC OF THE USER IMAGE !!!!
    },
    editProfile() {
      this.editForm.id = this.loggedUser.id;
      this.loggedUser.name = this.editForm.name;
      this.loggedUser.age = this.editForm.birth;
      this.loggedUser.email = this.editForm.email;
      this.loggedUser.photo = this.editForm.image;

      this.users[this.loggedUser.id - 1].id = this.editForm.id;
      this.users[this.loggedUser.id - 1].name = this.editForm.name;
      this.users[this.loggedUser.id - 1].birth = this.editForm.birth;
      this.users[this.loggedUser.id - 1].email = this.editForm.email;
      this.users[this.loggedUser.id - 1].photo = this.editForm.image;

      this.$store.commit("SET_USERS", {
        users: this.users
      });

      this.$store.commit("SET_LOGGED_USER", this.loggedUser);

      if (JSON.parse(localStorage.getItem("comments"))) {
        this.$store.commit("SET_COMMENTS", {
          comments: JSON.parse(localStorage.getItem("comments"))
        });
      }

      this.$store.commit("CHANGE_COMMENT_PHOTO_BY_USER", {
        id: this.loggedUser.id,
        photo: this.loggedUser.photo
      });

      this.$snotify.success("changes saved successfully", "Done", {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.createImage(files[0]);

      this.users[this.loggedUser.id - 1].photo = String(files[0].name);
      this.loggedUser.photo = String(files[0].name);
      this.$store.commit("SET_USERS", {
        users: this.users
      });
      this.$store.commit("SET_LOGGED_USER", this.loggedUser);
    },
    createImage(file) {
      let reader = new FileReader();
      let vm = this;

      reader.onload = e => {
        vm.editForm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    nofitication() {
      this.$snotify.info(
        "Your suggestion was accepted! Thank you for the reminder!",
        "Oh...",
        {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        }
      );
    },
    clearForm() {
      this.form.category = "";
      this.form.name = "";
      this.form.photo = "";
      this.form.content = "";
    },

    addPublication() {
      this.allPublications = this.getPublications;
      // alert(this.getPublications.length)

      if (this.newPublication === "") {
        alert("Please write something before publishing");
      } else {
        this.allPublications.push({
          id: this.getPublicationsLastId,
          userId: this.loggedUser.id,
          content: this.newPublication,
          username: this.loggedUser.username,
          date: this.getCurrentDate()
        });

        this.$store.commit("SET_PUBLICATIONS", {
          publications: this.allPublications
        });

        this.myPublications = this.getPublicationByUser(this.loggedUser.id);
        this.newPublication = "";
      }
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

    deletePublication(id) {
      // alert("here");
      this.allPublications = this.getPublications;
      this.allPublications = this.allPublications.filter(
        publication => publication.id != id
      );

      this.$store.commit("SET_PUBLICATIONS", {
        publications: this.allPublications
      });

      this.myPublications = this.getPublicationByUser(this.loggedUser.id);
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
#mainArea {
  margin-top: 2em;
  margin-bottom: 2em;
  background: #ebecec;
  padding: 6em 6em 2em 6em;

  #pictureRow {
    .col-lg-6 {
      img {
        width: 12em;
        height: 12em;
        border-radius: 5%;
      }
      form {
        font-family: "Muli";
        font-size: 1.4em;
        textarea {
          border-radius: 2%;
          box-shadow: none;
          color: #363636;
          border-color: rgba(0, 0, 0, 0.2);
          background: transparent;
          resize: none;
        }
        input {
          border: none;
          border-radius: 0%;
          box-shadow: none;
          color: #5085a5;
          background: transparent;
          width: 80%;
        }
      }
      #stories {
        padding: 1em;
        background: #fefefa;
        max-height: 40vh;
        overflow-y: scroll;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        border-radius: 2%;
        img {
          width: 2em;
          height: 2em;
          border-radius: 50%;
        }
        p {
          font-size: 16px;
        }
        hr {
          width: 90%;
          background-color: #ebecec;
        }
      }
    }
  }
}
#suggestion {
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
  .btn {
    background-color: #fefefa;
    border: none;
    font-family: "Geared Slab";
    color: #363636;
    font-size: 1.3rem;
    border: 1.5px solid #5085a5;
    &:hover {
      background-color: #5085a5;
      border: none;
      color: #fefefa;
      border: 1.5px solid #363636;
    }
    &:focus {
      background-color: #5085a5;
      color: #fefefa;
      border: none;
      box-shadow: none !important;
    }
    &:active {
      background-color: #5085a5 !important;
      border: none !important;
      border-color: transparent;
      color: #fefefa;
      box-shadow: none !important;
    }
  }
  form {
    .input-group-text {
      background-color: transparent !important;
    }
    .form-control {
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
</style>
