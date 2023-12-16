import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState(0)
  const [year,setYear]=useState(0)
  const [rate,setRate]=useState(0)

  const [interest,setInterest]=useState(0)

  console.log(amount,year,rate);



  const calculate=(e)=>{
    const output =amount*year*rate/100;
    console.log(output)
    setInterest(output)
  }

  const reset=(e)=>{
    setAmount(0)
    setYear(0)
    setRate(0)
    setInterest(0)


    

  }










  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple interest calculator</h1> 
          <p>Calculate your simple interest with us 💙</p>
        </div>

        <div className="total">
          <h3> &#x20B9;{interest}</h3>
          <p>your total interest</p>
        </div>

        <div className="form">
          <form >
          <div className="input">
          <TextField id="outlined-basic" value={amount||""} label="Amount"  onChange={(e)=>setAmount(e.target.value)} variant="standard" /><br />
          <TextField id="filled-basic" value={year ||""} label="Year" onChange={(e)=>setYear(e.target.value)} variant="standard" /><br />
          <TextField id="standard-basic" value={rate ||""} label="Rate" onChange={(e)=>setRate(e.target.value)}  variant="standard" /><br />
          </div>

          <div className="button">

          <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
          <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button>

          </div>


          </form>
        </div>



      </div>
    </div>
  );
}

export default App;
