import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, CardSubtitle } from 'reactstrap'
import './styles.css'

const ModalFilme = ({ poster, title, overview, releaseData }) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="success" onClick={toggle}>Detalhes</Button>
            <Modal isOpen={modal}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col sm={6}>
                            <img src={poster} width='200' style={{ borderRadius: '10%' }}/>
                        </Col>
                        <Col sm={6} className="Filme-Depoimento">
                            {overview}
                        </Col>
                    </Row>
                    <CardSubtitle tag="h6" className="mb-2 text-muted mt-3">
                        <strong className="mr-2">Data de lançamento:</strong>{releaseData}
                    </CardSubtitle>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Fechar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalFilme