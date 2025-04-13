import './userInput.css'

const UserInput = ({ investmentData, handleChange }) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input id="initialInvestment" type="number" min="0" value={investmentData.initialInvestment} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input id="annualInvestment" type="number" min="0" value={investmentData.annualInvestment} onChange={handleChange}/>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input id="expectedReturn" type="number" min="0" step=".1" value={investmentData.expectedReturn} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input id="duration" type="number" min="0" value={investmentData.duration} onChange={handleChange}/>
        </div>
      </div>
    </div>
  )
}

export default UserInput;