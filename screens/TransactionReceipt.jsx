import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import TransactionReceiptStyle from '../styles/TransactionReceiptStyle'
import { useNavigation } from '@react-navigation/native'

export default function TransactionReceipt() {
    const cs = useNavigation()

    return (
        <View style={TransactionReceiptStyle.container}>
            <Text style={TransactionReceiptStyle.title}>Transaction Receipt</Text>
            <View style={TransactionReceiptStyle.card}>
                <View style={TransactionReceiptStyle.header}>
                    <Image style={TransactionReceiptStyle.logo} source={require("../assets/images/logo.png")} />
                    <Text style={TransactionReceiptStyle.companyName}>M&RC Travel and Tours</Text>
                </View>

                <View>
                    <Text style={TransactionReceiptStyle.receiptNumber}>RECEIPT #0001</Text>
                </View>

                <Text style={TransactionReceiptStyle.label}>Total Price: </Text>
                <Text style={TransactionReceiptStyle.value}>₱200000</Text>

                <Text style={TransactionReceiptStyle.label}>Payment Method:</Text>
                <Text style={TransactionReceiptStyle.value}>GCash</Text>

                <Text style={TransactionReceiptStyle.label}>Transaction Date: </Text>
                <Text style={TransactionReceiptStyle.value}>2026-02-12</Text>

                <Text style={TransactionReceiptStyle.label}>Transaction Number: </Text>
                <Text style={TransactionReceiptStyle.value}>#92172321</Text>

                <Text style={TransactionReceiptStyle.label}>Trip Code:</Text>
                <Text style={TransactionReceiptStyle.value}>PKG-0001</Text>

                <View style={TransactionReceiptStyle.companyDetails}>
                    <Text style={TransactionReceiptStyle.companyDetailsText}>Parañaque, Metro Manila</Text>
                    <Text style={TransactionReceiptStyle.companyDetailsText}>+63 969 055 4806</Text>
                    <Text style={TransactionReceiptStyle.companyDetailsText}>m&rc@travels.com</Text>
                </View>
            </View>
            <TouchableOpacity
                style={TransactionReceiptStyle.button}
                onPress={() => {
                    cs.navigate('usertransaction')
                }}
            >
                <Text style={TransactionReceiptStyle.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}