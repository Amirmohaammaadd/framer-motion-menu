import { useReducer, useState } from "react";

const Contact = () => {
  const panelState = (action, state) => {
    switch (action.type) {
      case "SET_OBJ":
        return { ...state, obj: action.payload };
      case "SET_A":
        return { ...state, A: action.payload };
      case "SET_B":
        return { ...state, B: action.payload };
      case "SET_C":
        return { ...state, C: action.payload };

      default:
        return state;
    }
  };

  // const [obj , setObj] = useState([])
  // const [a, setA] = useState();
  // const [b, setB] = useState();
  // const [c, setC] = useState();

 
  const initialState = {
    obj: [],
    A: false,
    B: "",
    C: "",
  };

  const [state, dispatch] = useReducer(panelState, initialState);

  const { obj, A, B, C } = state;

  return (
    <div className="flex justify-center ">
      <button
        onClick={() => {
          dispatch({
            type: "SET_A",
            payload: true,
          });

          console.log(A);
        }}
      >
        Click !
      </button>
    </div>
  );
};

export default Contact;
