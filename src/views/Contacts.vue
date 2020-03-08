<template>
  <div class="contacts">
    <div class="container">
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>Contacts & </span>
            <span>Facts</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 col-sm-12 p-5">
          <ul class="text-left fa-ul">
            <li class="pl-2">
              <span class="fa-li"
                ><i class="fas fa-angle-right" style="color: #5085a5"></i
              ></span>
              Escola Superior de Media Artes e Design
            </li>
            <li class="pl-2">
              <span class="fa-li"
                ><i class="fas fa-angle-right" style="color: #5085a5"></i></span
              >Rua D. Sancho I, n.º 981
            </li>
            <li class="pl-2">
              <span class="fa-li"
                ><i class="fas fa-angle-right" style="color: #5085a5"></i
              ></span>
              4480-876 Vila do Conde
            </li>
            <li class="pl-2">
              <span class="fa-li"
                ><i class="fas fa-angle-right" style="color: #5085a5"></i></span
              >Phone: 252 291 700
            </li>
            <li class="pl-2">
              <span class="fa-li"
                ><i class="fas fa-angle-right" style="color: #5085a5"></i
              ></span>
              Email: geral@esmad.ipp.pt
            </li>
            <li class="pl-2">
              <span class="fa-li"
                ><i class="fas fa-angle-right" style="color: #5085a5"></i
              ></span>
              Nuno: 9180579@esmad.ipp.pt
            </li>
            <li class="pl-2 pb-lg-2">
              <span class="fa-li"
                ><i class="fas fa-angle-right" style="color: #5085a5"></i
              ></span>
              Tiago: 9180526@esmad.ipp.pt
            </li>
          </ul>
          <p class="lead pl-lg-5 pb-lg-3 pl-sm-3 pb-sm-3 text-justify">
            We are easy to reach and always free to talk about oPorto city.
            <br />
            Contact us by email anytime you want, <br />
            we will strive to respond within 24 hours or less.
          </p>
          <p class="lead text-justify pl-lg-5 pl-sm-3 pb-sm-3">
            If you would like to contact personally the creators of this
            website, fill the following form:
          </p>
        </div>
        <div
          class="col-lg-6 col-sm-12 p-lg-5 pt-sm-0 pl-sm-5 pr-sm-5 pb-sm-5 text-left"
        >
          <form @submit.prevent="sendEmail()">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="txtName"
                placeholder="First Name"
                v-model="form.name"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="txtSurname"
                placeholder="Surname"
                v-model="form.surname"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="txtEmail"
                placeholder="Country"
                v-model="form.country"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="txtCountry"
                placeholder="Title"
                v-model="form.title"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control pl-lg-4 pt-lg-3"
                id="QandA"
                rows="5"
                placeholder="Questions and Requests"
                v-model="form.content"
              ></textarea>
            </div>
            <div class="text-center pt-lg-3 pb-md-0 pt-2 pb-4">
              <button type="submit" class="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: function() {
    return {
      emails: [],
      form: {
        id: "",
        name: "",
        surname: "",
        country: "",
        title: "",
        content: ""
      }
    };
  },
  methods: {
    sendEmail() {
      this.form.id = this.getEmailLastId;
      this.$store.commit("NEW_EMAIL", {
        id: this.form.id,
        name: this.form.name,
        surname: this.form.surname,
        country: this.form.country,
        title: this.form.title,
        content: this.form.content
      });
      this.$snotify.success("Email Sent", "Done", {
        timeout: 2000,
        showProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true
      });
      let title = this.form.title;
      let content = this.form.content;
      window.open(
        `mailto:9180579@esmad.ipp.pt;9180526@esmad.ipp.pt?subject=${title}&body=Dear Aministrators, ${content}`
      );
    }
  },
  computed: {
    ...mapGetters(["getEmailLastId"])
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

.container {
  font-family: "Museo Sans 500";
  font-size: 1rem;
  .row:first-child {
    .col-12 {
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
    }
  }
  .row:last-child {
    color: #363636;
    background-color: #ebecec;
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    margin-bottom: 2rem;

    p.lead {
      font-size: 1rem;
      font-weight: 400;
      color: #363636;
      font-family: "Muli";
    }

    li {
      line-height: 2rem;
      font-family: "Muli";
    }
  }

  .btn {
    background-color: #fff;
    border: none;
    font-family: "Geared Slab";
    color: #363636;
    font-size: 1.3rem;
    &:hover {
      background-color: #5085a5;
      border: none;
      color: #fff;
    }
    &:focus {
      background-color: #5085a5;
      color: #fff;
      border: none;
      box-shadow: none !important;
    }
    &:active {
      background-color: #5085a5 !important;
      border: none !important;
      border-color: transparent;
      color: #fff;
      box-shadow: none !important;
    }
  }
}

h3 {
  font-family: "Geared Slab";
  color: #5085a5;
  font-size: 1.8rem;
}

.form-control {
  border: none;
  border-radius: 4px;
  color: #363636;
  box-shadow: none !important;
  .form-group {
    padding-top: 0.5rem;
  }

  input {
    padding: 1.4rem;
  }
}

input:focus {
  border: 1px solid #5085a5 !important;
}
</style>
