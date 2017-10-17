import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    rederList(){
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title} by <a href="http://google.com" >{book.author}</a></li>
            );
        });
    }
    render(){
        return (
          <ul className="list-group col-sm-4">
              {this.rederList()}
          </ul>
        );
    }
}

function mapStateToProps(state) {

    return {
        books: state.books
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreator({selectBook: selectBook},dispatch);
}
//
export default connect(mapStateToProps, mapDispatchToProps)(BookList);