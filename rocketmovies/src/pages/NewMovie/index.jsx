import { Container, Form, } from './styles';
import { Header } from "../../components/Header";
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button'
import { FiArrowLeft, FiX } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Link } from 'react-router-dom';


export function NewMovie() {
    return(
        <Container>
            <Header />

            <main>
                <div className="return">
                   <FiArrowLeft />
                   <Link to='/'>
                       <ButtonText title='Voltar'></ButtonText> 
                   </Link>
                </div>

                    <h1>Novo filme</h1>
                <Form>
                    <div>
                        <Input placeholder="Titulo" />
                        <Input placeholder='Sua nota de 0 a 5.'/>
                    </div>
                    <Textarea placeholder='Observações'/>

                     <Section title="Marcadores">
                        <div className='tags'>
                            <NoteItem value="React"/>
                            <NoteItem placeholder="Novo Marcador" isNew />
                        </div>
                     </Section>

                    <div className='buttons'>
                     <button id='one'>Excluir Filme</button>
                     <button id='two'>Salvar Alterações</button>
                    </div>

                </Form>
            </main>
        </Container>
    );

}