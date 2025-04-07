import { useState } from "react";

import "../styles/ModalForm.css";

// eslint-disable-next-line react/prop-types
export function ModalFormClose({ onClose }) {
  const [typeTransaction, setTypeTransaction] = useState("income");
  const [amountTransaction, setAmountTransaction] = useState("");
  const [descriptionTransaction, setDescriptionTransaction] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      typeTransaction,
      amountTransaction: parseFloat(amountTransaction),
      descriptionTransaction,
      date: new Date().toISOString(),
    };

    console.log("The transaction has been added succesfully!", newTransaction);
    onClose();
  };

  return (
    <div className="overlay-transaction-modal">
      <section className="main-modal-container">
        <h2 className="modal-title">Add Transaction</h2>
        <form onSubmit={handleSubmit} className="p-4">
          <div>
            <label htmlFor="" className="block mb-1">
              Type
            </label>
            <select
              onChange={(e) => {
                setTypeTransaction(e.target.value);
              }}
              name=""
              id=""
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <div>
            <label htmlFor="" className="block mb-1">
              Amount
            </label>
            <input
              type="number"
              className="w-full border rounded-lg px-3 py-2"
              value={amountTransaction}
              onChange={(e) => {
                setAmountTransaction(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label className="block mb-1">Descripción</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={descriptionTransaction}
              onChange={(e) => setDescriptionTransaction(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Añadir
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
