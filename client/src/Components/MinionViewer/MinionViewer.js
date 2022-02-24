import React from "react";
import SmallStatBlock from "../SmallStatBlock/SmallStatBlock";
import './MinionViewer.css';

class MinionViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { minions: [] }
        this.getMinions = this.getMinions.bind(this);
    }

    getMinions() {
        fetch(`/api/minions`)
            .then((res) => res.json())
            .then((data) => {
                if(data.rowCount > 0) {
                    this.setState({ minions: data.rows });
                }
                else {
                    this.setState({ minions: [] });
                }
            })
    }

    deleteMinion(name) {
        fetch(`/api/minions?name=${name}`, {method: 'DELETE'})
            .then(() => {
                this.getMinions();
            })
    }

    componentDidMount() {
        this.getMinions();
    }

    componentDidUpdate(prevProps) {
        if (this.props.recentlyConjured) {
            this.getMinions();
            this.props.toggleRecentlyConjured();
        }
    }

    render() {
        return (
            <div className="MinionViewer">
                <h1 className="minionViewerTitle">Minions:</h1>
                {this.state.minions.map((minion, i) => (
                    <SmallStatBlock key={i} conjure={this.props.conjures[minion.spell_source][minion.name]} onClick={() => this.deleteMinion(minion.name)}></SmallStatBlock>
                ))}
                
            </div>
        );
    }
}

export default MinionViewer;