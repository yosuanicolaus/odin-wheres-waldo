const waldoSrc = "./assets/wheres-waldo-1.jpg";

function App() {
  return (
    <div>
      <div className="display-1">Hello world</div>
      <img
        src={waldoSrc}
        alt=""
        className="img-fluid"
        onClick={(e) => {
          alert("you clicked " + e.clientX + ", " + e.clientY);
        }}
      />
    </div>
  );
}

export default App;
