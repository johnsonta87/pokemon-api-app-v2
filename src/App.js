import Dashboard from './components/Dashboard';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import Head from './components/Layouts/Head';

function App() {
  return (
    <div className="App">
      <Head />

      <Header />
      <Dashboard />

      <Footer />
    </div>
  );
}

export default App;
