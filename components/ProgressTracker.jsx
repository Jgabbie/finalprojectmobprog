import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import styles from '../styles/ProgressTrackerStyles';
import Colors from '../styles/Colors';

export default function ProgressTracker({steps, currentStep}) {
return (
<View style={styles.container}>
    {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
        <View key={index} style={styles.stepRow}>
            <View style={styles.indicatorColumn}>
            <View
                style={[
                styles.circle,
                isCompleted && styles.completedCircle,
                isActive && styles.activeCircle,
                ]}
            >
                {isCompleted && (
                <Ionicons name="checkmark" size={14} color="#fff" />
                )}
            </View>

            {index !== steps.length - 1 && (
                <View
                style={[
                    styles.line,
                    isCompleted && styles.completedLine,
                ]}
                />
            )}
            </View>

            <View
            style={[
            styles.stepCard,
            isActive && styles.activeCard,
            ]}
            >
            <Text style={styles.stepTitle}>{step.title}</Text>
            <Text style={styles.stepDescription}>
                {step.description}
            </Text>
            </View>
        </View>
        );
    })}
    </View>
);
}