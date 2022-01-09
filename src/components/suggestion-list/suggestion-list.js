const SuggestionList = ({
  getSuggestionList,
  getHoveredSuggestionIndex,
  handleSuggestionClick,
}) => {
  return getSuggestionList.length ? (
    <ul className="suggestions" aria-label="suggestionList">
      {getSuggestionList.map((suggestion, index) => {
        let className;
        // Flag the active suggestion with a class
        if (index === getHoveredSuggestionIndex) {
          className = "suggestion-active";
        }
        if (index < 5) {
          return (
            <li
              className={className}
              key={suggestion.id}
              onClick={(e) => handleSuggestionClick(e, suggestion)}
            >
              {suggestion.city}
            </li>
          );
        }
      })}
    </ul>
  ) : (
    <div className="no-suggestions">
      <em>Suggestion not found</em>
    </div>
  );
};
export default SuggestionList;
