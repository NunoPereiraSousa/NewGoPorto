<template>
  <div>
    <button type="submit" class="btn btn-primary w-50 mt-lg-3">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: "SubmitButtonForm"
};
</script>

<style scoped>
button:hover {
  background-color: #e9d496;
  border: none;
  transform: scale(1.01);
}

button:active {
  background-color: #e9d496 !important;
  border: none !important;
  border-color: transparent;
  box-shadow: none !important;
}

button:focus {
  background-color: #e9d496;
  border: none;
  box-shadow: none !important;
}

button {
  background-color: #5085a5;
  border: none;
  font-family: "Geared Slab";
  color: #ffffff;
  font-size: 1.3rem;
}
</style>
