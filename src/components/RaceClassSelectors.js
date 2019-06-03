import React from "react"
import Select from "react-select"

export default class RaceClassSelectors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedRace: null,
            selectedClass: null,
            races: null,
            classes: null
        }

        this.raceUpdated = this.raceUpdated.bind(this);
        this.classUpdated = this.classUpdated.bind(this);
    }

    raceUpdated(race) {
        this.setState({
            selectedRace: this.state.races.find(x => x.name === race.value),
            selectedSubRace: this.state.races.find(x => x.name === race.value).subraces ? this.state.races.find(x => x.name === race.value).subraces[0] : null
        });
        this.props.raceChanged(race);
    }

    classUpdated(newClass) {
        this.setState({
            selectedClass: this.state.classes.find(x => x.name === newClass.value)
        });
        this.props.classChanged(newClass);
    }

    componentWillReceiveProps(props) {
        this.setState({
            selectedRace: props.selectedRace,
            selectedClass: props.selectedClass,
            races: props.races,
            classes: props.classes
        });
    }

    render() {
        const { selectedSubRace, selectedRace, selectedClass, races, classes } = this.state

        return (
            <div>
                {races &&
                    <div style={{ width: 200 + 'px', float: "left", margin: 5 + 'px', clear:'left' }} >
                        <Select options={races.map(x => ({ value: x.name, label: x.name }))} value={{ value: selectedRace.name, label: selectedRace.name }} onChange={this.raceUpdated} />
                    </div>}

                {classes &&
                    <div style={{ width: 200 + 'px', float: "left", margin: 5 + 'px' }}>
                        <Select options={classes.map(x => ({ value: x.name, label: x.name }))} value={{ value: selectedClass.name, label: selectedClass.name }} onChange={this.classUpdated} />
                    </div>}
            </div>
        );
    };
}