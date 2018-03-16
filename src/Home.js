import React, { Component } from 'react'


import AnuncioHome from './AnuncioHome'
import Categorias from './Categorias'
import HeaderHome from './HeaderHome'
import base from './base'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categorias: [],
            anuncios: []
        }

        base.bindToState('categorias', {
            context: this,
            state: 'categorias'
        })

        base.bindToState('anuncios', {
            context: this,
            state: 'anuncios',
            queries: {
                limitToLast: 3
            }
        })

    }

    render() {
        return (
            <div>
            <HeaderHome />
                <div className="container">
                    <h3>Últimos anúncios</h3>
                    <div className="row">
                        {this.state.anuncios.map((anuncio, index) => {
                            return <AnuncioHome key={index} anuncio={anuncio} />
                        })}

                    </div>
                    <h3>Categorias</h3>
                    {/*JSON.stringify(this.state.categorias)*/}
                    <div className="row">
                        {this.state.categorias.map((cat, index) => {
                            return [
                                <Categorias categoria={cat} key={index} />,
                                ++index % 4 === 0 && <div key={'c' + index} className="w-100"></div>
                            ]
                        })}

                    </div>
                </div>
            </div>
        )
    }
}

export default Home