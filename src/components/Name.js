import React from "react"

export default class Name extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.character.name ? props.character.name : ""
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e){
        var value = e.currentTarget.value;
        this.setState({
            name: value
        });
        this.props.nameChanged(value);
    }

    componentWillReceiveProps(props) {
        this.setState({
            name: props.character.name ? props.character.name : ""
        });
    }

    render() {
        const { name } = this.state;
        return (
            <div>
                <input type="text" value={name} onChange={this.changeHandler}></input>
            </div>
        )
    }
}