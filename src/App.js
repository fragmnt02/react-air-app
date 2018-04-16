import React from "react";
import Navbar from "./Components/Navbar";
import Tabla from "./Components/Tabla";

const API_KEY="ae00d8ab370a4e79a3363912ce871f2e";
//Creando el componente principal
class App extends React.Component{
  state={
    ArrayLugares:[],
    empezar:false
  }
  

  getCondicionAire = async(e)=>{
    e.preventDefault();
    if(e.target.elements.lugar.value){
    var lugar=e.target.elements.lugar.value;
    var lugarCodificado=encodeURIComponent(lugar);
    const API_CALL = await fetch(`https://api.breezometer.com/baqi/?location=${lugarCodificado}&key=${API_KEY}`);
    const data = await API_CALL.json();
    console.log(data);
    var indice=data.breezometer_aqi;
    var calidad=data.breezometer_description
    var aireLugar={
      nombre:lugar,
      indice:indice,
      calidad:calidad
    }
    console.log(aireLugar);
    this.setState({
      ArrayLugares: [...this.state.ArrayLugares, aireLugar]
    })
    console.log(this.state.ArrayLugares);
    this.setState({
      empezar:true
    });
  }else{alert("Escribe el nombre de algun lugar");}
  }
  //render muestra en pantalla a traves de jsx
  render(){
    return(
      <div>
        <Navbar getCondicionAire={this.getCondicionAire}/>
        <Tabla arreglo={this.state.ArrayLugares} empezar={this.state.empezar} handleClick={this.handleClick}/>
      </div>
    );
  }
};
export default App;