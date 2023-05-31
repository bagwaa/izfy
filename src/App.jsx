import Confetti from "react-confetti";

function App() {
  return (
    <>
      <div className="grid h-screen place-items-center bg-black">
        <Confetti />
        <div className="font-mono text-center">
          <p className="text-9xl font-bold text-green-600">YES</p>
          <p className="text-white">9 DAYS!</p>
        </div>
      </div>
    </>
  );
}

export default App;
