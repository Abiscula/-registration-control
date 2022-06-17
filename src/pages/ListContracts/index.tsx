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
    const [validContracts, setValidContracts] = useState<contractProps[]>()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [selectedContract, setSelectedContract] = useState<contractProps>()

    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef?.current,
    });


    function checkValidate(filterOption: string) {

        if(filterOption === 'Todos') {
            setValidContracts(contracts)
        } else {
            const option: any = {
                "30 dias": 30,
                "15 dias": 15,
                "7 dias": 7,
                "Hoje": 0
            }
            const optionDate = option[filterOption]
            let filteredContracts: any = []
            contracts?.forEach((contract: contractProps) => {
                let partesData: any = contract.contractValidate.split("/");
                const date = new Date(partesData[2], partesData[1] - 1, partesData[0]);
                const today = new Date()
                let newDate = today.setDate(today.getDate() + optionDate)
                if(date <= new Date(newDate)) {
                    filteredContracts.push(contract)
                }
            })
            setValidContracts(filteredContracts)
        }
        }


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
            setValidContracts(api)
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
            <select onChange={(e) => checkValidate(e.target.value)}>
                <option>Todos</option>
                <option>30 dias</option>
                <option>15 dias</option>
                <option>7 dias</option>
                <option>Hoje</option>
            </select>
            <section>
                <div>
                    {validContracts?.map(({ contractNumber, nome, sobrenome, contractValidate }: contractProps) => (

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
                        <Contract data={selectedContract} componentRef={componentRef} />
                    </div>
                    <button className="btn-print" onClick={handlePrint}>Baixar contrato</button>
                </Modal>
                :
                ''}


        </Container>
    )
}