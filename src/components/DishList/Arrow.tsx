import { CaretRight, CaretLeft } from "@phosphor-icons/react";

interface ArrowProps{
    disable: boolean,
    left?: boolean,
    onClick: (e: any) => void
}

export function Arrow({disable, left, onClick}: ArrowProps){
    
    const disabeld = disable ? "arrow--disabled" : "";

    return(
        <button
            onClick={onClick}
            className={`arrow ${left ? "arrow--left" : "arrow--right"} ${disabeld}`} 
        >
            {left && (
                <CaretLeft size={40} />
            )}
            {!left && (
                <CaretRight size={40} />
            )}
        </button>
    )
}