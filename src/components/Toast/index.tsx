import { ToastContainer, toast, CloseButtonProps, IconProps } from 'react-toastify';;
import { Warning, X } from '@phosphor-icons/react'
import "react-toastify/ReactToastify.min.css";


export function toastAlert(message : String) {
    function closeButton({ closeToast }: CloseButtonProps ){
        return <X size={24} color='#721c24' onClick={() => closeToast} />
    }

    function toastIcon({type}: IconProps){
        if(type == 'error'){
            return <Warning size={54} color='#721c24'></Warning>                
        }
        return;
    }

    toast.error(message, {
        style: {
            backgroundColor: '#f5c6cb',
            color: '#721c24',
            width: '350px',
            height: '80px',
            fontSize: '16px'
        },
        progressStyle: {
            backgroundColor: '#721c24'
        },
        icon: toastIcon,
        closeButton: closeButton, 
    })
}

export function ToastContent() {
    return (
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
    )
}