import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div className="search-bar">
                <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />

            </div>
         
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);

    }
    // 
    // onInputChange(event) { //event == e
    //     console.log(event.target.value)
    // }

}

export default SearchBar;
