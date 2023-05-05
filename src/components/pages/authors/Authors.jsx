import React, { useState } from 'react'
import {authors} from'../../../data/authors'
import './authors.css'
function Authors() {
    const [searchValue,setSearchValue]=useState('')
    const handelSearch =(e)=>{
        setSearchValue(e.target.value)

    }
    
  return (
    <div className='authors'>
    <div className="search_authors">
    <input 
     type='search' 
     placeholder='Search in authors' 
     onChange={handelSearch}
     value={searchValue}
     />
    </div>
    <div className="authors_wrapper">
    {authors
        .filter(author => author.name.toLocaleLowerCase().includes(searchValue))
        .map(author=>{
        return(
<div className="author" key={author.id}>
   <img src={author.image} alt={author.name} />
   <h2>{author.name} </h2>
</div>
            
        )
    })}
    </div>
      
    </div>
  )
}

export default Authors
