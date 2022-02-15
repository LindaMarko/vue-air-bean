<template>
   <router-link to="/navigation" class="nav-icon">
    <img src="../assets/graphics/navicon.svg" alt="Navigation" >
  </router-link>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: white;
    padding: .8rem;
    border-radius: 50%;
    cursor: pointer;
}
</style>