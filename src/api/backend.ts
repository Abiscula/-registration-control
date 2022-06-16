import axios from "axios";
import { userProps } from "../types";


const baseURL = 'http://localhost:3333'

export async function createNewPerson(personData: userProps) {

    try {
        const res = await axios.request({
            method: 'POST',
            baseURL: baseURL + '/person',
            data: {
                nome: personData.nome,
                sobrenome: personData.sobrenome,
                nasc: personData.nasc,
                cpf: personData.cpf,
                email: personData.email,
                tel: personData.tel,
                bairro: personData.bairro,
                cep: personData.cep,
                localidade: personData.localidade,
                logradouro: personData.logradouro,
                uf: personData.uf,
                numero: personData.numero,
            }
        })
        return res.status
    }catch(err) {
        console.log(err)
    }
}

export async function getAllPeople() {

    try {
        const res = await axios.request({
            method: 'GET',
            baseURL: baseURL + '/people'
        })

        return res.data
    }catch(err) {
        console.log(err)
    }
}

export async function getPerson(cpf: string) {

    try {
        const res = await axios.request({
            method: 'GET',
            baseURL: baseURL + `/person/${cpf}`
        })
        return res.data
    }catch(err) {
        console.log(err)
    }
}