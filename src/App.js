import React from 'react';
import BookList from './containers/book_list';
import BookDetail from './containers/book_detail';

const App = () => {
  return (
    <div>
      <BookList />
      <BookDetail />
    </div>
  );
}

export default App;
