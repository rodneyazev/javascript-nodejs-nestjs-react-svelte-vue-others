<template>
  <Navbar :logo="logo_src" :alt="app_name" />
  <router-view/>
  <Footer />
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  export default {
    components: {
      Navbar,
      Footer
    },
    data(){
      return {
        logo_src: '/img/burger.jpg',
        app_name: 'Make your burguer'
      }
    }
  }
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');

  * {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;
    box-sizing:border-box;
  }

  .main-container {
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin: 30px 0;
  }

</style>
