import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, TextField } from "@mui/material";

function ContractForm() {
  return (
    <Formik
      initialValues={{
        userName: "",
        agreedToBudget: false,
        willComply: false
      }}
      onSubmit={(values) => {
        console.log(values);
        // Aquí puedes agregar la lógica para enviar los datos del contrato a tu servidor o almacenarlos en la base de datos
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <TextField
            name="userName"
            label="Nombre de usuario"
            variant="outlined"
            value={values.userName}
            onChange={handleChange}
            style={{ marginRight: "10px" }}
          />
          <Field type="checkbox" name="agreedToBudget">
            {({ field }) => (
              <label>
                <input type="checkbox" {...field} />
                Estoy de acuerdo con el presupuesto acordado
              </label>
            )}
          </Field>
          <Field type="checkbox" name="willComply">
            {({ field }) => (
              <label>
                <input type="checkbox" {...field} />
                Me comprometo a cumplir con este acuerdo
              </label>
            )}
          </Field>
          <Button type="submit" variant="outlined" color="secondary">
            Enviar contrato
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ContractForm;