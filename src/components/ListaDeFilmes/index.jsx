import React, { Fragment, useEffect, useState } from 'react'
import { Row } from 'reactstrap'
import { axiosApi } from '../../services/axiosinstance'

import CorpoCard from '../CorpoCard'
import './styles.css'

const ListarFilmes = () => {

    const [filmes, setFilmes] = useState([])
    const [textoFiltrado, setTextoFiltrado] = useState("")

    useEffect(() => {
        const load = async () => {
            const response = await axiosApi.get('filmes-populares')
            setFilmes(response.data)
        }
        load()
    }, [])


    const buscarFilme = (event) => {
        setTextoFiltrado(event.target.value);
    }

    return (
        <Fragment>
            <input
                type="text"
                onChange={buscarFilme}
                value={textoFiltrado}
            />
            <Row>

                {filmes?.map(filme => {
                    return (filme.title.toUpperCase().includes(textoFiltrado.toUpperCase())) && (
                        <CorpoCard
                            poster={filme.poster_path}
                            title={filme.title}
                            overview={filme.overview}
                            releaseData={filme.release_date}
                        />
                    )
                })}
            </Row>
        </Fragment>
    );
}

export default ListarFilmes;