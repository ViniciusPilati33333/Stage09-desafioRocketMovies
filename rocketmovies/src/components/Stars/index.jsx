import { FiStar} from "react-icons/fi"
import { FaStar } from "react-icons/fa"


import { Container } from "./styles";


export function Stars({isActive = false}){
   return(
       <Container $isactive={isActive.toString()}>
           {isActive ? <FaStar/> : <FiStar/>}
           {isActive ? <FaStar/> : <FiStar/>}
           {isActive ? <FaStar/> : <FiStar/>}
           {isActive ? <FaStar/> : <FiStar/>}
           {isActive ? <FaStar/> : <FiStar/>}
       </Container>
   );
      
   
};

