import { Header } from "../../../components/Header";
import { Container, Content, Back, FixedFooter, ContentLoader } from "./styles";
import {CaretLeft} from '@phosphor-icons/react';
import ParmaToast from '../../../assets/images/Dishes/parma-toast.png';
import { Footer } from "../../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Loader } from "../../../components/Loader";

interface DishProp{
    id:string;
    image:string;
    name:string;
    category:string;
    ingredients: Array<IngredientProps>
    price:string;
    description:string;
}

interface IngredientProps{
    id: string,
    name: string
}


export function Details(){
    const navigate = useNavigate();
    const params = useParams();
    const [dish, setDish] = useState<DishProp>();

    function handleEditDish(id: string){
        navigate(`/admin/dish/edit/${id}`)
    }

    function handleBack(){
        navigate(-1);
    }

    async function getDishData(){
        const response = await api.get(`/dishs/${params.id}`);
        setDish(response.data);
    }

    function handleSearchDish(searchValue: string){
    }

    useEffect(() => {
        getDishData();
    }, [])
    

    return(
        <Container>
            <Header isAdmin handleSearch={handleSearchDish} disableSearch/>
            <Content>
                <Back onClick={handleBack}>
                    <CaretLeft size={32} /> voltar
                </Back>  
                <div className="detail-content">
                    {
                        dish ?
                            <>
                                <img src={`${api.defaults.baseURL}/files/${dish.image}`} height={390} width={390} alt="Parma Toast" />
                                <div>
                                    <h2>{dish.name}</h2>
                                    <p>{dish.description}</p>
                                    <div className="ingredients">
                                        {
                                            dish.ingredients.map(ingredient => {
                                                return(
                                                    <span key={ingredient.id}>{ingredient.name}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="edit-button">
                                    <button type="button" onClick={() => handleEditDish(dish.id)}>Editar prato</button>
                                    </div>
                                </div>
                            </> 
                        :
                        <ContentLoader>
                            <Loader width={50} height={50} />
                        </ContentLoader>
                    }
                </div> 
            </Content>
            <FixedFooter>
                <Footer />
            </FixedFooter>
        </Container>
    )
}