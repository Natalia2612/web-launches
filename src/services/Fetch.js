const ENDPOINT_1= 'https://api.spacexdata.com/v4/launches/upcoming';

export const fetchResult1 = () => fetch(ENDPOINT_1).then(response => response.json())

const ENDPOINT_2= 'https://api.spacexdata.com/v4/launches/next';

export const fetchResult2 = () => fetch(ENDPOINT_2).then(response => response.json())