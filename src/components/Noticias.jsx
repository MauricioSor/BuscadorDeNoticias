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
                        <Card key={posicion} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={noticia.image_url} />
                            <Card.Body>
                            <Card.Img variant="top" src={noticia.urlToImage} />
                                <Card.Title>{noticia.title}</Card.Title>
                                <Card.Text>{noticia.description}</Card.Text>
                                <Card.Link href={noticia.url}>Ir</Card.Link>
                            </Card.Body>
                        </Card>
                    ))}
            </Row>
        </div>
    );
};

export default Noticias;
