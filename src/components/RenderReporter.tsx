import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "./renderReporter.scss";
import { useState } from "react";

interface Props {
  indexInTree: number;
  descendantsCount: number;
}

export const RenderReporter = ({ indexInTree, descendantsCount }: Props) => {
  const [counter, setCounter] = useState<number>(0);

  console.log(`reporter-${indexInTree} rendered`);
  const increment = () => {
    setCounter((currentCounter) => currentCounter + 1);
  };

  const decrement = () => {
    setCounter((currentCounter) => currentCounter - 1);
  };
  return (
    <div className={`render-reporter reporter-${indexInTree}`}>
      {descendantsCount <= 0 ? (
        <div className="title">I'm the last one</div>
      ) : (
        <div className="title">I'm a render reporter</div>
      )}
      <div className="content">
        <IconButton onClick={increment}>
          <AddCircleOutlineIcon />
        </IconButton>
        <span className="counter-wrapper">{counter}</span>
        <IconButton onClick={decrement}>
          <RemoveCircleOutlineIcon />
        </IconButton>
      </div>
      {descendantsCount > 0 ? (
        <RenderReporter
          indexInTree={indexInTree + 1}
          descendantsCount={descendantsCount - 1}
        />
      ) : null}
    </div>
  );
};
