import * as Layout from './layout';

function App() {
  return (
    <div className="App">
      <Layout.Header />

      <div className='flex flex-row justify-center flex-1'>
        <Layout.History />
        <Layout.Graphics />
      </div>
    </div>
  );
}

export default App;
