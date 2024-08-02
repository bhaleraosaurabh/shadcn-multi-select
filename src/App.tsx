import "./App.css";
import { MultiSelect } from "./components/multi-select";

function App() {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<MultiSelect
				options={[]}
				onValueChange={(value: string[]): void => {
					throw new Error("Function not implemented.");
				}}
				defaultValue={[]}
			/>
		</div>
	);
}

export default App;
