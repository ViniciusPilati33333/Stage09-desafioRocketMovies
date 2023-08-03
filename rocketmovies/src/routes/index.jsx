import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';


export function Routes(){
    return(
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}

// Se eu quiser trocar as rotas basta mudar para authRoutes