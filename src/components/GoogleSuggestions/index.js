import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  showSuggestion = uniqueNo => {
    const {suggestionsList} = this.props
    const filteredSuggestion = suggestionsList.filter(
      each => each.id === uniqueNo,
    )
    const suggestionText = filteredSuggestion[0].suggestion
    this.setState({searchInput: suggestionText})
  }

  updateSuggestions = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="searches-container">
          <div className="search-input-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-icon"
              />
            </div>
            <input
              type="search"
              placeholder="Search Google"
              className="search-input"
              onChange={this.updateSuggestions}
              value={searchInput}
            />
          </div>
          <ul className="suggestions-container">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                suggestionDetails={eachSuggestion}
                key={eachSuggestion.id}
                showSuggestion={this.showSuggestion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
