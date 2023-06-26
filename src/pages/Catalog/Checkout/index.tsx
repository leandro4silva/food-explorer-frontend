import { Container, Content, Title, ProductContent, GridContent, BoxProduct, PaymentContent, BoxPayment, PixButton, CardButton, DataContent, TotalContent, ButtonAdvance } from "./styles"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { api } from "../../../services/api"
import { CreditCard, Receipt } from "@phosphor-icons/react"
import PixSvg from "../../../assets/icons/pix.svg"
import QrCode from "../../../assets/images/QRCode/qrcode.png"
import { useEffect, useState } from "react"
import { Input } from "../../../components/Input"
import { useAuth } from "../../../hooks/auth"
import { useCart } from "../../../hooks/cart"
import { ToastContent, toastAlert } from "../../../components/Toast"


export function Checkout(){
    const { cart, getTotal, removeProductToCart } = useCart();
    const [total, setTotal] = useState<string | null>();
    const [methodPayment, setMethodPayment] = useState('pix');

    async function handleSearchDish(searchValue: string) {

    }

    function handleRemoveCart(id: string, name: string){
        removeProductToCart(id);
        toastAlert({
            message: `O prato ${name} foi removido do carinho com sucesso`,
            type: "success"
        });
    }

    function handleAdvance(){
        document.querySelector('#payment-content')?.classList.remove('hidden');
        document.querySelector('#product-content')?.classList.add('hidden');
    }

    useEffect(() => {
        setTotal(getTotal);
    }, [cart])

    return(
        <Container>
            <Header handleSearch={handleSearchDish} disableSearch />
            <Content>
                <GridContent>
                    <ProductContent id="product-content">
                        <Title>Meu pedido</Title>
                        <div className="products">
                            {
                                cart?.map(dish => {
                                    return(
                                        <BoxProduct key={dish.id}>
                                            <img src={api.defaults.baseURL + `/files/${dish.image}`} alt={dish.name} />
                                            <div>
                                                <div className="box-text">
                                                    <span>{dish.quantity} x  {dish.name}</span>
                                                    <span className="price">{dish.price}</span>
                                                </div>
                                                <button onClick={() => handleRemoveCart(dish.id, dish.name)}>Excluir</button>
                                            </div>
                                        </BoxProduct>
                                    )
                                })
                            }
                            
                        </div>
                        <TotalContent>
                            <span>Total: R$ {total || "00,00"}</span>
                        </TotalContent>
                        <ButtonAdvance>
                            <button onClick={handleAdvance}>Avançar</button>
                        </ButtonAdvance>
                    </ProductContent>
                    <PaymentContent id="payment-content" className="hidden">
                        <Title>Pagamento</Title>
                        <BoxPayment>
                            <div className="form-payment">
                                <PixButton onClick={() => setMethodPayment('pix')}>
                                    <div className={methodPayment == 'pix' ? 'tab-active' : ''}>
                                        <img src={PixSvg} alt="PIX" />
                                        <span>PIX</span>
                                    </div>
                                </PixButton>
                                <CardButton onClick={() => setMethodPayment('card')}>
                                    <div className={methodPayment == 'card' ? 'tab-active' : ''}>
                                        <CreditCard width={33} height={24}/>
                                        <span>Crédito</span>
                                    </div>
                                </CardButton>
                            </div>
                            <DataContent>
                                <div className={methodPayment == 'pix' ? 'pix' : 'pix hidden'}>
                                    <img src={QrCode} alt="Qr code" />
                                </div>
                                <div className={methodPayment == 'card' ? 'card' : 'card hidden'}>
                                    <div className="input-group">
                                        <label htmlFor="card-number">Número do Cartão</label>
                                        <input type="text" name="card-number" placeholder="0000 0000 0000 0000" />
                                    </div>
                                    <div className="two-columns">
                                        <div className="input-group">
                                            <label htmlFor="card-number">Validade</label>
                                            <input type="text" name="card-number" placeholder="04/25" />
                                        </div>
                                        <div className="input-group">
                                            <label htmlFor="card-number">CVC</label>
                                            <input type="text" name="card-number" placeholder="890" />
                                        </div>
                                    </div>
                                    <div className="button-content">
                                        <button><Receipt width={32} height={32}/> Finalizar pagamento</button>
                                    </div>
                                </div>
                            </DataContent>
                        </BoxPayment>
                    </PaymentContent>
                </GridContent>
            </Content>
            <Footer />
            <ToastContent autoClose={2500}/>
        </Container>
    )
}