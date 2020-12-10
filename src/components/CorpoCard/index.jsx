import React from 'react'
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Col
} from 'reactstrap';

import ModalFilme from '../ModalFilme';
import './styles.css'

const CorpoCard = ({ poster, title, overview, releaseData }) => {
    return (
        <Col sm={3} className="ml-5">
            <Card>
                <CardImg src={poster} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardText>{overview}</CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                        <strong>Data de lançamento:</strong>    {releaseData}
                    </CardSubtitle>

                    {/**
                     * Existe duas formas de fazer a exibição dos detalhes
                     * 
                     * 1 - Passando os dados via props para o modal e exibindo os dados (Como estou fazendo)
                     * 
                     * 2 - Passar o id para dentro do modal e lá fazer a request para a rota -> detalhes-filme/{id}
                     * obs: Não escolhi essa opção, pois, seria desnecessário fazer mais uma request, tendo em vista que já tem esses dados.
                     */}

                    <ModalFilme
                        poster={poster}
                        title={title}
                        overview={overview}
                        releaseData={releaseData}
                    />
                </CardBody>
            </Card>
        </Col>
    )
}

export default CorpoCard