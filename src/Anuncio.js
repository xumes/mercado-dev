import React, { Component } from 'react'
import axios from 'axios'

class Anuncio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            anuncio : {}
        }
        const id = this.props.match.params.idAnuncio
        const url = `https://mercadodev-258bd.firebaseio.com/anuncios/${id}.json`

        axios.get(url)
            .then(data => {
                this.setState({ anuncio: data.data })
            })

    }

    render() {
        const {anuncio} = this.state
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