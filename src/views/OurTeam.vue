<template>
  <div class="our-team">
    <div class="container">
      <div class="row">
        <div class="col-12 text-left">
          <h2>
            <span>Our </span>
            <span>Team</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <!-- <Nuno -->
        <div class="col-lg-6 col-sm-12 pt-lg-0 pt-4">
          <div class="containerImg text-center pt-lg-5">
            <img
              src="../assets/OurTeam/Nuno.jpg"
              class="img-fluid"
              alt="Nuno"
            />
            <div class="aboveImg pt-lg-1 pb-lg-1 pt-md-1">
              Nuno Pereira Sousa
            </div>
          </div>
          <div class="pl-0 p-lg-5 d-flex justify-content-center">
            <ul class="text-left fa-ul">
              <li class="pl-2">
                <span class="fa-li"
                  ><i
                    class="fas fa-angle-right"
                    style="color: #5085a5"
                  ></i></span
                >Web Developer;
              </li>
              <li class="pl-2">
                <span class="fa-li"
                  ><i
                    class="fas fa-angle-right"
                    style="color: #5085a5"
                  ></i></span
                >UI/ UX Designer passionate;
              </li>
              <li class="pl-2">
                <span class="fa-li"
                  ><i
                    class="fas fa-angle-right"
                    style="color: #5085a5"
                  ></i></span
                >Musician - Piano artist;
              </li>
              <li class="pl-2">
                <span class="fa-li"
                  ><i
                    class="fas fa-angle-right"
                    style="color: #5085a5"
                  ></i></span
                >Basketball player & Ex-Swimmer athlete;
              </li>
              <li class="pl-2">
                <span class="fa-li"
                  ><i class="fas fa-angle-right" style="color: #5085a5"></i
                ></span>
                3rd best European time <br />
                in 4x200m freestyle relay, 2015;
              </li>
              <li class="pl-2">
                <span class="fa-li"
                  ><i
                    class="fas fa-angle-right"
                    style="color: #5085a5"
                  ></i></span
                >9 national titles;
              </li>
              <li class="pl-2">
                <span class="fa-li"
                  ><i
                    class="fas fa-angle-right"
                    style="color: #5085a5"
                  ></i></span
                >89 medals overall;
              </li>
              <li class="pl-2 pb-lg-2">
                <span class="fa-li"
                  ><i class="fas fa-angle-right" style="color: #5085a5"></i
                ></span>
                I speak Portuguese, English
                <br />and Spanish fluently. I can also <br />speak some Russian,
                French <br />and Danish.
              </li>
            </ul>
          </div>
        </div>
        <!-- Nuno> -->

        <!-- <titas -->
        <div class="col-lg-6 col-sm-12 pt-lg-0 pt-4">
          <div class="containerImg text-center pt-lg-5">
            <img
              src="../assets/OurTeam/Titas.png"
              class="img-fluid"
              alt="Nuno"
            />
            <div class="aboveImg pt-lg-1 pb-lg-1">
              Tiago de Pina
            </div>
          </div>
          <div class="pl-0 pt-3 p-lg-5 d-flex justify-content-center">
            <ul class="text-left fa-ul">
              <li class="pl-2">
                <span class="fa-li"
                  ><i
                    class="fas fa-angle-right"
                    style="color: #5085a5"
                  ></i></span
                >Web Developer;
              </li>
              <li class="pl-2">
                <span class="fa-li"
                  ><i
                    class="fas fa-angle-right"
                    style="color: #5085a5"
                  ></i></span
                >Game Developer;
              </li>
              <li class="pl-2">
                <span class="fa-li"
                  ><i
                    class="fas fa-angle-right"
                    style="color: #5085a5"
                  ></i></span
                >Gym;
              </li>
              <li class="pl-2">
                <span class="fa-li"
                  ><i
                    class="fas fa-angle-right"
                    style="color: #5085a5"
                  ></i></span
                >Ex-volleyball player;
              </li>
              <li class="pl-2">
                <span class="fa-li"
                  ><i
                    class="fas fa-angle-right"
                    style="color: #5085a5"
                  ></i></span
                >Game lover;
              </li>
              <li class="pl-2 pb-lg-2">
                <span class="fa-li"
                  ><i class="fas fa-angle-right" style="color: #5085a5"></i
                ></span>
                I speak Portuguese, English,<br />
                Cape Verdean Creole <br />
                fluently. I can also speak some French.
              </li>
            </ul>
          </div>
        </div>
        <!-- /titas> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  font-family: "Muli";
  font-size: 1em;

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

    .containerImg {
      position: relative;
      display: inline-block;

      .aboveImg {
        position: absolute;
        top: 94%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #ffffff;
        background-color: #5085a5;
        opacity: 0.9;
        border-radius: 0 0 8px 8px;
        width: 40%;
      }
    }
  }
}

:root {
  --footer-color: #ffffff;
  --font-color: #404041;
}

.line {
  border-right: 2px solid #ffffff;
}

img {
  width: 40%;
  height: auto;
  border-radius: 8px;
}

h3 {
  font-family: "Geared Slab";
  color: #5085a5;
  font-size: 1.8rem;
}
</style>
