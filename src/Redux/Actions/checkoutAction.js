// Importa Axios para realizar la solicitud HTTP
import Axios from "axios";

const handlePayment = async () => {
  try {
    const { username, payment } = this.state;

    const response = await Axios.post("/payment/contracts", {
      username: username,
      payment: payment,
    });

    if (response.status === 200) {
      console.log("Pago exitoso:", response.data);
    } else {
      console.error("Error en el pago:", response.data);
    }
  } catch (error) {
    console.error("Error en la solicitud de pago:", error);
  }
};
