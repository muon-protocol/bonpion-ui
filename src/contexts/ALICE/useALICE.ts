import { useContext } from 'react';
import { ALICEContext } from './ALICEContext.tsx';

const useALICE = () => {
  const context = useContext(ALICEContext);

  if (!context) {
    throw new Error('useLPToken must be used within a ALICEContextProvider');
  }

  return context;
};

export default useALICE;
