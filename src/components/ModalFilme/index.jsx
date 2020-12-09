import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';

const ModalFilme = (props) => {
    const { poster, title, overview, releaseData, genre } = props

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="success" onClick={toggle}>Detalhes</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col sm={6}>
                            <img src={poster} width='200'/>
                        </Col>
                        <Col sm={6} className="Filme-Depoimento">
                            {overview}
                        </Col>
                    </Row>
                    <div>
                        <h6>Data de lançamento:<strong className="ml-3">{releaseData}</strong></h6>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Fechar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalFilme