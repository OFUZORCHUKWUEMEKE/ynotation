import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Sales from './components/Sales';
import Orders from './components/Orders';

function App() {
  return (
    <>
      <div className='w-full md:w-1/5 md:mx-auto'>
        <div className='w-full mx-auto' >
          <Header />
          <Hero/>
          <Sales/>
          <Orders/>
        </div>
      </div>

    </>
  );
}

export default App;
