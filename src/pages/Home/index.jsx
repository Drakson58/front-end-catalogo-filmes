import React from 'react';
import ListarFilmes from '../../components/ListaDeFilmes';
import './styles.css'

const Home = () => {
    return (
        <div id="Home">
            <div className="Text-Home mt-4">
                <h4>Veja os filmes mais populares!</h4>
            </div>
            <div >
                <ListarFilmes />
            </div>
        </div>
    );
}
export default Home;