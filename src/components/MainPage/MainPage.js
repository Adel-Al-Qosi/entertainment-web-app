import Recommended from '../Recommended/Recommended'
import Search from '../Search/Search'
import Trending from '../Trending/Trending'
import './MainPage.css'
import { useState } from 'react'

function MainPage() {
    const [query, setQuery] = useState('')
  return (
    <main>
      <Search
       placeholder="Search for"
       query={query}
       setQuery={setQuery} 
       />
            {query ? null : <Trending />}
            <Recommended query={query} />
        </main>
    )
}   

export default MainPage