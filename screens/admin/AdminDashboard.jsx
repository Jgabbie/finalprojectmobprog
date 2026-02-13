import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import Header from '../../components/Header'
import AdminDashboardStyles from '../../styles/adminstyles/AdminDashboardStyle'
import { LineChart } from 'react-native-chart-kit'

export default function AdminDashboard() {
    const [isSidebarVisible, setSidebarVisible] = useState(false)

    const [bookings, setBookings] = useState([
        { id: "1", ref: "BR-0001", package: "Boracay Tour", pax: "4", date: "09-14-2026", amount: 70000 },
    ])
    return (
        <View>
            <Header openSidebar={() => { setSidebarVisible(true) }} />
            <AdminSidebar visible={isSidebarVisible} onClose={() => setSidebarVisible(false)} />
            <View style={AdminDashboardStyles.container}>
                <Text style={AdminDashboardStyles.header}>AdminDashboard</Text>
                <View style={AdminDashboardStyles.statsContainer}>
                    <View style={AdminDashboardStyles.statsRow}>
                        <View style={AdminDashboardStyles.card}>
                            <Text style={AdminDashboardStyles.cardValue}>20</Text>
                            <Text style={AdminDashboardStyles.cardLabel}>Bookings</Text>
                        </View>

                        <View style={AdminDashboardStyles.card}>
                            <Text style={AdminDashboardStyles.cardValue}>5</Text>
                            <Text style={AdminDashboardStyles.cardLabel}>Users</Text>
                        </View>
                    </View>

                    <View style={AdminDashboardStyles.statsRow}>
                        <View style={AdminDashboardStyles.card}>
                            <Text style={AdminDashboardStyles.cardValue}>10</Text>
                            <Text style={AdminDashboardStyles.cardLabel}>Transactions</Text>
                        </View>

                        <View style={AdminDashboardStyles.card}>
                            <Text style={AdminDashboardStyles.cardValue}>10</Text>
                            <Text style={AdminDashboardStyles.cardLabel}>Cancellations</Text>
                        </View>
                    </View>

                    <Text style={AdminDashboardStyles.sectionTitle}>Monthly Bookings</Text>
                    <LineChart
                        data={{
                            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                            datasets: [
                                {
                                    data: [20, 45, 28, 80, 99, 43]
                                }
                            ]
                        }}
                        width={370}
                        height={220}
                        chartConfig={{
                            backgroundColor: "#fff",
                            backgroundGradientFrom: "#fff",
                            backgroundGradientTo: "#fff",
                            decimalPlaces: 0,
                            color: () => { "#ffffff" },
                            labelColor: () => { "#ffffff" },
                            propsForDots: {
                                r: "5",
                                strokeWidth: "2",
                                stroke: "#305797",
                                fill: "#305797"
                            }
                        }}
                        style={{
                            borderRadius: 12,
                            marginBottom: 20
                        }}
                    />

                    <Text style={AdminDashboardStyles.sectionTitle}>Recent Bookings</Text>

                    <View style={AdminDashboardStyles.tableHeader}>
                        <Text style={AdminDashboardStyles.headerCell}>Ref.</Text>
                        <Text style={AdminDashboardStyles.headerCell}>Package</Text>
                        <Text style={AdminDashboardStyles.headerCell}>Pax</Text>
                        <Text style={AdminDashboardStyles.headerCell}>Date</Text>
                        <Text style={AdminDashboardStyles.headerCell}>Ammount</Text>
                        <Text style={AdminDashboardStyles.headerCell}>Action</Text>
                    </View>

                    <FlatList
                        keyExtractor={(item) => item.id}
                        data={bookings}
                        renderItem={({ item }) => (
                            <View style={AdminDashboardStyles.tableRow}>
                                <Text style={AdminDashboardStyles.tableCell}>{item.ref}</Text>
                                <Text style={AdminDashboardStyles.tableCell}>{item.package}</Text>
                                <Text style={AdminDashboardStyles.tableCell}>{item.pax}</Text>
                                <Text style={AdminDashboardStyles.tableCell}>{item.date}</Text>
                                <Text style={AdminDashboardStyles.tableCell}>{item.amount}</Text>
                                <TouchableOpacity
                                    style={AdminDashboardStyles.actionButton}
                                    onPress={() => {
                                        cs.navigate("bookinginvoice")
                                    }}
                                >
                                    <Text style={AdminDashboardStyles.viewButtonText}>View</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}
//https://www.npmjs.com/package/react-native-chart-kit