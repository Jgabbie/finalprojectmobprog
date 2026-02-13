import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProgressTracker from "../components/ProgressTracker";
import { useNavigation } from "@react-navigation/native";
import ProgressTrackerStyles from "../styles/ProgressTrackerStyles";


export default function PassportProgress() {
    const cs = useNavigation()
    const passportSteps = [
        {
            title: "Documents Submitted",
            description: "Your documents are being verified",
        },
        {
            title: "Documents Approved",
            description: "You may now deliver the documents",
        },
        {
            title: "Passport Processing",
            description: "Your passport is being processed",
        },
        {
            title: "Passport Rejected",
            description: "Your documents are being delivered back",
        },
        {
            title: "Passport Completed",
            description: "Passport released successfully",
        },
    ];

    return (
        <View>
            <View style={ProgressTrackerStyles.container}>
                <Text style={ProgressTrackerStyles.header}>Passport Assistance</Text>

                <ProgressTracker steps={passportSteps} currentStep={1} />

                <TouchableOpacity
                    style={ProgressTrackerStyles.button}
                    onPress={() => {
                        cs.navigate('passportguidance')
                    }}>
                    <Text style={ProgressTrackerStyles.buttonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}