import { CaretLeft, Minus, Plus } from "@phosphor-icons/react"
import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { Container, Content, Back, ContentLoader } from "./styles"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Loader } from "../../../components/Loader";

interface DishProp {
    id: string;
    image: string;
    name: string;
    category: string;
    ingredients: Array<IngredientProps>
    price: string;
    description: string;
}

interface IngredientProps {
    id: string,
    name: string
}

export function Details() {
    const navigate = useNavigate();
    const params = useParams();
    const [quantity, setQuantity] = useState(1);
    const [dish, setDish] = useState<DishProp>();

    async function handleSearchDish(searchValue: string) {

    }

    function handleEditDish(id: string) {
        navigate(`/admin/dish/edit/${id}`)
    }

    async function getDishData() {
        const response = await api.get(`/dishs/${params.id}`);
        setDish(response.data);
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

    function handleBack() {
        navigate(-1);
    }

    useEffect(() => {
        getDishData();
    }, [])

    return (
        <Container>
            <Header handleSearch={handleSearchDish} disableSearch />
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
                                                return (
                                                    <span key={ingredient.id}>{ingredient.name}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="include-content">
                                        <div className='amount'>
                                            <button onClick={removeQuantity}>
                                                <Minus size={24} />
                                            </button>
                                            <span>{handleTextQuantity(quantity)}</span>
                                            <button onClick={addQuantity}>
                                                <Plus size={24} />
                                            </button>
                                        </div>
                                        <div className="include-button">
                                            <button type="button" onClick={() => handleEditDish(dish.id)}>incluir ∙ {dish.price}</button>
                                        </div>
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
            <Footer />
        </Container>
    )
}