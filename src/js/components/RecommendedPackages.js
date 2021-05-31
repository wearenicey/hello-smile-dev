// //RecommendedPackeges

//RecommendedProducts
import { store } from "./../shared/cartData.js";

//1. Duo paket olovke 


let addDuoPaketOlovke = new Vue({
  el: ".duo-paket-olovke-preporuka",
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
    addDuoPaketOlovkePreporuka() {
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

// duo pro ugalj  37866765582512

let addDuoProUgaljPreporuka = new Vue({
  el: ".duo-pro-ugalj-preporuka",
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
    addDuoProUgaljPreporuka() {
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
// 2Duo + olovka 37866972807344

let addDuoOlovkaPreporuka = new Vue({
  el: ".add-duo-olovka-preporuka",
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
    addDuoOlovkaPreporuka() {
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
//Ugalj stranica

//5 uglja preporuka

let addPetUgaljPreporuka = new Vue({
  el: ".add-pet-ugalj-preporuka",
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


    addPetUgaljPreporuka() {
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


          new Noty({
            type: 'success',
            timeout: 3000,
            layout: 'topRight',
            text: 'Product added to cart!'
          }).show();

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

// dva uglja
let addDvaUgljaPreporuka = new Vue({
  el: ".dva-uglja-preporuka",
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


    addDvaUgljaPreporuka() {
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

//APARAT PROZIVOD

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
//  dva proset preopruka
let addDvaProsetPreporuka = new Vue({
  el: ".dva-proset-preporuka",
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


    addDvaProsetPreporuka() {
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

//37867118428336
// pro duo set 37867118428336

let addProDuoPreporuka = new Vue({
  el: ".pro-duo-preporuka",
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
    addProDuoPreporuka() {
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

// pro ugalj 37867846795440

let proUgaljPreporuka = new Vue({
  el: ".pro-ugalj-preporuka",
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


    proUgaljPreporuka() {
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


// ugalj olovka 37868026691760

let addUgaljOlovkaPreporuka = new Vue({
  el: ".ugalj-olovke-preporuka",
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
    addUgaljOlovkaPreporuka() {
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
// import { store } from "./../shared/cartData.js";

// //1. Duo paket olovke 


// let addDuoPaketOlovke = new Vue({
//   el: ".duo-paket-olovke-preporuka",
//   delimiters: ['${', '}'],

//   data() {

//     return {
//       counter: 0,
//       test: {
//         id: '37866234314928',
//         quantity: 1,

//       }

//     };

//   },

//   methods: {
//     addDuoPaketOlovkePreporuka() {
//       axios.post('/cart/add.js', this.test)
//         .then((response) => {

//           // add data to mini cart object
//           // check if product already exist
//           let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
//           if (found) {
//             found.quantity += parseInt(this.test.quantity);

//             // you can reset the quanity back to 1 if you want
//             // this.form.quantity = 1;
//           } else {
//             // add item at the start of array
//             store.state.cartData[0].items.unshift(response.data);
//           }
//           // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

//           jQuery.getJSON('/cart.js', function (cart) {
//             $('#cartCount').html(cart.item_count);
//           });

//           this.closeMiniCart();

//           new Noty({
//             type: 'success',
//             timeout: 3000,
//             layout: 'topRight',
//             text: 'Product added to cart!'
//           }).show();

//         })
//         .catch((error) => {
//           console.log(error);
//           new Noty({
//             type: 'error',
//             layout: 'topRight',
//             text: 'Some notification text'
//           }).show();
//         });
//     },

//     closeMiniCart() {

//       $('#cart-drawer-1').addClass('drawer--is-visible');
//       // $('.mini-cart .dropdown-menu').addClass('show');
//       $('#close-test').click(function () {
//         $("#cart-drawer-1").removeClass('drawer--is-visible');
//       });

//     }
//   },



// });

// // duo pro ugalj  37866765582512

// let addDuoProUgaljPreporuka = new Vue({
//   el: ".duo-pro-ugalj-preporuka",
//   delimiters: ['${', '}'],

//   data() {

//     return {
//       counter: 0,
//       test: {
//         id: '37866765582512',
//         quantity: 1,

//       }

//     };

//   },

//   methods: {
//     addDuoProUgaljPreporuka() {
//       axios.post('/cart/add.js', this.test)
//         .then((response) => {

//           // add data to mini cart object
//           // check if product already exist
//           let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
//           if (found) {
//             found.quantity += parseInt(this.test.quantity);

//             // you can reset the quanity back to 1 if you want
//             // this.form.quantity = 1;
//           } else {
//             // add item at the start of array
//             store.state.cartData[0].items.unshift(response.data);
//           }
//           // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

//           jQuery.getJSON('/cart.js', function (cart) {
//             $('#cartCount').html(cart.item_count);
//           });

//           this.closeMiniCart();

//           new Noty({
//             type: 'success',
//             timeout: 3000,
//             layout: 'topRight',
//             text: 'Product added to cart!'
//           }).show();

//         })
//         .catch((error) => {
//           console.log(error);
//           new Noty({
//             type: 'error',
//             layout: 'topRight',
//             text: 'Some notification text'
//           }).show();
//         });
//     },

//     closeMiniCart() {

//       $('#cart-drawer-1').addClass('drawer--is-visible');
//       // $('.mini-cart .dropdown-menu').addClass('show');
//       $('#close-test').click(function () {
//         $("#cart-drawer-1").removeClass('drawer--is-visible');
//       });

//     }
//   },



// });
// // 2Duo + olovka 37866972807344

// let addDuoOlovkaPreporuka = new Vue({
//   el: ".add-duo-olovka-preporuka",
//   delimiters: ['${', '}'],

//   data() {

//     return {
//       counter: 0,
//       test: {
//         id: '37866972807344',
//         quantity: 1,

//       }

//     };

//   },

//   methods: {
//     addDuoOlovkaPreporuka() {
//       axios.post('/cart/add.js', this.test)
//         .then((response) => {

//           // add data to mini cart object
//           // check if product already exist
//           let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
//           if (found) {
//             found.quantity += parseInt(this.test.quantity);

//             // you can reset the quanity back to 1 if you want
//             // this.form.quantity = 1;
//           } else {
//             // add item at the start of array
//             store.state.cartData[0].items.unshift(response.data);
//           }
//           // document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

//           jQuery.getJSON('/cart.js', function (cart) {
//             $('#cartCount').html(cart.item_count);
//           });

//           this.closeMiniCart();

//           new Noty({
//             type: 'success',
//             timeout: 3000,
//             layout: 'topRight',
//             text: 'Product added to cart!'
//           }).show();

//         })
//         .catch((error) => {
//           console.log(error);
//           new Noty({
//             type: 'error',
//             layout: 'topRight',
//             text: 'Some notification text'
//           }).show();
//         });
//     },

//     closeMiniCart() {

//       $('#cart-drawer-1').addClass('drawer--is-visible');
//       // $('.mini-cart .dropdown-menu').addClass('show');
//       $('#close-test').click(function () {
//         $("#cart-drawer-1").removeClass('drawer--is-visible');
//       });

//     }
//   },



// });
// //Ugalj stranica

// //Pet uglja preporuka

// let addPetUgaljPreporuka = new Vue({
//   el: ".add-pet-ugalj-preporuka",
//   delimiters: ['${', '}'],

//   data() {

//     return {
//       counter: 0,
//       test: {
//         id: '37866717348016',
//         quantity: 1,

//       }

//     };

//   },

//   methods: {


//     addPetUgaljPreporuka() {
//       axios.post('/cart/add.js', this.test)
//         .then((response) => {

//           // add data to mini cart object
//           // check if product already exist
//           let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
//           if (found) {
//             found.quantity += parseInt(this.test.quantity);

//             // you can reset the quanity back to 1 if you want
//             // this.form.quantity = 1;
//           } else {
//             // add item at the start of array
//             store.state.cartData[0].items.unshift(response.data);
//           }
//           document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

//           jQuery.getJSON('/cart.js', function (cart) {
//             $('#cartCount').html(cart.item_count);
//           });

//           this.closeMiniCart();

//           new Noty({
//             type: 'success',
//             timeout: 3000,
//             layout: 'topRight',
//             text: 'Product added to cart!'
//           }).show();

//         })
//         .catch((error) => {
//           console.log(error);
//           new Noty({
//             type: 'error',
//             layout: 'topRight',
//             text: 'Some notification text'
//           }).show();
//         });
//     },

//     closeMiniCart() {

//       $('#cart-drawer-1').addClass('drawer--is-visible');
//       // $('.mini-cart .dropdown-menu').addClass('show');
//       $('#close-test').click(function () {
//         $("#cart-drawer-1").removeClass('drawer--is-visible');
//       });

//     }
//   },



// });

// // dva uglja
// let addDvaUgljaPreporuka = new Vue({
//   el: ".dva-uglja-preporuka",
//   delimiters: ['${', '}'],

//   data() {

//     return {
//       counter: 0,
//       test: {
//         id: '37866620125360',
//         quantity: 1,

//       }

//     };

//   },

//   methods: {


//     addDvaUgljaPreporuka() {
//       axios.post('/cart/add.js', this.test)
//         .then((response) => {

//           // add data to mini cart object
//           // check if product already exist
//           let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
//           if (found) {
//             found.quantity += parseInt(this.test.quantity);

//             // you can reset the quanity back to 1 if you want
//             // this.form.quantity = 1;
//           } else {
//             // add item at the start of array
//             store.state.cartData[0].items.unshift(response.data);
//           }
//           document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

//           jQuery.getJSON('/cart.js', function (cart) {
//             $('#cartCount').html(cart.item_count);
//           });

//           this.closeMiniCart();

//           new Noty({
//             type: 'success',
//             timeout: 3000,
//             layout: 'topRight',
//             text: 'Product added to cart!'
//           }).show();

//         })
//         .catch((error) => {
//           console.log(error);
//           new Noty({
//             type: 'error',
//             layout: 'topRight',
//             text: 'Some notification text'
//           }).show();
//         });
//     },

//     closeMiniCart() {

//       $('#cart-drawer-1').addClass('drawer--is-visible');
//       // $('.mini-cart .dropdown-menu').addClass('show');
//       $('#close-test').click(function () {
//         $("#cart-drawer-1").removeClass('drawer--is-visible');
//       });

//     }
//   },



// });

// // pro duo set 37867118428336

// let proDuoSetPreporuka = new Vue({
//   el: ".pro-duo-set-preporuka",
//   delimiters: ['${', '}'],

//   data() {

//     return {
//       counter: 0,
//       test: {
//         id: '37867118428336',
//         quantity: 1,

//       }

//     };

//   },

//   methods: {


//     proDuoSetPreporuka() {
//       axios.post('/cart/add.js', this.test)
//         .then((response) => {

//           // add data to mini cart object
//           // check if product already exist
//           let found = store.state.cartData[0].items.find(product => product.variant_id == response.data.variant_id);
//           if (found) {
//             found.quantity += parseInt(this.test.quantity);

//             // you can reset the quanity back to 1 if you want
//             // this.form.quantity = 1;
//           } else {
//             // add item at the start of array
//             store.state.cartData[0].items.unshift(response.data);
//           }
//           document.getElementById("cart-drawer-1").classList.add('drawer--is-visible');

//           jQuery.getJSON('/cart.js', function (cart) {
//             $('#cartCount').html(cart.item_count);
//           });

//           this.closeMiniCart();

//           new Noty({
//             type: 'success',
//             timeout: 3000,
//             layout: 'topRight',
//             text: 'Product added to cart!'
//           }).show();

//         })
//         .catch((error) => {
//           console.log(error);
//           new Noty({
//             type: 'error',
//             layout: 'topRight',
//             text: 'Some notification text'
//           }).show();
//         });
//     },

//     closeMiniCart() {

//       $('#cart-drawer-1').addClass('drawer--is-visible');
//       // $('.mini-cart .dropdown-menu').addClass('show');
//       $('#close-test').click(function () {
//         $("#cart-drawer-1").removeClass('drawer--is-visible');
//       });

//     }
//   },



// });




