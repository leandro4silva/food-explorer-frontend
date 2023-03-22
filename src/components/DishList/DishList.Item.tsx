import {HeartStraight} from '@phosphor-icons/react'
import { Item } from './styles'
import ParmaToast from '../../assets/images/Dishes/parma-toast.png';

export function DishListItem() {
    return (
        <Item>
            <button className="favorite">
                <HeartStraight size={32} />
            </button>
            <div className='image'>
                <img src={ParmaToast} alt="Torrada de parma"/>
            </div>
            <div className='title'>
                <h3>Torradas de Parma <span>&gt;</span></h3>
            </div>
            <div className='ingredients'>
                <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
            </div>
            <div className='price'>
                <h3>R$ 25,97</h3>
            </div>
        </Item>
    )
}