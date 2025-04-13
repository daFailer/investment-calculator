import './userInput.css'

const UserInput = () => {
  return (
    <div id="user-input">
      <div className="input-group">
        <label htmlFor="initialInvestment">Initial Investment</label>
        <input id="initialInvestment" type="text" />
        <label htmlFor="annualInvestment">Annual Investment</label>
        <input id="annualInvestment" type="text" />
      </div>
      <div className="input-group">
        <label htmlFor="expectedReturn">Expected Return</label>
        <input id="expectedReturn" type="text" />
        <label htmlFor="duration">Duration</label>
        <input id="duration" type="text" />
      </div>
    </div>
  )
}

export default UserInput;