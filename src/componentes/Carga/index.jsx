import React from 'react'
import { Vortex } from 'react-loader-spinner'
import './Carga.css';

export function Carga(){
    return(
        <div className='carga'>
            <Vortex
                    visible={true}
                    height="100"
                    width="100"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
        </div>
    )
};