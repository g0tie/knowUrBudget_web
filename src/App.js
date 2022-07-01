import * as Layout from './layout';
import AddExpenseBtn from './components/AddExpenseBtn';
import { useEffect } from 'react';
import  {
  createDatabase,
  createTables,
  insertData,
  getData,
  getDatas,
  updateData,
  deleteData
} from "./store/database";

import {MainProvider, useMainContext} from "./store/contexts"

function App() {
  
  useEffect(() => {
    createDatabase();
    createTables();
  }, []);

  return (
    <MainProvider>
      <div className="App">
        <Layout.Header />

        <div className='xs:flex-col flex lg:flex-row justify-evenly items-center flex-1'>
          <Layout.History />
          <Layout.Graphics />
        </div>
          
          <AddExpenseBtn />
      </div>
    </MainProvider>
  );
}

export default App;
