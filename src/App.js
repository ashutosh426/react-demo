import './App.css';
import BookStore from './components/books/book-function-component/bookStoreFunction';
//import BookStore from './components/books/bookStore';
import Counter from './components/counter';
import Display from './components/display';


function App() {
  return (
    <>
      <div className='App'>
        <h2>Hello Everyone!!</h2>
        <Display/>
        <Counter/>
        <BookStore/>

        
      </div>
    </>
  );
}

export default App;
