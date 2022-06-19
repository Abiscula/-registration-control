import { useEffect, useState } from "react";
import { Container } from "./style";
import { createNewContract, getAllContracts, getAllPeople, getPerson } from "../../api/backend";
import { contractProps } from "../../types";
import Contract from "../../components/Contract";
import { ArrowBendUpRight, ArrowBendDownLeft, FileSearch } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import NotifyModal from "../../components/NotifyModal";
import { useModalContext } from "../../context/modalContext";


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
    const [personData, setPersonData] = useState<string>('')
    const [duration, setDuration] = useState<string>('')
    const navigate = useNavigate()
    const { setMessage, setOpenModal } = useModalContext()
    const date = new Date()
    const contractNumber = date.getTime()
    const contractDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`


    async function newContract() {
        try {
            const res = await createNewContract(person)
            if (res === 200) {
                navigate('/')
                setMessage(['success', `Contrato nº ${person.contractNumber} criado em nome de ${person.nome}`])
                setOpenModal(true)
            }
        } catch (err) {
            console.log(err)
        }
    }


    async function specifyPerson() {

        if(personData.length === 0) {
            setMessage(['error', `Seleciona uma pessoa para vincular o contrato`])
            setOpenModal(true)
        }else if (duration.length === 0) {
            setMessage(['warning', `Informe a validade do contrato`])
            setOpenModal(true)
        } else {
            let contractValidate = `${date.getDate()}/${date.getMonth() + Number(duration) + 1}/${date.getFullYear()}`

            try {
                if (personData) {
                    const res = await getPerson(personData)
                    setPerson({
                        nome: res[0].nome,
                        sobrenome: res[0].sobrenome,
                        cpf: res[0].cpf,
                        nasc: res[0].nasc,
                        email: res[0].email,
                        tel: res[0].tel,
                        cep: res[0].cep,
                        logradouro: res[0].logradouro,
                        localidade: res[0].localidade,
                        numero: res[0].numero,
                        uf: res[0].uf,
                        bairro: res[0].bairro,
                        contractNumber: String(contractNumber),
                        contractDate: String(contractDate),
                        contractValidate: contractValidate
                    })
                }

            } catch (err) {
                console.log(err)
            }
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
            <NotifyModal />
            <div>
                <span>
                    <label className="colorTitle">Selecione um profissional</label>
                    <select onChange={(e) => setPersonData(e.target.value.split(' ')[1])}>
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
                <aside>
                    <label className="colorTitle">Validade do contrato</label>
                    <span>
                        <input
                            type="number"
                            className="input-validate"
                            placeholder="meses"
                            onChange={(e) => setDuration(e.target.value)}
                        />
                        <button onClick={() => specifyPerson()}>Abrir</button>
                    </span>
                </aside>
            </div>

            {person.cpf && duration
                ? <Contract data={person} />
                : <section>
                    <ArrowBendUpRight size={150} className="icon" weight="light" />
                    <FileSearch size={200} className="icon" weight="thin" />
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