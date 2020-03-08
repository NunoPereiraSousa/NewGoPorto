<template>
  <div class="profile">
    <div class="container">
      <div class="row" id="pictureRow">
        <div class="col-lg-6 col-12">
          <img
            src="../assets/OurTeam/Nuno.jpg"
            class="img-fluid"
            alt="ProfilePicture"
          />
          <form class="pt-3">
            <!-- <div class="form-group">
              <input
                type="file"
                class="custom-file-input"
                id="customFile"
                readonly
              />
              <img
                :src="Form.image"
                id="picture"
                alt="Image"
                class="img-fluid"
                readonly
              />
            </div> -->
            <div class="form-row">
              <div class="form-group col-lg-12">
                <i class="fas fa-user pr-2 d-inline-block"></i>
                <input
                  type="text"
                  class="form-control d-inline-block"
                  placeholder="Name"
                  v-model="Form.name"
                  readonly
                />
              </div>
              <div class="form-group col-lg-12">
                <i class="fas fa-map-marker-alt pr-2 d-inline-block"></i>
                <input
                  type="text"
                  class="form-control d-inline-block"
                  placeholder="Location"
                  v-model="Form.location"
                  readonly
                />
              </div>
              <div class="form-group col-lg-12">
                <i class="fas fa-calendar-alt pr-1 d-inline-block"></i>
                <input
                  type="text"
                  class="form-control d-inline-block"
                  placeholder="Date of Birth"
                  onfocus="(this.type='date')"
                  v-model="Form.birth"
                  readonly
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
                  v-model="Form.email"
                  readonly
                />
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-6 col-12">
          <form>
            <div class="form-group">
              <textarea
                class="form-control mx-auto"
                rows="4"
                placeholder="What are you thinking of?"
              ></textarea>
            </div>
          </form>
          <div id="stories">
            <img
              src="../assets/OurTeam/Nuno.jpg"
              class="d-inline-block"
              alt="person"
            />
            <p class="d-inline-block pl-3">Nuno Sousa</p>
            <p style="font-size: 14px">21-12-2020</p>
            <p class="lead text-justify">
              Hello! asibfdvadsfbsadbfasbldfsdfasdfaisdfbyasdbfa
              sdvfasfddasibfdvadsfbsadbfasbldfsdfasdfaisdfbyasd
              bfasdvfasfddasibfdvadsfbsadbfasbldfsdfasdfaisdfbya
              sdbfasdvfasfddasibfdvadsfbsadbfasbldfsdfasdfais
              dfbyasdbfasdvfasfddasibfdvadsfbsadbfasbldfsdfasd
              faisdfbyasdbfasdvfasfddasibfdvadsfbsadbfasbldfsd
              fasdfaisdfbyasdbfasdvfasfddasibfdvadsfbsadbfasbld
              fsdfasdfaisdfbyasdbfasdvfasfddasibfdvadsfbsadbfasbld
              fsdfasdfaisdfbyasdbfasdvfasfddasibfdvadsfbsadbfasbl
              dfsdfasdfaisdfbyasdbfasdvfasfddasibfdvadsfbsadbfasb
              ldfsdfasdfaisdfbyasdbfasdvfasfddasibfdvadsfbsadbfas
              bldfsdfasdfaisdfbyasdbfasdvfasfddasibfdvadsfbsadbfas
              bldfsdfasdfaisdfbyasdbfasdvfasfdd
            </p>
            <hr />
          </div>
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
      user: [],
      visitedUser: "",
      users: [],
      Form: {
        id: "",
        name: "",
        email: "",
        birth: "",
        image: ""
      }
    };
  },
  created() {
    if (JSON.parse(localStorage.getItem("visitedUser"))) {
      this.$store.commit(
        "SET_VISITED_USER",
        JSON.parse(localStorage.getItem("visitedUser"))
      );
    }

    this.visitedUser = this.getVisitedUser;
    this.Form.id = this.visitedUser.id;
    this.Form.name = this.visitedUser.name;
    this.Form.birth = this.visitedUser.birth;
    this.Form.email = this.visitedUser.email;
    this.Form.image = this.visitedUser.photo;
  },
  computed: {
    ...mapGetters({
      getVisitedUser: "getVisitedUser"
    })
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
.container {
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
</style>
