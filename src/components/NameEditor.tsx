import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../state/selectors";
import TextField from "@mui/material/TextField";
import "./nameEditor.scss";
import { ChangeEvent, useCallback } from "react";
import { updateNameAction } from "../rootReducer";

export const NameEditor = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(updateNameAction(e.target.value));
    },
    [userName]
  );
  return (
    <div className="name-editor">
      <div className="input-wrapper">
        <TextField
          id="standard-basic"
          label="User name"
          variant="standard"
          value={userName}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
