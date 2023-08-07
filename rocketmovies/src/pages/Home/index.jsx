import { Container, NewMovie, PhraseSection} from './styles';
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Note } from '../../components/Note';


export function Home() {
    return(
        <Container>
            <Header />
    <main>
        <PhraseSection>
            Meus filmes
            <Link to='/newmovie'>
                <NewMovie>
                        <FiPlus/>
                        <span>Adicionar filme</span>
                </NewMovie>
            </Link>
        </PhraseSection>

        <Link to='/details/:id'>
        <Note data={
        {title: "Interestelar",
          desc: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o 'fantasma' é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação",

         tags: [
            { id: "1" , name: "Drama"},
            {id: "2" , name: "Familia"},
            {id: "3" , name: "Ficção Cientifica"}

         ]
         }} 
         />

        </Link>

        </main>

        </Container>
    )
}