export const RecipeRow = ({ recipe, setRecipe }) => {
  return (
    <>
      <div>
        <div className='recipe-row row align-items-center justify-content-center position-relative'>
          {recipe?.map((item, id) => (
            <div
              key={id}
              className='  image-container d-inline-block p-5 p-sm-4 mt-5 ms-5 ms-md-5   '
            >
              <img
                src={item?.recipe?.images?.SMALL?.url}
                alt={item?.recipe?.label}
                className='img-fluid d-inline-block '
              />
              <div className=' image-text border border-top-0 '>
                <p className='text-secondary text-start  fw-bold '>
                  {item?.recipe?.mealType}
                </p>
                <a
                  href={item?.recipe?.url}
                  className='fw-italic text-start ms-1  '
                >
                  {item?.recipe?.label}
                </a>
                <div>
                  <a href={item?.recipe?.url}>
                    <button className='btn border-danger btn-outline-danger mt-2 mb-1 mb-sm-2 ms-1 '>
                      View Recipe
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
