import React, { useContext, useEffect, useState } from "react";
import {
  AppPages,
  documentTypes,
  initialValuesStartPage,
} from "../../constans/constans";
import Select from "../../components/Select/Select";
// import Input from "../../components/Input/Input";
import { getCountriesService } from "../../services/getCountriesService";
import { Formik, Form, Field } from "formik";
import { InputField } from "../../components/InputField/InputField";
import { searchUser } from "../../Utils/utils";
import { PageContex } from "../App";
import InputNumber from "../../components/InputNumber/InputNumber";
import "./StartPage.css";

const StartPage = ({ onSubmit = searchUser }) => {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const { setPage, setUser } = useContext(PageContex);

  const handleSubmit = (values) => {
    const numberDocument = values.numberDocument.replaceAll(",", "");
    const intValueNumberDocument = parseInt(numberDocument);

    if (numberDocument.length >= 8) {
      const user = onSubmit({
        ...values,
        numberDocument: intValueNumberDocument,
      });
      if (user.length > 0) {
        setErrorMessage(undefined);
        setPage(AppPages.summary);
        setUser(user[0]);
      } else {
        setErrorMessage("Usuario no encontrado");
      }
    } else {
      setErrorMessage(
        "Ingrese un número de identificación con más de 8 digitos"
      );
    }
  };

  useEffect(() => {
    async function getCountries() {
      setCountries(await getCountriesService());
    }
    getCountries();
  }, []);

  return (
    <section className="startPage d-flex justify-content-center">
      <Formik
        data-testid="startPage"
        initialValues={initialValuesStartPage}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ values }) => (
          <Form>
            <h3>Consulta de usuario</h3>
            <InputField name="typeDocument">
              <Select
                label="Tipo de documento"
                options={documentTypes}
                placeholder="Seleccione un tipo de documento"
              />
            </InputField>
            <Field
              name="numberDocument"
              component={InputNumber}
              label="Número de documento"
            />
            <InputField name="country">
              <Select
                label="País"
                options={countries}
                placeholder="Seleccione un país"
              />
            </InputField>
            {errorMessage && (
              <p className="startPage__messageError">{errorMessage}</p>
            )}
            <section className="startPage__buttonContainer">
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                disabled={
                  values === initialValuesStartPage ||
                  values.typeDocument === "" ||
                  values.numberDocument === ""
                }
              >
                Buscar
              </button>
            </section>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default StartPage;
