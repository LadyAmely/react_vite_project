import './App.css'
import { Button } from './components/ui/button/button'

function App() {

  return (
    <>
    <section id="center" style={{ padding: '20px', display: 'flex', gap: '10px' }}>
        <Button variant="default">Button</Button>
        <div className="bg-red-500 w-10 h-10">TEST</div>
      </section>
    </>
  )
}

export default App
