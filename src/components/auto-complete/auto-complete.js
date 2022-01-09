const AutoComplete = ({ input, onTextChange, onKeyDown }) => {
  return (
    <input
      type="text"
      aria-label="autocomplete"
      onChange={onTextChange}
      onKeyDown={onKeyDown}
      value={input}
      placeholder="Type 3 or more characters eg. San Antonia"
    />
  );
};

export default AutoComplete;
