import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './components/app/app';
import { StoreProvider } from './storeProvider/storeProvider';


async function enableMocking() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");

    return worker.start();
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <StoreProvider>
        <App />
      </StoreProvider>
    </React.StrictMode>
  )
})

reportWebVitals();



