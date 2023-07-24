import { Container, NewMovie, Movies, PhraseSection} from './styles';
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi';

export function Home() {
   return (
    <Container>
        <Header />

        <PhraseSection>
            Meus filmes
             <NewMovie>
                <FiPlus/>
            Adicionar filme
            </NewMovie>
        </PhraseSection>


        <Movies>
            <h1>Interestelar</h1>
            
        </Movies>
       

    </Container>
   ) 
    
        
}