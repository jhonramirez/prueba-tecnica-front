import React, { useContext } from "react";
import Input from "../../components/Input/Input";
import { PageContex } from "../App";
import { AppPages } from "../../constans/constans";

import "./SummaryPage.css";

const SummaryPage = () => {
  const { setPage, user } = useContext(PageContex);

  return (
    <section className="summaryPage form-group">
      <h3>Información básica</h3>
      <Input label="Tipo Documento" value={user.typeDocument || ""} disabled />
      <Input
        label="Número Documento"
        value={user.numberDocument || ""}
        disabled
      />
      <Input label="Pais" value={user.country || ""} disabled />
      <Input label="Primer apellido" value={user.lastName || ""} disabled />
      <Input label="Primer nombre" value={user.name || ""} disabled />
      <section className="startPage__buttonContainer">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setPage(AppPages.start)}
        >
          Volver
        </button>
      </section>
    </section>
  );
};

export default SummaryPage;
