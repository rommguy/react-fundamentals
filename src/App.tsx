import { RenderReporter } from "./components/RenderReporter";

import "./App.css";

export const App = () => (
  <div className="App">
    <RenderReporter indexInTree={0} descendantsCount={5} />
  </div>
);
