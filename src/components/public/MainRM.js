import React, { Component } from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service';

export class MainRM extends Component {

    constructor(props){
        super(props);
        console.log("Hola desde el constructor");
        this.state = {personajes: []};
    }

    componentDidMount(){
        console.log("Hola desde componentDidMount");
        /*
        RickAndMortyService.getAllCharacters()
        .then((data)=>this.setState({personajes: data.results}))
        .catch((error)=>console.log(error))*/
    }

  render() {
    return (
      //<Characters personajes={this.state.personajes}></Characters>
      <div>
        <Characters></Characters> 
      </div>
    )
  }
}

export default MainRM
