import { store } from "./../shared/cartData.js";


if (document.querySelector('.form_one')) {

    let productForm = new Vue({
        el: ".form_one",
        delimiters: ['${', '}'],


        data() {

            return {
                counter: 0,
                form: {
                    id: document.getElementById('variant').value,
                    quantity: 1,

                }

            };

        },

        methods: {
            incrementValue() {
                this.form.quantity++;
            },
            decrementValue() {
                if (this.form.quantity > 1) {
                    this.form.quantity--;
                }
            },

            addToCartOne() {
                axios.post('/cart/add.js', this.form)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.form.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        document.getElementById("kec").click();

                        jQuery.getJSON('/cart.js', function (cart) {
                            $('#cartCount').html(cart.item_count);
                        });

                        this.closeMiniCart();

                        new Noty({
                            type: 'success',
                            timeout: 3000,
                            layout: 'topRight',
                            text: 'Product added to cart!'
                        }).show();

                    })
                    .catch((error) => {
                        console.log(error);
                        new Noty({
                            type: 'error',
                            layout: 'topRight',
                            text: 'Some notification text'
                        }).show();
                    });
            },


        }
    });


}