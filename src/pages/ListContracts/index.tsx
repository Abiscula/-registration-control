import { useEffect, useState } from "react";
import { AddressBook, XSquare } from "phosphor-react";
import { useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import ReactPaginate from "react-paginate";

import { getAllContracts } from "../../api/backend";
import Contract from "../../components/Contract";
import { contractProps } from "../../types";
import { Container, Modal } from "./style";
import { compareDate } from "../../utils/compareDate";

export default function ListContracts() {

    const [contracts, setContracts] = useState<contractProps[]>()
    const [validContracts, setValidContracts] = useState<contractProps[]>()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [selectedContract, setSelectedContract] = useState<contractProps>()
    const [pageNumber, setPageNumber] = useState<number>(0)
    const [countContracts, setCountContracts] = useState<number>(0)


    const ContractsPerPage = 8
    const pagesVisited = pageNumber * ContractsPerPage

    const displayContracts: any = validContracts?.slice(pagesVisited, pagesVisited + ContractsPerPage)
        .map(({ contractNumber, nome, sobrenome, contractValidate }: contractProps) => (
            <span key={contractNumber}>
                <AddressBook
                    size={70}
                    weight="light"
                    className="contract-icon"
                    onClick={() => openContract(contractNumber)}
                />
                <label>{nome} {sobrenome}</label>
                <label>{contractValidate}</label>
            </span>
        ))

    const pageCount = Math.ceil(countContracts / ContractsPerPage)

    const changePage = ({ selected }: any) => {
        setPageNumber(selected)
    }

    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef?.current,
    });


    function checkValidate(filterOption: string) {

        if (filterOption === 'Todos') {
            setValidContracts(contracts)
            if (contracts) {
                setCountContracts(contracts.length)
            }
        } else {
            const option: any = {
                "30 dias": 30,
                "15 dias": 15,
                "7 dias": 7,
                "Hoje": 0,
                "Vencidos": -1
            }

            if (contracts) {
                const checkValidate = compareDate(contracts, option[filterOption])
                setValidContracts(checkValidate)
                if (validContracts) {
                    setCountContracts(validContracts.length)
                }
            }
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
            setCountContracts(api.length)
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
                <option>Vencidos</option>
            </select>
            <section>
                <div>
                    {displayContracts}
                    <ReactPaginate
                        previousLabel={'Anterior'}
                        nextLabel={'Próxima'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'paginationBtn'}
                        activeClassName={'paginationActive'}
                    />

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