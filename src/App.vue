<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Work+Sans:ital,wght@0,300;0,400;0,500;0,600;1,700&display=swap');

body{
  font-family: 'Work Sans', sans-serif;
}
h1, h2, h3, h4 {
  font-family: 'PT Serif', serif;
}

#app{
  max-width: 375px;
  margin: auto;
}
</style>