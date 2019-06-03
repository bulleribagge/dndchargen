import React from "react"

export default class Description extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRace: {}
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            selectedRace: props.selectedRace
        });
    }

    render() {
        const { selectedRace } = this.state;
        return (
            <div>
                <p>
                    {selectedRace ? (selectedRace.age ? selectedRace.age : null) : null}
                </p>
                <p>
                    {selectedRace ? (selectedRace.language_desc ? selectedRace.language_desc : null) : null}
                </p>
                <div>
                    {selectedRace && selectedRace.languages &&
                        <ul>
                            {selectedRace.languages.map(x => 
                                <li key={x.name}>{x.name}</li>
                            )}
                        </ul>
                    }
                </div>
                <p>
                    {selectedRace ? (selectedRace.size_description ? selectedRace.size_description : null) : null}
                </p>
            </div>
        )
    }
}