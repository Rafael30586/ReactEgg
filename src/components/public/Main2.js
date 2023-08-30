import React, { Component } from 'react'
import Hijo from './Hijo'

export class Main2 extends Component {
    constructor(props){
        super(props);
    
        console.log("Hola desde el constructor de Main2");
      }
    
      componentDidMount(){
        console.log("Hola desde componentDidMount de Main2");
      }
    
  render() {
    return (
        <main>
            <div>
                <Hijo nombre="SuperMan"></Hijo>
                <Hijo nombre="Flash"></Hijo>
            </div>
        </main>
    )
  }
}

export default Main2
