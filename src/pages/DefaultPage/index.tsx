import { Files, Gear } from "phosphor-react";
import { useEffect, useState } from "react";
import { getAllContracts } from "../../api/backend";
import NotifyModal from "../../components/NotifyModal";
import { compareDate } from "../../utils/compareDate";
import { Container } from "./style";

export default function DefaultPage() {

    const [isValid, setIsValid] = useState<number>()

    async function invalidContract() {
        const contracts = await getAllContracts()
        const invalids = compareDate(contracts, -1)
        setIsValid(invalids.length)
    }

    useEffect(() => {
        invalidContract()
    }, [])

    return (
        <Container>
            <div>
                <NotifyModal />

                {isValid&&isValid >=1 

                ?   <>
                        <Files className="doc" size={50} weight="light" /> 
                        <p className="doc-title">Existe(m) contrato(s) vencido(s)</p>
                    </>
                : ''}

                <Gear className="gear" size={250} weight="light" />
                <Gear className="gear" size={60} weight="light" />

                <h1 className="colorTitle">Painel de administração</h1>
            </div>
        </Container>
    )
}