import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { downloadContractPdf } from "../api/contratoApi"; // Importar función para descargar contrato en PDF desde el backend

const ContratoComponent = () => {
  const [contractId, setContractId] = useState("");
  const { id } = useParams(); // Obtener el ID de contrato desde la URL usando useParams()

  useEffect(() => {
    //ID de contrato desde el backend
    // para obtener el ID de contrato
    // lo pongo en el estado usando setContractId()
    const fetchContractId = async () => {
      try {
        // Llamo a la API para obtener el ID de contract
        const response = await fetch(`/api/contrato/${id}`); // Ruta de la API para obtener el ID de contrato
        const data = await response.json();
        setContractId(data.contractId); // Establecer el ID de contrato en el estado
      } catch (error) {
        console.error("Error al obtener el ID de contrato:", error);
      }
    };

    fetchContractId();
  }, [id]);

  const handleDownloadPdf = async () => {
    try {
      // Llamo a back para descargar el contrato en PDF
      await downloadContractPdf(contractId); // Llamo a la función que descarga el contrato en PDF desde el backend
    } catch (error) {
      console.error("Error al descargar el contrato en PDF:", error);
    }
  };

  return (
    <div>
      <h1>Contrato {contractId}</h1>
      
      <button onClick={handleDownloadPdf}>Descargar PDF</button>
    
      <a href={`/payment/${contractId}`}>Ir a Pago</a>
    </div>
  );
};

export default ContratoComponent;
