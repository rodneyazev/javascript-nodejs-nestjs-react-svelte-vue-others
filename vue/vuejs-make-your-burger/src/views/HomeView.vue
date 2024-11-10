<template>
  <Banner />
  <div class="main-container">
    <h1>Mount your burger</h1>
    <BurgerForm />
  </div>
</template>

<script>
  import Banner from '@/components/Banner.vue';
  import BurgerForm from '@/components/BurgerForm.vue';
  export default {
    name: 'Home',
    components: {
      Banner,
      BurgerForm
    }
  }

</script>