import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RecipeRow } from './components/RecipeRow'

function App() {
  const [isInitialRender, setInitialRender] = useState(true)
  const [value, setValue] = useState('')
  const [recipe, setRecipe] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${value}&app_id=59789d05&app_key=bbc31f0337b81b5271f4c39da9190021&imageSize=THUMBNAIL`

  const fetchRecipe = async () => {
    const res = await fetch(url)
    const resJSON = await res.json()

    setRecipe(resJSON.hits)
  }

  useEffect(() => {
    fetchRecipe()
    console.log(recipe)
  }, [value])

  return (
    <>
      <Navbar
        value={value}
        setValue={setValue}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        isInitialRender={isInitialRender}
        setInitialRender={setInitialRender}
      />
      {isInitialRender ? (
        ''
      ) : (
        <RecipeRow recipe={recipe} setRecipe={setRecipe} />
      )}
    </>
  )
}

export default App
