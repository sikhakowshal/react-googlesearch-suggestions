import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, showSuggestion} = props
  const {id, suggestion} = suggestionDetails

  const getSuggestion = () => {
    showSuggestion(id)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button className="button" type="button" onClick={getSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
