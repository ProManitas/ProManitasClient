import React from "react";
import { PDFViewer, Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

const ContractPDF = (props) => {
  const { contractId, username, detail, payment, textDescription } = props;

  // Estilos personalizados
  const styles = StyleSheet.create({
    page: {
      fontFamily: "Helvetica",
      padding: 20,
    },
    section: {
      marginBottom: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 14,
    },
    text: {
      fontSize: 12,
    },
  });

  return (
    <PDFViewer width="100%" height="800px">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text style={styles.title}>Contrato ID: {contractId}</Text>
            <Text style={styles.subtitle}>Usuario: {username}</Text>
            <Text style={styles.text}>Descripción: {textDescription}</Text>
            <Text style={styles.text}>Detalle: {detail}</Text>
            <Text style={styles.text}>Payment: {payment}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default ContractPDF;