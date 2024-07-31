import React, { useState, useRef, useEffect } from 'react';

interface Tag {
  name: string;
  image?: string;
}

interface AutocompleteTagsProps {
  suggestions: Tag[];
}

const AutocompleteTags: React.FC<AutocompleteTagsProps> = ({ suggestions }) => {
  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState<Tag[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(value.toLowerCase())
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

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addTag = (tag: Tag) => {
    if (!tags.some((t) => t.name === tag.name)) {
      setTags([...tags, tag]);
      setInputValue('');
      setFilteredSuggestions([]);
    }
    setIsFocused(false);
  };

  const removeTag = (tag: Tag) => {
    setTags(tags.filter((t) => t.name !== tag.name));
  };

  return (
    <div className='max-w-md p-5 bg-white text-gray-800 rounded-lg shadow-lg'>
      <div className='flex flex-wrap mb-4'>
        {tags.map((tag, index) => (
          <div
            key={index}
            className='bg-blue-500 pe-3 text-white m-1 rounded-full flex items-center space-x-2 h-8'
          >
            {tag.image && (
              <img src={tag.image} alt='' className='h-full w-8 rounded-full object-cover' />
            )}
            <span className={`font-medium my-0.4 text-sm ${!tag.image ? 'ps-4' : ''}`}>
              {tag.name}
            </span>{' '}
            <button
              className='ml-2 text-white hover:text-gray-200 focus:outline-none'
              onClick={() => removeTag(tag)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder='Add tags ...'
        className='w-full p-2 rounded-lg border border-gray-300 bg-white text-gray-800'
      />
      {isFocused && filteredSuggestions.length > 0 && (
        <ul ref={dropdownRef} className='bg-white border border-gray-300 mt-2 rounded-lg shadow-lg'>
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => addTag(suggestion)}
              className='cursor-pointer p-2 hover:bg-gray-200 text-left'
            >
              {suggestion.image && (
                <img
                  src={suggestion.image}
                  alt=''
                  className='h-6 w-6 flex-shrink-0 rounded-full inline-block mr-2'
                />
              )}
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteTags;
