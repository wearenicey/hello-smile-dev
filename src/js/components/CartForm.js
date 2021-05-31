import { store } from "./../shared/cartData.js";

if (document.querySelector('.cart-form')) {


    let productForm = new Vue({
        el: ".cart-form",
        delimiters: ['${', '}'],

        data() {
            return {
                cartData: store.state.cartData,

            }
        },

        computed: {
            cart_total_price() {
                let total = 0;

                this.cart.items.forEach(item => {
                    total += item.quantity * item.price;
                });

                return total;

            },
            cart() {
                return this.cartData[0]
            },

        },

        methods: {

            total_price(item) {
                return item.price * item.quantity;
            },

            updateCart() {

                let result = this.cart.items.reduce(
                    (accumulator, target) => ({ ...accumulator, [target.variant_id]: target.quantity }),
                    {});

                console.log(result);


                axios.post('/cart/update.js', { updates: result })
                    .then((response) => {

                        store.state.cartData[0] = response.data;



                    })
                    .catch(function (error) {

                    });


            },

            getCart() {
                axios.get('/cart.js')
                    .then(response => {
                        this.cart = response.data;
                    })
                    .catch(error => {
                        console.log(error)

                    });
            },

            addToCart() {
                axios.post('/cart/add.js', this.form)
                    .then(function (response) {



                    })
                    .catch(function (error) {

                    });
            },
            deleteFromCart() {


                axios.post('/cart/change.js', {
                    quantity: 0,
                    line: 1
                })
                    .then(function (response) {
                        location.reload();

                    })
                    .catch(function (error) {
                        console.log(response);
                    })

            },

        }
    });




}