import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
    Image
 } from "@react-pdf/renderer";
import logo from '../../assets/images/logo.png'
import { useLocation } from "react-router-dom";

const borderColor = '#90e5fc'
  

const styles = StyleSheet.create({
    pdfviewer : {
        width: window.innerWidth-400, 
        height: window.innerHeight,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    viewer: {
        width: window.innerWidth-700,
        height: window.innerHeight-40,
    },
    page: {
        fontFamily: 'Helvetica',
        fontSize: 15,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'space-between',
        width: 170,
        marginLeft: 309,
        display: 'flex',
        alignItems: 'center'

    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },

    invoiceDate: {
        fontSize: 12,
        fontStyle: 'bold',
    },
    label: {
        width: 90,
    },

    headerContainer: {
        marginTop: 36
    },
    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },

    titleContainer:{
        flexDirection: 'row',
        marginTop: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    reportTitle:{
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
    container: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        backgroundColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
    },
    description: {
        width: '60%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        width: '15%'
    },
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontSize: 12,
        fontStyle: 'bold',
    },
    total: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
  });
  
  
function BasicDocument() {

    var location = useLocation();
    var order = location.state;

    return (
        <div style={styles.pdfviewer}>
      <PDFViewer style={styles.viewer}>
        <Document>
          <Page size="A4" style={styles.page}>
            <Image style={styles.logo} src={logo} />
            <View style={styles.titleContainer}>
                <Text style={styles.reportTitle}>Stock Management Bill No : {order.id}</Text>
            </View>

            <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Order No:</Text>
                <Text >{order.id}</Text>
            </View >

            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Date: </Text>
                <Text >{order.orderDate}</Text>
            </View >
            <View style={styles.headerContainer}>
                <Text style={styles.billTo}>Bill To:</Text>
                <Text>Customer ID : {order.customerid}</Text>
                <Text>Product No : {order.productId}</Text>
            </View>
            <View style={styles.tableContainer}>
                <View style={styles.container}>
                    <Text style={styles.description}>Price Per Unit</Text>
                    <Text style={styles.description}>Quantity</Text>
                </View>
                <View style={styles.row} key={order.id}>
                    <Text style={styles.description}>{order.priceperunit} DH</Text>
                    <Text style={styles.description}>{order.quantity}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.description}>TOTAL</Text>
                    <Text style={styles.total}>{order.totalOrderPrice} DH</Text>
                </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      </div>
    );
  }
  export default BasicDocument;