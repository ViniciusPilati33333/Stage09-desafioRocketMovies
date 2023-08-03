import { Container, Form, Background } from './styles';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input type='text' placeholder='E-mail' icon={FiMail}/>
                <Input type='password' placeholder='password' icon={FiLock}/>

            <div className='btns'>
                 <Button title='Entrar'/>

                <Link to='/register'>
                 <ButtonText title='Criar conta'/>
                </Link> 
            </div>    
            </Form>

            <Background />
        </Container>
    )
}