import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './lib/theme/theme';
import { VendingMachine } from './Components/Machine';

function App() {
  return (
    <div className="App">
     <ThemeProvider theme={theme}>
      <VendingMachine />
    </ThemeProvider>
    </div>
  );
}

export default App;
