<template>
  <div class="login">
    <header>
      <router-link to="/navigation">
        <NavIcon />
      </router-link>
    </header>
    <main>
      <div class="center">
        <img src="../assets/graphics/logo-sml.svg" alt="company logo" />
        <h2>Välkommen till AirBean-familjen!</h2>
        <p>
          Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
        </p>
        <form @submit.prevent="submit">
          <label for="namn">Name</label>
          <input type="text" name="namn" v-model="user.username" />
          <label for="email">Epost</label>
          <input type="text" name="email" v-model="user.email" />

          <div class="gdpr">
            <input type="checkbox" name="gdpr" id="gdpr" v-model="user.gdpr" />
            <label for="gdpr">GDPR Ok!</label>
          </div>
          <p v-if="!gdprApproved" :style="{ color: 'red' }">
            Please accept GDPR!
          </p>
          <input type="submit" value="Brew me a cup!" />
        </form>
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
  data() {
    return {
      user: {
        username: "",
        email: "",
        gdpr: "",
      },
      gdprApproved: true,
    };
  },

  methods: {
    submit() {
      this.gdprApproved = true;
      if (this.user.gdpr) {
        this.$store.commit("addUser", { ...this.user });
      } else {
        this.gdprApproved = false;
      }
    },
  },
};
</script>

<style scoped>
img {
  margin-top: 20px;
}

.gdpr {
  display: flex;
  align-items: center;
}

input[type="text"] {
  background-color: #f3e4e1;
  border-radius: 3px;
  border: 1px solid #2f2926;
  min-height: 20px;
}

label {
  margin-top: 10px;
}

input[type="submit"] {
  background-color: #2f2926;
  color: white;
  border-radius: 20px;
  padding: 7px;
  border: 1px solid #2f2926;
  margin-top: 20px;
  margin-bottom: 50px;
}

form {
  display: flex;
  flex-direction: column;
}

h2 {
  max-width: 200px;
  text-align: center;
}

p {
  text-align: center;
  margin: 10px;
}

header {
  height: 113px;
  background-image: url(../assets/graphics/graphics-header.svg);
  background-repeat: no-repeat;
  padding: 0.8rem;
}

.login {
  background-color: #2f2926;
  height: 648px;
}

main {
  display: flex;
  justify-content: center;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f3e4e1;
  max-width: 341px;
  border-radius: 3px;
}
</style>
