import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import BookingInvoiceStyle from '../styles/BookingInvoiceStyle'
import { useNavigation } from '@react-navigation/native'

export default function BookingInvoice() {
    const cs = useNavigation()

    return (
        <View style={BookingInvoiceStyle.container}>
            <Text style={BookingInvoiceStyle.title}>Booking Invoice</Text>
            <View style={BookingInvoiceStyle.card}>
                <View style={BookingInvoiceStyle.header}>
                    <Image style={BookingInvoiceStyle.logo} source={require("../assets/images/logo.png")} />
                    <Text style={BookingInvoiceStyle.companyName}>M&RC Travel and Tours</Text>
                </View>

                <View style={BookingInvoiceStyle.invoiceInfo}>
                    <Text style={BookingInvoiceStyle.invoiceNumber}>INVOICE #0001</Text>
                    <Text style={BookingInvoiceStyle.invoiceText}>Date Issued: January 3, 2026</Text>
                    <Text style={BookingInvoiceStyle.invoiceText}>Issued By: Juan Lanuza</Text>
                </View>


                <Text style={BookingInvoiceStyle.label}>Package: </Text>
                <Text style={BookingInvoiceStyle.value}>Boracay Tour Package</Text>

                <Text style={BookingInvoiceStyle.label}>Booking Date:</Text>
                <Text style={BookingInvoiceStyle.value}>Jan. 15, 2026</Text>

                <Text style={BookingInvoiceStyle.label}>Number of Pax</Text>
                <Text style={BookingInvoiceStyle.value}>4</Text>

                <Text style={BookingInvoiceStyle.label}>Total Price</Text>
                <Text style={BookingInvoiceStyle.value}>₱200000</Text>

                <View style={BookingInvoiceStyle.companyDetails}>
                    <Text style={BookingInvoiceStyle.companyDetailsText}>Parañaque, Metro Manila</Text>
                    <Text style={BookingInvoiceStyle.companyDetailsText}>+63 969 055 4806</Text>
                    <Text style={BookingInvoiceStyle.companyDetailsText}>m&rc@travels.com</Text>
                </View>
            </View>

            <TouchableOpacity
                style={BookingInvoiceStyle.button}
            >
                <Text style={BookingInvoiceStyle.buttonText}>Download PDF</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={BookingInvoiceStyle.button}
                onPress={() => {
                    cs.navigate('userbooking')
                }}
            >
                <Text style={BookingInvoiceStyle.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}