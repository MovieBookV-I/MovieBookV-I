import React, { Component } from 'react';
import './SearchBar.css';
import '../../public/bootstrap-3.3.7-dist/css/bootstrap-theme.css'
import SearchIcon from '../img/search-icon-hi.png';

export default class SearchBar extends Component{

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                            <form onSubmit={this.submitForm.bind(this)}>
                                Search By
                                <select ref={e => this.searchCategorryField = e}>
                                    <option value="movieName">Movie name</option>
                                    <option value="directorName">Director</option>
                                </select>
                                <input type="text" id="searchText" ref={e => this.searchTextField = e}/>
                                <button><img id="searchIcon" src={SearchIcon} alt=""/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    submitForm(event) {
        event.preventDefault();
        this.props.onsubmit(
            this.searchCategorryField.value,
            this.searchTextField.value
        );
    }
}