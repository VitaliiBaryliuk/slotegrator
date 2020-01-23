import React from 'react';

 const SearchListItem = ({ gameData }) => (
	<div className="search-list__item">
		<a href={gameData.link}>
			<img src={gameData.img} alt={gameData.name} />
			<p>{gameData.name}</p>
		</a>
	</div>    
);

const SearchList = ({ gamesList }) => {
	return (
		<div className="search-list-wrapper">
			<ul>
				{ 
					gamesList.map(gameItem => <SearchListItem key={gameItem.id} gameData={gameItem} />)
				} 
			</ul>
		</div>
	);
}

export default SearchList;