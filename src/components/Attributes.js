import React from "react"
import { attributes } from "../data"

export default class Attributes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characterAttributes: null,
            selectedRace: null
        }

        this.handleInput = this.handleInput.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            selectedRace: props.selectedRace,
            characterAttributes: props.attributes
        });
    }

    getAttributeValue(val, index) {
        if (this.props.selectedRace && this.props.selectedRace.ability_bonuses) {
            let raceAbilityModifier = this.props.selectedRace.ability_bonuses[index];
            let res = parseInt(val);
            if (raceAbilityModifier) {
                res += parseInt(raceAbilityModifier);
            }
            return res;
        }

        return val;
    }

    handleInput(e, idx) {
        let value = parseInt(e.currentTarget.value);
        if (value >= 0) {
            this.setState(state => {
                const attributes = state.characterAttributes.map((attr, i) => {
                    if (i === idx) {
                        return value;
                    } else {
                        return attr;
                    }
                });

                return {
                    characterAttributes: attributes
                };
            });

            this.props.attributesChanged(this.getAttributeValue(value, idx), idx);
        }
    }

    render() {
        const { characterAttributes } = this.state;
        return (
            <div>
                {
                    <table>
                        <tbody>
                            {characterAttributes &&
                                characterAttributes.map((x, idx) =>
                                    <tr key={attributes[idx]} >
                                        <td>{attributes[idx]}</td>
                                        <td>
                                            <input
                                                type="number"
                                                value={x}
                                                onInput={(e) => this.handleInput(e, idx)}
                                                onChange={function () { }}
                                                style={{ width: '40px' }} />
                                        </td>
                                        <td>
                                            {this.getAttributeValue(x, idx) !== x.value &&
                                                <span>+{this.getAttributeValue(x, idx) - parseInt(x)}</span>
                                            }
                                        </td>
                                        <td>{this.getAttributeValue(x, idx)}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}