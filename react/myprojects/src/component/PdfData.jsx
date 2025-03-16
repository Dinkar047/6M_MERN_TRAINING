import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import data from './zomatodata';
const restaurants = data?.SECTION_SEARCH_RESULT?.map(r => r.info);

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Restaurant List</Text>
      {restaurants.map((restaurant, index) => (
        <View key={index}>
          <Text style={styles.item}> {restaurant?.name}</Text>
          
          <Text style={styles.item}> Rating: {restaurant?.rating?.rating_text}</Text>          
        </View>
      ))}
    </Page>
  </Document>
);

const styles = StyleSheet.create({
    page: { padding: 30 },
    title: { fontSize: 20, marginBottom: 10, textAlign: "center" },
    item: { fontSize: 14, marginBottom: 5 },
  });

const PDFGenerator = () => (
  <div>
    <PDFDownloadLink document={<MyDocument />} fileName="mypdf.pdf"><button className="btn btn-dark">Download</button>
    </PDFDownloadLink>
  </div>
);

export default PDFGenerator;
