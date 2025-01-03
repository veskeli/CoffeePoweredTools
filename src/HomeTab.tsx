// HomeTab.tsx
import React from 'react';
import { Button } from "@/components/ui/button"

const HomeTab = () => (
  <div className="row">
    <a href="https://https://github.com/veskeli/CoffeePoweredTools" target="_blank">
      <img src="/GameScripts.ico" className="logo coffee" alt="Coffee logo" />
      <p>Github</p>
    </a>
    <a href="https://https://github.com/veskeli/GameScriptsByVeskeli" target="_blank">
      <img src="/coffee3.png" className="logo coffee" alt="coffee logo" />
      <p> Original Coffee power tools </p>
    </a>
    <Button>Testing button</Button>
  </div>
);

export default HomeTab;