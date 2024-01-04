import './App.css';
import HBcard from './components/card/HB-card';
import HBinput from './components/hb-fom-input/HB-input';
import NewComp from './components/NewComp';
import HBtopNav from './components/top-nav/HB-topNav';

function App() {

  return (
    <div className="App">
      <div className='hb-container'>
        <HBtopNav ></HBtopNav>
        <p className='hb-label'>Wallet</p>
        <HBcard></HBcard>
        <HBinput label="Name" defval="Simon Booban"></HBinput >
        <HBinput label="Card Number" defval="122-1565656-26616"></HBinput >
        <div className='hb-sub'>
          <HBinput label="Expiry Date" defval="2025"></HBinput >
          <HBinput label="CVV" defval="445"></HBinput >
        </div>
        <button>
          Proceed <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>

    </div>
  );
}

export default App;
