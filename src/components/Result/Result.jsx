import './result.css';

import { calculateInvestmentResults, formatter } from '../../util/investment';

const Result = ({ investmentData }) => {
  const investmentResults = calculateInvestmentResults(investmentData);
  let totalInterest = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculateInvestmentResults(investmentData).map((investment, index) => {
          totalInterest += investment.interest;

          return (
            <tr key={investment.year}>
              <td>{formatter.format(investment.year)}</td>
              <td>{formatter.format(investment.valueEndOfYear)}</td>
              <td>{formatter.format(investment.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(investment.valueEndOfYear - totalInterest)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
};

export default Result;