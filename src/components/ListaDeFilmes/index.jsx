import React, { useEffect, useState } from 'react'
import { CardGroup, Row } from 'reactstrap'
import { axiosApi } from '../../services/axiosinstance'

import CorpoCard from '../CorpoCard'
import './styles.css'

const ListarFilmes = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const load = async () => {
            const response = await axiosApi.get('filmes-populares')
            setFilmes(response.data)
        }
        load()
    }, [])

    return (
        <Row>
            {filmes?.map(filme => (
                <CorpoCard
                    poster={filme.poster_path}
                    title={filme.title}
                    overview={filme.overview}
                    releaseData={filme.release_date}
                />
            ))}
        </Row>
    );
}

export default ListarFilmes;