<template>
  <nav>
    <img src="../assets/graphics/close.svg" alt="Close this navigation" class="close-icon">

    <div class="nav-items">
      <router-link class="link" to="/meny">Meny</router-link>
      <hr>
    <router-link class="link" to="/our-coffee">Vårt kaffe</router-link>
    <hr>
    <router-link class="link" to="/profile">Min profil</router-link>
    <hr>
    <router-link class="link" to="/orderstatus">Orderstatus</router-link></div>
    
  </nav>
</template>

<script>
export default {

}
</script>

<style>

hr{
  width: 48px;
  border: 0.5px solid rgb(122, 122, 122);
}
.close-icon{
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  max-width: 20px;
  margin: 10px;
}

.nav-items{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}

.link{
  color: white;
  text-decoration: none;
  font-size: 32px;
  margin: 15px;
}

nav{
  background-color: #2F2926;
  min-height: 667px;
}
</style>