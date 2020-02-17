import React from 'react';
import Routes from '~/routes';

console.disableYellowBox = true;

export default function App() {
  const CreateRouter = Routes(false);
  return <CreateRouter />;
}
