import { ToastContainer, toast, CloseButtonProps, IconProps } from 'react-toastify';;
import { Check, Warning, X } from '@phosphor-icons/react'
import "react-toastify/ReactToastify.min.css";

interface toastAlertProps{
    message: string,
    type: string
}


export function toastAlert({message, type = 'error'}: toastAlertProps) {
    function closeButton({ closeToast, type }: CloseButtonProps ){
        if(type == 'error'){
            return <X size={24} color='#721c24' onClick={() => closeToast} />
        }

        if(type == 'success'){
            return <X size={24} color='#155724' onClick={() => closeToast} />
        }
    }

    function toastIcon({type}: IconProps){
        if(type == 'error'){
            return <Warning size={54} color='#721c24'/>               
        }
        if(type == 'success'){
            return <Check size={54} color='#155724'/>
        }
        return;
    }

    if(type == 'error'){
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
            type: "error"
        })
    }

    if(type == 'success'){
        toast.error(message, {
            style: {
                backgroundColor: '#d4edda',
                color: '#155724',
                width: '350px',
                height: '80px',
                fontSize: '16px'
            },
            progressStyle: {
                backgroundColor: '#155724'
            },
            icon: toastIcon,
            closeButton: closeButton, 
            type: "success"

        })
    }

    if(type == 'alert'){
        toast.warning(message, {
            style: {
                backgroundColor: '#ffeeba',
                color: '##856404',
                width: '350px',
                height: '80px',
                fontSize: '16px'
            },
            progressStyle: {
                backgroundColor: '##ffeeba'
            },
            icon: toastIcon,
            closeButton: closeButton, 
        })
    }

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