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

function App() {
  
  useEffect(() => {
    createDatabase();
    createTables();

    insertData("limit", {amount: 25, date:Date.now()})
  }, []);

  return (
    <div className="App">
      <Layout.Header />

      <div className='xs:flex-col flex lg:flex-row justify-evenly items-center flex-1'>
        <Layout.History />
        <Layout.Graphics />
      </div>
        
        <AddExpenseBtn />
    </div>
  );
}

export default App;
