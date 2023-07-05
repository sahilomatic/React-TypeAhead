import SearchBox from "./SearchBox/searchbox";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <SearchBox
        placeholder={"Search Character"}
        label={"Search Star War Character"}
      />
    </div>
  );
}
