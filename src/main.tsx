
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make assets accessible
import.meta.glob([
  '../assets/**',
]);

createRoot(document.getElementById("root")!).render(<App />);
