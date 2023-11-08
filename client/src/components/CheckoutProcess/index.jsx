import React, { useState } from 'react';
import './style.css';

const CheckoutProcess = () => {
  const [cart, setCart] = useState(0); // Initialize the cart with 0 items

  const [itemValues, setItemValues] = useState({ item1: 0, item2: 0 }); // Initialize input values

  const handleAddToCart = (itemName) => {
    setItemValues((prevValues) => {
      const updatedValues = { ...prevValues, [itemName]: prevValues[itemName] + 1 };
      return updatedValues;
    });
  };

  const handleRemoveFromCart = (itemName) => {
    if (itemValues[itemName] > 0) {
      setItemValues((prevValues) => {
        const updatedValues = { ...prevValues, [itemName]: prevValues[itemName] - 1 };
        return updatedValues;
      });
    }
  };

  const calculateTotalItems = () => {
    // Calculate the total number of items based on itemValues
    const total = Object.values(itemValues).reduce((acc, curr) => acc + curr, 0);
    return total;
  };

  const calculateTotalPayment = () => {
    // Calculate the total payment based on the number of items and their prices
    const item1Price = 45; // Price of Item 1
    const item2Price = 72; // Price of Item 2
    const item3Price = 95.85; // Price of Item 3
    const totalPayment = itemValues.item1 * item1Price + itemValues.item2 * item2Price;
    return totalPayment;
  };

  return (
    <div className="checkout-container">
      <h1>Shopping Cart</h1> <br></br>
     <p className='TeaSsortment'>Total Items in Cart: {calculateTotalItems()}</p>
      <div>
        <ul>
          <li>
            <h1 className='TeaSsortment'>18-Unit Tea Assortment</h1>
            <button onClick={() => handleAddToCart('item1')}>Add</button>
            <input type="text" value={itemValues.item1} readOnly />
            <button onClick={() => handleRemoveFromCart('item1')}>Remove</button> 
          </li> <br></br>
          <li>
            <h1 className='TeaSsortment'>32-Unit Tea Assortment</h1>
            <button onClick={() => handleAddToCart('item2')}>Add</button>
            <input type="text" value={itemValues.item2} readOnly />
            <button onClick={() => handleRemoveFromCart('item2')}>Remove</button>
          </li><br></br>
          <li>
            <h1 className='TeaSsortment'>48-Unit Tea Assortment</h1>
            <button onClick={() => handleAddToCart('item2')}>Add</button>
            <input type="text" value={itemValues.item2} readOnly />
            <button onClick={() => handleRemoveFromCart('item3')}>Remove</button>
          </li><br></br>
        </ul>
      </div>
      <div className='TeaSsortment'>
        <p>Total Payment: ${calculateTotalPayment()}</p>
        <button>Proceed to Checkout</button>
      </div>
      {/* <div>{<StripAPI/>}</div> */}
    </div>
  );
};

export default CheckoutProcess;
