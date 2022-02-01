import React, { Component } from 'react'

class Card extends Component {
    
    render() {
        return (
            <div>
            {this.props.flag}
            <p>{this.props.name}</p>
            <p>{this.props.capital}</p>
            <p>{this.props.population}</p>
            <p>{this.props.region}</p>
            </div>
        )
    }
}

export default Card