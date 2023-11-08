import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const primaryContext = createContext();

const PrimaryProvider = ({ children }) => {
  // state for products
  const [products, setProducts] = useState([]);

  // state for items
  const [items, setItems] = useState([]);

  // Fetch products when the component mounts
  // const fetchProducts = async () => {
  //   try {
  //     const response = await axios.get('/server/products');
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // };
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('/server/products');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <primaryContext.Provider
      value={{
        products,
        setProducts,
        items,
        setItems,
        // fetchProducts
      }}
    >
      {children}
    </primaryContext.Provider>
  );
};

export default PrimaryProvider;
