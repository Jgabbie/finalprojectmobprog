import { View, Text, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import PaymentMethodStyle from '../styles/PaymentMethodStyle'
import { useFonts } from 'expo-font'
import {
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from "@expo-google-fonts/montserrat"
import {
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from "@expo-google-fonts/roboto"


export default function PaymentMethod() {
    const cs = useNavigation()

    const [modalVisible, setModalVisible] = useState(false)
    const [modalPaymentVisible, setModalPaymentVisible] = useState(false)

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold
    })

    const [selectedOption, setSelectedOption] = useState('')

    const PaymentCard = ({ value, logo }) => (
        <TouchableOpacity
            style={[
                PaymentMethodStyle.card,
                selectedOption === value && PaymentMethodStyle.cardSelected
            ]}
            onPress={() => { setSelectedOption(value) }}
            activeOpacity={0.8}
        >

            <Image source={logo} style={PaymentMethodStyle.cardLogo} />
        </TouchableOpacity>
    )

    const confirmPayment = () => {
        setModalVisible(false)
        setModalPaymentVisible(true)
    }

    const cancelPayment = () => {
        setModalVisible(false)
    }

    const modalOK = () => {
        setModalPaymentVisible(false)
        cs.navigate('transactionreceipt')
    }


    return (
        <View style={PaymentMethodStyle.container}>
            <Text style={PaymentMethodStyle.title}>Payment Method</Text>

            <Text style={PaymentMethodStyle.sectionTitle}>E-Wallet</Text>
            <View style={PaymentMethodStyle.cardRow}>
                <PaymentCard
                    value="gcash"
                    logo={require('../assets/images/GCashLogo.png')}
                />

                <PaymentCard
                    value="paypal"
                    logo={require('../assets/images/PayPalLogo.png')}
                />
            </View>


            <Text style={PaymentMethodStyle.sectionTitle}>E-Wallet</Text>

            <View style={PaymentMethodStyle.cardRow}>
                <PaymentCard
                    value="bdo"
                    logo={require('../assets/images/BDOLogo.png')}
                />

                <PaymentCard
                    value="metrobank"
                    logo={require('../assets/images/MetroBankLogo.png')}
                />
            </View>

            <View style={PaymentMethodStyle.summaryCard}>
                <Text style={PaymentMethodStyle.summaryTitle}>
                    You are about to pay
                </Text>

                <View style={PaymentMethodStyle.summaryRow}>
                    <Text style={PaymentMethodStyle.label}>
                        Tour Package
                    </Text>
                    <Text style={PaymentMethodStyle.value}>
                        Baguio Tour Package
                    </Text>
                </View>

                <View style={PaymentMethodStyle.summaryRow}>
                    <Text style={PaymentMethodStyle.label}>
                        Payment Plan
                    </Text>
                    <Text style={PaymentMethodStyle.value}>
                        Installment - Down Payment
                    </Text>
                </View>

                <View style={PaymentMethodStyle.divider} />

                <Text style={PaymentMethodStyle.summaryAmount}>
                    ₱ 8,000
                </Text>

                <Text style={PaymentMethodStyle.summarySubtext}>
                    Amount to be charged using selected payment method
                </Text>
            </View>

            <TouchableOpacity
                style={[
                    PaymentMethodStyle.button,
                    !selectedOption && { opacity: 0.5 }
                ]}
                disabled={!selectedOption}
                onPress={() => {
                    setModalVisible(true)
                }}
            >
                <Text style={PaymentMethodStyle.buttonText}>Continue</Text>
            </TouchableOpacity>

            <Modal
                transparent
                animationType='fade'
                visible={modalVisible}
                onRequestClose={() => { setModalVisible }}
            >

                <View style={PaymentMethodStyle.modalOverlay}>
                    <View style={PaymentMethodStyle.modalBox}>
                        <Text style={PaymentMethodStyle.modalTitle}>Proceed Payment</Text>
                        <Text style={PaymentMethodStyle.modalText}>Are you sure you want proceed to payment?</Text>

                        <View style={{ flexDirection: "row", marginTop: 10, gap: 20 }}>
                            <TouchableOpacity
                                style={PaymentMethodStyle.modalButton}
                                onPress={() => {
                                    confirmPayment()
                                }}
                            >
                                <Text style={PaymentMethodStyle.modalButtonText}>Yes</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={PaymentMethodStyle.modalCancelButton}
                                onPress={() => {
                                    cancelPayment()
                                }}
                            >
                                <Text style={PaymentMethodStyle.modalButtonText}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                transparent
                animationType='fade'
                visible={modalPaymentVisible}
                onRequestClose={() => { setModalPaymentVisible }}
            >

                <View style={PaymentMethodStyle.modalOverlay}>
                    <View style={PaymentMethodStyle.modalBox}>
                        <Text style={PaymentMethodStyle.modalTitle}>Payment Successful</Text>
                        <Text style={PaymentMethodStyle.modalText}>Your payment has been successful!</Text>


                        <TouchableOpacity
                            style={PaymentMethodStyle.modalButton}
                            onPress={() => {
                                modalOK()
                            }}
                        >
                            <Text style={PaymentMethodStyle.modalButtonText}>OK</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>
        </View>
    )
}