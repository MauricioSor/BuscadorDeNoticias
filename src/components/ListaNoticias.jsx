import React from 'react';
import Noticias from './Noticias'
const ListaNoticas = ({noticia}) => {
    console.log(noticia);
    return (
        <div className='border mx-3 d-flex justify-content-center'>
        <Noticias noticia={noticia}></Noticias>
        </div>
    );
};

export default ListaNoticas;