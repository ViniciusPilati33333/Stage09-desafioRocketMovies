import { Container } from './styles';
import { Button } from '../../components/Button';

export function Details() {
    return(
        <Container>
            <h1>Hello World!</h1>
            <span>Vinicius</span>


            <Button title="Entrar"/>
            <Button title="Cadastrar"/>
            <Button title="Salvar"/>

        </Container>
    )
}