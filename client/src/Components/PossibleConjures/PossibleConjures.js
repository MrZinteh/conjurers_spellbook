import React from "react";
import SmallStatBlock from "../SmallStatBlock/SmallStatBlock";
import "./PossibleConjures.css";

class PossibleConjures extends React.Component {
    constructor(props) {
        super(props);
        this.conjureMinion = this.conjureMinion.bind(this);
    }

    conjureMinion(name, type, spellSource) {
        fetch(`/api/minions?name=${name}&type=${type}&spellSource=${spellSource}`, {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({"name": `${name}`, "type": type, "spellSource": spellSource})
        })
        .then(() => {
            this.props.toggleRecentlyConjured();
        })
    }

    render() {
        return (
            <div className="PossibleConjures">
                {Object.keys(this.props.conjures[this.props.selectedSpell]).map((c) => (
                    <SmallStatBlock key={c} conjure={this.props.conjures[this.props.selectedSpell][c]} onClick={() => this.conjureMinion(c, 'Familiar', this.props.selectedSpell)}></SmallStatBlock>
                ))}
            </div>
        );
    }
}

export default PossibleConjures;