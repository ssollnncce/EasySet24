import { Button } from './shared/ui/button'

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold">EasySet24</h1>
      <Button variant="primary" size="md">Primary Button</Button>
      <Button variant='secondary'>Secondary button</Button>
      <Button variant='ghost' size='xlg'>Ghost button</Button>
    </div>
  )
}

export default App