import * as Layout from './layout';

function App() {
  return (
    <div className="App">
      <Layout.Header />

      <div>
        <Layout.History />
        <Layout.Graphics />
      </div>
    </div>
  );
}

export default App;
