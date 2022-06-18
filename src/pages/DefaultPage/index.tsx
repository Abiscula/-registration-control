import NotifyModal from "../../components/NotifyModal";
import { Container } from "./style";

export default function DefaultPage() {
    return (
        <Container>
            <div>
                <NotifyModal />
                <h1 className="colorTitle">Painel de administração</h1>
            </div>
        </Container>
    )
}