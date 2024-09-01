




export const fetchExercises = ({ limit = 20, offset = 0 }) => {
  const fetchExercises = async () => {
    const response = await fetch(`https://wger.de/api/v2/exercise/?limit=${limit}&offset=${offset}&language=2`);
    const data = await response.json();
    return data;
  };

  return fetchExercises();
};