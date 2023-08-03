// todas as telas em que o usuario usa apos estar logado

import { Routes, Route } from 'react-router-dom';

import { Details } from '../pages/Details';
import { MoviePreview } from '../pages/MoviePreview';
import { NewMovie } from '../pages/NewMovie';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Details />} />
            <Route path='/newmovie' element={<NewMovie />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/moviePreview' element={<MoviePreview />} />
        </Routes>
    )
}


