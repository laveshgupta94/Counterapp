import { createRoot } from 'react-dom/client';
import Hello from './App.jsx';
import Counter from './components/counter.jsx';
createRoot(document.getElementById('root')).render(
<>
<Hello/>
<Counter/>
</>
)
