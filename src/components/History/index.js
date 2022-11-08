import './index.css'

const History = props => {
  const {HistoryDetails, deleteItem} = props
  const {title, timeAccessed, logoUrl, domainUrl, id} = HistoryDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <div>
      <li className="list-item">
        <p className="tim">{timeAccessed}</p>
        <div className="sub">
          <img src={logoUrl} alt="domain logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <button type="button" testid="button">
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            onClick={onDelete}
          />
        </button>
      </li>
    </div>
  )
}
export default History
