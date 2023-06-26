import { Blocks, RotatingLines, TailSpin } from "react-loader-spinner"
import { Container } from "./styles"
import darkTheme from '../../styles/theme/dark'

interface LoaderProp {
    width: number,
    height: number,
    isRotateLines?: boolean
}

export function Loader({ height, width, isRotateLines = false }: LoaderProp) {
    return (
        <Container>
            {
                isRotateLines ?
                        <RotatingLines
                            strokeColor={darkTheme.COLORS.TEXT_BLUE}
                            strokeWidth="5"
                            animationDuration="0.75"
                            width={String(width)}
                            visible={true}
                        />
                    :
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
            }
        </Container>
    )
}