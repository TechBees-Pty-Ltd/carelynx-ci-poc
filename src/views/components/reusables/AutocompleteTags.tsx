import React, { useState, useRef } from 'react';

const AutocompleteTags: React.FC = ({suggestions}) => {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleFocus = () => {
    setIsFocused(true);
    setFilteredSuggestions(suggestions);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsFocused(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
      setInputValue('');
      setFilteredSuggestions([]);
    }
    setIsFocused(false);
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  return (
    <div className="max-w-md p-5 bg-white text-gray-800 rounded-lg shadow-lg">
      <div className="flex flex-wrap mb-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white px-3 py-1 m-1 rounded-full flex items-center"
          >
            {tag}
            <button
              className="ml-2 text-white"
              onClick={() => removeTag(tag)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder="Add tags ..."
        className="w-full p-2 rounded-lg border border-gray-300 bg-white text-gray-800"
      />
      {isFocused && filteredSuggestions.length > 0 && (
        <ul ref={dropdownRef} className="bg-white border border-gray-300 mt-2 rounded-lg shadow-lg">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => addTag(suggestion)}
              className="cursor-pointer p-2 hover:bg-gray-200 text-left"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteTags;
