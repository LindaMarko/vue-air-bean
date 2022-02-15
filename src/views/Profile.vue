<template>
  <div class="profile">
    <header>
      <router-link to="/navigation">
        <NavIcon />
      </router-link>
    </header>
    <main>
      <div class="user-info">
        <img src="../assets/graphics/profile.svg" alt="profile image" />
        <h2>{{ users[0].name }}</h2>
        <p>{{ users[0].epost }}</p>
      </div>

      <div class="orders">
        <h3>Orderhistorik</h3>
        <div v-for="order in orders" :key="order.orderNumber">
          <span class="number-date">
            <h4>{{ order.orderNumber }}</h4>
            <p>{{ order.orderDate }}</p>
          </span>
          <span class="sum">
            <p>Total ordersumma</p>
            <p>{{ order.totalSum }}</p>
          </span>
        </div>
        <span class="total">
          <p>Totalt spenderat</p>
          <p>{{ totalSum }}</p>
        </span>
      </div>
    </main>
  </div>
</template>

<script>
import NavIcon from "../components/NavIcon.vue";
export default {
  components: {
    NavIcon,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    orders() {
      return this.$store.state.orders;
    },
    totalSum() {
      let sum = 0;
      for (let i = 0; i < this.orders.length; i++) {
        sum = sum + this.orders[i].totalSum;
      }
      return sum;
    },
  },
};
</script>

<style scoped>
.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  padding-bottom: 60px;
}

.number-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
}

.sum {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgray;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 0px;
}

header {
  height: 113px;
  background-image: url(../assets/graphics/graphics-header.svg);
  background-repeat: no-repeat;
  padding: 0.8rem;
}

.profile {
  background-color: #2f2926;
}

h2 {
  color: white;
  margin-bottom: 0px;
}

p,
h4 {
  color: rgb(161, 159, 159);
  margin: 8px;
}

h3 {
  color: white;
  margin-left: 15px;
}

.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
