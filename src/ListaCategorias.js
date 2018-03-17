import React from 'react'
import {Link, Route} from 'react-router-dom'

const ListaCategorias = ({categoria}) => {
    return (
        <Link to={`/categorias/${categoria.url}`} className="btn btn-secondary h-100 m-2 col-sm">
            <i className={`fa ${categoria.icon} fa-4x`} aria-hidden="true"></i><br />
            {categoria.categoria}
        </Link>
    )
}

export default ListaCategorias