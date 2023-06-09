import React from 'react';
import { Card, Button ,Row} from 'react-bootstrap';

const Noticias = ({ noticia }) => {
    const noticiasArray = noticia[2];
    console.log(noticiasArray);
    return (
        <div className='my-4 container '>
            <Row xs={1} md={2} lg={3} xl={4} className='g-4 mx-3 d-flex justify-content-center'>
                {
                    noticiasArray?.map((noticia, posicion) => (
                        <Card className='mx-1 border-info border-3' key={posicion} style={{ width: '18rem'}}>
                            <Card.Img variant="top" src={noticia.image_url} style={{height:'10rem', width:'16rem'}} alt={'Imagen de '+noticia.title} className='mt-1' />
                            <Card.Body>
                                <Card.Title>{noticia.title}</Card.Title>
                                <Card.Text className='text-truncate'>{noticia.description}</Card.Text>
                                <Card.Footer>
                                <Card.Link  href={noticia.link} className='card-link'>Ir</Card.Link>
                                </Card.Footer>
                            </Card.Body>
                        </Card>
                    ))}
            </Row>
        </div>
    );
};

export default Noticias;
