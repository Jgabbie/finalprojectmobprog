import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import ChatbotStyle from '../styles/ChatbotStyle'

export default function Chatbot() {
    const [chatbotOpen, setChatbotOpen] = useState(false)

    return (
        <>
            <TouchableOpacity
                style={ChatbotStyle.chatbotButton}
                onPress={() => { setChatbotOpen(true) }}
            >
                <Image
                    style={ChatbotStyle.chatbotIcon}
                    source={require('../assets/images/chatbot_icon.png')}
                />
            </TouchableOpacity>

            {chatbotOpen && (
                <View style={ChatbotStyle.chatbotOverlay}>
                    <View style={ChatbotStyle.chatbotBox}>
                        <View style={ChatbotStyle.chatbotHeader}>
                            <Text style={ChatbotStyle.chatbotTitle}>Chat With Us</Text>
                            <TouchableOpacity
                                onPress={() => { setChatbotOpen(false) }}
                            >
                                <Text style={{ color: "#00000" }}>X</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )}
        </>
    )
}