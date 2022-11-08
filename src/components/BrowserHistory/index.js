import {Component} from 'react'
import './index.css'
import History from '../History'

class BrowserHistory extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = this.props
    this.state = {
      inputValue: '',
      initialHistoryListt: initialHistoryList,
    }
  }

  change = event => {
    this.setState({inputValue: event.target.value})
  }

  deleteUser = id => {
    const {initialHistoryListt} = this.state

    const filteredList = initialHistoryListt.filter(each => each.id !== id)
    this.setState({initialHistoryListt: filteredList})
  }

  render() {
    const {inputValue, initialHistoryListt} = this.state

    const searchResults = initialHistoryListt.filter(eachUser =>
      eachUser.title.includes(inputValue),
    )

    return (
      <div className="bg-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input type="search" onChange={this.change} value={inputValue} />
          </div>
        </div>
        <div className="History-card">
          <ul className="lisu">
            {searchResults.length > 0 &&
              searchResults.map(eachHistory => (
                <History
                  key={eachHistory.id}
                  HistoryDetails={eachHistory}
                  deleteItem={this.deleteUser}
                />
              ))}
            {searchResults <= 0 && <p>There is no history to show</p>}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
