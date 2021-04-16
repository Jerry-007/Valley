import React from "react";

import { Logo } from "@components/boilerplateComponents/logo";

export const Header: React.FC = () => {
  return (
    <div className="text-center" style={{ backgroundColor: "#20232a" }}>
      <Logo />
    </div>
  );
};
