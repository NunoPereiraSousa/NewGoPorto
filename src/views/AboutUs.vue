<template>
  <div class="about-us">
    <div class="container section1">
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>About </span>
            <span>Us</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <!-- Content -->
        <div class="col-lg-6 col-sm-12 p-lg-5 pt-5 pl-5 pr-5 pb-2">
          <p class="lead text-justify">
            We are two students, both studying Web Development in ESMAD. We
            created this website for an yearly project based on tourism. We
            decided to make it related with the city of oPorto because it's a
            city that has been growing a lot in the past decade. We also want
            the tourists to spend a very good time in this city so we based this
            website on the functionality of generating trips based on the users
            choices. We also give some information about some places of this
            wonderfull city. If you need any information, please contacts us
            throught out the
            <abbr title="I have some questions! Click here">
              <router-link :to="{ name: 'contacts' }">
                Contacts
              </router-link>
            </abbr>
            section.
          </p>
        </div>
        <!-- End Content -->

        <!-- Advertisement -->
        <div class="col-lg-6 col-sm-12 pt-lg-0 pt-0 pb-4 my-auto">
          <img src="../assets/AboutUs/Pporto.png" class="img-fluid" alt="IPP" />
          <img
            src="../assets/AboutUs/ESMAD.png"
            class="img-fluid"
            alt="ESMAD"
          />
        </div>
        <!-- End Advertisement -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.section1 {
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
      color: #20252b;
      font-size: 1.1rem;
      font-weight: 300;
      font-family: "Muli";
    }

    h3 {
      font-family: "Geared Slab";
      color: #5085a5;
      font-size: 1.8rem;
    }

    img {
      width: 40%;
      height: auto;
      margin: auto;
    }

    a {
      color: #5085a5;
    }

    a:hover {
      color: #5085a5;
      text-decoration: #e9d496;
    }
  }
}
</style>
