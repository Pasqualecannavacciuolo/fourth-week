import React from "react"

export default class Content extends React.Component {
    render(){
        return(
            <div className="father">
                <div className="child-bio">
                    <h2>Lorem ipsum</h2>
                    <h5>Lorem ipsum subtitle</h5>
                    <p>
                        Sono un testo di esempio che non ha alcun senso
                        serve solo pere dre un'idea di come dovrebbe
                        essere questo componente con un testo.
                    </p>
                </div>
                <div className="child">
                    <img src="https://media.istockphoto.com/photos/outdoor-shot-of-young-beautiful-woman-picture-id539208122?k=20&m=539208122&s=612x612&w=0&h=z3JO_7ZivYzJqEENFghVVldpJl25HZeak3S_wC_pWt8=" alt="profile" />
                </div>
            </div>
        );
    }    
}