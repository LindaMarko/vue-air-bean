<template>
  <div class="menu-item">
      <span class="upper-part">
        <h2 class="title">{{title}}</h2>
        <div class="dots"></div>
        <div class="quantity">
          <img src="../assets/graphics/arrow-up.svg" alt="Arrow up">
          <p><strong>{{quantity}}</strong></p>
          <img src="../assets/graphics/arrow-down.svg" alt="Arrow down">
        </div>
      </span>
      <span class="lower-part">
        <p>{{price}} kr</p>
      </span> 
    </div>
</template>

<script>
export default {
  props: ['id','title', 'price', 'quantity'],
}
</script>

<style scoped>
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
</style>