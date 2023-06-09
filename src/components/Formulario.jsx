import React, { useState, useEffect } from 'react';
import ListaNoticias from './ListaNoticias';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
    const [noticia, setNoticia] = useState([]);

    const consultaDeAPI = async (e) => {
        try {
            let url = '';
            if (e && e.target.value !== 'general') {
                url = `https://newsdata.io/api/1/news?apikey=pub_24074bc4b36bc5fc96f3342bf4006ed1ffc3c&category=${e.target.value}&language=es`;
            } else {
                url = 'https://newsdata.io/api/1/news?apikey=pub_24074bc4b36bc5fc96f3342bf4006ed1ffc3c&country=us&language=es';
            }

            const consulta = await fetch(url);
            const dato = await consulta.json();
            console.log('soy el dato', dato);
            const datoArray = Object.values(dato);
            setNoticia(datoArray);
        } catch (error) {
            throw new Error(error);
        }

    }
    useEffect(() => {
        console.log('soy useEfect');
        consultaDeAPI();
    }, []);
    return (
        <div className='container border my-3'>
            <div className='conmtainer  d-flex justify-content-center my-3'>
                <h3>Buscar por categoria</h3>
                <Form.Select onChange={consultaDeAPI} aria-label="Default select example">
                    <option value='general'>Ingrese Categoria...</option>
                    <option value="health">Salud</option>
                    <option value="business">Negocios</option>
                    <option value="science">Ciencia</option>
                    <option value="sports">Deporte</option>
                    <option value="technology">Tecnolgia</option>
                </Form.Select>
            </div>
            <ListaNoticias noticia={noticia}></ListaNoticias>
        </div>
    );
};

export default Formulario;