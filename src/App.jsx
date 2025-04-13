import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import Result from './components/Result/Result';

import { useState } from 'react';

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const updateInvestmentData = (e) => {
    const target = e.target;
    const newInvestment = {...investmentData};
    let userInput = target.value;

    if (target.id !== 'expectedReturn') {
      userInput = parseInt(userInput)
    }

    newInvestment[target.id] = userInput;

    setInvestmentData(newInvestment);
  }

  return (
    <>
      <Header />
      <UserInput
        investmentData={investmentData}
        handleChange={updateInvestmentData}
      />
      <Result investmentData={investmentData} />
    </>
  )
}

export default App
