// Shared data between cart and mini-cart


export const store = {

    state: {
        cartData: []
    },

    getCart() {
        $('#button1').click(function () {
            window.location.reload();

        })
        axios.get('/cart.js')
            .then(response => {

                this.state.cartData.push(response.data);
                jQuery.getJSON('/cart.js', function (cart) {
                    $('#cartCount').html(cart.item_count);
                });

                this.state.cartData.push(response.data);
                jQuery.getJSON('/cart.js', function (cart) {
                    $('#cartCountDva').html(cart.item_count);
                });
            })
            .catch(error => {
                console.log(error)
            });
    }

}