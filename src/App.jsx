import './App.css'
import CustomNavbar from './components/CustomNavbar'
import { Suspense } from 'react'
import PricingOptions from './components/PricingOptions'

const pricingPromise = fetch ('./pricingData.json').then( res => res.json())
function App() {

  return (
    <>
    <header>
    <CustomNavbar></CustomNavbar>
      {/* <Navbar></Navbar> */}
      </header>

      <main>
        <Suspense fallback = {<h2>Loading...</h2>}>
          <PricingOptions pricingPromise= {pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App
