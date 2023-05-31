import { Header } from "../../../components/Header";
import { Container, Content, Back } from "./styles";
import {CaretLeft} from '@phosphor-icons/react';
import ParmaToast from '../../../assets/images/Dishes/parma-toast.png';
import { Footer } from "../../../components/Footer";
import { useNavigate } from "react-router-dom";

export function Details(){
    const navigate = useNavigate();

    function handleEditDish(){
        navigate("/admin/dish/edit/12")
    }

    function handleBack(){
        navigate(-1);
    }

    return(
        <Container>
            <Header isAdmin />
            <Content>
                <Back onClick={handleBack}>
                    <CaretLeft size={32} /> voltar
                </Back>  
                <div className="detail-content">
                    <img src={ParmaToast} alt="Parma Toast" />
                    <div>
                        <h2>Torradas de Parma</h2>
                        <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
                        <div className="ingredients">
                            <span>alface</span>
                            <span>cebola</span>
                            <span>pão naan</span>
                            <span>pepino</span>
                            <span>rabanete</span>
                            <span>tomate</span>
                        </div>
                        <div className="edit-button">
                           <button type="button" onClick={handleEditDish}>Editar prato</button>
                        </div>
                    </div>
                </div> 
            </Content>
            <Footer />
        </Container>
    )
}