import { MouseEvent, useState, useEffect } from 'react';

function CalculatorLogic() {
  const [prevValue, setPrevValue] = useState<string>('');
  const [currentValue, setCurrentValue] = useState<string>('');
  const [currentOperand, setCurrentOperand] = useState<string>('');
  const [newValue, setNewValue] = useState<string>('');

  useEffect(() => {
    if (prevValue === 'NaN') {
      setCurrentValue('');
      setPrevValue('');
      setCurrentOperand('');
    }
  }, [prevValue]);

  useEffect(() => {
    const commaAdder = () => {
      const decimalIndex = currentValue.indexOf('.');
      if (decimalIndex !== -1) {
        let new_string = currentValue
          .slice(0, decimalIndex)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        new_string += currentValue.slice(decimalIndex);
        setNewValue(new_string);
      } else {
        let new_string = currentValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        setNewValue(new_string);
      }
    };

    commaAdder();
  }, [currentValue]);

  const concat = (e: MouseEvent<HTMLButtonElement>): void => {
    if (
      currentValue.charAt(0) === '0' &&
      (e.currentTarget as HTMLButtonElement).innerHTML === '0' &&
      !currentValue.includes('.')
    ) {
      return;
    } else {
      if (
        currentValue.charAt(0) &&
        !currentValue.includes('.') &&
        currentValue.length <= 9
      ) {
        setCurrentValue((e.currentTarget as HTMLButtonElement).innerHTML);
      }
      if (currentValue.length <= 9 && currentValue.charAt(0) !== '0') {
        setCurrentValue(
          currentValue + (e.currentTarget as HTMLButtonElement).innerHTML,
        );
      }
      if (
        currentValue.charAt(0) &&
        currentValue.includes('.') &&
        currentValue.length <= 9
      ) {
        setCurrentValue(
          currentValue + (e.currentTarget as HTMLButtonElement).innerHTML,
        );
      }
    }
  };
  const cleaner = (): void => {
    setCurrentValue('');
    setPrevValue('');
    setCurrentOperand('');
  };
  const clean = (): void => {
    setCurrentValue(currentValue.substring(0, currentValue.length - 1));
  };
  const viceVersaHandler = (): void => {
    if (currentValue !== '') {
      setCurrentValue(`${Number(-currentValue)}`);
    }
  };
  const comma = (): void => {
    if (currentValue === '') {
      setCurrentValue('0.');
    }
    if (
      !currentValue.includes('.') &&
      currentValue !== '' &&
      currentValue.length <= 8
    ) {
      setCurrentValue(currentValue + '.');
    }
  };
  const plus = (): void => {
    if (currentValue !== '' && prevValue === '') {
      setCurrentOperand('+');
      if (prevValue.trim() === '') {
        setPrevValue(currentValue);
        setCurrentValue('');
      }
      if (prevValue.trim() !== '') {
        return;
      }
    }
    if (currentValue === '' && prevValue !== '') {
      setCurrentOperand('+');
    }
    if (currentValue !== '' && prevValue !== '') {
      setCurrentOperand('+');
    }
  };
  const minus = (): void => {
    if (currentValue !== '' && prevValue === '') {
      setCurrentOperand('-');
      if (prevValue.trim() === '') {
        setPrevValue(currentValue);
        setCurrentValue('');
      }
      if (prevValue.trim() !== '') {
        return;
      }
    }
    if (currentValue === '' && prevValue !== '') {
      setCurrentOperand('-');
    }
    if (currentValue !== '' && prevValue !== '') {
      setCurrentOperand('-');
    }
  };
  const multiply = (): void => {
    if (currentValue !== '' && prevValue === '') {
      setCurrentOperand('x');
      if (prevValue.trim() === '') {
        setPrevValue(currentValue);
        setCurrentValue('');
      }
      if (prevValue.trim() !== '') {
        return;
      }
    }
    if (currentValue === '' && prevValue !== '') {
      setCurrentOperand('x');
    }
    if (currentValue !== '' && prevValue !== '') {
      setCurrentOperand('x');
    }
  };
  const divide = (): void => {
    if (currentValue !== '' && prevValue === '') {
      setCurrentOperand('/');
      if (prevValue.trim() === '') {
        setPrevValue(currentValue);
        setCurrentValue('');
      }
      if (prevValue.trim() !== '') {
        return;
      }
    }
    if (currentValue === '' && prevValue !== '') {
      setCurrentOperand('/');
    }
    if (currentValue !== '' && prevValue !== '') {
      setCurrentOperand('/');
    }
  };
  const modulo = (): void => {
    if (currentValue !== '' && prevValue === '') {
      setCurrentOperand('%');
      if (prevValue.trim() === '') {
        setPrevValue(currentValue);
        setCurrentValue('');
      }
      if (prevValue.trim() !== '') {
        return;
      }
    }
    if (currentValue === '' && prevValue !== '') {
      setCurrentOperand('%');
    }
    if (currentValue !== '' && prevValue !== '') {
      setCurrentOperand('%');
    }
  };
  const equals = (): void => {
    if (currentValue && prevValue !== '') {
      if (currentOperand === 'x') {
        const result = `${Number(prevValue) * Number(currentValue)}`;
        setCurrentValue('');
        setPrevValue(result);
      }
      if (currentOperand === '+') {
        const result = `${Number(prevValue) + Number(currentValue)}`;
        setCurrentValue('');
        setPrevValue(result);
      }
      if (currentOperand === '-') {
        const result = `${Number(prevValue) - Number(currentValue)}`;
        setCurrentValue('');
        setPrevValue(result);
      }
      if (currentOperand === '/') {
        const result = `${Number(prevValue) / Number(currentValue)}`;
        setCurrentValue('');
        setPrevValue(result);
      }
      if (currentOperand === '%') {
        const result = `${Number(prevValue) % Number(currentValue)}`;
        setCurrentValue('');
        setPrevValue(result);
      }
    }
  };
  return {
    prevValue,
    setPrevValue,
    currentValue,
    setCurrentValue,
    currentOperand,
    setCurrentOperand,
    equals,
    minus,
    modulo,
    plus,
    divide,
    multiply,
    comma,
    viceVersaHandler,
    concat,
    cleaner,
    clean,
    newValue,
  };
}

export default CalculatorLogic;
