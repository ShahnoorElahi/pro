import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchResult from './Component/search-result/search-result'
import CategoriesReal from './Component/categories-real/categories-real'

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={
        <>
        <CategoriesReal/>
        <SearchResult/>
        </>
        } />
    {/* <Route path="/about" element={<Categories/>} />
        <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
    </Router>



  )
}

export default App
