import "../styles/HeaderApp.css";

export function Header() {
  return (
    <section className="app-header-content-app ">
      <div className="w-full flex flex-row p-4 justify-between">
        <div className="w-1/3">
          <form action="">
            <input placeholder="Search" type="text" />
          </form>
        </div>
        <div className="w-2/3 flex flex-row items-center justify-end">
          <button>Añadir</button>
          <button>Notificaciones</button>
          <button>Preferencias</button>
          <button>Perfil</button>
        </div>
      </div>
    </section>
  );
}
