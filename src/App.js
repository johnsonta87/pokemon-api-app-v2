import Container from '@mui/material/Container';
import Dashboard from './components/Dashboard';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import Helmet from './components/Layouts/Helmet';

function App() {
  return (
    <div className="App">
      <Helmet />

      <Header />
      <Container>
        <Dashboard />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
