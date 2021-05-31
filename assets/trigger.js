
Vue.config.devtools = true;
Vue.config.silent = true;


if (document.querySelector('.cart-form')) {



    Vue.filter('money', function (value, sign = 'RSD ') {
        if (!value) return 0;
        return (value / 100).toFixed(2) + sign;
    });




    let productForm = new Vue({
        el: ".cart-form",
        delimiters: ['${', '}'],

        data() {
            return {
                cart: null,
                interval: null,
                cartData: [],
            }
        },



        computed: {
            cart_total_price() {
                let total = 0;

                this.cart.items.forEach(item => {
                    total += item.quantity * item.price;
                });

                return total;
            }
        },

        created() {
            this.getCart();
            this.interval = setInterval(this.refreshData, 5000)


        },

        beforeDestroy() {
            clearInterval(this.interval)
        },
        methods: {



            total_price(item) {
                return item.price * item.quantity;
                if (item.quantity < 1)
                    return remove(item);

            },



            updateCart() {


                let result = this.cart.items.reduce(
                    (accumulator, target) => ({ ...accumulator, [target.variant_id]: target.quantity }),
                    {});
                console.log(result);


                axios.post('/cart/update.js', { updates: result })
                    .then((response) => {

                        this.items = response.data;


                    })
                    .catch(function (error) {
                        console.log(error)

                    });
            },

            getCart() {
                axios.get('/cart.js')
                    .then(response => {
                        console.log(response);
                        this.cart = response.data
                    })
                    .catch(error => {
                        console.log(error)
                    });
            },

            addToCartt() {
                axios.post('/cart/add.js', this.form)
                    .then(function (response) {
                        console.log(response)
                    })
                    .catch(function (error) {
                        console.log(response);
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


