import { Container } from "./style";


export default function Contract({ data, componentRef }: any) {


    return (
        <Container ref={componentRef}>
            <h3>CONTRATO DE PRESTAÇÃO DE SERVIÇOS </h3>

            <h4>Contratante:</h4>
            <p>
                Seletivo LTDA, sociedade empresária inscrita no CNPJ sob o nº 00.000.000/0000-00
            </p>

            <h4>Dados do contrato: </h4>
            <span>
                <p>
                    Número do contrato: {data.contractNumber}
                </p>

                <p>
                    Data do contrato: {data.contractDate}
                </p>

                <p>
                    Validade do contrato: até {data.contractValidate}
                </p>
            </span>

            <h4>Contratado: </h4>
            <p>
                {data.nome} {data.sobrenome} nascido(a) em {data.nasc} inscrito(a) no CPF {data.cpf}.
            </p>

            <h4>Dados pessoais: </h4>
            <p>
                Email: {data.email}, telefone: {data.tel}.
            </p>
            <p>
                cep: {data.cep} - Logradouro: {data.logradouro} {data.numero} - Bairro: {data.bairro} -
                {data.localidade}/{data.uf}
            </p>
        </Container>
    )
}