
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart';
import Phones from './Components/Phones/Phones';


function App() {
  

  return (
    <>
     <div className='font-serif'>
     <Navbar />   
     <PriceOptions/>
     <LineChart/>
      <Phones/>
     </div>
    </>
  )
}

export default App
