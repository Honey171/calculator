import React from 'react';

interface Props {
  prevValue: string;
  currentValue: string;
  currentOperand: string;
  newValue: string;
}

function NumberArea({
  prevValue,
  currentValue,
  currentOperand,
  newValue,
}: Props) {
  const formatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 10,
  });

  return (
    <div className="text-right w-[16rem] h-[5rem] text-white font-medium text-lg">
      <div className="space-x-1 pr-2">
        <span>
          {prevValue === ''
            ? ''
            : prevValue.length >= 20
            ? Number(prevValue).toExponential()
            : formatter.format(Number(prevValue))}
        </span>
        <span>{currentOperand}</span>
      </div>
      <div className="pr-2">{currentValue === '' ? '' : newValue}</div>
    </div>
  );
}

export default NumberArea;
