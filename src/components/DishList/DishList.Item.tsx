import { HTMLAttributes, HtmlHTMLAttributes } from "react"
import {HeartStraight, Minus, Plus, PencilSimple} from '@phosphor-icons/react'
import { Item } from './styles'
import ParmaToast from '../../assets/images/Dishes/parma-toast.png';
import { useNavigate, Link } from 'react-router-dom'
import { DishProps } from "../../pages/Admin/Dashboard";
import { api } from "../../services/api";


interface DishListItemProps extends HtmlHTMLAttributes<HTMLDivElement>{
    isAdmin?: boolean,
    dish: DishProps
}

export function DishListItem({isAdmin = false, dish, ...rest}: DishListItemProps) {
    
    const navigate = useNavigate();
  
    function handleEditDish(id: string){
        navigate(`/admin/dish/edit/${id}`);
    }

    function handleText(text: string, maxSize: number){
        if(text.length > maxSize){
            return text.slice(0, maxSize) + "..."
        }
        return text;
    }

    return (
        <Item isAdmin={isAdmin} {...rest}>
                {
                    isAdmin ?
                        <button className="editar" title="Editar" onClick={() => handleEditDish(dish.id)}>
                            <PencilSimple size={32} />
                        </button>
                    : 
                        <button className="favoritar" title="Favoritar">
                            <HeartStraight size={32} />
                        </button>
                }
            <div className='image'>
                <Link to={`/admin/details/${dish.id}`}>
                    <img src={`${api.defaults.baseURL}/files/${dish.image}`} alt="Torrada de parma"/>
                </Link>
            </div>
            <div className='title'>
                <Link to={`/admin/details/${dish.id}`}>{dish.name} <span>&gt;</span></Link>
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
                        <button>
                            <Minus size={24} />
                        </button>
                        <span>01</span>
                        <button>
                            <Plus size={24}/>
                        </button>
                    </div>
                    <button className='add-to-cart'>
                        incluir
                    </button>
                </div>
            }
        </Item>
    )
}