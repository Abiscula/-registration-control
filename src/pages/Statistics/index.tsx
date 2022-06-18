import moment from "moment"
import { useEffect, useState } from "react"
import { getAllContracts, getAllPeople } from "../../api/backend"
import { contractProps } from "../../types"
import { averageDate } from "../../utils/averageData"
import { compareDate } from "../../utils/compareDate"
import { Container } from "./style"

export default function Statistics() {

    const [data, setData] = useState({
        allPeople: 0,
        allContracts: 0,
        expirationDate: 0,
        timeService: 0,
    })


    async function getAllData() {
        const people = await getAllPeople()
        const contracts = await getAllContracts()
        const expirationDate = compareDate(contracts, 0)
        const timeService = averageDate(contracts)

        setData({
            ...data,
            allPeople: people.length,
            allContracts: contracts.length,
            expirationDate: expirationDate.length,
            timeService: timeService
        })
    }

    useEffect(() => {
        getAllData()

    }, [])

    return (
        <Container>
            <div>
                <section>
                    <h4>Pessoas Cadastradas</h4>
                    <span className="colorTitle">{data.allPeople}</span>
                </section>

                <section>
                    <h4>Contratos Cadastrados</h4>
                    <span className="colorTitle">{data.allContracts}</span>
                </section>
            </div>

            <div>
                <section>
                    <h4>Contratos a Vencer</h4>
                    <span className="colorTitle">{data.expirationDate}</span>
                </section>

                <section>
                    <h4>Tempo médio de prestação de serviços (dias)</h4>
                    <span className="colorTitle">{data.timeService}</span>
                </section>
            </div>
        </Container>
    )
}