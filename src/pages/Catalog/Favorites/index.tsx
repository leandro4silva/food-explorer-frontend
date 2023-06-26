import { useEffect, useState } from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { api } from "../../../services/api";
import { Container, Content, Title, FavoriteContent, BoxFav, LoaderContent, LinkDish, AnyFavorite } from "./styles";
import { useAuth } from "../../../hooks/auth";
import { Loader } from "../../../components/Loader";
import { toastAlert } from "../../../components/Toast";
import { ToastContent } from "../../../components/Toast";

interface FavoriteProp{
    id: string,
    image: string,
    name: string
}

export function Favorites(){
    const {user} = useAuth();
    const [listFavorites, setListFavorites] = useState<FavoriteProp[]>([]);
    const [showMessageAnyFavorite, setShowMessageAnyFavorite] = useState(false);
    const [showLoader, setShowLoader] = useState(false);


    async function handleSearchDish(searchValue: string) {

    }

    async function fetchFavorites() {
        setShowLoader(true);

        const response = await api.get(`/favorites?userId=${user?.id}`);
        
        if(response.data.length == 0){
            setShowMessageAnyFavorite(true)
        }

        setListFavorites(response.data);
        
        setShowLoader(false);
    }

    async function handeRemoveFavorite(dishId: string, name: string){
        setShowLoader(true);

        if(user){
            await api.delete(`/favorites?userId=${user.id}&dishId=${dishId}`)
        }

        const newListFavorites = listFavorites && listFavorites.filter((dish) => dish.id != dishId);

        if(newListFavorites.length == 0){
            setShowMessageAnyFavorite(true)
        }

        setListFavorites(newListFavorites);

        setShowLoader(false);

        toastAlert({
            message: `O prato ${name} foi removido a lista de favoritos com sucesso`,
            type: "success"
        });
    }

    useEffect(() => {
        fetchFavorites();
    }, [])

    return(
        <Container>
            <Header handleSearch={handleSearchDish} disableSearch/>
            <Content>
                <Title>Meus favoritos</Title>
                {
                    !showLoader ?
                        <>
                            {
                                listFavorites.length > 0 &&
                                    <FavoriteContent>
                                        {
                                            listFavorites.map((favorite) => {
                                                return(
                                                    <BoxFav>
                                                        <div className="image-content">
                                                            <img src={api.defaults.baseURL + `/files/${favorite.image}`} alt={favorite.name} />
                                                        </div>
                                                        <div className="text-content">
                                                            <LinkDish to={""}>{favorite.name}</LinkDish>
                                                            <button onClick={() => handeRemoveFavorite(favorite.id, favorite.name)}>Remover dos Favoritos</button>
                                                        </div>
                                                    </BoxFav>
                                                )
                                            })
                                        }
                                    </FavoriteContent>
                            }

                            {
                                showMessageAnyFavorite && 
                                <AnyFavorite>
                                    <span>Nenhum prato foi adicionado a lista de desejos ainda.</span>
                                </AnyFavorite>
                            }
                        </>
                    :
                        <LoaderContent>
                            <Loader width={50} height={50}/>
                        </LoaderContent>
                }
            </Content>
            <Footer />
            <ToastContent autoClose={2500}/>
        </Container>
    )
}

