export interface userProps {
    nome: string
    sobrenome: string
    nasc: string
    cpf: string
    email: string
    tel: string
    bairro: string
    cep: string
    localidade: string
    logradouro: string
    uf: string
    numero: string
}

export interface contractProps extends userProps {
    contractNumber: string
    contractDate: string
    contractValidate: string
}