import React, { Component } from 'react'

export class Main1 extends Component {
  render() {
    return (
        <main>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">Left</button>
                <button type="button" className="btn btn-primary">Middle</button>
                <button type="button" className="btn btn-primary">Right</button>
            </div>
        </main>
    )
  }
}

export default Main1
