import React, { Fragment, useEffect, useState } from 'react'
import { Row } from 'reactstrap'
import { axiosApi } from '../../services/axiosinstance'

import CorpoCard from '../CorpoCard'
import './styles.css'

const ListarFilmes = () => {

    const [pagina, setPagina] = useState(1)
    const [filmes, setFilmes] = useState([])
    const [textoFiltrado, setTextoFiltrado] = useState("")

    function ordenaFilmes (filmes) {
        filmes.sort(function (a, b) {
            return (a.title > b.title) ? 1 : ((b.nome > a.title) ? -1 : 0);    
        });
    }

    useEffect(() => {
        const load = async () => {
            const response = await axiosApi.get(`filmes-populares/${pagina}`)
            var filmes =  ordenaFilmes(response.data)
            setFilmes(response.data)
        }
        load()
    }, [pagina])

    
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
                <div className="ml-3">
                    <nav>
                        <ul class="pagination pagination-lg">
                            <li class="page-item">
                                <a class="page-link" onClick={ () => setPagina(1)}>1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" onClick={ () => setPagina(2)}>2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" onClick={ () => setPagina(3)}>3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" onClick={ () => setPagina(4)}>4</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" onClick={ () => setPagina(5)}>5</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" onClick={ () => setPagina(6)}>6</a>
                            </li>
                        </ul>
                    </nav>
                </div>
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