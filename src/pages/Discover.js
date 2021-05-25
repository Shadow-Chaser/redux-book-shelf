import React from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book/Book';
// import books from '../fakeData/books.json'
import PageLayout from '../components/PageLayout/PageLayout';
const Discover = () => {
    const list = { type: 'discoverList' }
    const books = useSelector((state) => {
        return state.books.discoverList;
    })

    return (
        <PageLayout>
            {
                books?.map((book) => (<Book key={book.id} book={book} list={list} />))
            }
        </PageLayout>
    );
};

export default Discover;