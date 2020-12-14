import React  from 'react';
import { connect } from 'react-redux';
import {selectBook} from "../actions"; // connect to action creator
import {bindActionCreators} from "redux";


//
// Container is a specialized component that has direct access to the Redux State
// we only create containers for components that care about something in the Redux state
//
// to do this we need to connect the container to the redux store by using react-redux
class BookList extends React.Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li
                    onClick={()=> this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        });
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
            );
        }
}

// this connects application to redux
// state contains active books and currently selected book
function mapStateToProps(state){
    // whatever is returned from this function will show up as props inside BookList
    return{
      books: state.books
    };
}

function mapDispatchToProps(dispatch){
    // whenever selectBook is called, result should be passed
    // to all our reducers
    // Anything returned from here will be available as props
    return bindActionCreators({selectBook: selectBook}, dispatch)
}

// the connect is the glue between react and redux
export default connect(mapStateToProps, mapDispatchToProps)(BookList) // this takes a function and a component to create the Container
