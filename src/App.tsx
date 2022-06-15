import { Normalize } from 'styled-normalize'
import { Global } from './globalStyle';
import Router from './routes';

function App() {
  return (
    <main className='container'>
      <Normalize /> 
      <Global />

      <Router />
    </main>
  );
}

export default App;
