import {Component} from 'react'
import './index.css'
import History from '../History'

class BrowserHistory extends Component {
  state = {
    inputValue: '',
  }

  change = event => {
    this.setState({inputValue: event.target.value})
  }

  render() {
    const {initialHistoryList} = this.props
    const a = {
      listuu: initialHistoryList,
    }
    const {inputValue} = this.state

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
            {a.listuu.map(eachHistory => (
              <History
                key={eachHistory.id}
                HistoryDetails={eachHistory}
                deleteItem={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
