"use client";
import { LayoutGrid } from "lucide-react";
import ButtonSidebar from "./components/Buttons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ButtonsSidebar() {

  const router = useRouter();

  const [activeButton, setActiveButton] = useState("Overview");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
    let buttonNameLower = buttonName.toLowerCase()
    router.push(buttonNameLower)
  };

  return (
    <>
      <ButtonSidebar
        text="Overview"
        icon={LayoutGrid}
        className={activeButton === "Overview" ? "active" : ""}
        onClick={() => handleButtonClick("Overview")}
      />
      <ButtonSidebar
        text="Balances"
        icon={LayoutGrid}
        className={activeButton === "Balances" ? "active" : ""}
        onClick={() => handleButtonClick("Balances")}
      />
      <ButtonSidebar
        text="Transactions"
        icon={LayoutGrid}
        className={activeButton === "Transactions" ? "active" : ""}
        onClick={() => handleButtonClick("Transactions")}
      />
      <ButtonSidebar
        text="Bills"
        icon={LayoutGrid}
        className={activeButton === " Bills" ? "active" : ""}
        onClick={() => handleButtonClick("Bills")}
      />
      <ButtonSidebar
        text="Exprenses"
        icon={LayoutGrid}
        className={activeButton === "Exprenses" ? "active" : ""}
        onClick={() => handleButtonClick("Exprenses")}
      />
      <ButtonSidebar
        text="Goals"
        icon={LayoutGrid}
        className={activeButton === "Goals" ? "active" : ""}
        onClick={() => handleButtonClick("Goals")}
      />
      <ButtonSidebar
        text="Settings"
        icon={LayoutGrid}
        className={activeButton === "Settings" ? "active" : ""}
        onClick={() => handleButtonClick("Settings")}
      />
    </>
  );
}
