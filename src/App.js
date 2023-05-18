import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookAddFunction from "./components/books/book-function-component/bookAddFunction";
import BookStore from "./components/books/book-function-component/bookStoreFunction";
import BookViewFunction from "./components/books/book-function-component/bookViewFuncttion";
import BookStoreClass from "./components/books/bookStore";
import Counter from "./components/counter";
import Display from "./components/display";
import Header from "./components/header";

function App() {
  return (
    // <>
    //   <div className='App'>
    //     <h2>Hello Everyone!!</h2>
    //     <Display/>
    //     <Counter/>
    //     <BookStore/>
    //   </div>
    // </>
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Display />} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/book-store-class" element={<BookStoreClass/>}>
        </Route>
        <Route path="book-store-function" element={<BookStore/>}>
            <Route path="book-view/:bookId" element={<BookViewFunction/>}/>
            <Route path="book-add" element={<BookAddFunction/>}/>
        </Route>  
      </Routes>
    </div>
  );
}

export default App;
