<template>
  <div class="menu-item">
    <span class="upper-part">
      <h2 class="title">{{ title }}</h2>
      <div class="dots"></div>
      <div class="quantity">
        <img
          src="../assets/graphics/arrow-up.svg"
          alt="Arrow up"
          @click="increaseQty"
        />
        <p>
          <strong>{{ quantity }}</strong>
        </p>
        <img
          src="../assets/graphics/arrow-down.svg"
          alt="Arrow down"
          @click="decreaseQty"
        />
      </div>
    </span>
    <span class="lower-part">
      <p>{{ price }} kr</p>
    </span>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "price", "quantity"],
  methods: {
    increaseQty() {
      this.$store.dispatch("increaseQty", this.id)
    },
    decreaseQty() {
      this.$store.dispatch("decreaseQty", this.id)
    },
  },
}
</script>

<style scoped>
.dots {
  border-bottom: 1px black dotted;
  width: 100px;
  margin: 0 0.5rem;
}
.upper-part {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.title {
  font-size: 1.3rem;
  margin: 0;
}
.lower-part {
  margin-left: 5%;
}
.lower-part p {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}
.menu-item {
  display: flex;
  flex-direction: column;
}
p {
  margin: 0;
  font-size: 0.8rem;
}
</style>
