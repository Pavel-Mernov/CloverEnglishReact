import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { loadFonts } from './assets/fonts/fonts.ts'

const newDocument = loadFonts(document)

console.log(newDocument)

createRoot(newDocument.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
