//RecommendedProducts
import { store } from "./../shared/cartData.js";



//POCETNA PREPORUCENI NOVI PROIZVODI
let ugaljPocetna = new Vue({
  el: ".ugalj-pocetna",
  delimiters: ['${', '}'],

  data() {

    return {
      counter: 0,
      test: {
        id: '39624217133232',
        quantity: 1,

      }

    };

  },

  methods: {
    addToUgaljPocetna() {
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

let addOlovkaPocetna = new Vue({
  el: ".olovka-pocetna",
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

  // computed: {
  //   openDrawer() {
  //     return document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

  //   },
  // },

  methods: {
    addOlovkaPocetna() {
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

let addProPocenta = new Vue({
  el: ".pro-pocetna",
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
    addProPocenta() {
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
          this.closeMiniCart();



          jQuery.getJSON('/cart.js', function (cart) {
            $('#cartCount').html(cart.item_count);
          });

          this.closeMiniCart();



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