import React from "react";

class Detalle extends React.Component{
    state={
        lugar:undefined,
        indice:undefined,
        descripcion:undefined,
        recomendacion_niños:undefined,
        recomendacion_deportes:undefined,
        recomendacion_salud:undefined,
        recomendacion_interiores:undefined
      }
    constructor(props){
        super(props);
        this.getDetalleCondicionAire();
    }

    getDetalleCondicionAire = async(e)=>{
        
        const API_KEY="ae00d8ab370a4e79a3363912ce871f2e";
        var lugar=this.props.lugar;
        var lugarCodificado=encodeURIComponent(lugar);
        const API_CALL = await fetch(`https://api.breezometer.com/baqi/?location=${lugarCodificado}&key=${API_KEY}`);
        const data = await API_CALL.json();
        this.setState({
            lugar:lugar,
            indice:data.breezometer_aqi,
            descripcion:data.breezometer_description,
            recomendacion_niños:data.random_recommendations.children,
            recomendacion_deportes:data.random_recommendations.sport,
            recomendacion_salud:data.random_recommendations.health,
            recomendacion_interiores:data.random_recommendations.inside
          });
        console.log(this.state);
    }


    render(){
        return(
            <div className="container">
  <div className="row">
    <div className="col-12">
      <h1 className="text-center text-uppercase">{this.state.lugar}</h1>
    </div>
  </div>
  <div className="row">
    <div className="col-12 col-md-6">
      <h2 className="text-center">Índice</h2>
      <p className="text-center">{this.state.indice}</p>
    </div>
    <div className="col-12 col-md-6">
      <h2 className="text-center">Calidad</h2>
      <p className="text-center">{this.state.descripcion}</p>
    </div>
  </div>
  <div className="row text-left">
    <div className="col-12">
      <h2>Recomendaciones para niños:</h2>
    </div>
    <div className="col-12">
      <p>{this.state.recomendacion_niños+"."}</p>
    </div>
  </div>
  <div className="row text-left">
    <div className="col-12">
      <h2>Recomendaciones para deportistas:</h2>
    </div>
    <div className="col-12">
      <p>{this.state.recomendacion_deportes+"."}</p>
    </div>
  </div>
  <div className="row">
    <div className="col-12 text-left">
      <h2>Recomendaciones para la salud:</h2>
    </div>
    <div className="col-12 text-left">
      <p>{this.state.recomendacion_salud+"."}</p>
    </div>
  </div>
  <div className="row">
    <div className="col-12 text-left">
      <h2>Recomendaciones para interiores:</h2>
    </div>
    <div className="col-12 text-left">
      <p>{this.state.recomendacion_interiores+"."}</p>
    </div>
    <div className="col-12">
      <p>Click en el botón para ocultar.</p>
    </div>
  </div>
</div>
        );
    }
        
        
}
export default Detalle;