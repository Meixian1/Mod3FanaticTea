import React, {useState, useContext} from 'react';
import primaryContext from '../context/primaryContext'
import './style.css'
import ImageOne from '../Images/ImageOne.jpg'; 
import ImageTwo from '../Images/ImageTwo.jpg'; 
import ImageThree from '../Images/ImageThree.jpg'; 
import ImageFour from '../Images/ImageFour.jpg'; 
import ImageFive from '../Images/ImageFive.jpg'; 
import ImageSix from '../Images/ImageSix.jpg'; 
import ImageSeven from '../Images/ImageSeven.jpg'; 
import ImageEight from '../Images/ImageEight.jpg'; 
import ImageNine from '../Images/ImageNine.jpg'; 
import ImageTen from '../Images/ImageTen.jpg'; 
import ImageEleven from '../Images/ImageEleven.jpg'; 
import ImageTwelve from '../Images/ImageTwelve.jpg'; 
import Image13 from '../Images/Image13.jpg'; 
import Image14 from '../Images/Image14.jpg';
import Image15 from '../Images/Image15.jpg';
import Image16 from '../Images/Image16.jpg';  
import Image17 from '../Images/Image17.jpg'; 
import Image18 from '../Images/Image18.jpg'; 
import Image19 from '../Images/Image19.jpg'; 
import Image20 from '../Images/Image20.jpg'; 
import Image21 from '../Images/Image21.jpg'; 
import Image22 from '../Images/Image22.jpg'; 
import Image23 from '../Images/Image23.jpg'; 
import Image24 from '../Images/Image24.jpg'; 

const homeImages = [
  {
    title: "Lemon",
    image: ImageOne,
  },
  {
    title: "Pineapple",
    image: ImageTwo, 
  },
  {
    title: "Passion Fruit",
    image: ImageThree, 
  },
  {
    title: "Passion Fruit",
    image: ImageFour, 
  },
  {
    title: "Lime",
    image: ImageFive, 
  },
  {
    title: "Grape Fruit",
    image: ImageSix, 
  },
  {
    title: "Dragon Fruit",
    image: ImageSeven, 
  },
  {
    title: "Ginger",
    image: ImageEight, 
  },
  {
    title: "Strawberry",
    image: ImageNine, 
  },
  {
    title: "Jasmine",
    image: ImageTen, 
  },
  {
    title: "Osmanthus Fragrans",
    image: ImageEleven, 
  },
  {
    title: "Chrysanthemum",
    image: ImageTwelve, 
  },
  {
    title: "Red Goji",
    image: Image13, 
  },
  {
    title: "Black Goji",
    image: Image14, 
  },
  {
    title: "Mulberry",
    image: Image15,
  },
  {
    title: "Red Dates",
    image: Image16, 
  },
  {
    title: "Longan",
    image: Image17, 
  },
  {
    title: "Rose",
    image: Image18, 
  },
  {
    title: "Kumquat",
    image: Image19, 
  },
  {
    title: "Tangerine",
    image: Image20, 
  },
  {
    title: "Apple",
    image: Image21, 
  },
  {
    title: "Dragon Fruit",
    image: Image22, 
  },
  {
    title: "Pear",
    image: Image23, 
  },
  {
    title: "Cantaloupe",
    image: Image24, 
  },
];

const HomePage = () => {
  const [items, setItems] = useState({
    // name: '',
    // weight:'',
    // price:''
  })

  // const { items, setItems } = useContext(primaryContext);


  return (
    <div className='layoutContainer'>
      <div className='brandName'>
      <h1><strong>Welcome to Fanatic Tea</strong></h1><br></br>
      <h3>Exploring Nature's Flavors One Sip at a Time</h3><br></br><br></br>
      </div>
      <div className="imageGrid">
        {homeImages.map((item) => (
          <div key={item.id}>
            <h2 className='imageTitle'>{item.title}</h2>
            <img 
              src={item.image}
              alt={item.title}
              className='homeImageSize'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;


// const HomePage = () => { 
//   const [item, setItem] = useState(
//     {
//       name: '',
//       weight: '',
//       price: 0,
//     }
//   )
  
//   const { products, setProducts } = useContext(primaryContext);

//   const handleAddToCart = (id) => {
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.id === id ? { ...product, cartCount: product.cartCount + 1 } : product
//       )
//     );
//   };

//   const handleRemoveFromCart = (id) => {
//     setProducts((prevProducts) =>
//       prevProducts.map((product) =>
//         product.id === id && product.cartCount > 0
//           ? { ...product, cartCount: product.cartCount - 1 }
//           : product
//       )
//     );
//   };

//   return (
//     <div className='layoutContainer'>
//       <h1 className='brandName'><strong>Welcome to Fanatic Tea </strong></h1>
//       <div className="imageGrid">
//         {homeImages.map((item, index) => (
//           <div key={index}>
//             <h2>{item.title}</h2>

//             <img
//               src={item.image}
//               alt={item.title}
//               className='homeImageSize'
//             />
//             <div>
//               <p>Cart Quantity: {item.cartCount}</p> {/* Use 'item' instead of 'product' here */
//               <button onClick={() => handleAddToCart(item.id)}>➕</button>}{/* Use 'item.id' instead of 'product.id' */}
//               <button onClick={() => handleRemoveFromCart(item.id)}>➖</button> {/* Use 'item.id' instead of 'product.id' */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// const HomePage = () => {


//   return (
    // <div className='layoutContainer'>
    //   <h1 className='brandName'><strong>Welcome to Fanatic Tea </strong></h1>
    //   <div className="imageGrid">
    //     {homeImages.map((item, index) => (
    //       <div key={index}>
    //         {/* <h2>{item.title}</h2> */}
    //         <img 
    //           src={item.image}
    //           alt={item.title}
    //           className='homeImageSize'
    //         />
    //       </div>
    //     ))}
    //   </div>
    //    </div>
    //   );
    // }

// export default HomePage;
