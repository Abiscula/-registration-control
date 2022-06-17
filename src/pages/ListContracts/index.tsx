import { useEffect, useState } from "react";
import { AddressBook, XSquare } from "phosphor-react";
import { useRef } from "react";
import { useReactToPrint } from 'react-to-print';

import { getAllContracts } from "../../api/backend";
import Contract from "../../components/Contract";
import { contractProps } from "../../types";
import { Container, Modal } from "./style";

export default function ListContracts() {

    const [contracts, setContracts] = useState<contractProps[]>()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [selectedContract, setSelectedContract] = useState<contractProps>()

    const componentRef: any = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef?.current,
    });

    async function openContract(contractNumber: string) {

        const contractData = contracts?.filter((contract) => contract.contractNumber === contractNumber)
        setSelectedContract(contractData && contractData[0])
        console.log(contractData && contractData[0])
        setOpenModal(true)
    }

    async function listAllContracts() {
        try {
            const api = await getAllContracts()
            setContracts(api)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        listAllContracts()
    }, [])

    return (
        <Container>
            <h1 className="colorTitle">Lista de contatos</h1>
            <section>
                <div>
                    {contracts?.map(({ contractNumber, nome, sobrenome, contractValidate }: contractProps) => (

                        <span key={contractNumber}>
                            <AddressBook
                                size={60}
                                weight="light"
                                className="contract-icon"
                                onClick={() => openContract(contractNumber)}
                            />
                            <label>{nome} {sobrenome}</label>
                            <label>{contractValidate}</label>
                        </span>

                    ))}
                </div>
            </section>

            {openModal
                ?
                <Modal>
                    <div>
                        <XSquare size={30} weight="light" className="btn-close" onClick={() => setOpenModal(false)} />
                        <Contract data={selectedContract} componentRef={componentRef}/>
                    </div>
                    <button className="btn-print" onClick={handlePrint}>Baixar contrato</button>
                </Modal>
                :
                ''}


        </Container>
    )
}