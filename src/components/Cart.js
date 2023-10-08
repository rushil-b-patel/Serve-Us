import React from "react";

function Cart({ cartItems, removeFromCart, updateQuantity, emptyCart }) {
  const cartQuantities = {};

  cartItems.forEach((service) => {
    if (!cartQuantities[service.id]) {
      cartQuantities[service.id] = { ...service, quantity: 1 };
    } else {
      cartQuantities[service.id].quantity += 1;
    }
  });

  const total = Object.values(cartQuantities).reduce((acc, service) => {
    const price = parseFloat(service.price.replace("Rs.", "").trim());
    const quantity = service.quantity;
    return acc + price * quantity;
  }, 0);

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold p-4">Cart</h2>
      {total === 0 ? (
        <p className="p-4 text-center text-gray-600">Cart is empty</p>
      ) : (
        <>
          <ul>
            {Object.values(cartQuantities).map((service) => (
              <li
                key={service.id}
                className="flex justify-between items-center p-4 border-b border-gray-200"
              >
                <div className="flex space-x-2">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-16 h-16 rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p className="text-black">Price: {service.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() =>
                      updateQuantity(service, service.quantity - 1)
                    }
                    className="text-red-500 hover:text-red-700"
                    disabled={service.quantity === 1} // Disable if quantity is 1
                  >
                    -
                  </button>
                  <span className="text-xl">{service.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(service, service.quantity + 1)
                    }
                    className="text-green-500 hover:text-green-700"
                  >
                    +
                  </button>
                </div>
                <span className="text-xl">{service.price}</span>
                <button
                  onClick={() => removeFromCart(service)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="p-4">
            <strong className="text-xl">Total:</strong>{" "}
            <span className="text-2xl">{total.toFixed(2)} Rs.</span>
          </div>
          <div className="p-4">
            <button
              onClick={() => emptyCart()} // Add the emptyCart function
              className="bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600"
            >
              Empty Cart
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
