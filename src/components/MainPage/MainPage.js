import Search from '../Search/Search'
import Trending from '../Trending/Trending'
import './MainPage.css'

function MainPage() {
    return (
        <main>
            <Search placeholder='Search for movies or TV series' />
            <Trending />
        </main>
    )
}   

export default MainPage