import { Container, Profile } from './styles';


export function Header() {
    return(
        <Container>
            <Profile>
               <h1>RocketMovies</h1>
               <input type="text" placeholder='Pesquisar pelo titulo' />
                
            <div>
                <strong>Vinicius R. Pilati</strong>
                <span>Sair</span>
            </div>
            <img src="https://github.com/ViniciusPilati33333.png" alt="foto do usuário" />
            </Profile>
        </Container>
    )
}