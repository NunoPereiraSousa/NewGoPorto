<template>
  <div>
    <div class="container-fluid text-center">
      <p data-text="Creating your route..." class="lead">
        Creating your route...
      </p>

      <div class="wrapper">
        <div class="map">
          <div class="line">
            <svg viewBox="0 0 1591 830">
              <path
                d="m370.92,632.3,339.85-137.45,139.33-80.962,20.711,5.6485c37.93-69.02,86.29-135.73,166.59-207.11l25.418-44.247"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.$router.push({
        path: "/my-trip"
      });
    }, 6800);
  }
};
</script>

<style lang="scss">
.wrapper {
  max-width: 75%;
  width: 100vw;
  height: 100%;
  position: relative;
  left: 50%;
  transform: translate3d(-50%, 2%, 0);
}

.map {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 52.168447517%;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/22567/map.png);
  background-size: contain;
  box-shadow: 0 0 30px rgb(90, 90, 90);
  border-radius: 10px;
}

p.lead {
  font-family: "Geared Slab";
  padding-top: 0.5em;
  color: transparent;
  font-weight: 500;
  font-size: 2em;
}
p:before {
  content: attr(data-text);
  position: absolute;
  overflow: hidden;
  max-width: 7em;
  white-space: nowrap;
  color: #5085a5;
  animation: loading 6s linear;
}

.line {
  position: absolute;
  width: 100%;
  height: 0;
  right: 50%;
  padding-bottom: 52.168447517%;
  top: 0;

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    path {
      fill-opacity: 0;
      stroke: #f00;
      stroke-width: 5;
      stroke-dasharray: 870;
      stroke-dashoffset: 870;
      animation-name: draw;
      animation-duration: 6s;
      animation-timing-function: linear;
    }
  }
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes loading {
  0% {
    max-width: 0;
  }
}
</style>
