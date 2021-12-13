import './index.css'

const DenominationItem = props => {
  const {denominationList, updateBalance} = props
  const {value} = denominationList
  const onClickButton = () => {
    updateBalance(value)
  }
  return (
    <li className="button-container">
      <button onClick={onClickButton} className="button-style" type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
