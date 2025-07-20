const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p> {props.part1} {props.exercise}</p>
    </>
  )
};

const Total = (props) => {};

const App = () => {
  const course = "Half Stack application development"
  const part1 = 'Fundamentals of React'
  const exercise1 = 10;

  return (
    <div>
      
    </div>
  );
};

export default App;
