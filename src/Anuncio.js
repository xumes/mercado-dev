import React, { Component } from 'react'
import axios from 'axios'

class Anuncio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anuncio : {},
            isLoading: true
        }
        const id = this.props.match.params.idAnuncio
        const url = `https://mercadodev-258bd.firebaseio.com/anuncios/${id}.json`

        axios.get(url)
            .then(data => {
                this.setState({ anuncio: data.data, isLoading: false})
            })

    }

    render() {
        const {anuncio} = this.state

        //another method
        if(this.state.isLoading) {
            return <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        }

        return (
            <div>
                <h2>{anuncio.nome}</h2>
                <p><img src={anuncio.foto} /></p>
                <p>{JSON.stringify(this.state.anuncio)}</p>
            </div>
        )
    }
}

export default Anuncio