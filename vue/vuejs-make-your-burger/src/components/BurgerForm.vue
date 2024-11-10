<template>
    <Message :msg="msg" v-show="msg"/>
    <div>
        <form id="burger-form" @submit="createBurger">
            <div class="input-container">
                <label for="name">Client</label>
                <input type="text" id="name" name="name" v-model="name" placeholder="Type your name" />
            </div>
            <div class="input-container">
                <label for="bread">Bread</label>
                <select name="bread" id="bread" v-model="bread">
                    <option value="">Choose your bread</option>
                    <option v-for="bread in breads" :key="bread.id" :value="bread.type">
                        {{bread.type}}
                    </option>
                </select>
            </div>
            <div class="input-container">
                <label for="meat">Meat</label>
                <select name="meat" id="meat" v-model="meat">
                    <option value="">Choose your Meat</option>
                    <option v-for="meat in meats" :key="bread.id" :value="meat.type">
                        {{meat.type}}
                    </option>
                </select>
            </div>
            <div class="input-container">
                <input type="submit" class="submit-btn" name="name" value="Create my burger">
            </div>
        </form>
    </div>
</template>

<script>
    import Message from './Message.vue';
    export default {
        name: 'BurgerForm',
        components: {
            Message
        },
        data(){
            return {
                breads: '',
                meats: '',
                name: '',
                bread: '',
                meat: '',
                status: 'Requested',
                msg: ''
            }
        },
        methods : {
            async getIngredients() {
                const req = await fetch('http://localhost:3000/ingredients');
                const data = await req.json();
                this.breads = data.breads;
                this.meats = data.meats;
                // console.log(data)
            },
            async createBurger(e){
                e.preventDefault();
                const data = {
                    name: this.name,
                    meat: this.meat,
                    bread: this.bread,
                    status: 'Ordered'
                }
                const dataJson = JSON.stringify(data);
                const req = await fetch('http://localhost:3000/burgers', {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: dataJson
                });
                const res = await req.json();
                this.msg = `Order number ${res.id} created successfully.`
                // console.log(res);
                this.name = '' ;
                this.meat = '' ;
                this.bread = '' ;
            }
        },
        mounted() {
            this.getIngredients();
        }
    }
</script>

<style scoped>

    #burger-form {
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: black;
        padding: 5px 10px;
        border-left: 4px solid #FCBA03;
    }

    input, select {
        padding: 5px 10px;
        width: 400px;
    }
    .submit-btn{
        background-color: black;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid black;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: 0.5s;
    }
    .submit-btn:hover {
        background-color: transparent;
    }
    
</style>