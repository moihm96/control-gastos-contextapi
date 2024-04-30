import BudgetForm from "./components/BudgetForm";

function App() {
  return (
    <>
      <header className="bg-blue-600 max-h-72">
        <h1 className="font-black text-center uppercase text-4xl">
          Planificador de gastos
        </h1>
      </header>
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  );
}

export default App;
