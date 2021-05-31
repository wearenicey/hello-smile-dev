// Lazy loading
// import 'lazysizes';
// // import a plugin
// import 'lazysizes/plugins/parent-fit/ls.parent-fit';
const Vue = require('vue/dist/vue.js');
window.Vue = Vue;

let axios = require('axios');
window.axios = axios;

// let jQuery = require('jquery');
// window.jQuery = window.$ = jQuery;
// import 'popper.js';
// import 'bootstrap';
// window.Noty = require('noty');

require('./filters/money.js');

// Vue Components

require('./components/ProductForm.js');
require('./components/CartForm.js');
require('./components/MiniCart.js');
require('./components/counter.js');
require('./components/form_one');
require('./components/RecommendedProducts.js');
require('./components/RecommendedPackages.js')

// javascript
// require('./product.js');
// require('./header.js');

$('#button1').click(function () {
  CartJS.addItem(39387895726256);
  document.getElementById("kec").click();
});

window.onload = function () {
  setTimeout(randContent, 12000)
};

function randContent() {
  $('#alertsBox').css('display', 'block');
  const testimonials = $('#alertsBox')
    .children()
    .filter('div.alertBox');
  const showTestimonial = index => {
    testimonials.hide();
    $(testimonials[index]).show().delay(5000).fadeOut();
    return index === testimonials.length
      ? showTestimonial(0)
      : setTimeout(() => {
        showTestimonial(index + 1);
      }, 25000);
  }
  showTestimonial(0);
}


