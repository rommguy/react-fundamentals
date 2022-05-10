import { RenderReporter } from "./components/RenderReporter";

import "./App.css";
import { NameEditor } from "./components/NameEditor";

export const App = () => (
  <div className="App">
    <NameEditor />
    <RenderReporter indexInTree={0} descendantsCount={5} />
  </div>
);
