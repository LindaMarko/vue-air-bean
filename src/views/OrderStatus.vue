<template>
  <div id="order-status">
    <p class="order-nm">Ordernummer <strong>#12DV23F</strong></p>
    <img src="../assets/graphics/drone.svg" alt="Drone delivering coffee">
    <div class="confirm-text">
      <h1>Din beställning är på väg!</h1>
      <p><strong>13</strong> minuter</p>
    </div>
    <router-link to="" class="cool-btn">Ok, cool!</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#order-status{
  background-color: #E5674E;
  max-width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 0 3rem;
}
.order-nm {
  font-size: .9rem;
  margin-bottom: 0;
  opacity: .7;
}
.confirm-text h1{
  margin-top: 0;
}
.confirm-text p{
  font-size: 1.2rem;
}
.cool-btn {
  font-family: 'PT Serif', serif;
  font-size: 1.3rem;
  background-color: #fff;
  color: #2F2926;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  margin-bottom: 2rem;
  padding: .8rem 2rem;
  text-decoration: none;
}
</style>