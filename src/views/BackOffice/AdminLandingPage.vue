<template>
  <div class="adminLandingPage">
    <div class="container-fluid mt-lg-5 mt-4 text-center">
      <p class="display-4 mx-auto pb-3">Settings</p>
    </div>
    <div class="container-fluid">
      <div class="container mt-lg-5 mb-4">
        <div class="row mt-auto text-center">
          <div class="col-12 col-md-6 col-lg-3">
            <div class="containerImg w-100 h-100">
              <router-link :to="{ name: 'backOfficeUsers' }">
                <i
                  style="font-size: 100px; color: #5085a5;"
                  class="fas fa-users pt-xl-4"
                ></i>
              </router-link>
              <div class="aboveImg pt-lg-1 pb-lg-1">Users</div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="containerImg w-100 h-100">
              <router-link :to="{ name: 'backOfficeCatalog' }">
                <i
                  style="font-size: 100px; color: #5085a5;"
                  class="fa fa-atlas pt-xl-4"
                ></i>
              </router-link>
              <div class="aboveImg pt-lg-1 pb-lg-1">Catalog</div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="containerImg w-100 h-100">
              <router-link :to="{ name: 'backOfficeSuggestion' }">
                <i
                  style="font-size: 100px; color: #5085a5;"
                  class="far fa-lightbulb pt-xl-4"
                ></i>
              </router-link>
              <div class="aboveImg pt-lg-1 pb-lg-1">Suggestions</div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="containerImg w-100 h-100">
              <router-link :to="{ name: 'backOfficeRoutes' }">
                <i
                  style="font-size: 100px; color: #5085a5;"
                  class="fas fa-map-marked-alt pt-xl-4"
                ></i>
              </router-link>
              <div class="aboveImg pt-lg-1 pb-lg-1">Itineraries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p class="lead text-center">
            This part of the website is restricted, all the information is
            confidential.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.container-fluid:first-child {
  width: 100vw;
  height: 10vh;
  p.display-4 {
    font-family: "Geared Slab";
    color: #5085a5;
    font-size: 2.5rem;
    letter-spacing: 0.8px;
    border-bottom: 1px solid rgba(32, 37, 43, 0.2);
    width: 15%;
  }
}
.container-fluid:not(:first-child) {
  width: 100vw;
  height: 65vh;
  background: #f0f0f0;
  & .container:first-child {
    padding: 5%;
    .containerImg img {
      transition: transform 0.5s ease;
    }

    .containerImg {
      position: relative;
      display: inline-block;
      overflow: hidden;
      background-color: #ebecec;
      height: 200px !important;

      &:hover i {
        transition: all 1s ease-in-out;
        transform: scale(1.2);
      }
    }

    .aboveImg {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #ffffff;
      background-color: #5085a5;
      opacity: 0.9;
      border-radius: 0 0 8px 8px;
      font-size: 1.3em;
      width: 100%;
      height: 40%;
    }

    img:not(.graphImg) {
      width: 60%;
      height: auto;
      border-radius: 8px;
      padding: 10% 0 10% 0;
    }
  }
}

.container:last-child {
  .row {
    height: 10vh;
    padding: 5%;
    margin-bottom: 5%;
    p {
      font-weight: 500;
    }
  }
}

div.myBackground:hover {
  background-color: #e9d496;
}

a.btn {
  background-color: #ebecec;
  border: none;
  font-family: "Geared Slab";
  font-size: 1.4rem;
  color: #5085a5;
  transition: transform 0.5s ease;
}

a.btn:hover {
  background-color: #ebecec;
  border: none;
  font-family: "Geared Slab";
  font-size: 1.4rem;
  color: #5085a5;
  transform: scale(1.05);
}

a.btn::after,
.btn-primary:not(:disabled):not(.disabled):active,
.btn-primary:not(:disabled):not(.disabled):active:focus {
  background-color: #ebecec;
  border: none;
  font-family: "Geared Slab";
  font-size: 1.4rem;
  color: #5085a5;
  box-shadow: 0 0 2px 2px;
  outline: none;
}

p.lead {
  font-size: 1.4em;
  font-weight: 300;
  font-family: "Muli";
  color: #5085a5;
}
</style>
