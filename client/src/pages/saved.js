import React, { Component } from "react";
import API from "../utils/API";

class Saved extends Component {

    state = {
        saved: []
    }

    componentDidMount() {
        API.getBooks().then(res => {
            console.log(res)
            this.setState({ saved: res.data })
        })
    }

    render() {
        return (
            <div>
                {this.state.saved.map((book, i) => (
                    < div key={i} className="row p-4 border m-2" >
                        <div className="col-4">
                            <img src={book.pic} />
                            <button onClick={e => this.save(e, book)}>Save</button>
                        </div>
                        <div className="col-8">
                            <h4>{book.title}</h4>
                            <h4>{book.description}</h4>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Saved