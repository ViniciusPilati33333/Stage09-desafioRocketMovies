import { Container } from './styles';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
    return(
        <Container>
            <Header />
            <ButtonText title='Voltar' />
           
            <Button title="Entrar"/>

        </Container>
    )
}