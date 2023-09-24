import './App.css';

function MyButton({ button }) {
  const handleClick = () => {
    alert(`You pressed: ${button}`);
  };

  return (
    <button className="CalcButton" onClick={handleClick}>
      {button}
    </button>
  );
}

function Display({ display }) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <Display display={0} />
      <div className="ButtonContainer">
        <MyButton button={7}/>
        <MyButton button={8}/>
        <MyButton button={9}/>
        <MyButton button={"+"}/>
        <MyButton button={4}/>
        <MyButton button={5}/>
        <MyButton button={6}/>
        <MyButton button={"-"}/>
        <MyButton button={1}/>
        <MyButton button={2}/>
        <MyButton button={3}/>
        <MyButton button={"*"}/>
        <MyButton button={"C"}/>
        <MyButton button={0}/>
        <MyButton button={"="} />
        <MyButton button={"÷"} />
      </div>
    </div>
  );
}
