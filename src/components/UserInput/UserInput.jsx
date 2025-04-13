import './userInput.css'

const UserInput = ({ investmentData, handleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            id="initialInvestment"
            type="number"
            required
            value={investmentData.initialInvestment} onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            id="annualInvestment"
            type="number"
            required
            value={investmentData.annualInvestment} onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            id="expectedReturn"
            type="number"
            required
            step=".1" value={investmentData.expectedReturn} onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            min="1"
            required
            value={investmentData.duration} onChange={handleChange}
          />
        </p>
      </div>
    </section>
  )
}

export default UserInput;