import React, { useEffect } from 'react';
import { axiosApi } from '../../services/axiosinstance';

const Main = () => {
    
    useEffect(() => {
        const load = async () => {
            const response = await axiosApi.get('filmes-populares');
            console.log(response);
        } 
        load();
    }, [])

    return (
        <div className="main-header ">


        </div> 
    );
}

export default Main;