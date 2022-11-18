import React, {useState,useEffect} from 'react';

const Search = () => {
function getBooks(){
    fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
    .then((response) => response.json())
    .then((data) => setBooks(data.items));
}
const[books,setBooks]=useState([]);
const[myBooks,setInMyBooks]=useState([]);
useEffect(()=>{
   getBooks();
})
const setInWishlist=(book)=>{
    myBooks.push(book);
}
    return ( 
        <div>
        <table>
            <tr>all the books </tr>
        {
            books?.map(book =>{
            <tr>{book}
            <button onClick={setInWishlist(book)}>click too add to wishlist</button>
            </tr>
            })
        }
     </table>
     </div>);

}
 
export default Search;