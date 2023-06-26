import { Header } from "../../../components/Header";
import { Banner } from "../../../components/Banner";
import { DishList } from "../../../components/DishList";
import { Footer } from "../../../components/Footer";
import { Container, Content, ProductList, BannerContent } from "./styles";
import { useSession } from "../../../hooks/session";
import { ToastContent, toastAlert } from "../../../components/Toast";
import { useEffect, useState } from "react";
import { DishProps } from "../../Admin/Dashboard";
import { api } from "../../../services/api";

interface ListDishProps {
    category: string,
    id: string,
    dishs: DishProps[]
}

export function Home() {
    const {setMessageSession, sessionMessage } = useSession();
    const [listDishs, setListDishs] = useState<ListDishProps[]>([]);

    async function handleSearchDish(searchValue: string) {
        const response = await api.get(`/dishs?dish=${searchValue}`)
        setListDishs(response.data)
    }

    async function getListDishsWithCategory() {
        const response = await api.get("/dishs?dish");
        setListDishs(response.data);
    }

    function showSessionMessage() {
        if (sessionMessage) {
            toastAlert(sessionMessage);
            setMessageSession(null)
        }
    }

    useEffect(() => {
        showSessionMessage();
        getListDishsWithCategory();
    }, [])

    return (
        <Container>
            <Header handleSearch={handleSearchDish} />
            <Content>
                <BannerContent>
                    <Banner />
                </BannerContent>
                {
                    listDishs.length > 0 ?
                        listDishs.map((list, index) => {
                            if(list.dishs.length > 0){
                                return (
                                    <ProductList key={list.id}>
                                        <DishList title={list.category} dishs={list.dishs} isAdmin={false} />
                                    </ProductList>
                                )
                            } 
                        })
                        :
                        <>
                            {
                                Array.from({ length: 3 }).map((_, index) => {
                                    return (
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
            <ToastContent autoClose={2500}/>
        </Container>
    )
}