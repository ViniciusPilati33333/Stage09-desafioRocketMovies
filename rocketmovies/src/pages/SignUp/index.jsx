import { Container, Form, Background } from './styles';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi';

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input type='text' placeholder='Nome' icon={FiUser}/>
                <Input type='text' placeholder='E-mail' icon={FiMail}/>
                <Input type='password' placeholder='password' icon={FiLock}/>

            <div className='btn'>
                 <Button title='Cadastrar'/>
            </div>    


            <footer>
                <FiArrowLeft />
                <ButtonText title='Voltar para o login' />
            </footer>
               
            </Form>

            <Background />
        </Container>
    )
}