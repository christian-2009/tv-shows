import MainContent from './components/MainContent';
import episodes from './episodes.json'

function App(): JSX.Element {
  console.log(`Imported ${episodes.length} episode(s)`);
  console.log(`First episode's name is ${episodes[0].name}`);
  return (
  <>
    <MainContent /> 
  </>
  )
}

export default App;
