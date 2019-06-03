import React from "react";
import ReactDom from "react-dom";
import RaceClassSelectors from "./components/RaceClassSelectors"
import Attributes from "./components/Attributes"
import Image from "./components/Image"
import Name from "./components/Name"
import Description from "./components/Description"
import Characters from "./components/Characters"
import { getRaces, getClasses, attributes } from "./data"
import axios from "axios"
import uuidv4 from "uuid/v4"

const baseUrl = "http://www.dnd5eapi.co/api";

class App extends React.Component {
    constructor() {
        super();

        this.character = {
            name: "Martin",
            race: null,
            class: null,
            attributes: [0, 0, 0, 0, 0, 0]
        }

        this.state = {
            races: null,
            classes: null,
            selectedRace: null,
            selectedClass: null,
            character: this.character,
            characters: []
        }

        this.raceChanged = this.raceChanged.bind(this);
        this.classChanged = this.classChanged.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
        this.saveCharacter = this.saveCharacter.bind(this);
        this.attributesChanged = this.attributesChanged.bind(this);
    }

    componentDidMount() {
        var self = this;

        axios.get(baseUrl + "/races")
            .then(function (res) {
                const races = res.data.results
                axios.get(races[0].url)
                    .then(function (res) {
                        self.setState(state => {
                            var oldCharacter = JSON.parse(JSON.stringify(state.character));
                            oldCharacter.race = res.data;
                            return {
                                races: races,
                                selectedRace: res.data,
                                classes: state.classes,
                                character: oldCharacter
                            }
                        });
                    });
            });

        axios.get(baseUrl + "/classes")
            .then(function (res) {
                const classes = res.data.results
                axios.get(classes[0].url)
                    .then(function (res) {
                        self.setState(state => {
                            var oldCharacter = JSON.parse(JSON.stringify(state.character));
                            oldCharacter.class = res.data;
                            return {
                                classes: classes,
                                selectedClass: res.data,
                                races: state.races,
                                character: oldCharacter
                            }
                        });
                    })
            });
    }

    raceChanged(race) {
        var self = this;
        let newRace = this.state.races.find(x => x.name === race.value);

        axios.get(newRace.url)
            .then(function (res) {
                self.setState({
                    selectedRace: res.data
                });
            });
        
        this.setState(state => {
            var character = JSON.parse(JSON.stringify(state.character));
            character.race = newRace;
            return{
                character
            }
        })
    }

    classChanged(newClass) {
        var c = this.state.classes.find(x => x.name === newClass.value);
        this.setState({
            selectedClass: c
        });
        this.setState(state => {
            var character = JSON.parse(JSON.stringify(state.character));
            character.class = c;
            return{
                character
            }
        })
    }

    nameChanged(newName){
        this.setState(state => {
            var character = JSON.parse(JSON.stringify(state.character));
            character.name = newName;
            return {
                character
            }
        })
    }

    attributesChanged(value, idx){
        this.setState(state => {
            var character = JSON.parse(JSON.stringify(state.character));
            character.attributes[idx] = value;
            
            return {
                character
            }
        })
    }

    saveCharacter() {
        this.setState(state => {
            var character = JSON.parse(JSON.stringify(state.character));
            character.key = uuidv4();
            const characters = state.characters.concat(character);

            return {
                characters
            }
        })
    }

    render() {
        const { characters, character, selectedRace, selectedClass, races, classes } = this.state;
        return (
            <div style={{display:'flex', flexDirection:'column'}}>
                <h1>{character.name} - {selectedRace ? selectedRace.name : "-"} {selectedClass ? selectedClass.name : "-"}</h1>
                <Name character={character} nameChanged={this.nameChanged}/>
                <RaceClassSelectors selectedRace={selectedRace} selectedClass={selectedClass} races={races} classes={classes} raceChanged={this.raceChanged} subRaceChanged={this.subRaceChanged} classChanged={this.classChanged} />
                <Image race={selectedRace} />
                <Attributes attributes={character.attributes} selectedRace={selectedRace} attributesChanged={this.attributesChanged} />
                <Description selectedRace={selectedRace} selectedClass={selectedClass} />
                <div>
                    <button  onClick={this.saveCharacter}>Save</button>
                </div>
                <Characters characters={characters}></Characters>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById("index"));