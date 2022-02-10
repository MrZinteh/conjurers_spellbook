import React from "react";
import './Conjurer.css';

class ConjureButton extends React.Component {
    render() {
        return (
            <button 
				className="ConjureButton"
                onClick = { this.props.onClick }>
				Conjure!
			</button>
        );
    }
}

export default ConjureButton;