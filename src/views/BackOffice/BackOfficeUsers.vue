<template>
  <div>
    <div class="container">
      <h3 class="pb-lg-3 pb-2 pt-lg-5 mx-auto text-center">Users</h3>
      <div class="row text-center" style="padding: 5% 0 5% 0;">
        <div class="col-lg-4 col-md-12 col-sm-12 cards">
          <i
            style="font-size: 44px; color: #5085a5;"
            class="fa fa-user pt-xl-5"
          ></i>
          <h4 class="text-center pb-4 pt-5 mx-auto w-75">
            {{ getUsers.length }} Total Users
          </h4>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 cards">
          <i
            style="font-size: 44px; color: #5085a5;"
            class="fa fa-user pt-xl-5"
          ></i>
          <h4 class="text-center pb-4 pt-5 mx-auto w-75">
            {{ getNBlockedUsers }} Blocked Users
          </h4>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 cards">
          <i
            style="font-size: 44px; color: #5085a5;"
            class="fa fa-user pt-xl-5"
          ></i>
          <h4 class="text-center pb-4 pt-5 mx-auto w-75">
            {{ getNAdmins }} Website Administrator
          </h4>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="container">
        <div class="row mb-lg-5" style="background-color: #f0f0f0">
          <div
            class="col-lg-6 pb-lg-4 pb-3 pt-lg-5 d-flex justify-content-start"
          >
            <button
              type="button"
              class="btn btn-primary pl-lg-5 pr-lg-5 filters"
              @click="orderByType()"
            >
              Order By User Type
            </button>
            <button
              type="button"
              class="btn btn-primary pl-lg-5 pr-lg-5 filters"
              @click="orderByName()"
            >
              Order By A -Z
            </button>
          </div>
          <div class="row pt-1 cardsRow mx-auto">
            <div class="col-4" v-for="user in users" :key="user.id">
              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title text-center">
                    {{ user.username }}
                  </h5>
                  <div v-if="user.id_user_type === 1">
                    <p class="lead pt-3 pb-4 text-center">
                      Administrator
                    </p>
                  </div>
                  <div v-else>
                    <p class="lead pt-3 pb-4 text-center">
                      Normal User
                    </p>
                  </div>
                  <div
                    class="pt-1 d-flex justify-content-around"
                    style="border-top: 2px solid #fff"
                  >
                    <button
                      type="button"
                      class="btn btn-primary btnIcons"
                      @click="blockUser(user.id_user)"
                    >
                      <div v-if="user.block == 1">
                        <i
                          class="fa fa-lock"
                          style="font-size: 34px; color: rgba(32, 37, 43, 0.4);"
                        ></i>
                      </div>
                      <div v-else>
                        <i
                          class="fa fa-unlock"
                          style="font-size: 34px; color: rgba(32, 37, 43, 0.4);"
                        ></i>
                      </div>
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary btnIcons"
                      @click="editUser(user.id_user)"
                      data-toggle="modal"
                      data-target="#editUserModal"
                    >
                      <i
                        class="fa fa-wrench"
                        style="font-size: 30px; color: rgba(32, 37, 43, 0.4);"
                      ></i>
                    </button>
                    <button
                      class="btn btn-primary icon-btn btnIcons"
                      data-toggle="modal"
                      data-target="#userHistoryModal"
                      @click="userHistory(user.id_user)"
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
          <div class="col-lg-12">
            <div class="pt-lg-5 pb-lg-5 pb-5">
              <button
                type="button"
                class="btn addUser btn-primary w-25 border"
                id="addUser"
                data-toggle="modal"
                data-target="#addUserModal"
              >
                <span></span>
                Add User
              </button>
            </div>
          </div>
        </div>
        <!-- Add User Modal -->
        <div
          class="modal fade"
          id="addUserModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <h5 class="pb-4 pt-1 mx-auto d-inline-block">Add User</h5>
                <button
                  type="button"
                  class="close d-inline-block"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <form class="pb-4 w-75 mx-auto" @submit.prevent="addUser()">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      v-model="form.username"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      v-model="form.name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      v-model="form.email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Location"
                      v-model="form.location"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Birth"
                      v-model="form.birth"
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
                    <input
                      type="number"
                      class="form-control"
                      placeholder="User Type:   Admin: 2 / User: 1"
                      v-model="form.id_user_type"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Password"
                      v-model="form.password"
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary w-100 submitForm"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Add User Modal -->

        <!-- Edit User Modal -->
        <div
          class="modal fade"
          id="editUserModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <h5 class="pb-4 pt-1 mx-auto d-inline-block">Edit User</h5>
                <button
                  type="button"
                  class="close d-inline-block"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <form class="pb-4 w-75 mx-auto" @submit.prevent="updateUser()">
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      v-model="form.username"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      v-model="form.name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Photo"
                      v-model="form.photo"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Location"
                      v-model="form.location"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Birth"
                      v-model="form.birth"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      v-model="form.email"
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
                    <input
                      type="number"
                      class="form-control"
                      placeholder="User Type - Admin: 1 / User: 2"
                      v-model="form.id_user_type"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Password"
                      v-model="form.password"
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary w-100 submitForm"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- Edit User Modal -->

        <!-- User History -->
        <div
          class="modal fade"
          id="userHistoryModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="userHistory"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-body">
                <h5 class="pb-4 pt-1 mx-auto d-inline-block">User History</h5>
                <button
                  type="button"
                  class="close d-inline-block"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <p class="lead">
                  <span class="font-weight-bold">Nº of Suggestions: </span>
                  {{ getSuggestionsByUser(userId).length }}.
                </p>
                <p class="lead">
                  <span class="font-weight-bold"
                    >Nº of Itineraries Generated:
                  </span>
                  {{ getItinerariesByUser(userId).length }}.
                </p>
                <p class="lead">
                  <span class="font-weight-bold">Nº of Comments: </span>
                  {{ getCommentsByUser(userId).length }}.
                </p>
                <button
                  type="button"
                  class="btn btn-primary mt-4 mr-4"
                  @click="removeUser(userId)"
                >
                  Remove User
                </button>
                <button
                  type="button"
                  class="btn btn-primary mt-4"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">Go back</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- User History -->
      </div>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import $ from "jquery";

