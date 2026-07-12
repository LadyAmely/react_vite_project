import './App.css'
import { Button } from './components/ui/button/button'

function App() {

  return (
    <>
    <section id="center" style={{ padding: '20px', display: 'flex', gap: '10px' }}>
        <Button variant="default">Główny przycisk</Button>
        <Button variant="outline" onClick={() => console.log('Kliknięto!')}>
          Obrysowany
        </Button>
      </section>
    </>
  )
}

export default App
