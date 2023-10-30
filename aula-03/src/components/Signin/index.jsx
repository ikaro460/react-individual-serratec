import React, { useState } from "react";
import "./style.css";

function SignIn() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: 0,
    senha: "",
  });

  const [formErrors, setFormErrors] = useState({
    nome: "",
    email: "",
    idade: "",
    senha: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (formData.nome.trim() === "") {
      errors.nome = "Nome é obrigatório";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      errors.email = "Email é obrigatório";
      isValid = false;
    }

    if (formData.idade <= 0) {
      errors.idade = "Idade inválida";
      isValid = false;
    }

    if (formData.senha.trim() === "") {
      errors.senha = "Senha é obrigatória";
      isValid = false;
    }

    setFormErrors(errors);

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      const infos = { ...formData };
      console.log(infos);
      setFormData({
        nome: "",
        email: "",
        idade: 0,
        senha: "",
      });
      localStorage.setItem("infos", JSON.stringify(infos));
    }
  };

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <div className="input-box">
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          value={formData.nome}
          onChange={handleInputChange}
        />
        {formErrors.nome && (
          <span className="error-message">{formErrors.nome}</span>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <span className="error-message">{formErrors.email}</span>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="idade">Idade: </label>
        <input
          type="number"
          id="idade"
          name="idade"
          placeholder="Digite sua idade"
          value={formData.idade}
          onChange={handleInputChange}
        />
        {formErrors.idade && (
          <span className="error-message">{formErrors.idade}</span>
        )}
      </div>
      <div className="input-box">
        <label htmlFor="senha">Senha: </label>
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="Digite sua senha"
          value={formData.senha}
          onChange={handleInputChange}
        />
        {formErrors.senha && (
          <span className="error-message">{formErrors.senha}</span>
        )}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default SignIn;
