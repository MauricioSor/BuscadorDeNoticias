import React, { useState, useEffect } from 'react';
import ListaNoticias from './ListaNoticias';
import Form from 'react-bootstrap/Form';

const Formulario = () => {
    const [noticia, setNoticia] = useState([]);

    const consultaDeAPI = async (e) => {
        try {
            let url = '';
            if (e && e.target.value !== 'Todas') {
                url = `https://newsapi.org/v2/everything?q=${e.target.value}&sources=bbc-news&apiKey=1b0e0dea605e49b2a2093ff503a3c236`;
            } else {
                url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1b0e0dea605e49b2a2093ff503a3c236';
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
                    <option>Todas</option>
                    <option value="Economy">Economia</option>
                    <option value="Bitcoin">Bitcoin</option>
                    <option value="Apple">Apple</option>
                </Form.Select>
            </div>
            <ListaNoticias noticia={noticia}></ListaNoticias>
        </div>
    );
};

export default Formulario;