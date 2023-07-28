import { Container, Form, Section2 } from './styles';
import { Header } from "../../components/Header";
import { ButtonText } from '../../components/ButtonText';
import { FiArrowLeft, FiX } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { Section } from '../../components/Section';
import {Tag} from '../../components/Tag';


export function NewMovie() {
    return(
        <Container>
            <Header />

            <main>
                <div className="return">
                   <FiArrowLeft />
                   <ButtonText title='Voltar'></ButtonText> 
                </div>

                    <h1>Novo filme</h1>
                <Form>
                    <div>
                        <Input placeholder="Titulo" />
                        <Input placeholder='Sua nota de 0 a 5.'/>
                    </div>
                    <Textarea placeholder='Observações'/>

                    <Section title='Marcadores' />
                   
                     <Section2>
                        <Tag title='React'>
                            <FiX />
                        </Tag>
                        <Tag title='Novo Marcador'/>
                     </Section2>
                </Form>
            </main>
        </Container>
    );

}