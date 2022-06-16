import { useState } from "react"
import { Container } from "./style"
import InputMask from 'react-input-mask'
import { searchZipCode } from "../../api/viaCEP"
import { userProps } from "../../types"
import { createNewPerson } from "../../api/backend"
import { useNavigate } from "react-router-dom"


export default function RegisterPerson() {

    const navigate = useNavigate()

    const [cep, setCep] = useState<string>('')
    const [userData, setUserData] = useState<userProps>({
        nome: '',
        sobrenome: '',
        nasc: '',
        cpf: '',
        email: '',
        tel: '',
        bairro: '',
        cep: '',
        localidade: '',
        logradouro: '',
        uf: '',
        numero: '',
    })


    async function getAddress(zipCode: string) {
        zipCode = zipCode.replaceAll('-', '')
        if (zipCode.length === 8) {
            const api = await searchZipCode(zipCode)
            setUserData({
                ...userData,
                bairro: api.bairro,
                cep: api.cep.replace('-', ''),
                localidade: api.localidade,
                logradouro: api.logradouro,
                uf: api.uf
            })
        }
    }

    async function sendData() {
        const api = await createNewPerson(userData)
        if(api === 200) {
            navigate('/')
            alert(`Cadastro de ${userData.nome} realizado com sucesso!`)
        }
    }


    return (
        <Container>
            <div>
                <span>
                    <label>Nome</label>
                    <input
                        type="text"
                        required
                        placeholder="Digite seu nome"
                        onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
                    />
                </span>

                <span>
                    <label>Sobrenome</label>
                    <input
                        type="text"
                        required
                        placeholder="Digite seu sobrenome"
                        onChange={(e) => setUserData({ ...userData, sobrenome: e.target.value })}
                    />
                </span>
            </div>

            <div>
                <span>
                    <label>Data de Nascimento</label>
                    <input
                        type="date"
                        required
                        onChange={(e) => setUserData({ ...userData, nasc: e.target.value.split('-').reverse().join('/') })}
                    />
                </span>

                <span>
                    <label>CPF</label>
                    <InputMask
                        type="text"
                        required
                        mask="999.999.999-99"
                        minLength={11}
                        placeholder="000.000.000-00"
                        onChange={(e) => setUserData({ ...userData, cpf: e.target.value.replaceAll('.', '').replace('-', '') })}
                    />
                </span>
            </div>

            <div>
                <span>
                    <label>E-mail</label>
                    <input
                        type="email"
                        required
                        placeholder="seuemail@email.com"
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                </span>

                <span>
                    <label>Telefone</label>
                    <InputMask
                        placeholder="(00) 00000-0000"
                        mask="(99) 99999-9999"
                        minLength={8}
                        required
                        onChange={(e) => setUserData({...userData, tel: e.target.value})}
                    />
                </span>
            </div>

            <div>
                <span>
                    <label>CEP</label>
                    <section>
                        <InputMask
                            placeholder="000.00.000"
                            className="input-cep"
                            mask="99999-999"
                            minLength={8}
                            required
                            onChange={(e) => setCep(e.target.value)}
                        />
                        <button className="btn-cep" onClick={() => getAddress(cep)}>Consultar</button>
                    </section>
                </span>

                <span>
                    <label>Cidade</label>
                    <input type="text" disabled value={userData?.localidade} required />
                </span>
            </div>

            <div>
                <span>
                    <label>Logradouro</label>
                    <input type="text" disabled value={userData?.logradouro} required />
                </span>

                <span>
                    <label>numero</label>
                    <input
                        type="number"
                        required
                        placeholder="000"
                        onChange={(e) => setUserData({ ...userData, numero: e.target.value })}
                    />
                </span>
            </div>

            <div>
                <span>
                    <label>Bairro</label>
                    <input type="text" disabled value={userData?.bairro} required />
                </span>

                <span>
                    <label>UF</label>
                    <input type="text" disabled value={userData?.uf} required />
                </span>

            </div>

            <div className="btn-div">
                <button className="btn-register" onClick={sendData}>
                    Enviar
                </button>
            </div>
        </Container>
    )
}