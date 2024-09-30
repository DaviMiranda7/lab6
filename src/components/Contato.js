import React from "react";
import "../styles/Contato.css";

function Contato() {
  return (
    <div className="contato">
      <h1>Contato</h1>
      <p>
        Se você tiver dúvidas ou precisar de suporte, entre em contato com a
        nossa equipe:
      </p>
      <ul>
        <li>Email: suporte@galaxiumgame.com</li>
        <li>Telefone: (11) 1234-5678</li>
        <li>Endereço: Rua das Galáxias, 42 - São Paulo, SP</li>
      </ul>
    </div>
  );
}

export default Contato;
