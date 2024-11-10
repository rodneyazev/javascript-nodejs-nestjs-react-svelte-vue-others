<template>
    <nav>
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/orders">Orders</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        props: ['logo','alt']
    }
</script>

<style scoped>

    nav {
        background-color: black;
        border-bottom: 4px solid #111;
        height: 100px;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    nav a {
        color: white;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    nav a:hover {
        color: orange;
    }

    #logo-url {
        margin: auto;
        margin-left: 0;
    }

    #logo {
        width: 80px;
        height: 80px;
    }

</style>