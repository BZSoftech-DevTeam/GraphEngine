import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider, ClerkLoading, ClerkLoaded } from '@clerk/clerk-react';
import Loader from './Components/Loader'
import { AuthProvider } from './Store/Data';

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <ClerkProvider publishableKey={clerkPubKey} afterSignInUrl="/dashboard" afterSignUpUrl="/dashboard">

        <ClerkLoading>
          <Loader />
        </ClerkLoading>

        <ClerkLoaded>
          <App />
        </ClerkLoaded>

      </ClerkProvider>
    </React.StrictMode>
  </AuthProvider>
);
reportWebVitals();
