import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { AuthKitProvider } from '@workos-inc/authkit-react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './app';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const WORKOS_CLIENT_ID = "client_01JMW7S0S8VZEAPVS80HGF6Z33"; 
root.render(
  <AuthKitProvider clientId={WORKOS_CLIENT_ID} apiHostname="api.workos.com"
  redirectUri="http://localhost:3039/sign-in">

  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Suspense>
          <App />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
  </AuthKitProvider>,
);
