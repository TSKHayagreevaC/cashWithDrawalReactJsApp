import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  getFirstCharOfName = name => name.slice(0, 1)

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const initial = this.getFirstCharOfName(name)

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="name-line">
            <div className="round-name">{initial}</div>
            <p className="full-name">{name}</p>
          </div>
          <div className="balance-line">
            <h1 className="balance-text">Your Balance</h1>
            <div className="balance-number-container">
              <h1 className="balance-number">{balance}</h1>
              <p className="balance-number-text">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-content">
            <h1 className="withdraw-text">Withdraw</h1>
            <p className="choose-sum-text">CHOOSE SUM (IN RUPEES)</p>
            <div className="button-container">
              <ul className="list-item-container">
                {denominationsList.map(eachItem => (
                  <DenominationItem
                    key={eachItem.id}
                    denominationList={eachItem}
                    updateBalance={this.updateBalance}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
