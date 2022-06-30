import * as Layout from './layout';
import AddExpenseBtn from './components/AddExpenseBtn';

function App() {
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
