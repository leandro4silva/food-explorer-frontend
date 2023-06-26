import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "./auth";

interface CartProviderProps {
    children: ReactNode
}

export interface ProductProps {
    id: string
    image: string,
    name: string,
    quantity: number,
    price: string
}

interface CartContextProps {
    cart?: ProductProps[],
    addProductToCart(data: ProductProps): void,
    removeProductToCart(id: string): void,
    getTotal(): string
}

const CartContext = createContext<CartContextProps | null>(null);

function CartProvider(props: CartProviderProps) {
    const [cart, setCart] = useState<ProductProps[]>();
    const { user } = useAuth();

    function addProductToCart(data: ProductProps) {
        setCart(prevState => {
            if (prevState) {
                let dishIdAlreadyExist = false;

                prevState.map((dish, index) => {
                    if (data.id == dish.id) {
                        prevState[index].quantity = data.quantity + prevState[index].quantity
                        dishIdAlreadyExist = true
                    }
                });
                
                if(dishIdAlreadyExist){
                    localStorage.setItem("@foodexplorer:cart-" + user?.id, JSON.stringify([...prevState]));
                    return [...prevState]
                }else{
                    localStorage.setItem("@foodexplorer:cart-" + user?.id, JSON.stringify([...prevState, data]));
                    return [...prevState, data]
                }
            }
        });
    }

    function removeProductToCart(id: string) {
        setCart(prevState => {
            if (prevState) {
                const cart = prevState.filter(product => product.id != id ? true : false);
                localStorage.setItem("@foodexplorer:cart-" + user?.id, JSON.stringify(cart));
                return cart;
            }
        })
    }

    function getTotal(): string {
        let total: number = 0;

        cart?.map((dish) => {
            const price = Number(parseFloat(dish.price.slice(3).replace(',', '.')).toFixed(2)) * dish.quantity;
            total += price;
        });

        return total.toFixed(2).replace('.', ',');
    }

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("@foodexplorer:cart-" + user?.id) ?? '[]');
        setCart(cart)
    }, [user])

    return (
        <CartContext.Provider value={
            {
                cart,
                addProductToCart,
                removeProductToCart,
                getTotal
            }
        }>
            {props.children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext) as CartContextProps
    return context
}

export {
    useCart,
    CartProvider
}