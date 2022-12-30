import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';
import { Recipe } from '../components/Recipe';

export const Product = () => {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(idMeal).then((data) =>
      setRecipe(data.meals[0])
    );
  }, [idMeal]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <Recipe {...recipe}></Recipe>
      )}
      <button className='btn' onClick={goBack}>
        Go Back
      </button>
    </>
  );
};
