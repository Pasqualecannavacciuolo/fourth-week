import React from "react"

export const PrintHello = ComposedComponent=> class extends React.Component {
    onClick() {
        console.log("Hai cliccato");
    }

    render() {
        return(
            <ComposedComponent{...this.props} onClick={this.onClick} />
        );
    }
}


const testComponent = (props) => {
    <div onClick={props.onClick}>
        <p>Hello {props.name}</p>
    </div>
}


export const SharedComponent = HOC(testComponent);