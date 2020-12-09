import React, { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <div className="flex  mt-32 ml-8">
                <div className="grid sm:grid-cols-12 md:grid-cols-6 lg:grid-cols-8 rounded-lg shadow shadow-2xl p-3 space-x-4">
                    <span>Total de visitas</span>
                    <div className="lg:col-start-4  sm:col-span-12 md:col-span-6 lg:col-span-1 rounded-lg shadow p-1">Dia</div>
                    <div className="lg:col-start-5  sm:col-span-12 md:col-span-6 lg:col-span-1 rounded-lg shadow p-1">Semana</div>
                    <div className="lg:col-start-6  sm:col-span-12 md:col-span-6 lg:col-span-1 rounded-lg shadow p-1">Mês</div>
                    <div className="lg:col-start-7  sm:col-span-12 md:col-span-6 lg:col-span-2   rounded-lg shadow p-1">Mês com input</div>
                </div>
                <div className="grid sm:grid-cols-12 md:grid-cols-6 lg:grid-cols-4 rounded-lg shadow shadow-2xl p-3 ml-5">
                    teste
                </div>
            </div>
        </Fragment>
    );
}
export default Home;