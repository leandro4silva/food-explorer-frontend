import { HTMLAttributes, HtmlHTMLAttributes } from "react"
import {HeartStraight, Minus, Plus, PencilSimple} from '@phosphor-icons/react'
import { Item } from './styles'
import ParmaToast from '../../assets/images/Dishes/parma-toast.png';
import { useNavigate, Link } from 'react-router-dom'

interface DishListItemProps extends HtmlHTMLAttributes<HTMLDivElement>{
    isAdmin?: boolean
}

export function DishListItem({isAdmin = false, ...rest}: DishListItemProps) {
    
    const navigate = useNavigate();

    function handleEditDish(){
        navigate("/admin/dish/edit/12");
    }

    return (
        <Item {...rest}>
                {
                    isAdmin ?
                        <button className="editar" title="Editar" onClick={handleEditDish}>
                            <PencilSimple size={32} />
                        </button>
                    : 
                        <button className="favoritar" title="Favoritar">
                            <HeartStraight size={32} />
                        </button>
                }
            <div className='image'>
                <img src={ParmaToast} alt="Torrada de parma"/>
            </div>
            <div className='title'>
                <Link to={"/admin/details/12"}>Torradas de Parma <span>&gt;</span></Link>
            </div>
            <div className='ingredients'>
                <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
            </div>
            <div className='price'>
                <h3>R$ 25,97</h3>
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