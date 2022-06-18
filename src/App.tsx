import { Normalize } from 'styled-normalize'
import { Global } from './globalStyle';
import { ModalProvider } from './context/modalContext';
import Router from './routes';

function App() {
  return (
    <main className='container'>
      <Normalize /> 
      <Global />

      <ModalProvider>
        <Router />
      </ModalProvider>
    </main>
  );
}

export default App;
