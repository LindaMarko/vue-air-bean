<template>
<div class="meny">
      <header></header>
  <main>
        <h1>Meny</h1>
        <div class="menu-item" v-for="menuItem in menu" :key="menuItem.id">
            <span class="upper-part">
            <img class="add-icon" src="../assets/graphics/add.svg" alt="" >
            <h2 class="title">{{menuItem.title}}</h2>
            <div class="dots"></div>
            <h2 class="price">{{menuItem.price}}</h2>
            </span>

            <span class="lower-part">
                <p>{{menuItem.desc}}</p>
                </span>            
        
        </div>
  </main>
  <footer></footer>

</div>

</template>

<script>
export default {
computed:{
    menu(){
        return this.$store.state.menu;
    }
}
}
</script>

<style scoped>

h1{
    text-align: center;
}

.dots{
    border-bottom: 1px black dotted;
    width: 20px;
}

.meny{
    background-color: #F3E4E1;
    max-width: 375px;
}

header{
    height: 113px;
    background-image: url(../assets/graphics/graphics-header.svg);
    background-repeat: no-repeat;
    
}

.add-icon{
    background-color: black;
    border-radius: 50%;
    height: 18px;
    padding: 7px;
    margin-right: 20px;   
}

.upper-part{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.lower-part{
    margin-left: 10%;
}

.menu-item{
    display: flex;
    flex-direction: column;
}

footer{
    height: 73px;
    background-image: url(../assets/graphics/graphics-footer.svg);
    background-repeat: no-repeat;
    background-size: 100%;
}

</style>