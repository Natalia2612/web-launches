const ENDPOINT= 'https://api.spacexdata.com/v4/launches/upcoming';

const fetchResult = () => fetch(ENDPOINT).then(response => response.json())

export default fetchResult;