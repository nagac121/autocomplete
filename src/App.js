import "./App.css";
import "./styles.css";

import { useState } from "react";

import AutoComplete from "./components/auto-complete/auto-complete";
import SuggestionList from "./components/suggestion-list/suggestion-list";

const data = [
  {
    id: 1,
    city: "Newyork",
    state: "Newyork",
  },
  {
    id: 2,
    city: "Los Angeles",
    state: "California",
  },
  {
    id: 3,
    city: "Chicago",
    state: "Illinois",
  },
  {
    id: 4,
    city: "Houston",
    state: "Texas",
  },
  {
    id: 5,
    city: "Phoenix",
    state: "Arizona",
  },
  {
    id: 6,
    city: "Phildelphia",
    state: "Pennsylvania",
  },
  {
    id: 7,
    city: "San Antonia",
    state: "Texas",
  },
  {
    id: 8,
    city: "San diego",
    state: "California",
  },
  {
    id: 9,
    city: "Dallas",
    state: "Texas",
  },
  {
    id: 10,
    city: "San Jose",
    state: "California",
  },
];

function App() {
  const [getInput, setInput] = useState("");
  const [getHoveredSuggestionIndex, setHoveredSuggestionIndex] = useState(0);
  const [getSelectedSuggestion, setSelectedSuggestion] = useState({});
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [getSuggestionList, setSuggestionList] = useState([]);

  const handleSuggestionClick = (e, suggestion) => {
    setSuggestionList([]);
    setInput(e.target.innerText); // set clicked text
    setHoveredSuggestionIndex(0);
    setShowSuggestions(false);
    setSelectedSuggestion(suggestion);
  };

  const handleOnChange = (e) => {
    const userInput = e.target.value;
    setInput(e.target.value);
    // Filter our suggestions that don't contain  user's input
    const filteredSuggestions = data.filter(
      (suggestion) =>
        suggestion.city.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    if (userInput.length >= 3 && filteredSuggestions.length) {
      setSuggestionList(filteredSuggestions);
      setHoveredSuggestionIndex(0);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setSuggestionList([]);
      setSelectedSuggestion({});
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      // User pressed the enter key
      if (getInput.length >= 3 && getSuggestionList.length) {
        setInput(getSuggestionList[getHoveredSuggestionIndex].city);
        setHoveredSuggestionIndex(0);
        setShowSuggestions(false);
        let enteredInput = {};
        for (let i = 0; i < data.length; i++) {
          if (
            data[i].city.toLowerCase() ===
            getSuggestionList[getHoveredSuggestionIndex].city.toLowerCase()
          ) {
            enteredInput = data[i];
          }
        }
        setSelectedSuggestion(enteredInput);
      }else{
        setSelectedSuggestion({});
        setSuggestionList([])
        setShowSuggestions(true);
      }
    } else if (e.keyCode === 38) {
      // User pressed the up arrow
      if (getHoveredSuggestionIndex === 0) {
        return;
      }
      // otherwise decrement index by 1
      setHoveredSuggestionIndex(getHoveredSuggestionIndex - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      // If the index matches the length of the filtered Suggestions, it will return nothing.
      if (getHoveredSuggestionIndex - 1 === getSuggestionList.length) {
        return;
      }
      setHoveredSuggestionIndex(getHoveredSuggestionIndex + 1);
    }
  };

  return (
    <div className="App">
      <h1>Autocomplete</h1>
      <AutoComplete
        suggestions={data}
        input={getInput}
        showSuggestions={showSuggestions}
        onSuggestionClick={handleSuggestionClick}
        onTextChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      {showSuggestions && getInput && (
        <SuggestionList
          getSuggestionList={getSuggestionList}
          getHoveredSuggestionIndex={getHoveredSuggestionIndex}
          handleSuggestionClick={handleSuggestionClick}
        />
      )}
      {Object.keys(getSelectedSuggestion).length > 0 && (
        <div className="city-details">
          <div>Id: {getSelectedSuggestion.id}</div>
          <div>City: {getSelectedSuggestion.city}</div>
          <div>State: {getSelectedSuggestion.state}</div>
        </div>
      )}
    </div>
  );
}

export default App;
