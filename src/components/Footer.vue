<template>
  <footer class="p-4">
    <div class="container">
      <div class="row text-center d-flex align-items-center">
        <div class="col-lg-6 col-sm-12">
          <router-link :to="{ name: 'about-us' }">About Us</router-link>
          <router-link :to="{ name: 'contacts' }">Contacts</router-link>
          <router-link :to="{ name: 'our-team' }">Our Team</router-link>
        </div>
        <div class="col-lg-6 col-sm-12">
          <p class="m-0">
            &lt;Coded by Nuno & Tiago &copy; 2020. All Rights Reserved /&gt;
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: auto;
  background: #fefefa;
  box-shadow: 0 -4px 2px -5px #333;
  a {
    text-decoration: none;
    color: #212529 !important;
    padding: 0 2em 0 2em;
    font-size: 1.05em;
    font-weight: 500;
    border-right: 2px solid rgba(54, 54, 54, 0.1);
    &:hover {
      text-decoration: none;
      color: #e9d496 !important;
    }
    &:last-child {
      border-right: none;
    }
  }
  p {
    font-size: 1.05em;
    font-weight: 500;
  }
}
</style>
