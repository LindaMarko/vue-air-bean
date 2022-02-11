<template>
  <div class="login">

      <header></header>
      <main>
          <div class="center-div">
              <img src="../assets/graphics/logo-sml.svg" alt="company logo">
              <h2>Välkommen till AirBean-familjen!</h2>
              <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
              <form action="">
                  <label for="namn">Name</label>
                  <input type="text" name="namn">
                  <label for="email">Epost</label>
                  <input type="text" name="email">
                  
                  <div class="gdpr">
                      <input type="radio" name="gdpr" id="gdpr">
                      <label for="gdpr">GDPR Ok!</label>
                      </div>
                   <input type="submit" value="Brew me a cup!">
                  
              </form>
          </div>
      </main>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

img{
    margin-top: 20px;
}

.gdpr{
    display: flex;
   
    align-items: center;
}

input[type=text]{
     background-color: #F3E4E1;
     border-radius: 3px;
     border: 1px solid #2F2926;  
     min-height: 20px;
}

label{
    margin-top: 10px;
}

input[type=submit]{
background-color: #2F2926;
color: white;
border-radius: 20px;
padding: 7px;
 border: 1px solid #2F2926;
 margin-top: 20px;
 margin-bottom: 50px;
}

form{
    display: flex;
    flex-direction: column;
}

h2{
    max-width: 200px;
    text-align: center;
}

p{
    text-align: center;
    margin: 10px;
}

header{
    height: 113px;
    background-image: url(../assets/graphics/graphics-header.svg);
    background-repeat: no-repeat;
}

.login{
    background-color: #2F2926;
    height: 648px;
}

main{
     display: flex;
     justify-content: center;  
}

.center-div{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F3E4E1;
     max-width: 341px;
     border-radius: 3px;
}

</style>