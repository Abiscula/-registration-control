import { ChartLineUp, House, Notepad, NotePencil, PencilSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import { Container } from "./style";

export function Menu() {
    return (
        <Container>
            <nav>
                <Link to="/" className="link"><House size={32} />Home</Link>
                <Link to="/register-person" className="link"><PencilSimple size={32} />Cadastrar Pessoa</Link>
                <Link to="#" className="link"><NotePencil size={32} />Cadastrar Contrato</Link>
                <Link to="#" className="link"><Notepad size={32} />Contratos</Link>
                <Link to="#" className="link"><ChartLineUp size={32} />Estatísticas</Link>
            </nav>
        </Container>
    )
}