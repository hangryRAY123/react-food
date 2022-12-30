import { Link } from 'react-router-dom';

export const CategoryItem = (props) => {
  const {
    strCategory,
    strCategoryThumb,
    strCategoryDescription,
  } = props;

  return (
    <div className='card'>
      <div className='card-image'>
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className='card-content'>
        <span className='card-title style={color: black}'>
          {strCategory}
        </span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className='card-action'>
        <Link
          to={`/category/${strCategory}`}
          className='btn'
        >
          Watch cetegory
        </Link>
      </div>
    </div>
  );
};
