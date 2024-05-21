alert("Bienvenido al cart");

let cart = 0;
let orderID = 0;
let orderQty = [];
let orderSubtotal = [];

orders = [];

class Order {
    constructor(orderID, orderPrice, orderQty, orderSubtotal) {
        this.orderID = orderID
        this.orderPrice = orderPrice;
        this.orderQty = orderQty,
        this.orderSubtotal = orderSubtotal
    }
    applyDiscount(discount) {
        return this.orderPrice - (discount * this.orderPrice);
    }
}

let price = parseFloat(prompt("Ingresa el precio del articulo o bye para salir"));

 while (price != 'bye') {
    
        if (isNaN(price)) {
            while (isNaN(price)) {
            price = (prompt("Por favor Ingresa un numero")) }

            price = parseFloat(price);
        }
        let quantity = parseFloat(prompt("Ingresa la cantidad"));

        if(isNaN(quantity)) {
            do {
            quantity = prompt("Por favor Ingresa un numero")}
            while (isNaN(quantity))
            quantity = parseInt(quantity);
        }
                    
        else {
                cart += (price * quantity);
                orderID +=1;
                orders.push(orderID, price, quantity, cart); 
        }
        console.log("subtotal ", cart);

        price = prompt("Ingresa el precio de el otro articulo o bye para salir");
        if (price == 'bye') {break}

        while (isNaN(price)) {
            price = prompt("Ingresa un numero");} 

        price = parseFloat(price);
        quantity = prompt("Ingresa la cantidad");
        while (isNaN(quantity)) {
            quantity = prompt("por favor ingresa un numero");
        }
        quantity = parseInt(quantity);
}

for (const order of orders) {
    console.log("Order ID " + order.orderID);
    console.log("Price " + order.orderPrice);
    console.log("Qty " + order.orderQty);
    console.log("Subtotal " + order.orderSubtotal);
}