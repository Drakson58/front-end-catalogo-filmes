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