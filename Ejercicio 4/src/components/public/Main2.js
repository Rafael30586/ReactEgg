import React, { Component } from 'react'

export class Main2 extends Component {
  render() {
    return (
        <main>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-danger">Left</button>
                <button type="button" className="btn btn-warning">Middle</button>
                <button type="button" className="btn btn-success">Right</button>
            </div>
        </main>
    )
  }
}

export default Main2
