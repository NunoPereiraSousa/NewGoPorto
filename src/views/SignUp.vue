<template>
  <div class="login d-flex align-items-center justify-content-center">
    <img
      class="img-fluid"
      src="../assets/SignInUp/Background 2.png"
      alt="shgape"
    />
    <div class="container d-flex justify-content-center">
      <div class="row">
        <div class="col-12 text-center">
          <h3 class="pt-4 pb-4">Sign Up</h3>
          <form class="text-left" id="myForm">
            <div class="form-group pl-5 pr-5">
              <input
                type="text"
                class="form-control"
                id="txtUsername"
                placeholder="Username"
                v-model="username"
              />
            </div>
            <div class="form-group pl-5 pr-5">
              <input
                type="email"
                class="form-control"
                id="txtEmail"
                placeholder="Email"
                v-model="email"
              />
            </div>
            <div class="form-group pl-5 pr-5">
              <input
                type="text"
                class="form-control"
                id="txtName"
                placeholder="First Name"
                v-model="name"
              />
            </div>
            <div class="form-group pl-5 pr-5">
              <input
                type="password"
                class="form-control"
                id="txtPassword"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div class="form-group pl-5 pr-5">
              <input
                type="password"
                class="form-control"
                id="txtRepeatPassword"
                placeholder="Repeat Password"
                v-model="repeatPassword"
              />
            </div>
            <div class="text-center pt-lg-3 pb-md-0 pt-2 mb-4">
              <button
                type="button"
                class="btn btn-primary text-uppercase"
                data-toggle="modal"
                data-target="#termsOfPrivacy"
              >
                Submit
              </button>
            </div>
          </form>
          <hr />
          <p>
            Your backpack is already ready?
            <u>
              <router-link :to="{ name: 'signIn' }">Sign In</router-link>
            </u>
            right now!
          </p>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="termsOfPrivacy"
      tabindex="-1"
      role="dialog"
      aria-labelledby="termsOfPrivacy"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title ml-auto" id="exampleModalLongTitle">
              Privacy Policy Terms
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i class="far fa-times-circle"></i>
            </button>
          </div>
          <div class="modal-body">
            Privacy Policy for GoPorto At www.GoPorto.com, accessible at
            www.GoPorto.com, one of our main priorities is the privacy of our
            visitors. This Privacy Policy document contains types of information
            that is collected and recorded by GoPorto and how we use it. If you
            have additional questions or require more information about our
            Privacy Policy, do not hesitate to contact us through email at
            9180579@esmad.ipp.pt / 9180526@esmad.ipp.pt Log Files GoPorto
            follows a standard procedure of using log files. These files log
            visitors when they visit websites. All hosting companies do this and
            a part of hosting services' analytics. The information collected by
            log files include internet protocol (IP) addresses, browser type,
            Internet Service Provider (ISP), date and time stamp, referring/exit
            pages, and possibly the number of clicks. These are not linked to
            any information that is personally identifiable. The purpose of the
            information is for analyzing trends, administering the site,
            tracking users' movement on the website, and gathering demographic
            information. Cookies and Web Beacons Like any other website, GoPorto
            uses ‘cookies'. These cookies are used to store information
            including visitors' preferences, and the pages on the website that
            the visitor accessed or visited. The information is used to optimize
            the users' experience by customizing our web page content based on
            visitors' browser type and/or other information. DoubleClick DART
            Cookie Google is one of a third-party vendor on our site. It also
            uses cookies, known as DART cookies, to serve ads to our site
            visitors based upon their visit to www.website.com and other sites
            on the internet. However, visitors may choose to decline the use of
            DART cookies by visiting the Google ad and content network Privacy
            Policy at the following URL –
            https://policies.google.com/technologies/ads. Some of advertisers on
            our site may use cookies and web beacons. Our advertising partners
            are listed below. Each of our advertising partners has their own
            Privacy Policy for their policies on user data. For easier access,
            we hyperlinked to their Privacy Policies below. Google
            https://policies.google.com/technologies/ads Privacy Policies You
            may consult this list to find the Privacy Policy for each of the
            advertising partners of GoPorto. Third-party ad servers or ad
            networks uses technologies like cookies, JavaScript, or Web Beacons
            that are used in their respective advertisements and links that
            appear on GoPorto, which are sent directly to users' browser. They
            automatically receive your IP address when this occurs. These
            technologies are used to measure the effectiveness of their
            advertising campaigns and/or to personalize the advertising content
            that you see on websites that you visit. Note that GoPorto has no
            access to or control over these cookies that are used by third-party
            advertisers. Third Part Privacy Policies GoPorto's Privacy Policy
            does not apply to other advertisers or websites. Thus, we are
            advising you to consult the respective Privacy Policies of these
            third-party ad servers for more detailed information. It may include
            their practices and instructions about how to opt-out of certain
            options. You may find a complete list of these Privacy Policies and
            their links here: Privacy Policy Links. You can choose to disable
            cookies through your individual browser options. To know more
            detailed information about cookie management with specific web
            browsers, it can be found at the browsers' respective websites. What
            Are Cookies? Children's Information Another part of our priority is
            adding protection for children while using the internet. We
            encourage parents and guardians to observe, participate in, and/or
            monitor and guide their online activity. GoPorto does not knowingly
            collect any Personal Identifiable Information from children under
            the age of 13. If you think that your child provided this kind of
            information on our website, we strongly encourage you to contact us
            immediately and we will do our best efforts to promptly remove such
            information from our records. Online Privacy Policy Only This
            privacy policy applies only to our online activities and is valid
            for visitors to our website with regards to the information that
            they shared and/or collect in GoPorto. This policy is not applicable
            to any information collected offline or via channels other than this
            website. Consent By using our website, you hereby consent to our
            Privacy Policy and agree to its Terms and Conditions.
          </div>
          <div class="modal-footer d-flex justify-content-center">
            <button type="submit" class="btn btn-primary" @click="signUpForm()">
              I Agree
              <i class="far fa-arrow-alt-circle-right pl-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <vue-snotify></vue-snotify>
  </div>
