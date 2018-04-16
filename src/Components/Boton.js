import React from "react";
import Detalle from "./Detalle";

var id;


class Boton extends React.Component{
    state={
        lugar:undefined
    }
    constructor(props){
        super(props);
        console.log(props.lugar);
        console.log(this.props.lugar);
        this.id=this.makeid();
    }

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++){
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        } 
        return text;
      }
    

    
    render(){
        return(
            <div>
  <p>
    <button className="btn btn-success" type="button" data-toggle="collapse" data-target={"#"+this.id} aria-expanded="false" aria-controls="multiCollapseExample2">Detalles</button>
  </p>
  <div className="row">
    <div className="col-12">
      <div className="collapse multi-collapse" id={this.id}>
        <div className="card card-body">
          <Detalle lugar={this.props.lugar}/>
        </div>
      </div>
    </div>
  </div>
</div>
        );
    }
}
export default Boton;