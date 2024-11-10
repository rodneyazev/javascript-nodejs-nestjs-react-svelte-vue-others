<template>
    <div class="message-container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Message',
        props: {
            'msg': String
        }
    }
</script>

<style scoped>
    .message-container {
        color: blue;
        background-color: #CCE5FF;
        border: 2px solid #B8DAFF;
        border-radius: 5px;
        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
        text-align: center;
    }
</style>