import CalculatorButtons from './CalculatorButtons';
import CalculatorLogic from './CalculatorLogic';
import NumberArea from './NumberArea';

function CalculatorBody() {
  const {
    prevValue,
    currentValue,
    currentOperand,
    newValue,
    minus,
    plus,
    modulo,
    viceVersaHandler,
    comma,
    divide,
    equals,
    multiply,
    concat,
    cleaner,
    clean,
  } = CalculatorLogic();

  return (
    <div className="px-7 py-6 rounded-md bg-gradient-to-r from-amber-700 to-teal-700">
      <NumberArea
        prevValue={prevValue}
        currentValue={currentValue}
        currentOperand={currentOperand}
        newValue={newValue}
      />
      <CalculatorButtons
        minus={minus}
        plus={plus}
        modulo={modulo}
        viceVersaHandler={viceVersaHandler}
        comma={comma}
        divide={divide}
        equals={equals}
        multiply={multiply}
        concat={concat}
        cleaner={cleaner}
        clean={clean}
      />
    </div>
  );
}

export default CalculatorBody;
