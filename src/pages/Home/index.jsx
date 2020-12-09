import React, { Fragment } from 'react';
import ListarFilmes from '../../components/ListaDeFilmes';
import './styles.css'

const Home = () => {
    return (
        <div id="Home">
            <div className="Text-Home">
                <h4>Veja os filmes mais populares!</h4>
            </div>
            <div style={{ width: '100%', marginLeft: '9%' }}>
                <ListarFilmes />
            </div>
        </div>
    );
}
export default Home;