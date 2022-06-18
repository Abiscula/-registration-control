import { createContext, ReactNode, useContext, useState } from "react";


interface Props {
    children: ReactNode;
}


const ModalContext = createContext<any>('')

export const ModalProvider = ({ children }: Props) => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [message, setMessage] = useState<Array<string>>([''])
    
    return (
        <ModalContext.Provider value={{ openModal, setOpenModal, message, setMessage }} >
            {children}
        </ModalContext.Provider>

    )
}

export const useModalContext = () => useContext(ModalContext)