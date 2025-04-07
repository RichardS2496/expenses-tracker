import { ModalFormClose } from "./ModalFormClose";

import { useState } from "react";

export function AddTransactionModalBtn() {
  const [showTransactionModal, setShowTransactionModal] = useState(false);

  return (
    <div>
      <button
        className="self-end text-sm rounded-xl border py-1 px-2"
        onClick={() => {
          setShowTransactionModal(true);
        }}
      >
        Agregar
      </button>

      {showTransactionModal && (
        <ModalFormClose
          onClose={() => {
            setShowTransactionModal(false);
          }}
        />
      )}
    </div>
  );
}
