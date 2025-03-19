
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Mount the app to the DOM
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

// Add better error handling for mobile devices
try {
  // Add a global error handler to catch runtime errors
  window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error);
    // Prevent the error from completely breaking the app
    event.preventDefault();
  });

  // Add unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // Prevent the rejection from completely breaking the app
    event.preventDefault();
  });
  
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Error rendering application:", error);
  rootElement.innerHTML = '<div style="color: red; padding: 20px;">Application failed to load. Please check your connection and try refreshing the page.</div>';
}
