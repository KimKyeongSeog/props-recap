import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onClickButton = (x) => () => {
    setCount(count - x);
  };
  // useState로 초기값 설정
  // console.log(count);
  // count
  return (
    <div className="bg-blue-100 min-h-screen text-2xl flex justify-center items-center">
      <button
        onClick={onClickButton(2)}
        className="mr-4 w-16 h-16 rounded-lg bg-pink-500 text-white active:bg-pink-700"
      >
        -2
      </button>
      <button
        onClick={onClickButton(1)}
        className="mr-4 w-16 h-16 rounded-lg bg-red-500 text-white active:bg-red-700"
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(count - 5);
        }}
        className="mr-4 w-16 h-16 rounded-lg bg-pink-500 text-white active:bg-pink-700"
      >
        -5
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="mr-4 w-16 h-16 rounded-lg bg-red-500 text-white active:bg-red-700"
      >
        -1
      </button>
      현재 Count 값 : {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="ml-4 w-16 h-16 p-2 bg-blue-500 text-white active:bg-blue-700"
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count + 5);
        }}
        className="ml-4 w-16 h-16 p-2 bg-purple-500 text-white active:bg-purple-700"
      >
        +5
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
        className="ml-4 w-16 h-16 p-2 bg-gray-500 text-white active:bg-gray-700"
      >
        C
      </button>
    </div>
  );
};

export default App;
