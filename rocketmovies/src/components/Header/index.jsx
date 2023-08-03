import { Container, Profile } from './styles';
import { Link } from "react-router-dom";


export function Header() {
    return(
        <Container>
            <Profile>
               <h1>RocketMovies</h1>
               <input type="text" placeholder='Pesquisar pelo titulo' />

            <div>
                <Link to='profile'>
                <strong>Vinicius R. Pilati</strong>
                <span>Sair</span>
                </Link>  
            </div>
            <img src="https://github.com/ViniciusPilati33333.png" alt="foto do usuário" />
            </Profile>
        </Container>
    )
}