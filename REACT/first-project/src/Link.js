import React from "react"

export default class Link extends React.Component {

    constructor() {
        super();
        this.state = {counter: 0}
    }

    render() {
        return ( 
            <><div>{this.props.obj.name} {this.props.obj.lastname}</div><button onClick={() => {
                this.setState({ counter: this.state.counter + 1 });
            } } /><p>Hai cliccato
                    {this.state.counter}
                </p></>
        );
    }
}