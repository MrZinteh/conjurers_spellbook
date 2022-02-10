import React from "react";
import './SmallStatBlock.css';
import spellbook from "./spellbook.png";

class AddButton extends React.Component {
    render() {
        return (
            <button 
				className="AddButton"
                onClick = { this.props.onClick }>
                <img src={spellbook} alt="add"></img>
			</button>
        );
    }
}

export default AddButton;