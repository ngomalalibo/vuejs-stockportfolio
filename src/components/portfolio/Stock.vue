<template>
    <div class="col-sm-6 col-md-4">
        <div class="card card-info">
            <div class="card heading">
                <h3 class="card-title">{{stock.name}}
                    <small>(Price: {{stock.price}}) | Quantity: {{stock.quantity}}</small></h3>
            </div>
            <div class="card-body">
                <div class="pull-left">
                    <input class="form-control" type="number" placeholder="Quantity" v-model="quantity"
                           :class="{danger:insufficientQuantity}">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success" @click="sellStock"
                            :disabled="insufficientQuantity || quantity <= 0 || Number.isNaN(quantity)">
                        {{insufficientQuantity ? 'Insufficient Quantity' : 'Sell'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }
</style>

<script>

    import {mapActions} from 'vuex';

    export default {
        props: ['stock'],
        data()
        {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientQuantity()
            {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({placeSellOrder: 'sellStock'}),
            sellStock()
            {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>