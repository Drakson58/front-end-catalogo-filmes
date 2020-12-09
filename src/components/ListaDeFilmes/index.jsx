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
        <div>
            <div className="text-right mr-5">
                <label className="text-white mr-3 Text-Busca-Filmes">Buscar filmes:</label>
                <input
                    className="Input-Pesquisa-filme"
                    type="text"
                    onChange={buscarFilme}
                    placeholder="Digite o nome do filme..."
                    value={textoFiltrado}
                />
            </div>
            <Row>
                {filmes?.map(filme => {
                    return (filme.title.toUpperCase().includes(textoFiltrado.toUpperCase())) ?  (
                        <Fragment>
                            {console.log('Filmes dados', filme, 'FilmesFiltrados', textoFiltrado)}
                            <CorpoCard
                                key={filme.id}
                                poster={filme.poster_path}
                                title={filme.title}
                                overview={filme.overview}
                                releaseData={filme.release_date}
                            />
                        </Fragment>
                    ) : <div style={{height: '1200px' }} />
                })}
            </Row>
        </div>
    );
}

export default ListarFilmes;