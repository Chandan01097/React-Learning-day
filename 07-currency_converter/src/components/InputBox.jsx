import React, { useId } from 'react';
import { ChevronDown } from 'lucide-react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg ${className}`}>
      <div className="w-full">
        <label htmlFor={amountInputId} className="text-white/80 text-sm font-medium mb-2 block">
          {label}
        </label>
        <div className="flex items-center space-x-3">
          <input
            id={amountInputId}
            className="outline-none w-full bg-white/5 border border-white/20 rounded-xl py-3 px-4 text-white text-lg font-medium placeholder-white/50 focus:border-blue-400 focus:bg-white/10 transition-all duration-200"
            type="number"
            placeholder="Enter amount"
            disabled={amountDisabled}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
          <div className="relative">
            <select
              className="outline-none bg-white/10 border border-white/20 rounded-xl py-3 px-4 pr-10 text-white font-medium cursor-pointer hover:bg-white/15 focus:border-blue-400 transition-all duration-200 appearance-none"
              value={selectedCurrency}
              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
              disabled={currencyDisabled}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency} className="bg-gray-800 text-white">
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputBox;