import { useState } from 'react';
import { Input } from '@/components/ui/input'; // ShadCN components
import { Button } from '@/components/ui/button';

// Define TypeScript types for the state
interface CalculatorState {
  principal: number;
  years: number;
}

export default function CalculateSection() {
  // State management for the inputs and result
  const [state, setState] = useState<CalculatorState>({
    principal: 5000000000,
    years: 0,
  });

  const [amount, setAmount] = useState<number | null>(null);
  const interestRate = 12.5; // Fixed interest rate at 12.5%
  // Update state when user inputs data
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: parseFloat(value),
    }));
  };

  const incrementYears = () => setState((prevState) => ({ ...prevState, years: prevState.years + 1 }));
  const decrementYears = () => setState((prevState) => ({ ...prevState, years: Math.max(prevState.years - 1, 0) }));

  // Calculation function using the compound interest formula
  const calculateAmount = () => {
    const { principal, years } = state;
    const calculatedAmount = principal * Math.pow(1 + interestRate / 100, years);
    setAmount(calculatedAmount);
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center px-10">
      <div className='flex items-start flex-col'>
        <div className="mb-4">
          <label htmlFor="principal" className="block text-violet font-[Open Sans] pb-3">
            Enter amount to invest ($)
          </label>
          <Input className='border-none p-4 w-[349px] flex bg-light-green text-center rounded-[16px] opacity-50'
            type="number"
            id="principal"
            value={state.principal}
            onChange={handleInputChange}
            placeholder="5,000,000,000"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="years" className="block pb-3 text-violet">
            How long would you like to invest? (years)
          </label>
          <div className="flex items-center bg-light-green rounded-[16px] opacity-50 px-9 ">
            <Button variant="transparent" onClick={decrementYears} className='text-2xl'>-</Button>
            <Input
              type="number"
              id="years"
              value={state.years}
              onChange={handleInputChange}
              className="mx-2 flex text-center border-none drop-shadow-none shadow-none"
              placeholder="3"
            />
            <Button variant="transparent" onClick={incrementYears} className='text-xl'>+</Button>
          </div>
        </div>
      </div>

      <Button onClick={calculateAmount} className='w-[280px]'>Calculate</Button>

      {amount !== null && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Final Amount after {state.years} years: ${amount.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
}
