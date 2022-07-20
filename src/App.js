import * as Layout from './layout';
import AddExpenseBtn from './components/AddExpenseBtn';
import {MainProvider, useMainContext} from "./store/contexts"
import { useEffect } from 'react';


function App() {
  return (
    <MainProvider>
      <div className="App p-8">
        <Layout.Header />

        <div className='xs:flex-col flex lg:flex-row justify-evenly md:items-center'>
          <Layout.History />
          <Layout.Graphics />
        </div>
          
          <AddExpenseBtn />
      </div>
    </MainProvider>
  );
}

export default App;
