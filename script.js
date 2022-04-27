const coupons = [
	{
		name: 'CODE1',
		discount: '10',
	},
	{
		name: 'CODE2',
		discount: '20',
	},
	{
		name: 'CODE3',
		discount: '30',
	},
	'CODE1',
];

function productPriceWithDiscount() {
	const productPrice = document.getElementById('productPrice').value;
	console.log('El precio del producto ingresado es: ' + productPrice);
	const discountCouponValue = document.getElementById('discountCoupon').value;
	console.log('El cupon ingresado es: ' + discountCouponValue);
	if (!coupons.find((item) => item.name === discountCouponValue)) {
		alert('Cupon no disponible');
	} else {
		const discountByCoupon = coupons.find(
			(element) => element.name === discountCouponValue
		);
		console.log('Descuento del cupon: ' + discountByCoupon.discount);
		const finalPrice =
			(productPrice * (100 - discountByCoupon.discount)) / 100;
		console.log('El precio del producto con descuento es: ' + finalPrice);
	}
}
