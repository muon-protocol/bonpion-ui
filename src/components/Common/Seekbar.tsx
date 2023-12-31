import { useState, useEffect, useRef } from 'react';

interface SeekbarProps {
  min: number;
  max: number;
  value: number;
  onValueChange: (value: number) => void;
}

const Seekbar = ({ min, max, value, onValueChange }: SeekbarProps) => {
  const [mouseDown, setMouseDown] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMouseUp = () => setMouseDown(false);
    window.addEventListener('mouseup', onMouseUp);

    return () => window.removeEventListener('mouseup', onMouseUp);
  }, []);

  const updateValue = (clientX: number) => {
    if (barRef.current) {
      const rect = barRef.current.getBoundingClientRect();
      let newValue =
        ((clientX - rect.left) / (rect.right - rect.left)) * (max - min) + min;
      newValue = Math.round(Math.min(Math.max(newValue, min), max));
      if (newValue === 0) newValue = 1;
      if (newValue === 100) newValue = 99;
      onValueChange(newValue);
    }
  };

  return (
    <div className="mb-4">
      <div className="seekbar__values flex justify-between w-full mb-2 select-none">
        <p className="font-semibold">{value}%</p>
        <p className="font-semibold">{max - value}%</p>
      </div>
      <div
        ref={barRef}
        className="relative bg-primary-dark-500 w-full h-2 cursor-pointer rounded-lg mb-6 md:mb-2.5"
        onMouseDown={(e) => {
          setMouseDown(true);
          updateValue(e.clientX);
        }}
        onMouseMove={(e) => mouseDown && updateValue(e.clientX)}
        onClick={(e) => updateValue(e.clientX)}
      >
        <div
          style={{ left: `${((value - min) / (max - min)) * 100}%` }}
          className="absolute bg-primary rounded-full w-5 h-5 -translate-x-1/2 -translate-y-1/3"
        ></div>
      </div>
    </div>
  );
};

export default Seekbar;
