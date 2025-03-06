import { useRef } from "react";
import "../App.css";

function Close({ currentAccount, accounts, setAccount }) {
  const inputUser = useRef();
  const inputPin = useRef();

  const handleCloseAccount = function (e) {
    e.preventDefault();

    const user = inputUser.current.value;
    const pin = Number(inputPin.current.value);

    if (user === currentAccount.username && pin === currentAccount.pin) {
      const index = accounts.findIndex(
        (acc) => acc.username === user && acc.pin === pin,
      );
      accounts.splice(index, 1);
      setAccount(null);

      // Mostrar un pop out de confirmación con sweetAlert
      swal({
        title: "Cuenta eliminada",
        text: "La cuenta ha sido eliminada exitosamente",
        icon: "success",
        button: "Aceptar",
      });
    }
  };
  return (
    <div className="operation operation--close">
      <h2>Close account</h2>
      <form className="form form--close">
        <input
          type="text"
          className="form__input form__input--user"
          ref={inputUser}
        />
        <input
          type="password"
          maxlength="6"
          className="form__input form__input--pin"
          ref={inputPin}
        />
        <button
          onClick={handleCloseAccount}
          className="form__btn form__btn--close"
        >
          &rarr;
        </button>
        <label className="form__label">Confirm user</label>
        <label className="form__label">Confirm PIN</label>
      </form>
    </div>
  );
}

export default Close;
