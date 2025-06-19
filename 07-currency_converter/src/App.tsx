import React, { useState } from 'react';
import { ArrowUpDown, TrendingUp, DollarSign } from 'lucide-react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo.data);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    if (currencyInfo.data[to]) {
      setConvertedAmount(amount * currencyInfo.data[to]);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    convert();
  };

  React.useEffect(() => {
    if (amount && currencyInfo.data[to]) {
      convert();
    }
  }, [amount, from, to, currencyInfo.data]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-4">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Currency Converter</h1>
          <p className="text-white/70 text-sm">Convert currencies with real-time exchange rates</p>
        </div>

        {/* Main Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectedCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />

          {/* Swap Button */}
          <div className="relative flex justify-center">
            <button
              className="absolute -top-2 bg-blue-600 hover:bg-blue-700 border border-white/20 rounded-full p-3 text-white transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg"
              type="button"
              onClick={swap}
            >
              <ArrowUpDown className="w-4 h-4" />
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled
          />

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg flex items-center justify-center space-x-2"
            disabled={currencyInfo.loading}
          >
            {currencyInfo.loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Loading...</span>
              </>
            ) : (
              <>
                <TrendingUp className="w-5 h-5" />
                <span>Convert {from.toUpperCase()} to {to.toUpperCase()}</span>
              </>
            )}
          </button>
        </form>

        {/* Exchange Rate Info */}
        {currencyInfo.data[to] && (
          <div className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <div className="text-center">
              <p className="text-white/70 text-sm">Exchange Rate</p>
              <p className="text-white font-semibold text-lg">
                1 {from.toUpperCase()} = {currencyInfo.data[to].toLocaleString()} {to.toUpperCase()}
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {currencyInfo.error && (
          <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
            <p className="text-red-300 text-sm text-center">
              Error loading exchange rates. Please try again.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/50 text-xs">
            Powered by real-time exchange rates
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;