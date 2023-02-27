import React from "react";
import words from "an-array-of-english-words";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Suggestion() {
  const query = useSelector((state: any) => state.search.search);
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  const Navigate = useNavigate();
  React.useEffect(() => {
    if (query === "") {
      setSuggestions([
        "dog",
        "cat",
        "animals",
        "nature",
        "dark",
        "light",
        "god",
        "values",
      ]);
    } else {
      const suggest = words.filter((word: string) => {
        return word.toLowerCase().startsWith(query.toLowerCase());
      });
      setSuggestions(suggest);
    }
  }, [query]);
  //   code author:pyansh
  return (
    <div className="s_btn_container">
      {suggestions.slice(0, 6).map((s: string) => {
        return (
          <div
            key={s}
            className="s_btn"
            onClick={() => {
              Navigate(`/search/${s}`);
            }}
          >
            <p>{s}</p>
          </div>
        );
      })}
      {query.length > 0 && (
        <div
          className="s_btn"
          onClick={() => {
            Navigate(`/search/${query}`);
          }}
        >
          <p>Search for {query}</p>
        </div>
      )}
    </div>
  );
}

export default Suggestion;
