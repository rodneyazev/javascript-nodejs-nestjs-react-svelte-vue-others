<template>
    <div id="burger-table">
        <Message :msg="msg" v-show="msg" />
        <div>
            <div id="burger-table-heading">
                <div class="order-id"></div>
                <div>Client</div>
                <div>Bread</div>
                <div>Meat</div>
                <div>Actions</div>
            </div>
        </div>
        <div id="burger-table-rows">
            <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
                <div class="order-number">{{burger.id}}</div>
                <div>{{burger.name}}</div>
                <div>{{burger.bread}}</div>
                <div>{{burger.meat}}</div>
                <div>
                    <select name="status" class="status" @change="updateBurger($event, burger.id)">
                        <option value="">Change status</option>
                        <option v-for="status in burgers_status" :key="status.id" :value="status.type" :selected="burger.status === status.type">
                            {{status.type}}
                        </option>
                    </select>
                    <button class="delete-btn" @click="deleteBurger(burger.id)">Cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Message from './Message.vue';
    export default {
        name: 'Dashboard',
        components: {
            Message
        },
        data(){
            return {
                burgers: '',
                burgers_status: [],
                msg: ''
            }
        },
        methods: {
            async getOrders(){
                const req = await fetch('http://localhost:3000/burgers');
                const data =  await req.json();
                this.burgers = data;
                this.getStatus();
            }  ,
            async getStatus(){
                const req = await fetch('http://localhost:3000/status');
                const data =  await req.json();
                this.burgers_status = data;
            },
            async deleteBurger(id){
                const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                    method: 'DELETE'
                });
                const res = await req.json();
                this.msg = `Order removed successfully`;
                this.getOrders();
                
            },
            async updateBurger(event, id){
                const option = event.target.value;
                const dataJson = JSON.stringify({status: option});
                const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type':'application/json'},
                    body: dataJson
                });
                const res = await req.json();
                console.log(res);
            }
        },
        mounted() {
            this.getOrders();
        }
    }
</script>

<style scoped>

    #burger-table {
        max-width: 1300px;
        margin: 0 auto;
    }

    #burger-table-heading,
    #burger-table-rows,
    .burger-table-row {
        display: flex;
        flex-wrap: wrap;
    }

    #burger-table-heading {
        font-weight: bold;
        padding: 12px;
        border-bottom: 3px solid black;
    }

    #burger-table-heading div,
    .burger-table-row div {
        width: 20%;
    }
    .burger-table-row {
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid #CCC;
    }

    #burger-table-heading .order-id,
    .burger-table-row .order-number {
        width: 5%;
    }

    select {
        padding: 12px 16px;
        margin-right: 12px;
    }

    .delete-btn {
        background-color: black;
        color: orange;
        font-weight: bold;
        border: 2px solid black;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: 0.5s;
    }

    .delete-btn:hover {
        background-color: transparent;
        color: black;
    }

</style>