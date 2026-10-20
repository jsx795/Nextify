// "use client";

// import {createContext,useContext,useEffect,useState,} from "react";

// type CartItem = {
//   id: number;
//   collename: string;
//   price: number;
//   imge: string;
//   description?: string;
//   quantity: number;
// };

// type CartContextType = {
//   cart: CartItem[];
//   addToCart: (item: any, quantity: number) => void;
//   removeFromCart: (id: number) => void;
//   increasequantity: (id: number) => void;
//   decreasequantity: (id: number) => void;
// };

// const CartContext = createContext<CartContextType | null>(null);

// export function CartProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [cart, setcart] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");

//     if (savedCart) {
//       setcart(JSON.parse(savedCart));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (item: any, quantity: number) => {
//     setcart((currentCart) => {
//       const existingItem = currentCart.find((product) => product.id === item.id);

//       if (existingItem) {
//         return currentCart.map((product) =>
//           product.id === item.id
//             ? {
//                 ...product,
//                 quantity: product.quantity + quantity,
//               }
//             : product
//         );
//       }

//       return [
//         ...currentCart,
//         {
//           ...item,
//           quantity: quantity,
//         },
//       ];
//     });
//   };

//   const removeFromCart = (id: number) => {
//     setcart((currentCart) =>
//       currentCart.filter((product) => product.id !== id)
//     );
//   };

//   const increasequantity = (id: number) => {
//     setcart((currentCart) =>
//       currentCart.map((product) =>
//         product.id === id
//           ? {
//               ...product,
//               quantity: product.quantity + 1,
//             }
//           : product
//       )
//     );
//   };

//   const decreasequantity = (id: number) => {
//     setcart((currentCart) =>
//       currentCart.map((product) =>
//         product.id === id && product.quantity > 1
//           ? {
//               ...product,
//               quantity: product.quantity - 1,
//             }
//           : product
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         increasequantity,
//         decreasequantity,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);


//   return context;
// }

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartItem = {
  id: number;
  collename: string;
  price: number;
  imge: string;
  description?: string;
  quantity: number;
};

type NewCartItem = Omit<CartItem, "quantity">;

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: NewCartItem, quantity: number) => void;
  removeFromCart: (id: number) => void;
  increasequantity: (id: number) => void;
  decreasequantity: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setcart] = useState<CartItem[]>([]);
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      if (savedCart) {
        setcart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error("Error loading cart:", error);
    } finally {
      setloaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;

    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart:", error);
    }
  }, [cart, loaded]);

  const addToCart = (item: NewCartItem, quantity: number) => {
    setcart((currentCart) => {
      const existingItem = currentCart.find(
        (product) => product.id === item.id
      );

      if (existingItem) {
        return currentCart.map((product) =>
          product.id === item.id
            ? {
                ...product,
                quantity: product.quantity + quantity,
              }
            : product
        );
      }

      return [...currentCart, { ...item, quantity }];
    });
  };

  const removeFromCart = (id: number) => {
    setcart((currentCart) =>
      currentCart.filter((product) => product.id !== id)
    );
  };

  const increasequantity = (id: number) => {
    setcart((currentCart) =>
      currentCart.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreasequantity = (id: number) => {
    setcart((currentCart) =>
      currentCart.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };
  const clearCart = () => {
    setcart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increasequantity,
        decreasequantity,
        clearCart,
    
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
