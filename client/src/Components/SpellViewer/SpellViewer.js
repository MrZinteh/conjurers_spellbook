import React from "react";
import FindFamiliar from "./FindFamiliar";
import './SpellViewer.css';

class SpellViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="SpellViewer">
                <FindFamiliar></FindFamiliar>
            </div>
        );
    }
}

export default SpellViewer;