import React from 'react';

const Search = ({  setInputFieldFocus, searchHandle, searchActiveStatus, value }) => {
  const searchInputClasses = searchActiveStatus ? 'games__search displayed' : 'games__search';
  
  return (
    <div className={searchInputClasses} data-search>
      <form className="form form--games" method="post" action="#">
          <input 
            value={value} 
            ref={(input) => setInputFieldFocus(input)}  
            onChange={(e) => searchHandle(e)} 
            type="text" 
            className="games__search__field" 
            autoFocus
          />
      </form>
    </div>
  );
}

export default Search;