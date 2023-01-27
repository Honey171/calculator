import { MouseEvent } from 'react';
import { FaBackspace } from 'react-icons/fa';

interface functions {
  plus: () => void;
  modulo: () => void;
  viceVersaHandler: () => void;
  comma: () => void;
  divide: () => void;
  equals: () => void;
  multiply: () => void;
  concat: (e: MouseEvent<HTMLButtonElement>) => void;
  cleaner: () => void;
  minus: () => void;
  clean: () => void;
}

function CalculatorButtons({
  plus,
  modulo,
  viceVersaHandler,
  comma,
  divide,
  equals,
  multiply,
  concat,
  cleaner,
  minus,
  clean,
}: functions) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <button
        className="cleaners"
        onClick={cleaner}
      >
        AC
      </button>
      <button
        className="cleaners flex items-center justify-center"
        onClick={clean}
      >
        <FaBackspace className="text-xl" />
      </button>
      <button
        className="operator"
        onClick={modulo}
      >
        %
      </button>
      <button
        className="operator"
        onClick={divide}
      >
        /
      </button>
      <button
        className="numbers"
        onClick={concat}
      >
        7
      </button>
      <button
        className="numbers"
        onClick={concat}
      >
        8
      </button>
      <button
        className="numbers"
        onClick={concat}
      >
        9
      </button>
      <button
        className="operator"
        onClick={multiply}
      >
        X
      </button>
      <button
        className="numbers"
        onClick={concat}
      >
        4
      </button>
      <button
        className="numbers"
        onClick={concat}
      >
        5
      </button>
      <button
        className="numbers"
        onClick={concat}
      >
        6
      </button>
      <button
        className="operator"
        onClick={minus}
      >
        -
      </button>
      <button
        className="numbers"
        onClick={concat}
      >
        1
      </button>
      <button
        className="numbers"
        onClick={concat}
      >
        2
      </button>
      <button
        className="numbers"
        onClick={concat}
      >
        3
      </button>
      <button
        className="operator"
        onClick={plus}
      >
        +
      </button>
      <button
        className="viceVersa"
        onClick={viceVersaHandler}
      >
        +/-
      </button>
      <button
        className="numbers"
        onClick={concat}
      >
        0
      </button>
      <button
        className="dot"
        onClick={comma}
      >
        .
      </button>
      <button
        className="equal"
        onClick={equals}
      >
        =
      </button>
    </div>
  );
}

export default CalculatorButtons;
