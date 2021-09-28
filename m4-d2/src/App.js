import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import WelcomeTron from './components/Welcome';
import NewestReleases from './components/LatestRelease';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <WelcomeTron/>
      <NewestReleases/>
      <MyFooter />
    
    </div>
  );
    
  
}

export default App;
