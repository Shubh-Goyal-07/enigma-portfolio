
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make sure logo is available in public
const copyLogo = async () => {
  try {
    // This is just a dummy function - the actual logo should be placed in the public folder
    console.log("Remember to place logo.png in the public directory!");
  } catch (e) {
    console.error("Error copying logo:", e);
  }
};

copyLogo();

createRoot(document.getElementById("root")!).render(<App />);
