<template>
  <div id="home">
    <router-link to="/meny" class="logo">
      <img src="../assets/graphics/airbean-landing.svg" alt="Logo">
    </router-link>
  </div>
</template>

<script>


export default({
  
})
</script>

<style scoped>
#home {
  background-color: #38846D;
  background-image: 
  url(../assets/graphics/intro-graphic-left.svg), 
  url(../assets/graphics/intro-graphic-right.svg);
  background-position: top left, top right;
  background-repeat: no-repeat;
  max-width: 375px;
  height: 667px;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* .logo {
  display: flexbox;
  justify-content: center;
  align-items: center;
} */

</style>
