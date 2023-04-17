//import React, { useEffect } from "react";
import { PDFViewer, Document, Page, View, Text } from "@react-pdf/renderer";
//import { useDispatch,useSelector } from "react-redux";


const ContractPDF = (props) => {

  const { contractId, username, detail, payment, textDescription} = props
  // if (!isAuthenticated) {
  //   return <div>No estás autorizado para acceder a esta página. Si estás intentando ver tu contrato, ¡no olvides iniciar sesión!</div>;
  // }

  // const authenticatedUsername = user?.sub; 

  // const isAuthorized = () => {
  //   const contractUsername = contractData.username; 

  //   if (authenticatedUsername === contractUsername) {
  //     return true;
  //   }
  //   return false;
  // };

  // if (!isAuthorized()) {
  //   return <div>Si estás intentando ver tu contrato, ¡no olvides iniciar sesión!</div>;
  // }

  return (
    <PDFViewer width="100%" height="800px">
      <Document>
        <Page size="A4">
          <View>
           <Text>Contrato ID: {contractId}</Text>
           <Text>Usuario: {username}</Text> 
          <Text>Descripción: {textDescription}</Text>
           <Text>Detalle: {detail}</Text>
           <Text>Payment: {payment}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ContractPDF;

