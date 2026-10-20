"use client";

import {createContext,useContext,useEffect,useState,} from "react";

type CartItem = {
  id: number;
  collename: string;
  price: number;
  imge: string;
  description?: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: any, quantity: number) => void;
  removeFromCart: (id: number) => void;
  increasequantity: (id: number) => void;
  decreasequantity: (id: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setcart] = useState<CartItem[]>([]);
  const [loaded, setloaded] = useState(false)

  useEffect(() => {
    try{
      const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setcart(JSON.parse(savedCart));
    }
    }catch(error){
      console.error("error loading ", error)
    }finally{
      setloaded(true);
    }
    
    
  }, []);

  useEffect(() => {
    if(!loaded) return;

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart,loaded]);

  const addToCart = (item: any, quantity: number) => {
    setcart((currentCart) => {
      const existingItem = currentCart.find((product) => product.id === item.id);

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

      return [
        ...currentCart,
        {
          ...item,
          quantity: quantity,
        },
      ];
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
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product
      )
    );
  };

  const decreasequantity = (id: number) => {
    setcart((currentCart) =>
      currentCart.map((product) =>
        product.id === id && product.quantity > 1
          ? {
              ...product,
              quantity: product.quantity - 1,
            }
          : product
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increasequantity,
        decreasequantity,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);


  return context;
}