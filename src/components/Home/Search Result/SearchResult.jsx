import React from 'react'
import './SearchResult.css'
import HIreButton from '../../HireButton/HIreButton';
function SearchResult({Data,click}) {
    console.log(Data);
    console.log(click)
  return (
  <>
  {click &&
   <div className='searchResults'>
      <h2>Search Results:</h2>
      {Data.length > 0 ? (
        <div className='searchContainer'>
          {Data.map((architect) => (
    <div key={architect.id} className="architect-card">
      <img src={architect.image} alt={architect.name} className="architect-image" />
      <div className="architect-info">
        <h3 className="architect-name">{architect.name}</h3>
        <p className="architect-expertise">{architect.expertise}</p>
        <p className="architect-portfolio">{architect.portfolio}</p>
        <p className="architect-rating">⭐ {architect.rating}</p>
        <HIreButton/>
        
      </div>
    </div>
  ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
    }
  </>
  )

}

export default SearchResult