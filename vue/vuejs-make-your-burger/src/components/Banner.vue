<template>
    <div id="main-banner">
        <h1>Mount your burger</h1>
    </div>
</template>


<script>
    export default {
        name: 'Banner'
    }
</script>

<style scoped>

    #main-banner {
        background-image: url('~@/assets/img/burger-banner.jpg');
        background-position: 0 -250px;
        background-size: center;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    h1 {
        color: #fff;
        text-align: center;
        font-size: 60px;
        padding: 20px 40px;
        background: rgba(0, 0, 0, 0.7);
    }
    
</style>