import React from 'react'

function SearchResult({Data,click}) {
    console.log(Data);
    console.log(click)
  return (
  <>
  {click &&
   <div>
      <h2>Search Results:</h2>
      {Data.length > 0 ? (
        <ul>
          {Data.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - {item.project}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
    }
  </>
  )

}

export default SearchResult