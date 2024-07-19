import { useState } from 'react'
import { Input } from './componenets/Input'
import useFetch from './componenets/useFetch'

function App() {
  const [amount, setAmount] = useState(0)
  const [currencyFrom, setCurrencyFrom] = useState("usd")
  const [currencyTo, setCurrencyTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const data=useFetch(currencyFrom);
  const currencyInfo =data.data;
  console.log(currencyInfo[currencyTo])
  // console.log(data)
  const options = Object.keys(data.data)
  // console.log(options)
  function convert (){
    setConvertedAmount(amount * currencyInfo[currencyTo])
    console.log(amount)
    console.log(currencyInfo[currencyTo])

    console.log(convertedAmount)

  }

  return (
    <>
      <h1>Currency Converter</h1>
      <Input amount={amount} setAmount={setAmount}  currencyChange={(currency) => setCurrencyFrom(currency)} options={options} label="To"/>
      <Input amount={convertedAmount}  currencyChange={(currency) => setCurrencyTo(currency)} options={options} label="From"/>
<button onClick={convert}>convert </button>

    </>
  )
}

export default App
