
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'
import LineChart from './Components/LineChart/LineChart';


function App() {
  

  return (
    <>
     <div className='font-serif'>
     <Navbar />   
     <PriceOptions/>
     <LineChart/>
     </div>
    </>
  )
}

export default App
