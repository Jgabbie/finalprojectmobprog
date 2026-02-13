import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProgressTracker from "../components/ProgressTracker";
import styles from "../styles/ProgressTrackerStyles";
import { useNavigation } from "@react-navigation/native";

export default function VisaProgress() {
    const cs = useNavigation()

    const visaSteps = [
        {
            title: "Documents Submitted",
            description: "Your documents are being verified",
        },
        {
            title: "Documents Approved",
            description: "You may now deliver the documents",
        },
        {
            title: "Visa Processing",
            description: "Your visa is currently being processed",
        },
        {
            title: "Visa Rejected",
            description: "Your documents are being delivered back",
        },
        {
            title: "Visa Completed",
            description: "Visa process completed successfully",
        },
    ];

    return (
        <View style={styles.screen}>
            <Text style={styles.header}>Visa Assistance</Text>


            <ProgressTracker steps={visaSteps} currentStep={2} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    cs.navigate('VisaAssistance')
                }}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}