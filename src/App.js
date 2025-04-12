import './App.css';

const handleClick = () => {
  alert('Clicked!')
}

const App = () => {
  return(
    <div className='App'>
      <h1>Hello World</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default App;
