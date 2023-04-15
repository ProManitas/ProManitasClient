import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendContract } from "../../Redux/Actions/contractAction";
import {
  TextField,
  Button,
  Checkbox,
  Grid,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { getAllUsers } from "../../Redux/Actions/userAction";
import { useAuth0 } from "@auth0/auth0-react";

const ContractForm = ({ userId, advertisementId }) => {
  const { user } = useAuth0();
  const textDescription =
    "Con la creación de este contrato, usted acepta y se compromete a cumplir con nuestros términos y condiciones donde se describen las obligaciones y responsabilidades tanto del usuario como de nuestra empresa. ";

  const [contractData, setContractData] = useState({
    name: "",
    dateJob: "",
    detail: "",
    description: "",
    amount: "",
    username: "",
    rating_commitment: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    const fieldValue = event.target.type === "checkbox" ? checked : value;

    setContractData({
      ...contractData,
      [name]: fieldValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      sendContract(
        contractData.username,
        contractData.detail,
        contractData.dateJob
      )
    );
    navigate(`/payment`);
  };

  const usersDb = useSelector((state) => state.user.allUsers);

  const filteredUser = usersDb.filter((elem) => elem.email === user.email);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Nombre Completo"
            name="name"
            value={contractData.name}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        {filteredUser[0] && filteredUser[0].email ? (
          <div>
            <Grid item xs={12}>
              <TextField
                label="Nombre de Usuario"
                name="username"
                value={filteredUser[0] && filteredUser[0].username}
                readOnly
                onChange={handleChange}
                required
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
          </div>
        ) : null}
        <Grid item xs={12}>
          <Grid item xs={12}>
            <TextField
              label="Detalles del Contrato"
              name="detail"
              value={contractData.detail}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={4}
              placeholder="Ejemplo: se reparará cerradura en puerta de aluminio..."
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Monto Acordado"
            name="amount"
            value={contractData.amount}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <span>Fecha acordada para realizar el trabajo</span>
          <TextField
            type="date"
            name="dateJob"
            value={contractData.dateJob}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label=""
            name="description"
            value={textDescription}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={4}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="rating_commitment"
                checked={contractData.rating_commitment}
                onChange={handleChange}
                required
              />
            }
            label="Me comprometo a calificar una vez hecho el trabajo"
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Enviar Contrato
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContractForm;

//
