import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Bruna",
    lastName: "Barbaresco",
    email: "emailteste@xxxxx.com",
    gender: "f",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title={loggedIn.gender === "m" ? "Bem vindo," : "Bem vinda,"}
            user={`${loggedIn?.firstName}!` || "Convidado"}
            subtext="Acesse e gerencie sua conta e suas transações de forma eficiente!"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={127750.0}
          />
        </header>
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 186754.5 }, { currentBalance: 161754.5 }]}
      />
    </section>
  );
};

export default Home;
