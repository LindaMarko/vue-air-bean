<template>
  <div class="about">
    <header></header>
    <main>
      <h1>Vårt kaffe</h1>
      <p><strong>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ipsa a ratione! Atque laborum saepe nihil modi laboriosam mollitia incidunt cum vel voluptatum, labore similique dolore. Mollitia doloremque vel aliquam.</strong></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam cupiditate nesciunt nobis praesentium atque eum, consequatur unde officiis cum ut harum commodi impedit recusandae deserunt quaerat veniam nemo rerum minima voluptates eaque illo minus laborum blanditiis! Iure rerum minima maiores atque. Esse laudantium magnam nisi cum et similique quaerat!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus natus culpa autem voluptatibus, iusto unde! Provident quia rem, exercitationem enim perspiciatis sint odio repellat molestias natus iure possimus a temporibus neque earum odit excepturi, culpa, quisquam et placeat alias dignissimos dolor corrupti quam distinctio! Blanditiis, pariatur rem ad quaerat ea esse sapiente magni molestiae provident aut enim facere at nulla quis eos nihil error deleniti neque maiores temporibus. Labore.</p>
    </main>

    <div class="maker">

      <img src="../assets/graphics/eva-cortado.jpg" alt="">
      <h3>Eva Cortado</h3>
      <p id="maker-title">VD & Grundare</p>
    </div>
    <footer></footer>
  </div>
</template>

<style scoped>

h1{
  font-size: 42px;
}

h3{
  margin: 7px;
}

.about{
   background-color: #F3E4E1;
    max-width: 375px;
}

header{
    height: 113px;
    background-image: url(../assets/graphics/graphics-header.svg);
    background-repeat: no-repeat;
}

main{
  padding: 30px;
  display: flex;
  flex-direction: column;
}

p{
  font-size: 12px;
}

img{
  border-radius: 50%;
  width: 74px;
}

.maker{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

#maker-title{
  margin: 0px;
  margin-bottom: 20px;
}

footer{
    height: 73px;
    background-image: url(../assets/graphics/graphics-footer.svg);
    background-repeat: no-repeat;
}
</style>
