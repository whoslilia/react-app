import Card, { CardBody } from "./components/Card/Card";
import List from "./components/List/List";
import "./App.css";

function App() {
  return (
    <Card>
      <CardBody title="Titulo" text="Buenas noches" />
      <List items={["OLA", "OLA", "OLA", "OLA", "OLA"]}></List>
    </Card>
  );
}

export default App;
