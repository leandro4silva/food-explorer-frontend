import { Container, Content, BannerContent, ProductList, ContentLoader } from "./styles"
import { Header } from "../../../components/Header"
import { Banner } from "../../../components/Banner"
import { DishList } from "../../../components/DishList"
import { Footer } from "../../../components/Footer"
import { useSession } from "../../../hooks/session"
import { useEffect, useState } from "react"
import { ToastContent, toastAlert } from "../../../components/Toast"
import { api } from "../../../services/api"

interface ListDishProps {
    category: string,
    id: string,
    dishs: DishProps[]
}

export interface DishProps {
    id: string,
    image: string;
    name: string;
    category: string;
    price: string;
    description: string;
}

interface CategoryProps {
    id: string,
    name: string
}

export function Dashboard() {
    const { sessionMessage, setMessageSession } = useSession();
    const [listDishs, setListDishs] = useState<ListDishProps[]>([]);

    function showSessionMessage() {
        if (sessionMessage) {
            toastAlert(sessionMessage);
            setMessageSession(null)
        }
    }

    async function getListDishsWithCategory() {
        const response = await api.get("/dishs");
        setListDishs(response.data);
    }
    
    useEffect(() => {
        showSessionMessage();
        getListDishsWithCategory();
    }, [])

    return (
        <Container>
            <Header isAdmin />
            <Content>
                <BannerContent>
                    <Banner />
                </BannerContent>
                {
                    listDishs.length > 0 ?
                        listDishs.map((list, index) => {
                            return (
                                <ProductList key={list.id}>
                                    <DishList title={list.category} dishs={list.dishs} isAdmin />
                                </ProductList>
                            )
                        })
                    :
                    <>
                        {
                                Array.from({length: 3}).map((_, index) => {
                                    return(
                                        <ProductList key={index}>
                                            <DishList loader isAdmin />
                                        </ProductList>
                                    )
                                })
                        }
                    </>
            
                }
            </Content>
            <Footer />
            <ToastContent />
        </Container>
    )
}