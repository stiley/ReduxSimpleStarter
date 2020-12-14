export function selectBook(book){
    // selectBook is an actioon creator that needs to create an action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

