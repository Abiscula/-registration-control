import { useEffect, useState } from "react";
import { Container } from "./style";
import { getAllPeople, getPerson } from "../../api/backend";
import { contractProps } from "../../types";
import Contract from "../../components/Contract";
import { ArrowBendUpRight, ArrowBendDownLeft, FileSearch } from "phosphor-react";


interface optionProps {
    nome: string
    sobrenome: string
    cpf: string
}



export default function RegisterContract() {

    const [person, setPerson] = useState<contractProps>({
        nome: '',
        sobrenome: '',
        cpf: '',
        nasc: '',
        email: '',
        tel: '',
        cep: '',
        logradouro: '',
        localidade: '',
        numero: '',
        uf: '',
        bairro: '',
        contractNumber: '',
        contractDate: '',
        contractValidate: ''
    })
    const [option, setOption] = useState<optionProps[]>()
    const date = new Date()

    const contractNumber = date.getTime()
    const contractDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    const contractValidate = `${date.getDate()}/${date.getMonth() + 4}/${date.getFullYear()}`


    async function specifyPerson(personData: string) {
        const cpf = personData.split(' ')[1]

        try {
            const res = await getPerson(cpf)
            setPerson({
                nome: res[0].nome,
                sobrenome: res[0].sobrenome,
                cpf: res[0].cpf,
                nasc: res[0].nasc,
                email: res[0].nasc,
                tel: res[0].tel,
                cep: res[0].cep,
                logradouro: res[0].logradouro,
                localidade: res[0].localidade,
                numero: res[0].numero,
                uf: res[0].uf,
                bairro: res[0].bairro,
                contractNumber: String(contractNumber),
                contractDate: String(contractDate),
                contractValidate: String(contractValidate)
            })
        } catch (err) {
            console.log(err)
        }
    }

    async function listPeople() {
        try {
            const api = await getAllPeople()
            setOption(api)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        listPeople()
    }, [])

    return (
        <Container>
            <span>
                <label className="colorTitle">Selecione um profissional</label>
                <select onChange={(e) => specifyPerson(e.target.value)}>
                    <option></option>
                    {
                        option?.map(({ cpf, nome, sobrenome }: optionProps) => (
                            <option key={cpf}>
                                {`CPF: ${cpf} - ${nome} ${sobrenome}`}
                            </option>
                        ))
                    }
                </select>
            </span>

            {person.cpf 
            ?   <Contract data={person} /> 
            :   <section>
                    <ArrowBendUpRight size={150} className="icon" weight="light" />
                    <FileSearch size={200} className="icon" weight="thin"/>
                    <ArrowBendDownLeft size={150} className="icon" weight="light" />
                
                </section>}



            <div className="btn-div">
                <button className="btn-register">Enviar</button>
            </div>
        </Container>
    )
}