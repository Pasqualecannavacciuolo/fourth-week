import React from "react"

export default class Link extends React.Component {

    render() {
        return ( <div>{this.props.obj.name} {this.props.obj.lastname}</div>)
    }
}