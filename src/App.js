import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form/Form";

function App() {
  const [activity, setActivity] = useLocalStorageState("activity", {
    defaultValue: "",
  });
  const [isForGoodWeather, setIsForGoodWeather] = useLocalStorageState(
    "is for good weather",
    { defaultValue: false }
  );

  function handleIsForGoodWeather() {
    setIsForGoodWeather(!isForGoodWeather);
  }

  function handleAddActivity(data) {
    setActivity(data.activity);
    setIsForGoodWeather(data.selectWeather);
    console.log(activity, isForGoodWeather);
  }

  return (
    <Form
      onAddActivity={handleAddActivity}
      onChecked={handleIsForGoodWeather}
    />
  );
}

export default App;
