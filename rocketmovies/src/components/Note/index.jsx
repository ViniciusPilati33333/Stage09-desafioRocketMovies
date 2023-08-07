import { Container } from './styles';
import { Tag } from '../Tag';
import { Stars } from '../Stars';

export function Note({data, ...rest}) {
    return(
        <Container>
            <h1>{data.title}</h1>
            <Stars />
            <p>{data.desc}</p>
            {
            data.tags &&
            <footer> 
                {
                    data.tags.map(tag => <Tag title={tag.name} key={tag.id} />)
                }
            </footer>
            }
        </Container>
    );
}