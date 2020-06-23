<template>
  <div class="login d-flex align-items-center justify-content-center">
    <img
      class="img-fluid"
      src="../assets/SignInUp/Background.png"
      alt="shape"
    />
    <div class="container d-flex justify-content-center">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="pt-4 pb-4">Sign In</h3>
          <form class="text-left" @submit.prevent="signInForm()">
            <div class="form-group pt-2 pb-lg-2 pl-lg-5 pr-lg-5 pl-3 pr-3">
              <input
                type="text"
                class="form-control"
                id="txtEmail"
                placeholder="Email or Username"
                v-model="emailOrUsername"
              />
            </div>
            <div class="form-group pt-2 pb-lg-2 pl-lg-5 pr-lg-5 pl-3 pr-3">
              <input
                type="password"
                class="form-control"
                id="txtPassowrd"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div class="text-center pt-lg-3 pb-md-0 pt-lg-2 mb-lg-4">
              <button type="submit" class="btn btn-primary text-uppercase">
                Submit
              </button>
            </div>
          </form>
          <hr />
          <p>
            Get your backpack ready, and
            <u>
              <router-link :to="{ name: 'sign-up' }">Sign Up</router-link>
            </u>
            right now!
          </p>
        </div>
      </div>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      emailOrUsername: "",
      password: "",
      loggedUser: ""
    };
  },
  created() {
    if (JSON.parse(localStorage.getItem("loggedUser"))) {
      this.$store.commit(
        "SET_LOGGED_USER",
        JSON.parse(localStorage.getItem("loggedUser"))
      );
    } else {
      this.$store.commit("SET_LOGGED_USER_LOG_OUT", { loggedUser: "" });
    }

    this.$store.commit("SET_IN_LOG_IN_AND_REG", { bool: true });
    this.setStorage();
  },
  methods: {
    async signInForm() {
      if ((this.emailOrUsername, this.password)) {
        this.$store.commit("SET_LOGIN_FORM", {
          input: this.emailOrUsername,
          password: this.password
        });

        try {
          await this.$store.dispatch("signIn");
          let resStatus = this.$store.getters.getResStatus;
          if (resStatus == 200) {
            this.loggedUser = this.$store.getters.getLoggedUser;

            if (this.loggedUser.block == 1) {
              this.resetForm();

              this.$store.commit("SET_LOGGED_USER", null);
              this.$store.commit("SET_TOKEN", { token: null });

              this.$store.commit("SET_LOGIN_FORM", {
                input: this.emailOrUsername,
                password: this.password
              });
              this.$snotify.error("The user it temporarly blocked", "Oh...", {
                timeout: 2000,
                showProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true
              });
            } else if (this.loggedUser[0].id_user_type == 2) {
              this.resetForm();
              this.$router.push({ name: "loading" }); // *CHANGES THE LOCATION
            } else {
              this.$router.push({ name: "adminLandingPage" }); // !CHANGES THE LOCATION
            }
          } else {
            alert("User not found");
            this.$snotify.error(
              "The email, username or password is incorret",
              "Oh...",
              {
                timeout: 2000,
                showProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true
              }
            );
          }
        } catch (err) {
          alert("Something went wrong try again please");
        }
      } else {
        alert("fill in the fields");
      }
    },
    //

    // signInForm() {
    //   if ((this.emailOrUsername, this.password)) {
    //     if (this.$store.getters.getUserByInput(this.emailOrUsername)) {
    //       //! this.$store.commit("SET_LOGGED_USER", this.loggedUser);
    //       this.$store.commit("SET_LOGIN_FORM", {
    //         input: this.emailOrUsername,
    //         password: this.password
    //       });

    //       alert("you are in!");

    //       // this.$store.commit("SET_IN_LOG_IN_AND_REG", { bool: false });

    //       // if (this.loggedUser.id_user_type === 2) {
    //       //   this.resetForm();
    //       //   this.$router.push({ name: "loading" }); // *CHANGES THE LOCATION
    //       // } else {
    //       //   this.$router.push({ name: "adminLandingPage" }); // !CHANGES THE LOCATION
    //       // }
    //       // if (
    //       //   !this.$store.getters.getUserByPasswordInput(
    //       //     this.emailOrUsername,
    //       //     this.password
    //       //   )
    //       // ) {
    //       //   this.$snotify.warning(
    //       //     "The email, username or password is incorret",
    //       //     "Oh...",
    //       //     {
    //       //       timeout: 2000,
    //       //       showProgressBar: false,
    //       //       closeOnClick: true,
    //       //       pauseOnHover: true
    //       //     }
    //       //   );
    //       //   alert("wrong inputs");
    //       // } else {
    //       //   this.loggedUser = this.$store.getters.getUserByInput(
    //       //     this.emailOrUsername
    //       //   );
    //       //   alert("Blocked");
    //       //   if (this.loggedUser.blocked) {
    //       //     this.$snotify.error("Your account is blocked", "Oh...", {
    //       //       timeout: 2000,
    //       //       showProgressBar: false,
    //       //       closeOnClick: true,
    //       //       pauseOnHover: true
    //       //     });
    //       //   } else {
    //       //     //! this.$store.commit("SET_LOGGED_USER", this.loggedUser);
    //       //     this.$store.commit("SET_LOGIN_FORM", {
    //       //       input: this.emailOrUsername,
    //       //       password: this.password
    //       //     });
    //       //     alert("you are in!");
    //       //     this.$store.commit("SET_IN_LOG_IN_AND_REG", { bool: false });
    //       //     if (this.loggedUser.id_user_type === 2) {
    //       //       this.resetForm();
    //       //       this.$router.push({ name: "loading" }); // *CHANGES THE LOCATION
    //       //     } else {
    //       //       this.$router.push({ name: "adminLandingPage" }); // !CHANGES THE LOCATION
    //       //     }
    //       //   }
    //       // }
    //     } else {
    //       this.$snotify.warning("Incorrect data", "Oh...", {
    //         timeout: 2000,
    //         showProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true
    //       });
    //       alert("Oh");
    //     }
    //   } else {
    //     this.$snotify.warning("Please fill all the input form", "Oh...", {
    //       timeout: 2000,
    //       showProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true
    //     });
    //   }
    // },
    resetForm() {
      this.emailOrUsername = "";
      this.password = "";
      this.loggedUser = {};
    },
    setStorage() {
      if (JSON.parse(localStorage.getItem("users"))) {
        this.$store.commit("SET_USERS", {
          users: JSON.parse(localStorage.getItem("users"))
        });
      } else {
        this.$store.commit("SET_USERS", {
          users: [
            {
              id: 1,
              name: "Nuno",
              surname: "Sousa",
              username: "NunoPegaGeral",
              email: "nunoSousa@gmail.com",
              age: 19,
              id_nationality: 2,
              description: "Zé Luis melhor que CR7",
              photo: "",
              id_user_type: 2,
              blocked: false,
              password: "123"
            },
            {
              id: 2,
              name: "Tiago",
              surname: "de Pina",
              username: "Titas",
              email: "tiagopina@gmail.com",
              age: 19,
              id_nationality: 1,
              description: "Concordo com o nuno na descrição",
              photo: "",
              id_user_type: 2,
              blocked: false,
              password: "1234"
            },
            {
              id: 3,
              name: "admin",
              surname: "",
              username: "admin1",
              email: "admin@gmail.com",
              age: "",
              id_nationality: 1,
              description: "",
              photo: "",
              id_user_type: 1,
              blocked: false,
              password: "12345"
            }
          ]
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100vh;
}

.container {
  position: absolute;
}

.row {
  background-color: rgb(241, 241, 241);
  opacity: 0.95;
  border-radius: 20px;
  width: 35rem;
}

h3 {
  font-family: "Geared Slab";
  color: #5085a5;
  font-size: 1.8rem;
}

p {
  font-size: 1rem;
  font-family: "Museo Sans 500";
}

u {
  color: #5085a5;
  font-weight: 600;
}

u:hover {
  color: #5085a5;
  text-decoration-color: #e9d496;
}

img {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 0;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

form {
  font-family: "Muli";
  font-size: 1rem;
  color: #363636;
}

.form-control {
  border: none;
  border-radius: 4px;
  color: #363636;
}

input {
  background-color: #fefefa !important;
  border: none !important;
  border-radius: 3px;
  box-shadow: none !important;
  padding: 1em;
}

input::placeholder {
  color: #363636;
}

input:focus {
  border: 1px solid #5085a5 !important;
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

.close:hover,
.close:focus,
.close:active,
.close:active:focus:not(:disabled):not(.disabled),
.close:focus,
.close:active,
.close:hover {
  box-shadow: none !important;
  outline: 0;
  color: #5085a5;
}

.btn {
  background-color: #ffffff !important;
  font-family: "Geared Slab";
  font-size: 1.3rem !important;
  width: 40%;
  font-weight: 700;
  border: none !important;
  border-radius: 6px;
  color: #5085a5 !important;
}

.btn:hover {
  color: #5085a5;
  background-color: #ffffff;
}

a {
  color: #5085a5 !important;
}

a:hover {
  color: #5085a5 !important;
  text-decoration: #e9d496 !important;
}

.modal-body {
  max-height: 50vh;
  overflow-y: scroll;
  text-align: justify;
  padding: 10%;
  font-family: "Muli";
}

/* iPhone X */
@media (max-width: 640px) {
  .row {
    width: 20rem;
  }

  .btn {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

/* IPAD Pro AND < */
@media screen and (max-width: 1024px) {
  img {
    display: none;
  }

  .login {
    background: url("../assets/SignInUp/alternative.jpg") no-repeat center
      center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
</style>