</template>

<script>
// import { mapGetter } from "vuex";
// import $ from "jquery";

export default {
  data: function() {
    return {
      id: "",
      username: "",
      email: "",
      name: "",
      surname: "",
      age: "",
      id_nationality: "",
      id_user_type: 2,
      photo: "",
      description: "",
      blocked: false,
      password: "",
      repeatPassword: ""
    };
  },
  created() {
    this.$store.commit("SET_LOGGED_USER_LOG_OUT", { loggedUser: "" });
  },
  methods: {
    async signUpForm() {
      if (
        this.username &&
        this.email &&
        this.name &&
        this.password &&
        this.repeatPassword
      ) {
        this.$store.commit("SET_REGISTER_FORM", {
          name: this.name,
          email: this.email,
          password: this.password,
          username: this.username
        });

        try {
          await this.$store.dispatch("signUp");
          alert("Done creating");
        } catch (err) {
          alert("Something went wrong try again please");
        }
      } else {
        this.$snotify.info("Please, fill all the inputs to proceed", "Oh...", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
      }
    },

    // signUpForm() {
    //   if (
    //     this.username &&
    //     this.email &&
    //     this.name &&
    //     this.password &&
    //     this.repeatPassword
    //   ) {
    //     if (
    //       !this.$store.getters.getUserByInput(this.email) &&
    //       this.ConfirmPassword()
    //     ) {
    //       if (!this.$store.getters.getUserByInput(this.username)) {
    //         this.id = this.$store.getters.getLastId;
    //         this.$store.commit("NEW_USER", {
    //           id: this.id,
    //           name: this.name,
    //           // surname: this.surname,
    //           username: this.username,
    //           email: this.email,
    //           // age: this.age,
    //           // id_nationality: this.id_nationality,
    //           location: this.location,
    //           birth: "",
    //           // description: this.description,
    //           photo: this.photo,
    //           id_user_type: this.id_user_type,
    //           blocked: this.blocked,
    //           password: this.password
    //         });
    //         this.resetForm();
    //         this.$snotify.success("User Created Successfully!", "Done", {
    //           timeout: 2000,
    //           showProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true
    //         });
    //         $("#termsOfPrivacy").modal("toggle");
    //         setTimeout(
    //           () =>
    //             this.$router.push({
    //               name: "signIn"
    //             }),
    //           2000
    //         );
    //       } else {
    //         this.$snotify.info("Username already taken", "Oh...", {
    //           timeout: 2000,
    //           showProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true
    //         });
    //       }
    //     } else {
    //       this.$snotify.info(
    //         "The email has already been associated with an account",
    //         "Oh...",
    //         {
    //           timeout: 2000,
    //           showProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true
    //         }
    //       );
    //     }
    //   } else {
    //     this.$snotify.info("Please, fill all the inputs to proceed", "Oh...", {
    //       timeout: 2000,
    //       showProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true
    //     });
    //   }
    // },
    ConfirmPassword() {
      if (this.password == this.repeatPassword) {
        return true;
      } else {
        this.$snotify.info("The passwords don't match", "Oh...", {
          timeout: 2000,
          showProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true
        });
        return false;
      }
    },
    resetForm() {
      this.id = "";
      this.username = "";
      (this.email = ""),
        (this.name = ""),
        (this.surname = ""),
        (this.age = ""),
        (this.photo = ""),
        (this.description = ""),
        (this.password = ""),
        (this.repeatPassword = "");
    }
  }
};
</script>

<style scoped>
::-webkit-scrollbar-track:not(.list-group) {
  background-color: transparent;
}

::-webkit-scrollbar {
  width: 12px;
  background-color: #ffffff;
}

::-webkit-scrollbar-thumb {
  background-color: #5085a5;
  border-radius: 6px;
}

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

.modal-body {
  max-height: 50vh;
  overflow-y: scroll;
  text-align: justify;
  padding: 10%;
  font-family: "Muli";
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

img {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  border-radius: 0;
}

form {
  font-family: "Museo Sans 500";
  font-size: 1rem;
  color: #363636;
}

option {
  color: #363636;
}

.form-control {
  border: none;
  border-radius: 4px;
  color: #363636;
}

input {
  padding: 1.4rem;
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
  color: #5085a5;
}

a:hover {
  color: #5085a5;
  text-decoration: #e9d496;
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
