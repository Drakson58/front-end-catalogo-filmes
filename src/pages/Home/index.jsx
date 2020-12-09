import React, { Fragment } from 'react';
import ListarFilmes from '../../components/ListaDeFilmes';
import './styles.css'

const Home = () => {
    return (
        <div id="Home">

            <div className="Text-Home">
                <h4>Veja os filmes mais populares!</h4>
            </div>
            <ListarFilmes />
        </div>
    );
}
export default Home;