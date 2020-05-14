import React, { Component } from "react";
import API from "../utils/API"
import axios from "axios"

class Search extends Component {

    state = {
        books: []
    }

    formSubmit(e, search) {
        e.preventDefault()

        let newSearch = search.replace(/ /g, "+")
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + newSearch)
            .then(res => {
                console.log(res.data.items[0])

                let newBooks = []
                for (var i = 0; i < res.data.items.length; i++) {
                    let authors = res.data.items[i].volumeInfo.authors
                    let pic = res.data.items[i].volumeInfo.imageLinks.thumbnail
                    let title = res.data.items[i].volumeInfo.title
                    let description = res.data.items[i].volumeInfo.description
                    let link = res.data.items[i].selfLink

                    newBooks.push({
                        authors,
                        pic,
                        title,
                        description,
                        link
                    })
                }

                this.setState({ books: newBooks })
            })
    }

    save(e, book) {
        e.preventDefault()
        console.log(book)
        
        API.saveBook(book).then(res => console.log(res))
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <form className="form-inline" onSubmit={e => this.formSubmit(e, this.refs.search.value)}>
                            <div className="form-group mb-2">
                                <label>Search for books with the power of the internet!</label>
                                <input type="text" ref="search" />
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Search</button>
                        </form>
                    </div>
                </div>
                {this.state.books.map((book, i) => (
                    <div key={i} className="row p-4 border m-2">
                        <div className="col-4">
                            <img src={book.pic} />
                            <button onClick={e => this.save(e, book)}>Save</button>
                        </div>
                        <div className="col-8">
                            <h4>{book.title}</h4>
                            <h4>{book.authors}</h4>
                            <h4>{book.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Search