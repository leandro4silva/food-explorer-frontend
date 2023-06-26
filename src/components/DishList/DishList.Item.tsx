import { HtmlHTMLAttributes, useEffect, useState } from "react"
import {HeartStraight, Minus, Plus, PencilSimple} from '@phosphor-icons/react'
import { Item } from './styles'
import { useNavigate, Link } from 'react-router-dom'
import { DishProps } from "../../pages/Admin/Dashboard";
import { ProductProps } from "../../hooks/cart";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { Loader } from "../Loader";
import { toastAlert } from "../Toast";
import { useCart } from "../../hooks/cart";

interface DishListItemProps extends HtmlHTMLAttributes<HTMLDivElement>{
    isAdmin?: boolean,
    dish: DishProps,
}

interface FavoriteProp{
    id: string,
    image: string,
    name: string
}

export function DishListItem({isAdmin = false, dish, ...rest}: DishListItemProps) {
    const navigate = useNavigate();
    const [favorite, setFavorite] = useState<FavoriteProp | null>();
    const [showLoader, setShowLoader] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const {user} = useAuth();
    const {cart, addProductToCart} = useCart();

    function handleEditDish(id: string){
        navigate(`/admin/dish/edit/${id}`);
    }

    async function handleFavorites(id: string, image: string, name: string){
        setShowLoader(true);

        if(user){
            await api.post("/favorites", {
                dishId: id,
                userId: user.id
            })

            setFavorite({
                id,
                image,
                name,
            })
        }

        setShowLoader(false);
        
        toastAlert({
            message: `O prato ${name} foi adicionardo a lista de favoritos com sucesso`,
            type: "success"
        });
    }


    
    async function handeRemoveFavorite(dishId: string, name: string){
        setShowLoader(true);
        
        if(user){
            await api.delete(`/favorites?userId=${user.id}&dishId=${dishId}`)
            setFavorite(null);
        }

        setShowLoader(false);

        toastAlert({
            message: `O prato ${name} foi removido a lista de favoritos com sucesso`,
            type: "success"
        });
    }

    function addQuantity(){
        if(quantity < 100){
            let newQuantity = quantity + 1;
            setQuantity(newQuantity);
        }
    }

    function removeQuantity(){
        if(quantity > 1){
            let newQuantity = quantity - 1;
            setQuantity(newQuantity);
        }
    }

    function handleTextQuantity(quantity: number){
        let newQuantity = String(quantity).padStart(2, "0");
        return newQuantity
    }

    async function fetchFavorite(){
        if(user){
            const response = await api.get(`/favorites/${dish.id}/${user.id}`);
            setFavorite(response.data);
        }
    }

    function handleText(text: string, maxSize: number){
        if(text.length > maxSize){
            return text.slice(0, maxSize) + "..."
        }
        return text;
    }

    function handleAddToCart(dish: DishProps){
        const product: ProductProps ={
            id: dish.id,
            image: dish.image,
            name: dish.name,
            price: dish.price,
            quantity
        }
            
        addProductToCart(product);
        
        toastAlert({
            message: `O prato ${dish.name} foi adicionado ao carinho`,
            type: 'success'
        });
    }

    useEffect(() => {
        fetchFavorite();
    }, [])

    return (
        <Item isAdmin={isAdmin} {...rest}>
                {
                    isAdmin ?
                        <button className="editar" title="Editar" onClick={() => handleEditDish(dish.id)}>
                            <PencilSimple size={32} />
                        </button>
                    : 
                        <button className="favoritar" title="Favoritar" onClick={() => favorite ? handeRemoveFavorite(dish.id, dish.name) : handleFavorites(dish.id, dish.image, dish.name)}>
                            { 
                                showLoader ?
                                    <Loader  width={32} height={32} isRotateLines/>
                                :
                                favorite ? 
                                    <HeartStraight  size={32} weight="fill"/>  
                                : 
                                    <HeartStraight size={32}  /> 
                            } 
                        </button>
                }
            <div className='image'>
                <Link to={isAdmin ? `/admin/details/${dish.id}` : `/details/${dish.id}`}>
                    <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt="Torrada de parma"/>
                </Link>
            </div>
            <div className='title'>
                <Link to={isAdmin ? `/admin/details/${dish.id}` : `/details/${dish.id}`}>{dish.name} <span>&gt;</span></Link>
            </div>
            <div className='description' title={dish.description}>
                <p>{handleText(dish.description, 66)}</p>
            </div>
            <div className='price'>
                <h3>{dish.price}</h3>
            </div>
            {
                !isAdmin &&

                <div className='itembox'>
                    <div className='amount'>
                        <button onClick={removeQuantity}>
                            <Minus/>
                        </button>
                        <span>{handleTextQuantity(quantity)}</span>
                        <button onClick={addQuantity}>
                            <Plus/>
                        </button>
                    </div>
                    <button className='add-to-cart' onClick={() => handleAddToCart(dish)}>
                        incluir
                    </button>
                </div>
            }
        </Item>
    )
}