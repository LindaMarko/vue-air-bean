<template>
<div class="cart">
  <dialog open>
    <h1>Din beställning</h1>
    <div class="menu-item">
      <span class="upper-part">
        <h2 class="title">Bryggkaffe</h2>
        <div class="dots"></div>
        <div class="quantity">
          <img src="../assets/graphics/arrow-up.svg" alt="Arrow up">
          <p><strong>2</strong></p>
          <img src="../assets/graphics/arrow-down.svg" alt="Arrow down">
        </div>
      </span>
      <span class="lower-part">
        <p>98 kr</p>
      </span> 
    </div>
    <div class="menu-item">
      <span class="upper-part">
        <h2 class="title">Caffe Doppio</h2>
        <div class="dots"></div>
        <div class="quantity">
          <img src="../assets/graphics/arrow-up.svg" alt="Arrow up">
          <p><strong>1</strong></p>
          <img src="../assets/graphics/arrow-down.svg" alt="Arrow down">
        </div>
      </span>
      <span class="lower-part">
        <p>49 kr</p>
      </span> 
    </div>
    <div class="menu-item">
      <span class="upper-part">
        <h2 class="title">Cappuccino</h2>
        <div class="dots"></div>
        <div class="quantity">
          <img src="../assets/graphics/arrow-up.svg" alt="Arrow up">
          <p><strong>3</strong></p>
          <img src="../assets/graphics/arrow-down.svg" alt="Arrow down">
        </div>
      </span>
      <span class="lower-part">
        <p>196 kr</p>
      </span> 
    </div>
    <div class="total">
      <span class="upper-part">
        <h2 class="title">Total</h2>
        <div class="dots"></div>
        <p>874 kr</p>
      </span>
      <span class="lower-part">
        <p>inkl moms + drönarleverans</p>
      </span>
    </div>
    <router-link class="order-btn" to="/orderstatus">Take my money!</router-link>
  </dialog>
</div>
</template>

<script>

export default {
  

}
</script>

<style scoped>
dialog {
  width: 341px;
  background: #FFFFFF;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: none;
  padding: 1rem;
  
}
h1 {
  text-align: center;
}
h2 {
  font-size: 1.3rem;
}
.dots{
    border-bottom: 1px black dotted;
    width: 150px;
    margin: 0 .5rem;
}
.upper-part{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.lower-part{
    margin-left: 3%;
}

.menu-item{
    display: flex;
    flex-direction: column;
}
p {
  margin: 0;
  font-size: .8rem;
}
.total {
  margin-top: 5rem;
}

.order-btn {
  font-family: 'PT Serif', serif;
  font-size: 1.3rem;
  background-color: #2F2926;
  color:#fff ;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  margin: 3rem auto;
  padding: .8rem 2rem;
  text-decoration: none;
}
</style>