export default {
  data: function() {
    return {
      users: [],
      suggestions: [],
      comments: [],
      itineraries: [],
      form: {
        id: "",
        name: "",
        birth: "",
        username: "",
        email: "",
        location: "",
        photo: "",
        id_user_type: "",
        blocked: 0,
        password: "",
        editId: 0
      },
      order: false,
      username: "",
      userId: ""
    };
  },
  created() {
    this.$store.commit("SET_USERS", {
      users: JSON.parse(localStorage.getItem("users"))
    });

    this.$store.commit(
      "SET_LOGGED_USER",
      JSON.parse(localStorage.getItem("loggedUser"))
    );

    this.$store.commit("SET_COMMENTS", {
      comments: JSON.parse(localStorage.getItem("comments"))
    });

    this.users = this.getUsers;
    this.suggestions = this.getSuggestionsByUser;
    this.comments = this.getCommentsByUser;
    this.itineraries = this.getItinerariesByUser;
  },
  computed: {
    ...mapGetters([
      "getUsers",
      "getUserUsername",
      "getLastId",
      "getIndexById",
      "getNAdmins",
      "getNBlockedUsers",
      "getSuggestionsByUser",
      "getCommentsByUser",
      "getItinerariesByUser"
    ])
  },
  methods: {
    async addUser() {
      if (!this.getUserUsername(this.form.username)) {
        this.form.id = this.getLastId;
        this.$store.commit("SET_NEW_USER_ADMIN", {
          id_user_type: this.form.id_user_type,
          name: this.form.name,
          username: this.form.username,
          password: this.form.password,
          email: this.form.email,
          photo: this.form.photo,
          location: this.form.location,
          birth: this.form.birth
        });
        try {
          await this.$store.dispatch("addUsersAdmin");
          alert("User Added");
        } catch (err) {
          return err;
        }
        // this.form.id = this.getLastId;
        // this.$store.commit("NEW_USER", {
        //   id: this.form.id,
        //   name: this.form.name,
        //   surname: this.form.surname,
        //   username: this.form.username,
        //   email: this.form.email,
        //   age: this.form.age,
        //   description: this.form.description,
        //   photo: this.form.photo,
        //   id_user_type: this.form.id_user_type,
        //   blocked: this.form.blocked,
        //   password: this.form.password
        // });
        this.clearForm();
      } else {
        this.clearForm();
        this.$snotify.error("Error", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      }
    },
    async removeUser(id) {
      this.$store.commit("SET_DELETE_USER", {
        deleteUserId: id
      });

      try {
        await this.$store.dispatch("deleteUser");
        alert("Deleted");
      } catch (err) {
        alert(err);
        return err;
      }

      // this.users = this.users.filter(user => user.id !== id);
      // this.$store.commit("SET_USERS", {
      //   users: this.users
      // });
      $(function() {
        $("#modal").modal("toggle");
      });
      this.$snotify.success("Removed successfully", "Done", {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
    },
    editUser(id) {
      // const user = this.users.filter(user => user.id === id)[0];
      // this.$store.commit("SET_EDIT_USER", {
      //   editUserId: id
      // });
      this.form.editId = id;
      alert("ID: " + this.form.editId);
      // this.form.name = user.name;
      // this.form.surname = user.surname;
      // this.form.username = user.username;
      // this.form.email = user.email;
      // this.form.age = user.age;
      // this.form.description = user.description;
      // this.form.photo = user.photo;
      // this.form.id_user_type = user.id_user_type;
      // this.form.password = user.password;
    },
    async updateUser() {
      this.$store.commit("SET_EDIT_USER_ADMIN", {
        editUserId: this.form.editId,
        id_user_type: this.form.id_user_type,
        name: this.form.name,
        username: this.form.username,
        password: this.form.password,
        email: this.form.email,
        photo: this.form.photo,
        location: this.form.location,
        birth: this.form.birth
      });

      try {
        await this.$store.dispatch("editUser");
        alert("User Edited");
      } catch (err) {
        return err;
      }
      // this.users[
      //   this.getIndexById(this.form.editId)
      // ].username = this.form.username;
      // this.users[this.getIndexById(this.form.editId)].name = this.form.name;
      // this.users[
      //   this.getIndexById(this.form.editId)
      // ].surname = this.form.surname;
      // this.users[this.getIndexById(this.form.editId)].email = this.form.email;
      // this.users[this.getIndexById(this.form.editId)].age = this.form.age;
      // this.users[
      //   this.getIndexById(this.form.editId)
      // ].description = this.form.description;
      // this.users[this.getIndexById(this.form.editId)].photo = this.form.photo;
      // this.users[this.getIndexById(this.form.editId)].id_user_type = parseInt(
      //   this.form.id_user_type
      // );
      // this.users[
      //   this.getIndexById(this.form.editId)
      // ].password = this.form.password;

      // this.$store.commit("SET_USERS", {
      //   users: this.users
      // });
      this.clearForm();
    },
    async blockUser(id) {
      let block = null;
      for (const user of this.users) {
        if (user.id_user === id) {
          block = user.block;
        }
      }
      if (block == "0") {
        block = "1";
      } else if (block == "1") {
        block = "0";
      }

      //block ? 0 : 1

      this.$store.commit("SET_BLOCK_USER", {
        blockUserId: id,
        block: block
      });

      try {
        await this.$store.dispatch("blockUser");
        alert("Blocked");
      } catch (err) {
        return err;
      }
      // alert(this.users[this.getIndexById(id)].block)

      // localStorage.setItem("block", JSON.stringify(block));
      // if (this.users[this.getIndexById(id)].block == 1) {
      //   this.users[this.getIndexById(id)].block = 0;
      // } else {
      //   this.users[this.getIndexById(id)].block = 1;
      // }

      // this.$store.commit("SET_USERS", {
      //   users: this.users
      // });
    },
    compareType(a, b) {
      if (a.id_user_type < b.id_user_type) return -1;
      if (a.id_user_type > b.id_user_type) return 1;
      else return 0;
    },
    orderByType() {
      this.users.sort(this.compareType);
      this.order = true;
    },
    compareName(a, b) {
      if (a.username.toLowerCase() < b.username.toLowerCase()) return -1;
      if (a.username.toLowerCase() > b.username.toLowerCase()) return 1;
      else return 0;
    },
    orderByName() {
      this.users.sort(this.compareName);
    },
    userHistory(id) {
      // this.$store.commit("SET_DELETE_USER", {
      //   deletePostId: id
      // });
      this.userId = id;
    },
    clearForm() {
      this.form.name = "";
      this.form.surname = "";
      this.form.username = "";
      this.form.email = "";
      this.form.age = "";
      this.form.description = "";
      this.form.photo = "";
      this.form.id_user_type = "";
      this.form.password = "";
    },
    clearCategoryForm() {
      this.categoryForm.id = "";
      this.categoryForm.categoryName = "";
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
    p.lead {
      font-weight: 300;
      font-family: "Muli";
      color: #20252b;
    }
  }

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
  .cardsRow {
    max-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    .card {
      margin-top: 10%;
      border-radius: 5px;
      background-color: transparent;
      padding-top: 5%;
      border: 2.5px solid #fff;
      h5 {
        color: #5085a5;
      }
    }
  }

  .fa-lock:hover {
    color: #ffc20f;
  }
  #addUser {
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
p.lead {
  font-weight: 300;
  font-family: "Muli";
  font-size: 1em;
  color: #20252b;
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
.container-fluid {
  padding-top: 3%;
  background-color: #f0f0f0;
  width: 100vw;
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

.modal-content {
  background-color: #ebecec;
  border-radius: 4px;
  h5 {
    font-family: "Geared Slab";
    font-size: 1.6em;
    color: #20252b;
  }
  .btn:hover {
    background-color: #e9d496;
    border: none;
    transform: scale(1.01);
  }

  .btn:active {
    background-color: #e9d496 !important;
    border: none !important;
    border-color: transparent;
    box-shadow: none !important;
  }

  .btn:focus {
    background-color: #e9d496;
    border: none;
    box-shadow: none !important;
  }

  .btn {
    background-color: #5085a5;
    border: none;
    font-family: "Geared Slab";
    color: #ffffff;
    font-size: 1.3rem;
  }
}

button.submitForm {
  background-color: #5085a5;
  border: none;
  transition: transform 0.5s ease;
  font-family: "Geared Slab";
  color: #ffffff;
  font-size: 1.5rem;
}

h3 {
  font-family: "Geared Slab";
  color: #20252b;
  font-size: 2rem;
  border-bottom: 2px solid #f0f0f0;
  width: 20%;
}

h4 {
  font-family: "Geared Slab";
  color: #5085a5;
  font-size: 1.8rem;
}
</style>
