/* eslint-disable react/jsx-key */
export const RecipeRow = ({ recipe }) => {
  return (
    <>
      <div className='recipe-row row  position-relative'>
        <div>
          {recipe?.map((item, id) => (
            <div className=' image-container d-inline-block align-items-center justify-content-center text-center p-5 mt-5 ms-3 ms-md-5   '>
              <img
                src={item?.recipe?.image}
                alt={item?.recipe?.label}
                className='img-fluid d-flex '
              />
              <figcaption className='border border-top-0'>
                {item?.recipe?.label}
              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
