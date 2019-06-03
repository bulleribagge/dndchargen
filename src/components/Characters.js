import React from "react"
import { attributes } from "../data"

export default class Characters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: props.characters
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            characters: props.characters
        });
    }

    render() {
        const { characters } = this.state;
        return (
            <div style={{ display: "flex", flexDirection: "row"}}>
                {characters.map(x =>
                    <div style={{ float: "left", border: "1px solid black", padding: "5px", margin: "5px", borderRadius:"10px" }} key={x.key}>
                        <h2>
                            {x.name}
                        </h2>
                        {x.race.name} - {x.class.name}
                        <hr></hr>
                        {x.attributes.map((a, i) => 
                            <span key={i}>{attributes[i].substr(0,3).toUpperCase()} - {a}<br/></span>
                        )}
                    </div>
                )}
            </div>
        )
    }
}