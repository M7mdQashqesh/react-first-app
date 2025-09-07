import { useState, useRef, useContext } from "react";
import type { IStudent } from "../../types";
import { AuthContext } from "../../providers/auth-provider";
import type { Action } from "../../state/reducer";

interface IProps extends IStudent {
  absents: number;
  dispatch: React.Dispatch<Action>
}

const Absents = (props: IProps) => {
  // let absents = 0; // JavaScript Layer
  const [absents, setAbsents] = useState(props.absents); // React Layer
  const prevAbsents = useRef<number>(absents);

  const { user } = useContext(AuthContext);

  function increaseAbsents() {
    prevAbsents.current = absents;
    // absent = absent + 1; // JavaScript Layer
    setAbsents(absents + 1); // React Layer

    /*
    ===================================================
      1- setState(Value)
      2- setState((prevValue)=> {return updateValue})
      prevValue => absent
        ex:
        setAbsents((oldValue) => {
          return oldValue + 1;
        });
    ===================================================
    */

    if (props.dispatch) {
      props.dispatch({ type: "CHANGE_ABSENTS", payload: { id: props.id, change: +1 } })
    }
  }

  function decreaseAbsent() {
    if (absents - 1 >= 0) {
      prevAbsents.current = absents;
      setAbsents(absents - 1);
      if (props.dispatch) {
        props.dispatch({ type: "CHANGE_ABSENTS", payload: { id: props.id, change: -1 } })
      }
    }
  }

  function resetAbsent() {
    prevAbsents.current = absents;
    setAbsents(0);
    if (props.dispatch) {
      props.dispatch({ type: "CHANGE_ABSENTS", payload: { id: props.id, change: -absents } })
    }
  }

  return (
    <div className="absents-div">
      <p>
        <b>prev Absents:</b> {prevAbsents.current}
      </p>
      <p>
        <b style={{ marginLeft: "20px" }}>Absents:</b> {absents}
      </p>

      {user && (
        <div className="btns">
          <button onClick={increaseAbsents}>+</button>
          <button onClick={decreaseAbsent}>-</button>
          <button onClick={resetAbsent}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default Absents;
