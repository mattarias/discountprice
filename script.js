const productList = [
	{
		name: 'iPhone 13 Pro',
		price: '999',
		slogan: 'The ultimate iPhone.',
		url: 'https://www.apple.com/v/iphone/home/bg/images/overview/compare/compare_iphone_13_pro__bpn3x8hs692a_large.jpg',
	},
	{
		name: 'iPhone 13',
		price: '699',
		slogan: 'A total powerhouse.',
		url: 'https://www.apple.com/v/iphone/home/bg/images/overview/compare/compare_iphone_13__fqzwhmfmroey_large.jpg',
	},
	{
		name: 'iPhone SE',
		price: '429',
		slogan: 'Serious power. Serious value.',
		url: 'https://www.apple.com/v/iphone/home/bg/images/overview/compare/compare_iphone_se__d5blqx1pgymq_large.jpg',
	},
	{
		name: 'iPhone 12',
		price: '599',
		slogan: 'As amazing as ever.',
		url: 'https://www.apple.com/v/iphone/home/bg/images/overview/compare/compare_iphone_12__dz3sv9lzdzu6_large.jpg',
	},
];

const couponsList = [
	{name: '10OFF', discount: 10},
	{name: '50OFF', discount: 50},
	{name: '100OFF', discount: 100},
];

var precioProductoSinDescuento;
var product;

function addProductPrice() {
	console.group('Producto y valor');
	product = document.getElementById('product').value;
	console.log('Producto seleccionado: ' + product);
	const priceByProduct = productList.find(
		(element) => element.name === product
	);
	console.log('Valor del producto seleccionado: ' + priceByProduct.price);
	precioProductoSinDescuento = priceByProduct.price;
	const productPrice = document.getElementById('productPrice');
	productPrice.innerText = priceByProduct.price;
	const productSlogan = document.getElementById('productSlogan');
	productSlogan.innerText = priceByProduct.slogan;
	const productImage = document.getElementById('productImage');
	productImage.src = priceByProduct.url;

	return product;
	console.groupEnd();
}

function productPriceWithDiscount(price, discount) {
	console.group('Calculo de descuentos');
	const priceWithDiscount = 100 - discount;
	const finalPrice = (price * priceWithDiscount) / 100;
	console.log('tipo: ' + typeof finalPrice + finalPrice);
	console.log('Precio del producto con descuento: ' + finalPrice);
	const finalPriceText = document.getElementById('finalPriceText');
	finalPriceText.innerText = finalPrice;
	return finalPrice;
}

function applyDiscount() {
	console.group('Calculo de producto con coupon de descuento');
	let discountCoupon = document.getElementById('discountCoupon').value;
	if (!product) {
		alert('Seleccione un producto');
	} else {
		if (!discountCoupon) {
			console.log('Sin cupon');
		} else {
			console.log('Coupon selecionado: ' + discountCoupon);
			const discountByCoupon = couponsList.find(
				(element) => element.name === discountCoupon
			);
			console.log('Descuento del coupon es: ' + discountByCoupon.discount);
			productPriceWithDiscount(
				precioProductoSinDescuento,
				discountByCoupon.discount
			);
		}
	}
	console.groupEnd();
}
