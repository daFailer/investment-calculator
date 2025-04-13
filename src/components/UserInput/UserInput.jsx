import './userInput.css'

const UserInput = ({ investmentData, handleChange }) => {
  console.log(investmentData);
  
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input id="initialInvestment" type="number" value={investmentData.initialInvestment} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input id="annualInvestment" type="number" value={investmentData.annualInvestment} onChange={handleChange}/>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input id="expectedReturn" type="number" value={investmentData.expectedReturn} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input id="duration" type="number" value={investmentData.duration} onChange={handleChange}/>
        </div>
      </div>
    </div>
  )
}

export default UserInput;