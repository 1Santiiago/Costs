import React from "react";
import Input from "../form/Input";
import styles from "./ProjectForm.module.css";
const ProjectForm = () => {
  return (
    <>
      <form className={styles.form}>
        <div>
          <Input
            type="text"
            text="Nome do projeto"
            name="name"
            placeholder="Insira o nome do projeto"
          />
        </div>

        <div>
          <Input
            type="number"
            text="Orçamento do Projeto"
            name="budge"
            placeholder="Insira seu orçamento"
          />
        </div>
        <div>
          <select name="category_id">
            <option disabled>Selecione a catergoria</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Criar Projeto"></input>
        </div>
      </form>
    </>
  );
};

export default ProjectForm;
