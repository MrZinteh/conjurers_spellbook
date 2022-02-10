import React from 'react';
import './App.css';
// import Conjurer from './Components/Conjurer/Conjurer';
import Header from './Components/Header/Header';
import PossibleConjures from './Components/PossibleConjures/PossibleConjures';
import SpellSelector from './Components/SpellSelector/SpellSelector';
import SpellViewer from './Components/SpellViewer/SpellViewer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <SpellSelector></SpellSelector>
        <SpellViewer></SpellViewer>
        <PossibleConjures></PossibleConjures>
      </div>
    );
  }
}

export default App;
