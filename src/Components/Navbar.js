import React from "react";

class Navbar extends React.Component{
    render(){
        return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Calidad del Aire</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Acerca de</a>
                    </li>
                    </ul>
                    <span className="navbar-text m-2">
                        Busqueda por ubicación:
                    </span>
                    <form className="form-inline my-2 my-lg-0" onSubmit={this.props.getCondicionAire}>
                    <input className="form-control mr-sm-2" id="boton-nav" type="search" placeholder="Ciudad, Código Postal, etc." aria-label="Search" name="lugar"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
</nav>

        );
    }
};
export default Navbar;