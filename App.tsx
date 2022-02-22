
import React from 'react';
import { MoviesListScreen } from './src/screens/MoviesListScreen';
// import { MovieDetailScreen } from './src/screens/MovieDetailScreen';



import { QueryClient, QueryClientProvider } from 'react-query'
 
 const queryClient = new QueryClient()
 

const App = () => {
  return <QueryClientProvider client={queryClient}><MoviesListScreen /></QueryClientProvider>
};

export default App;