import React from 'react'
import './App.css';

import {Button, Container, Advice, Paragraph} from './components/Content'
interface ISlip {
  id: number | null
  advice: string
}


function App() {
  const [slip, setSlip] = React.useState<ISlip>({
    id: null,
    advice: ''
  });

  function fetchSlip():void{
    fetch('https://api.adviceslip.com/advice')
      .then(result => result.json())
      .then(data => setSlip(data.slip))
  }

    React.useEffect(() => {
      fetchSlip()
    }, [])

  return (
    <div className="App">
      <Container>
        <Advice>Advice #{slip.id}</Advice>
        <Paragraph>{slip.advice}</Paragraph>
        <img src="./imgs/pattern-divider-desktop.svg" width='80%'/>
        <Button onClick={() => fetchSlip()} ></Button>
      </Container>
    </div>
  );
}

export default App;
