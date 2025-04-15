import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExpenseForm from './components/ExpenseForm.jsx'
import SearchBar from './components/SearchBar.jsx'
import ExpenseTable from './components/ExpenseTable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)