import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { Warning, X } from '@phosphor-icons/react'
import "react-toastify/ReactToastify.min.css";


export function toastAlert(message : String) {
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
        icon: <Warning color="#721c24" size={34} />,
        closeButton: <X color="#721c24" size={24} />
    });
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