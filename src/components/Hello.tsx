import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Hello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) => {
  if (enthusiasmLevel <= 0 ) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default Hello;

// helpers
function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join('!');
}