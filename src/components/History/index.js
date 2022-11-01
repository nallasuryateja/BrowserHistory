import './index.css'

const History = props => {
  const {HistoryDetails, deleteUser} = props
  const {title, timeAccessed, logoUrl, domainUrl, id} = HistoryDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <div>
      <li className="list-item">
        <p className="tim">{timeAccessed}</p>
        <div className="sub">
          <img src={logoUrl} alt="logo" />
          <p>{title}</p>
          <p>{domainUrl}</p>
        </div>
        <img
          className="delete"
          type="button"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          onClick={onDelete}
        />
      </li>
    </div>
  )
}
export default History
