import React from "react";
import SmallStatBlock from "../SmallStatBlock/SmallStatBlock";
import "./PossibleConjures.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

class PossibleConjures extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sort: "name", filterBy: "name", filter: "" }
        this.conjureMinion = this.conjureMinion.bind(this);
        this.handleSortChange = this.handleSortChange.bind(this);
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.filterItems = this.filterItems.bind(this);
    }

    conjureMinion(name, type, spellSource) {
        console.log(type);
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

    handleSortChange(e) {
        this.setState({ sort: e.target.value })
    }

    handleFilterChange(e) {
        this.setState({ filterBy: e.target.value})
    }

    handleTextChange(e) {
        this.setState({ filter: e.target.value })
    }

    filterItems(arr, query) {
        const conjures = this.props.conjures[this.props.selectedSpell];
        return arr.filter((el) => {
            return conjures[el][this.state.filterBy].toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
    }

    render() {
        const unorderedConjures = this.props.conjures[this.props.selectedSpell];
        const hasSubName = unorderedConjures[Object.keys(unorderedConjures)[0]].subName ? true : false;
        
        let orderedConjures = Object.keys(unorderedConjures).sort((a, b) => {
            const comp_a = unorderedConjures[a][this.state.sort];
            const comp_b = unorderedConjures[b][this.state.sort];
            if (typeof comp_a === "number") {
                return comp_a - comp_b;
            }
            else {
                const crMap = {
                    "1/8": 0.125,
                    "1/4": 0.25,
                    "1/2": 0.5,
                    "1": 1,
                    "2": 2,
                    "3": 3,
                    "4": 4,
                    "5": 5,
                    "6": 6,
                    "7": 7,
                    "8": 8,
                }
                if (comp_a in crMap) {
                    return crMap[comp_a] - crMap[comp_b];
                }
                else {
                    if (comp_a < comp_b) {
                        return -1;
                    } else if (comp_a > comp_b) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            }
        });
        if (this.state.filter !== "") {
            orderedConjures = this.filterItems(orderedConjures, this.state.filter);
        }  
        return (
            <div className="PossibleConjuresContainer">
                <div className="filterSort">
                    <FormControl>
                        <InputLabel id="sort-select-label">Sort By</InputLabel>
                        <Select
                            labelId="sort-select-label"
                            id="sort-select"
                            value={this.state.sort}
                            label="Sort by"
                            onChange={this.handleSortChange}
                        >
                            <MenuItem value="name">Name</MenuItem>
                            {hasSubName ? <MenuItem value="subName">Subname</MenuItem> : ""}
                            <MenuItem value="AC">AC</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="filters">
                        <FormControl>
                            <InputLabel id="filter-select-label">Filter By</InputLabel>
                            <Select
                                labelId="filter-select-label"
                                id="filter-select"
                                value={this.state.filterBy}
                                label="Filter by"
                                onChange={this.handleFilterChange}
                                sx={{ marginRight: "10px" }}
                            >
                                <MenuItem value="name">Name</MenuItem>
                                {hasSubName ? <MenuItem value="subName">Subname</MenuItem> : ""}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <TextField id="filter-textfield" label="Filter" variant="outlined" onChange={this.handleTextChange}/>
                        </FormControl>
                    </div>
                </div>
                <div className="PossibleConjures">
                    {orderedConjures.map((c) => (
                        <SmallStatBlock key={c} conjure={this.props.conjures[this.props.selectedSpell][c]} onClick={() => this.conjureMinion(c, this.props.conjures[this.props.selectedSpell][c].type, this.props.selectedSpell)}></SmallStatBlock>
                    ))}
                </div>
            </div>
        );
    }
}

export default PossibleConjures;