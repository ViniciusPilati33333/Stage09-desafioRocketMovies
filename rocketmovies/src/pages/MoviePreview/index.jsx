import { Container } from './style';
import { Header } from "../../components/Header";
import {ButtonText} from '../../components/ButtonText';
import { FiArrowLeft } from 'react-icons/fi';
import { Stars } from '../../components/Stars';

export function MoviePreview(){
    return(
        <Container>
            <Header />
            <main>
                <div>
                   <FiArrowLeft />
                   <ButtonText title='Voltar'></ButtonText> 
                </div>

                <div className="title">
                <h1>Interestellar</h1>
                <Stars />
                </div>
                
            </main>


        </Container>
    )
}