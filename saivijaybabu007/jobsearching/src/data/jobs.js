// const API_URL = 'https://linkedin-data-api.p.rapidapi.com/get-company-posts';
// const API_KEY = '9c5cd84d3bmsh2ef99bcb4078a71p1d5bc2jsn79bd4716554a';

// export const fetchJobsList = async ({ query = '', location = '', page = 1 } = {}) => {
//   const url = new URL(API_URL);
//   url.searchParams.append('query', query);
//   url.searchParams.append('location', location);
//   url.searchParams.append('page', page);

//   const options = {
//     method: 'GET',    
//     headers: {
//       'X-RapidAPI-Key': API_KEY,
//       'X-RapidAPI-Host': 'linkedin-data-api.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await fetch(url.toString(), options);

//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(`Error ${response.status}: ${result.message || 'Failed to fetch jobs'}`);
//     }

//     console.log('API Response:', result);

//     return result?.data ?? [];
    
//   } catch (error) {
//     console.error('Error fetching jobs:', error.message);
//     throw error;
//   }
// };
