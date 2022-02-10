import React from "react";
import ConjureButton from "./ConjureButton";
import './Conjurer.css';

class Conjurer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            minions: [], 
            familiars: [],
            feySpirits: [], 
            type: "familiars" };
        this.getFamiliars = this.getFamiliars.bind(this);
        this.handleTypeSelect = this.handleTypeSelect.bind(this);
        this.optionList = this.optionList.bind(this);
    }

    getFamiliars() {
        fetch(`/api/familiars`)
            .then((res) => res.json())
            .then((data) => {
                if(data.rowCount > 0) {
                    this.setState({ familiars: data.rows });
                }
                else {
                    this.setState({ familiars: [] });
                }
            })
    }

    getFeySpirits() {
        fetch(`/api/feySpirits`)
            .then((res) => res.json())
            .then((data) => {
                if(data.rowCount > 0) {
                    this.setState({ feySpirits: data.rows });
                }
                else {
                    this.setState({ feySpirits: [] });
                }
            })
    }

    handleTypeSelect(e) {
        this.setState({ type: e.target.value })
    }

    componentDidMount() {
        this.getFamiliars();
        this.getFeySpirits();
    }

    optionList(type) {
        switch (type) {
            case "familiars":
                return this.state.familiars.map((familiar) => (
                    <option key={familiar.name} value={familiar.name}>{familiar.name}</option>
                ))
            case "feySpirits":
                return this.state.feySpirits.map((feySpirit) => (
                    <option key={feySpirit.name} value={feySpirit.name}>{feySpirit.name}</option>
                ))
            default:
                break;
        }
    }

    render() {
        return (
            <div className="Conjurer">
                <select className="ConjureSelector" name="types" id="types" onChange={this.handleTypeSelect}>
                    <option value="familiars">Familiars</option>
                    <option value="feySpirits">Fey Spirits</option>
                    <option value="shadowSpirits">Shadow Spirits</option>
                    <option value="abberations">Abberations</option>
                    <option value="constructs">Constructs</option>
                    <option value="elementals">Elementals</option>
                    <option value="draconicSpirits">Draconic Spirits</option>
                    <option value="fiends">Fiends</option>
                </select>
                <select className="ConjureSelector" name="minions" id="minions" onChange={this.handleMinionSelect}>
                    {this.optionList(this.state.type)}
                </select>
                <ConjureButton onClick={this.handleClick}></ConjureButton>
            </div>
        );
    }
}

export default Conjurer;