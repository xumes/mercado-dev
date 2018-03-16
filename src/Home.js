import React, { Component } from 'react'

import AnuncioHome from './AnuncioHome'
import Categorias from './Categorias'
import HeaderHome from './HeaderHome'
import base from './base'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anuncios: []
        }

        base.bindToState('anuncios', {
            context: this,
            state: 'anuncios',
            queries: {
                limitToLast: 3
            }
        })

    }

    render() {
        let index = 0
        return (
            <div>
            <HeaderHome />
                <div className="container">
                    <h3>Últimos anúncios</h3>
                    <div className="row">
                        {Object.keys(this.state.anuncios).map(key => {
                            const anuncio = this.state.anuncios[key]
                            return <AnuncioHome key={key} anuncio={anuncio} />
                        })}

                    </div>
                    <h3>Categorias</h3>
                    {/*JSON.stringify(this.state.categorias)*/}
                    <div className="row">
                        {Object.keys(this.props.categorias).map(key => {
                            const cat = this.props.categorias[key]
                            return [
                                <Categorias categoria={cat} key={key} />,
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