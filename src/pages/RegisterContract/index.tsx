import { useEffect, useState } from "react";
import { Container } from "./style";
import { createNewContract, getAllContracts, getAllPeople, getPerson } from "../../api/backend";
import { contractProps, userProps } from "../../types";
import Contract from "../../components/Contract";
import { ArrowBendUpRight, ArrowBendDownLeft, FileSearch } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { cp } from "fs";


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
    const navigate = useNavigate()

    const date = new Date()
    const contractNumber = date.getTime()
    const contractDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    const contractValidate = `${date.getDate()}/${date.getMonth() + 4}/${date.getFullYear()}`


    async function newContract() {
        try {
            const res = await createNewContract(person)
            if(res === 200) {
                navigate('/')
                alert(`Contrato nº ${person.contractNumber} criado em nome de ${person.nome}`)
            }
        }catch(err) {
            console.log(err)
        }
    }


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
            const people = await getAllPeople()
            const contracts = await getAllContracts()
            
            let notExist = [].concat(
                people.filter((p: any) => contracts.every((c: any) => p.cpf !== c.cpf)),
                contracts.filter((c: any) => people.every((p: any) => c.cpf !== p.cpf))
            );
            setOption(notExist)
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
                <button className="btn-register" onClick={() => newContract()}>
                    Enviar
                </button>
            </div>
        </Container>
    )
}