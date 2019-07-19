import React, { Component } from 'react';
import BookList from './Components/bookList/bookList';
import PrintType from './Components/printType/printType';
import BookType from './Components/bookType/bookType';
import createURL from './Components/createURL';

class Search extends Component {
    constructor() {
        super();
        this.state ={
            books: [],
            search:' ',
            printType: '',
            bookType: ' '
        };
    }
}
setSearchTerm = term => {
    this.setState({
        search:term
    });
};

bookSearch = event => {
    event.preventDefault();
    const url = createURL (
        this.state.search,
        this.state.printType,
        this.state.bookType
    );
}