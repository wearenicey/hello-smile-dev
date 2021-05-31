import { store } from "./../shared/cartData.js";

import { cloneDeep } from "lodash/cloneDeep";


if (document.querySelector('.mini-cart')) {

	let miniCart = new Vue({
		el: ".mini-cart",
		delimiters: ['${', '}'],

		data() {
			return {
				cartData: store.state.cartData,
				terms: false,

			}
		},
		created() {
			// mini cart is on every page, that's why, we cal it once here
			store.getCart();

		},

		computed: {
			cart() {
				return this.cartData[0];


			},
			isDisabled: function () {
				return !this.terms;
			},

			cart_total_price() {
				let total = 0;

				this.cart.items.forEach(item => {
					total += item.quantity * item.price;
				});

				return total;

			},


			quantity() {

				this.cartData[0].items.forEach(item => {
					totalOne = item.quantity;
				});

				return totalOne
				console.log(totaleOne)
			},
		},


		methods: {





			total_price(item) {
				return item.price * item.quantity;
			},


			remove(item) {
				let found = this.cart.items.find(product => product.variant_id == item.variant_id);
				if (found) {
					this.$delete(this.cart.items, this.cart.items.indexOf(found));
					axios.post('/cart/change.js', {
						quantity: 0,
						line: 1
					})
						.then(function (response) {
							setTimeout(function () {
								store.getCart()
							}, 1500)
						})
						.catch(function (error) {
							console.log(error);
						})


				}
			},
			updateCart() {





				let result = this.cart.items.reduce(
					(accumulator, target) => ({ ...accumulator, [target.variant_id]: target.quantity }),
					{});
				console.log(result);


				axios.post('/cart/update.js', { updates: result })
					.then((response) => {




						return axios.get('/cart.js')
							.then(response => {
								// console.log(response);

								store.getCart()

							})
							.catch(error => {
								console.log(error)

							});


						this.items = response.data;

						location.reload();



					})
					.catch(function (error) {
						console.log(error)

					});

			},

			getCart() {
				axios.get('/cart.js')
					.then(response => {
						console.log(response);

						this.cart = response.data;
						let results = this.cart.item_count;
						console.log(results)

					})
					.catch(error => {
						console.log(error)

					});
			},

			addToCart() {
				axios.post('/cart/add.js', this.form)
					.then(function (response) {
						console.log(response)
						this.items = response.data;



						return axios.get('/cart.js')
							.then(response => {
								console.log(response);

								this.cart = response.data

							})
							.catch(error => {
								console.log(error)

							});
					})
					.catch(function (error) {
						console.log(response);
					});
			},

			deleteFromCartOne() {


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