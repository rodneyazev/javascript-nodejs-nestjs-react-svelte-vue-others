<template>
  <div class="main-container">
    <h1>Burgers Ordered</h1>
    <Dashboard />
  </div>
</template>

<script>
  import Dashboard from '@/components/Dashboard.vue';
  export default {
    name: 'Orders',
    components: {
      Dashboard
    }
  }
</script>