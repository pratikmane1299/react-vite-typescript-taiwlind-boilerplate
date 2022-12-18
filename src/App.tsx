import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full max-w-3xl mx-auto flex items-center">
      <div className="w-full text-center">
        <div className="mb-10 w-full flex flex-row justify-center">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img
              src="/vite.svg"
              className="h-12 w-12 sm:h-24 sm:w-24"
              alt="Vite logo"
            />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <img
              src={reactLogo}
              className="h-12 w-12 sm:h-24 sm:w-24 animate-spin-slow"
              alt="React logo"
            />
          </a>
        </div>
        <h1 className="mb-1 text-xl sm:text-3xl font-bold font-sans">
          Vite + React + Tailwind Boilerplate
        </h1>
        <div className="p-3 mb-2 font-sans">
          <button
            type="button"
            className="p-2 bg-black rounded-md text-white font-medium text-xs sm:text-sm hover:opacity-90 focus:ring-1 focus:ring-offset-1 focus:ring-gray-900"
            onClick={() => setCount((prev) => prev + 1)}
          >
            count is {count}
          </button>
          <p className="mt-5 text-xs sm:text-sm font-medium">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-xs sm:text-sm font-medium text-gray-300">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
