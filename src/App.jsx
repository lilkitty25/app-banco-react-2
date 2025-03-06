import { useState } from "react";
import "./App.css";
import Balance from "./Balance/Balance.jsx";
import Close from "./Close/Close.jsx";
import Loan from "./Loan/Loan.jsx";
import Login from "./Login/Login.jsx";
import Movements from "./Movements/Movements.jsx";
import Summary from "./Summary/Summary.jsx";
import Transfers from "./Transfers/Transfers.jsx";
import Welcome from "./Welcome/Welcome.jsx";
import accounts from "./Accounts/cuentas.js";

function App() {
  const [account, setAccount] = useState(null);

  const handleLogin = (user, pin) => {
    const currentAccount = accounts.find(
      (acc) => acc.username === user && acc.pin === Number(pin),
    );

    if (currentAccount) setAccount(currentAccount);
  };

  return (
    <>
      <nav>
        <Welcome account={account} />
        <img src="logo.png" alt="Logo" className="logo" />
        <Login onLogin={handleLogin} />
      </nav>

      {account && (
        <main className="app">
          {/* BALANCE */}
          <Balance movements={account.movements} />

          {/* MOVEMENTS */}
          <Movements movements={account.movements} />

          {/* SUMMARY */}
          <Summary movements={account.movements} />

          {/* <!-- OPERATION: TRANSFERS --> */}
          <Transfers
            currentAccount={account}
            movements={account.movements}
            accounts={accounts}
          />

          {/* OPERATION: LOAN */}
          <Loan movements={account.movements} />

          {/* OPERATION: CLOSE */}
          <Close
            accounts={accounts}
            currentAccount={account}
            setAccount={setAccount}
          />

          {/* LOGOUT TIMER */}
          <p className="logout-timer">
            You will be logged out in <span className="timer">05:00</span>
          </p>
        </main>
      )}
    </>
  );
}

export default App;
