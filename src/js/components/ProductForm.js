import { store } from "./../shared/cartData.js";


if (document.querySelector('.shopify-product-form')) {
    let productForm = new Vue({
        el: ".shopify-product-form",
        delimiters: ['${', '}'],


        data() {

            return {
                counter: 0,
                form: {
                    id: document.getElementById('variant_id').value,
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

            addToCart() {
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
                        this.closeMiniCart();

                        jQuery.getJSON('/cart.js', function (cart) {
                            $('#cartCount').html(cart.item_count);
                        });


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

            closeMiniCart() {
                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }


        }
    });
}
if (document.querySelector('.ugalj')) {

    let ugaljAdd = new Vue({
        el: ".ugalj",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '39388267774128',
                    quantity: 1,

                }

            };

        },

        methods: {
            addTo() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });

}

if (document.querySelector('.olovka-1')) {

    let olovkaOne = new Vue({
        el: ".olovka-1",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37749961392304',
                    quantity: 1,

                }

            };

        },

        methods: {
            addPencileFooter() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}

// sticky baner
if (document.querySelector('.olovka')) {

    let olovkaAdd = new Vue({
        el: ".olovka",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37749961392304',
                    quantity: 1,

                }

            };

        },

        methods: {
            addPencile() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}


// mobile
if (document.querySelector('.olovka-mobile')) {

    let olovkaMobile = new Vue({
        el: ".olovka-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37749961392304',
                    quantity: 1,

                }

            };

        },

        methods: {


            addPencileMobile() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}

if (document.querySelector('.select')) {

    let selectBox = new Vue({
        el: ".select",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                checkedNames: [],
                testovi: {
                    id: this.checkedNames,
                    quantity: 1,

                }

            };

        },

        methods: {
            addToTest() {


                axios.post('/cart/add.js', this.testovi)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            // found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            this.testovi.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// pro paket dole
if (document.querySelector('.pro')) {

    let proAdd = new Vue({
        el: ".pro",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37867110858928',
                    quantity: 1,

                }

            };

        },

        methods: {
            addPro() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}

// ugalj+olovka dole 37868026691760
if (document.querySelector('.ugalj-olovka-dole')) {

    let addUgaljOlovka = new Vue({
        el: ".ugalj-olovka-dole",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37868026691760',
                    quantity: 1,

                }

            };

        },

        methods: {
            addUgaljOlovka() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// pro-ugalj dole 37867846795440
if (document.querySelector('.ugalj-pro-dole')) {

    let addProUgalj = new Vue({
        el: ".ugalj-pro-dole",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37867846795440',
                    quantity: 1,

                }

            };

        },

        methods: {
            addUgaljProDole() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// sticky baner ugalj 39388267774128
if (document.querySelector('.ugalj-baner')) {

    let addUgaljBaner = new Vue({
        el: ".ugalj-baner",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '39388267774128',
                    quantity: 1,

                }

            };

        },

        methods: {
            addUgaljBaner() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// mobile ugalj
if (document.querySelector('.ugalj-mobile')) {

    let ugaljMobile = new Vue({
        el: ".ugalj-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '39388267774128',
                    quantity: 1,

                }

            };

        },

        methods: {


            addUgaljMobile() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}

// sticky baner 2duo+olovka 37866234314928
if (document.querySelector('.duo-olovka-2baner')) {

    let add2DuOlovkaBaner = new Vue({
        el: ".duo-olovka-2-baner",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866234314928',
                    quantity: 1,

                }

            };

        },

        methods: {
            addDuoOlovkaBaner() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}

// mobile duobaner olovka
if (document.querySelector('.duo-olovka-2-mobile')) {

    let duoOlovkaBanner = new Vue({
        el: ".duo-olovka-2-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866234314928',
                    quantity: 1,

                }

            };

        },

        methods: {


            addDuoOlovkaMobile() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// sticky baner 2uglja 37866620125360
if (document.querySelector('.duo-ugalj-baner')) {

    let addDuoUgalj = new Vue({
        el: ".duo-ugalj-baner",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866620125360',
                    quantity: 1,

                }

            };

        },

        methods: {
            addDuoUgaljBaner() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// mobile duo ugalj 
if (document.querySelector('.duo-ugalj-mobile')) {

    let addDuoUgaljMobile = new Vue({
        el: ".duo-ugalj-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866620125360',
                    quantity: 1,

                }

            };

        },

        methods: {


            addDuoUgaljMobile() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}

// sticky baner 2proset 37866669080752
if (document.querySelector('.duo-proset-baner')) {

    let addDvaPro = new Vue({
        el: ".duo-proset-baner",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866669080752',
                    quantity: 1,

                }

            };

        },

        methods: {
            addDvaProSetjBaner() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}

// mobile dva proset 
if (document.querySelector('.dva-proset-mobile')) {

    let addDvaProSetMobile = new Vue({
        el: ".dva-proset-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866669080752',
                    quantity: 1,

                }

            };

        },

        methods: {


            addDvaProSetMobile() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// sticky baner 5uglja 37866717348016
if (document.querySelector('.pet-ugalj-baner')) {

    let addPetUgalj = new Vue({
        el: ".pet-ugalj-baner",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866717348016',
                    quantity: 1,

                }

            };

        },

        methods: {
            addPetUgaljBaner() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// mobile 5 ugalj 
if (document.querySelector('.pet-ugalj-mobile')) {

    let addPetUgaljMobile = new Vue({
        el: ".pet-ugalj-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866717348016',
                    quantity: 1,

                }

            };

        },

        methods: {


            addPetUgaljMobile() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// 37866765582512
if (document.querySelector('.duo-pro-ugalj-baner')) {

    let addDuoProUgalj = new Vue({
        el: ".duo-pro-ugalj-baner",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866765582512',
                    quantity: 1,

                }

            };

        },

        methods: {
            addDuoProUgaljBaner() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}

// mobile 5 ugalj
if (document.querySelector('.duo-pro-ugalj-mobile')) {

    let addDuoProUgaljMobile = new Vue({
        el: ".duo-pro-ugalj-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866765582512',
                    quantity: 1,

                }

            };

        },

        methods: {


            addDuoProUgaljMoible() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// duo 37866972807344
if (document.querySelector('.duo-duo-baner')) {

    let addDuo = new Vue({
        el: ".duo-duo-baner",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866972807344',
                    quantity: 1,

                }

            };

        },

        methods: {
            addDuoDuoBaner() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// mobile 5 ugalj 
if (document.querySelector('.duo-duo-mobile')) {

    let addDuojMobile = new Vue({
        el: ".duo-duo-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37866972807344',
                    quantity: 1,

                }

            };

        },

        methods: {


            addDuoDuoMoible() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// hello smile pro 37867110858928
if (document.querySelector('.hello-baner')) {

    let addHelloSmile = new Vue({
        el: ".hello-baner",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37867110858928',
                    quantity: 1,

                }

            };

        },

        methods: {
            addHelloBaner() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// mobile  
if (document.querySelector('.hello-mobile')) {

    let addHelloMoible = new Vue({
        el: ".hello-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37867110858928',
                    quantity: 1,

                }

            };

        },

        methods: {


            addHelloMoible() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');
                        this.closeMiniCart();

                        jQuery.getJSON('/cart.js', function (cart) {
                            $('#cartCount').html(cart.item_count);
                        });


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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// pro duo set 37867118428336
if (document.querySelector('.pro-duo-baner')) {

    let addProDuo = new Vue({
        el: ".pro-duo-baner",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37867118428336',
                    quantity: 1,

                }

            };

        },

        methods: {
            addProDuoBaner() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');
                        this.closeMiniCart();

                        jQuery.getJSON('/cart.js', function (cart) {
                            $('#cartCount').html(cart.item_count);
                        });


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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// mobile 
if (document.querySelector('.pro-duo-mobile')) {

    let addProDuMobile = new Vue({
        el: ".pro-duo-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37867118428336',
                    quantity: 1,

                }

            };

        },

        methods: {


            addProDuoMobile() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');
                        this.closeMiniCart();

                        jQuery.getJSON('/cart.js', function (cart) {
                            $('#cartCount').html(cart.item_count);
                        });


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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// pro ugalj 37867846795440
if (document.querySelector('.pro-ugaljj-baner')) {

    let addPro = new Vue({
        el: ".pro-ugaljj-baner",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37867846795440',
                    quantity: 1,

                }

            };

        },

        methods: {
            addProUgaljjBaner() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');
                        this.closeMiniCart();

                        jQuery.getJSON('/cart.js', function (cart) {
                            $('#cartCount').html(cart.item_count);
                        });


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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// mobile 
if (document.querySelector('.pro-ugaljj-mobile')) {

    let addProUgaljjMobile = new Vue({
        el: ".pro-ugaljj-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37867846795440',
                    quantity: 1,

                }

            };

        },

        methods: {


            addProUgaljjMobile() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');
                        this.closeMiniCart();

                        jQuery.getJSON('/cart.js', function (cart) {
                            $('#cartCount').html(cart.item_count);
                        });


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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// ugalj olovka 37868026691760
if (document.querySelector('.ugalj-olovke-baner')) {

    let addUgaljOlovkaBaner = new Vue({
        el: ".ugalj-olovke-baner",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37868026691760',
                    quantity: 1,

                }

            };

        },

        methods: {
            addOnee() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');
                        this.closeMiniCart();

                        jQuery.getJSON('/cart.js', function (cart) {
                            $('#cartCount').html(cart.item_count);
                        });


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

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}
// mobile 
if (document.querySelector('.ugalj-olovke-mobile')) {

    let addUgaljOlovkeMobile = new Vue({
        el: ".ugalj-olovke-mobile",
        delimiters: ['${', '}'],

        data() {

            return {
                counter: 0,
                test: {
                    id: '37868026691760',
                    quantity: 1,

                }

            };

        },

        methods: {


            addTestOneMobile() {
                axios.post('/cart/add.js', this.test)
                    .then((response) => {

                        // add data to mini cart object
                        // check if product already exist
                        let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
                        if (found) {
                            found.quantity += parseInt(this.test.quantity);

                            // you can reset the quanity back to 1 if you want
                            // this.form.quantity = 1;
                        } else {
                            // add item at the start of array
                            store.state.cartData[0].items.unshift(response.data);
                        }
                        // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');
                        this.closeMiniCart();

                        jQuery.getJSON('/cart.js', function (cart) {
                            $('#cartCount').html(cart.item_count);
                        });




                    })
                    .catch((error) => {
                        console.log(error);

                    });
            },

            closeMiniCart() {

                $('#cart-drawer-1').addClass('drawer--is-visible');
                // $('.mini-cart .dropdown-menu').addClass('show');
                $('#close-test').click(function () {
                    $("#cart-drawer-1").removeClass('drawer--is-visible');
                });

            }
        },



    });
}