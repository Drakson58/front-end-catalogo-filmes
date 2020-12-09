import React, { useEffect } from 'react';
import { axiosApi } from '../../services/axiosinstance';

const ListarFilmes = () => {
    
    useEffect(() => {
        const load = async () => {
            const response = await axiosApi.get('filmes-populares');
            console.log(response);
        } 
        load();
    }, [])

    return (
        <div>
            teste
        </div> 
    );
}

export default ListarFilmes;