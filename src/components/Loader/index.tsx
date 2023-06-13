import { Blocks, TailSpin } from "react-loader-spinner"
import { Container } from "./styles"
import darkTheme from '../../styles/theme/dark'


export function Loader() {
    return (
        <Container>
            <TailSpin
                height="25"
                width="25"
                color={darkTheme.COLORS.TEXT_BLUE}
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </Container>
    )
}