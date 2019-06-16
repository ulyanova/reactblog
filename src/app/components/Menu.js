import React, { Component } from "react";

export default class Menu extends Component {
    render() {
        console.log(this.props.data);
         let itemsRender = [];
         for (let i = 0; i < this.props.data.length; i++) {

             itemsRender.push(<li key={i}><a href={this.props.data[i].href}>{this.props.data[i].name}</a></li>);
         }

         return (<ul className='menu'>
             {itemsRender}
         </ul>);
    }
}