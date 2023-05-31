function App() {
  function getDaysCounting(pastDate) {
    const today = new Date();
    const timeDiff = today.getTime() - pastDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  }

  const pastDate = new Date("2023-05-24");
  const daysSince = getDaysCounting(pastDate);

  return (
    <>
      <div className="grid h-screen place-items-center bg-black">
        <div className="font-mono text-center">
          <p className="text-9xl font-bold text-red-600">NO</p>
          <p className="text-white">{daysSince} days and counting</p>
        </div>
      </div>
    </>
  );
}

export default App;
