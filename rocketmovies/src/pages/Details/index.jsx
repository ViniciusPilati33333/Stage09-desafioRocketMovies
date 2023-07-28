import { Container, NewMovie, Movies, PhraseSection} from './styles';
import { Header } from '../../components/Header'
import { FiPlus } from 'react-icons/fi';
import { Stars } from '../../components/Stars';
import { Tag } from '../../components/Tag';

export function Details() {
    return(
        <Container>

            <Header />

    <main>
        <content>
           <PhraseSection>
            Meus filmes
             <NewMovie>
                <FiPlus/>
            Adicionar filme
            </NewMovie>
        </PhraseSection>


        <Movies>
            <h1>Interestelar</h1>
            <Stars />
            
            <span>{}</span>

            <section>
                <Tag title='Ficção Cientifica'/>
                <Tag title='Drama'/>
                <Tag title='Familia'/>
            </section>
          
        </Movies>

        <Movies>
            <h1>Interestelar</h1>
            <Stars />
            
            <span>{}</span>

            <section>
                <Tag title='Ficção Cientifica'/>
                <Tag title='Drama'/>
                <Tag title='Familia'/>
            </section>
          
        </Movies>


        <Movies>
            <h1>Interestelar</h1>
            <Stars />
            
            <span>{}</span>

            <section>
                <Tag title='Ficção Cientifica'/>
                <Tag title='Drama'/>
                <Tag title='Familia'/>
            </section>
          
        </Movies>
        </content>
    </main>

        </Container>
    )
}