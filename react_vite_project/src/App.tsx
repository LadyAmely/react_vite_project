import './App.css'
import { Button } from './components/ui/atoms/button'
import { Checkbox } from './components/ui/atoms/checkbox/checkbox'
import { Radio } from './components/ui/atoms/radio'

function App() {

  return (
    <>
    <section id="center" style={{ padding: '20px', display: 'flex', gap: '10px' }}>
        <Button variant="default">Button</Button>
        <Radio variant="default"/>
        <div className="flex items-center mb-4">
          <Checkbox id="check-1" variant="default" />
          <label htmlFor="check-1" className="ms-2 text-sm font-medium text-heading">
            Default checkbox
          </label>
        </div>
      </section>
    </>
  )
}

export default App
