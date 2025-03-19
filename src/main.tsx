
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Mount the app to the DOM
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error('Failed to find the root element');

// Add error boundary for development debugging
try {
  createRoot(rootElement).render(<App />);
} catch (error) {
  console.error("Error rendering application:", error);
  rootElement.innerHTML = '<div style="color: red; padding: 20px;">Application failed to load. Please check the console for errors.</div>';
}
