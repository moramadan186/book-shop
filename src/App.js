import Routes from './routes/Routes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-28 mb-16">
        <Routes />
      </div>
    </>

  );
}

export default App;
