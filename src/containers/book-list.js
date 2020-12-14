import React  from 'react';
import { connect } from 'react-redux';

//
// Container is a specialized component that has direct access to the Redux State
// we only create containers for components that care about something in the Redux state
//
// to do this we need to connect the container to the redux store by using react-redux
class BookList extends React.Component{
    renderList(){
        return this.props.books.map((book) => {
            return(
                <li key={book.title} className="list-group-item">{book.title}</li>
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

// the connect is the glue between react and redux
export default connect(mapStateToProps)(BookList) // this takes a function and a component to create the Container
