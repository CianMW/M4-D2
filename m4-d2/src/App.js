import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import WelcomeTron from './components/Welcome';
import BookList from './components/BookList';
import books from "./Data/fantasy.json";
import SingleBook from './components/SingleBook';
import CommentArea from './components/CommentArea';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <WelcomeTron/>
      <SingleBook book={books[Math.floor(Math.random() * books.length)]}/>
      <BookList/>
      <MyFooter />
    
    </div>
  );
    
  
}

export default App;
