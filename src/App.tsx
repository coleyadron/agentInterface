import Alert from "./components/Alert";
import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup"

function App() {
  const items = [
    'agentOne', 'agentTwo', 'agentThree', 'agentFour', 'agentFive'
  ];
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const handleSelectItem = (item: string) => {
      console.log(item);
      setSelectedItem(item);
    }
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  const themeStyle = {
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#333333',
    color: theme === 'light' ? '#000' : '#fff',
    display: 'flex',
    justifyContent: 'flex-start',
    minHeight: '100vh',
  };

  return (<div style={themeStyle}>
    <div style={{display: 'flex', flexDirection: 'column', width: '300px', gap: '16px', paddingLeft: '16px', paddingRight:'16px', backgroundColor: '#3a3a3a'}}>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>Agent Selected: {selectedItem}</Alert>}
      <ListGroup items={items} heading="Agents" onSelectItem={handleSelectItem} />
      <Button color='info'onClick={() => setAlertVisible(true)}>
        Confirm
      </Button>
    </div>
    <div style={{position: 'absolute', bottom: '16px', left: '16px'}}>
        <Button color='secondary' onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </div>
  </div>)
}

export default App;