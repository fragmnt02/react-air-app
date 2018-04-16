import React from "react";
import Boton from "./Boton";

class Tabla extends React.Component{

  render() {
    return(
      <Evaluar arreglo={this.props.arreglo} empezar={this.props.empezar} />
    );
  }
}

class Evaluar extends React.Component{
  render(){
    if(this.props.empezar){
      return(<TablaGenerador arreglo={this.props.arreglo} />);
    }else{
      return(
      <div className="container my-5 py-5" >
        <div className="row my-5 py-5" >
          <div className="col-12 text-center my-5 py-5" >
            <blockquote className="blockquote text-center text-white p-5" id="aviso" >
              <p className="mb-0 text-uppercase">Obtenga el índice de calidad del aire de tu ciudad con tan solo escribir su nombre y no sufra más.</p>
              <footer className="blockquote-footer text-success">Calidad del Aire Company <cite title="Source Title"></cite></footer>
            </blockquote>
            <p id="aviso"></p>
          </div>
        </div>
      </div>
      );
    }
    
  }
}

class TablaGenerador extends React.Component{
  render(){
    return(
      <div className="container.fluid m-5" >
      <table className="table table-hover text-center table-light" id="resultTabla">
        <thead>
          <tr>
            <th scope="col">Lugar</th>
            <th scope="col">Índice</th>
            <th scope="col">Calidad</th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>
          <Fila datos={this.props.arreglo} />
        </tbody>
      </table>
      </div>
    );
  }
}

class Fila extends React.Component {
  
  render() {
    const datos = this.props.datos;
    const fila = datos.map((dato) =>
    <tr>
      <td key={dato.nombre}>{dato.nombre}</td>
      <td key={dato.indice}>{dato.indice}</td>
      <td key={dato.calidad}>{dato.calidad}</td>
      <td key={dato.calidad+"nombre"}><Boton lugar={dato.nombre}/></td>
    </tr>
    );
    return (
      fila
    );
  }
}


export default Tabla;