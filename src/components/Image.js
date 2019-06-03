import React from "react";

export default class Image extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            race: props.race
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            race: props.race
        });
    }

    render() {
        const { url } = this.state;

        return (
            <div>
                {url &&
                    <div style={{ clear: 'both', display: 'inline-block', float: 'left' }}>
                        <img src={url}></img>
                    </div>}
            </div>
        )
    }
}