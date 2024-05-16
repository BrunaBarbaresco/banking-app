import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Bruna" };

  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Bem vindo"
          user={loggedIn?.firstName || "Convidado"}
          subtext="Acesse e gerencie sua conta e suas transações de forma eficiente!"
        />

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={27750.0}
        />
      </div>
    </section>
  );
};

export default Home;
