<template>
  <div class="profile">
    <div class="container" id="mainArea">
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>{{ loggedUser.username }} </span>
            <span>Bio</span>
          </h2>
        </div>
      </div>
      <div class="row pictureRow">
        <div class="col-6">
          <!-- <img
            :src="editForm.image"
            class="img-fluid"
            alt="ProfilePicture"
            data-toggle="modal"
            data-target="#profilePicChange"
          />-->
          <form @submit.prevent="editProfile()" class="pt-3">
            <div class="form-group">
              <div class="form-group col-12 pl-0 pb-3">
                <img
                  :src="editForm.image"
                  id="picture"
                  alt="Image"
                  class="img-fluid"
                  data-toggle="modal"
                  data-target="#profilePicChange"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-12">
                <i class="fas fa-user pr-2 d-inline-block"></i>
                <input
                  type="text"
                  class="form-control d-inline-block"
                  placeholder="Name"
                  v-model="editForm.name"
                />
                <button type="submit" class="btn btn-primary save">
                  <i class="far fa-save"></i>
                </button>
              </div>
              <div class="form-group col-12">
                <i class="fas fa-map-marker-alt pr-2 d-inline-block"></i>
                <input
                  type="text"
                  class="form-control d-inline-block"
                  placeholder="Location"
                  v-model="editForm.location"
                />
                <button type="submit" class="ml-1 btn btn-primary save">
                  <i class="far fa-save"></i>
                </button>
              </div>
              <div class="form-group col-12">
                <i class="fas fa-calendar-alt pr-1 d-inline-block"></i>
                <input
                  type="text"
                  class="form-control d-inline-block"
                  placeholder="Date of Birth"
                  onfocus="(this.type='date')"
                  v-model="editForm.birth"
                />
                <button type="submit" class="ml-1 btn btn-primary save">
                  <i class="far fa-save"></i>
                </button>
              </div>
              <div class="form-group col-12">
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
                <button type="submit" class="ml-1 btn btn-primary save">
                  <i class="far fa-save"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>{{ loggedUser.username }} </span>
            <span>Shares</span>
          </h2>
        </div>
      </div>
      <div class="row pictureRow">
        <div class="col-6">
          <form @submit.prevent="addPublication()">
            <div class="form-group textarea-container">
              <textarea
                v-model="newPublication"
                class="form-control mx-auto"
                rows="4"
                placeholder="What are you thinking of?"
              ></textarea>
              <button class="btn btn-primary" type="submit">Publicate</button>
            </div>
          </form>
          <div id="stories">
            <div v-for="publication in myPublications" :key="publication.id">
              <div class="d-flex justify-content-between align-items-center">
                <img :src="loggedUser.photo" alt="person" />
                <p class>{{ loggedUser.name }}</p>
                <p class="font-italic" style="font-size: 14px">
                  {{ publication.date }}
                </p>
                <button
                  id="delete"
                  class="btn btn-primary d-inline-block mb-3"
                  @click="deletePublication(publication.id_post)"
                >
                  <i
                    class="far fa-times-circle"
                    style="color: #363636; font-size: 1.2em"
                  ></i>
                </button>
              </div>

              <p
                class="lead text-left pt-4 pb-4"
                style="color: #363636; font-family: 'Muli'; font-weight: 300;"
              >
                {{ publication.content }}
              </p>
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
            <span>Suggest </span>
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
            style="margin-bottom: 3em"
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
                  style="box-shadow: none !important;"
                  id="exampleFormControlSelect1"
                  v-model="form.category"
                >
                  <option value>Choose the Category</option>
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.name"
                    >{{ category.name }}</option
                  >
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
                  style="box-shadow: none !important;"
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

    <!-- <profile Picture modal  -->
    <div
      class="modal fade"
      id="profilePicChange"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h5 class="modal-title" id="modelTitle">
              Add your profile picture Url here
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
            <!-- !!!!!!!!!!!!!!!!@submit.prevent="editProfile()" tava a dar um erro -->
            <form>
              <div class="form-group">
                <input
                  type="url"
                  class="form-control"
                  placeholder="Photo"
                  v-model="editForm.image"
                />
              </div>
              <button
                @click="editProfile()"
                type="submit"
                class="btn btn-primary w-75 submitForm"
                data-dismiss="modal"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- profile Picture modal> -->
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
      categories: [],
      newPublication: "",
      myPublications: [],
      allPublications: [], //only usesd if needed

      permition: true,

      editForm: {
        id: "",
        name: "",
        email: "",
        image: "",
        location: "",
        birth: ""
      }
    };
  },
  async created() {
    this.loggedUser = this.getLoggedUser;
    this.loggedUser = this.loggedUser[0];

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

    this.categories = this.getCategories;

    try {
      await this.$store.dispatch("userPosts");
      this.myPublications = this.getUserPosts;
    } catch (err) {
      alert(err);
      return err;
    }
  },
  computed: {
    ...mapGetters({
      getUserById: "getUserById",
      getSuggestionsLastId: "getSuggestionsLastId",
      getSuggestionByName: "getSuggestionByName",
      getUsers: "getUsers",
      getLoggedUser: "getLoggedUser",

      // *Email Edition confirm
      getUserByInput: "getUserByInput",

      // todo
      getPublicationsLastId: "getPublicationsLastId",
      getPublications: "getPublications",
      getPublicationByUser: "getPublicationByUser",
      getCategories: "getCategories",
      getUserPosts: "getUserPosts"
    })
  },
  methods: {
    getCurrentDate() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0");
      let yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;
      return today;
    },
    async addSuggestion() {
      if (!this.getSuggestionByName(this.form.name)) {
        this.$store.commit("SET_NEW_SUGGESTION", {
          id_user: this.loggedUser.id_user,
          photo: this.form.photo,
          content: this.form.content,
          new_identity: this.form.name,
          id_status: 2,
          category_name: this.form.category
        });
        try {
          await this.$store.dispatch("addSuggestion");
        } catch (err) {
          alert(err);
          return err;
        }
        // this.form.id = this.getSuggestionsLastId;
        // this.$store.commit("NEW_SUGGESTION", {
        //   id: this.form.id,
        //   category: this.form.category,
        //   name: this.form.name,
        //   content: this.form.content,
        //   date: this.getCurrentDate(),
        //   photo: this.form.photo,
        //   status: "pendant",
        //   userId: this.loggedUser.id,
        //   username: this.loggedUser.username
        // });
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
      this.editForm.location = this.loggedUser.location;
      this.editForm.birth = this.loggedUser.birth;
      this.editForm.image = this.loggedUser.photo;
      this.editForm.email = this.loggedUser.email;
      // alert(this.editForm.image); THIS ALERT RETURNS THE EXACTLY SRC OF THE USER IMAGE !!!!
    },
    async editProfile() {
      // this.confirmEmailTaken();
      this.$store.commit("SET_PROFILE_EDIT_FORM", {
        name: this.editForm.name,
        location: this.editForm.location,
        birth: this.editForm.birth,
        email: this.editForm.email,
        photo: this.editForm.image
      });
      this.editForm.id = this.loggedUser.id;
      this.loggedUser.name = this.editForm.name;
      this.loggedUser.location = this.editForm.location;
      this.loggedUser.birth = this.editForm.birth;
      this.loggedUser.email = this.editForm.email;
      this.loggedUser.photo = this.editForm.image;
      // this.$store.commit("SET_LOGGED_USER", this.loggedUser);
      try {
        await this.$store.dispatch("editProfile");
        this.$store.commit("SET_LOGGED_USER", [this.loggedUser]);
        alert("Done editing");
      } catch (err) {
        return err;
      }

      // if (this.permition == false) {
      //   alert("Email Already Taken");
      // } else {
      //   this.editForm.id = this.loggedUser.id;
      //   this.loggedUser.name = this.editForm.name;
      //   this.loggedUser.location = this.editForm.location;
      //   this.loggedUser.birth = this.editForm.birth;
      //   this.loggedUser.email = this.editForm.email;
      //   this.loggedUser.photo = this.editForm.image;
      //   // alert(this.loggedUser.photo);

      //   this.users[this.loggedUser.id - 1].id = this.editForm.id;
      //   this.users[this.loggedUser.id - 1].name = this.editForm.name;
      //   this.users[this.loggedUser.id - 1].birth = this.editForm.birth;
      //   this.users[this.loggedUser.id - 1].email = this.editForm.email;
      //   this.users[this.loggedUser.id - 1].photo = this.editForm.image;

      //   this.$store.commit("SET_USERS", {
      //     users: this.users
      //   });

      //   this.$store.commit("SET_LOGGED_USER", this.loggedUser);

      //   if (JSON.parse(localStorage.getItem("comments"))) {
      //     this.$store.commit("SET_COMMENTS", {
      //       comments: JSON.parse(localStorage.getItem("comments"))
      //     });
      //   }

      //   this.$store.commit("CHANGE_COMMENT_PHOTO_BY_USER", {
      //     id: this.loggedUser.id,
      //     photo: this.loggedUser.photo
      //   });

      //   this.$snotify.success("changes saved successfully", "Done", {
      //     timeout: 2000,
      //     showProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true
      //   });
      // }
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

    async addPublication() {
      this.allPublications = this.getPublications;
      // alert(this.getPublications.length)

      if (this.newPublication === "") {
        alert("Please write something before publishing");
      } else {
        this.$store.commit("SET_NEW_POST", {
          userId: this.loggedUser.id_user,
          content: this.newPublication,
          date: this.getCurrentDate(),
          block: 1
        });
        try {
          await this.$store.dispatch("addPost");
          alert("Posted");
        } catch (err) {
          return err;
        }
        this.allPublications.push({
          id: this.getPublicationsLastId,
          userId: this.loggedUser.id,
          content: this.newPublication,
          username: this.loggedUser.username,
          date: this.getCurrentDate(),
          block: 1
        });

        // this.$store.commit("SET_PUBLICATIONS", {
        //   publications: this.allPublications
        // });

        // this.myPublications = this.getPublicationByUser(this.loggedUser.id);
        // this.newPublication = "";

        try {
          await this.$store.dispatch("userPosts");
          this.myPublications = this.getUserPosts;
        } catch (err) {
          alert(err);
          return err;
        }
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
    async deletePublication(id) {
      // this.allPublications = this.getPublications;
      // this.allPublications = this.allPublications.filter(
      //   publication => publication.id != id
      // );

      this.$store.commit("SET_DELETE_POST", {
        deletePostId: id
      });

      alert("ID: " + id);

      try {
        await this.$store.dispatch("deletePost");
        alert("Deleted");
      } catch (err) {
        return err;
      }

      // this.$store.commit("SET_PUBLICATIONS", {
      //   publications: this.allPublications
      // });

      // this.myPublications = this.getPublicationByUser(this.loggedUser.id);
    },
    confirmEmailTaken() {
      this.permition = true;
      if (this.getUserByInput(this.editForm.email)) {
        let user = this.getUserByInput(this.editForm.email);

        if (user.id !== this.getLoggedUser.id) {
          this.permition = false;
        }
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
  border: none;
}
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
#mainArea {
  margin-top: 2em;
  margin-bottom: 2em;
  .pictureRow {
    .col-6 {
      img {
        width: 12em;
        height: 12em;
        border-radius: 5%;
      }
      form {
        font-family: "Muli";
        font-size: 1.4em;
        #picture {
          width: 8em;
          height: 8em;
          margin-left: 0;
        }
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
        .save {
          background-color: transparent;
          border: none;
          color: #363636;
          font-size: 1.2em;
        }
        .textarea-container {
          position: relative;
        }
        .textarea-container textarea {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }
        .textarea-container button {
          position: absolute;
          bottom: 0;
          right: 0;
          border: 1px solid #363636;
          background-color: transparent;
          color: #363636;
        }
      }
      #delete {
        background-color: transparent;
        border: none;
      }
      #stories {
        padding: 1em;
        background: #fefefa;
        max-height: 60vh;
        overflow-y: scroll;
        overflow-x: hidden;
        -webkit-overflow-scrolling: touch;
        border-radius: 2%;
        img {
          width: 3em;
          height: 3em;
          border-radius: 8px;
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
    option {
      box-shadow: none !important;
      background-color: #fefefa !important;
      color: #363636;
      &:hover {
        background-color: #363636 !important;
      }
    }
  }
}
</style>
