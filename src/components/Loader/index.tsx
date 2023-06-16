import { Blocks, TailSpin } from "react-loader-spinner"
import { Container } from "./styles"
import darkTheme from '../../styles/theme/dark'

interface LoaderProp{
    width: number,
    height: number
}

export function Loader({height, width} : LoaderProp) {
    return (
        <Container>
            <TailSpin
                height={height}
                width={width}
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