import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './contexts/auth';
import { ThemeContextProvider } from './contexts/theme';
import { Container } from './components';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <AuthContextProvider>
      <ThemeContextProvider>
        <Container>
          <App />
        </Container>
      </ThemeContextProvider>
    </AuthContextProvider>,
  rootElement
);