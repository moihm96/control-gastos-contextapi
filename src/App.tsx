import { useEffect, useMemo } from "react";
import BudgetForm from "./components/BudgetForm";
import { useBudget } from "./hooks/useBudget";
import BudgetTracker from "./components/BudgetTracker";
import ExpenseModal from "./components/ExpenseModal";
import ExpenseList from "./components/ExpenseList";
import FilterByCategory from "./components/FilterByCategory";

function App() {
  const { state, dispatch } = useBudget();

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget]);

  useEffect(() => {
    localStorage.setItem("budget", state.budget.toString());
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
  }, [state]);

  return (
    <>
      <header className="bg-blue-600 max-h-72 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="font-black text-center uppercase text-4xl">
            Planificador de gastos
          </h1>
          <button
            className="bg-pink-500 hover:bg-pink-800 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm"
            onClick={() =>
              dispatch({
                type: "restart-app",
              })
            }
          >
            Reiniciar App
          </button>
        </div>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FilterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  );
}

export default App;
