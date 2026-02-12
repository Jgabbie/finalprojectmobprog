import React, { useMemo, useState } from "react"
import {View,Text,ScrollView,Image,TouchableOpacity,Modal,} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import styles from "../styles/DestinationStyles"
import Colors from "../styles/Colors"
import { Calendar } from "react-native-calendars"
import Sidebar from "../components/Sidebar"

const MODAL_CONTENT = {
  "1": {
    dateDetails: {
      packageLine: "3 Days 2 Nights land arrangement package.",
      startingDate: "May 18, 2025",
      availableTime: "9:00 am",
    },
    availableDates: [
      {
        id: "date-1",
        range: "January 21 - January 26, 2026",
        note: "Baguio peak season slots with guided city tour.",
      },
      {
        id: "date-2",
        range: "February 10 - February 15, 2026",
        note: "Includes Strawberry Farm and Session Road stroll.",
      },
    ],
    allIn: {
      image: "https://i.imgur.com/wwoZU53.png",
      title: "All in Package",
      text:
        "Air or land arrangement with transfers, hotel, and guided tours included.",
    },
    land: {
      image: "https://i.imgur.com/vkmY0GO.png",
      title: "Land Arrangement",
      text:
        "Land-only package with tours, accommodations, and transfers arranged.",
    },
    fixed: {
      image: "https://i.imgur.com/J3tnzCw.png",
      title: "Fixed Package",
      text: "Pre-arranged inclusions for a worry-free Baguio getaway.",
    },
    custom: {
      image: "https://i.imgur.com/IIaHcNF.png",
      title: "Customized Package",
      text: "Pick your preferred hotel, side trips, and add-on experiences.",
    },
    solo: {
      image: "https://i.imgur.com/cu1Wc6u.png",
      title: "Solo Booking",
      text: "A personal itinerary crafted just for you.",
    },
    group: {
      image: "https://i.imgur.com/K8MkNl7.png",
      title: "Grouped Booking",
      text: "Plan a trip for family or friends and enjoy group perks.",
    },
    customize: {
      airline: "Cebu Pacific Air",
      hotel: "Ridgewood Hotel",
    },
  },
  "2": {
    dateDetails: {
      packageLine: "5 Days 4 Nights international package.",
      startingDate: "June 12, 2025",
      availableTime: "8:00 am",
    },
    availableDates: [
      {
        id: "date-1",
        range: "March 04 - March 09, 2026",
        note: "Cherry blossom season, includes palace tours.",
      },
      {
        id: "date-2",
        range: "April 15 - April 20, 2026",
        note: "Myeongdong shopping and night market package.",
      },
    ],
    allIn: {
      image: "https://i.imgur.com/wwoZU53.png",
      title: "All in Package",
      text: "International flights, hotel, transfers, and daily tours included.",
    },
    land: {
      image: "https://i.imgur.com/vkmY0GO.png",
      title: "Land Arrangement",
      text: "Ground arrangements only; bring your own flights.",
    },
    fixed: {
      image: "https://i.imgur.com/J3tnzCw.png",
      title: "Fixed Package",
      text: "Set itinerary for a seamless Seoul experience.",
    },
    custom: {
      image: "https://i.imgur.com/IIaHcNF.png",
      title: "Customized Package",
      text: "Build your Seoul journey with flexible activities.",
    },
    solo: {
      image: "https://i.imgur.com/cu1Wc6u.png",
      title: "Solo Booking",
      text: "Independent travel with curated must-see stops.",
    },
    group: {
      image: "https://i.imgur.com/K8MkNl7.png",
      title: "Grouped Booking",
      text: "Perfect for teams and friends traveling together.",
    },
    customize: {
      airline: "Korean Air",
      hotel: "Maple Boutique Hotel",
    },
  },
  "3": {
    dateDetails: {
      packageLine: "4 Days 3 Nights island-hopping package.",
      startingDate: "July 22, 2025",
      availableTime: "10:00 am",
    },
    availableDates: [
      {
        id: "date-1",
        range: "May 18 - May 22, 2026",
        note: "Includes Honda Bay island tour.",
      },
      {
        id: "date-2",
        range: "June 02 - June 06, 2026",
        note: "Underground River and El Nido side trip.",
      },
    ],
    allIn: {
      image: "https://i.imgur.com/wwoZU53.png",
      title: "All in Package",
      text: "Flights, island tours, hotel, and transfers included.",
    },
    land: {
      image: "https://i.imgur.com/vkmY0GO.png",
      title: "Land Arrangement",
      text: "Island tours and stays covered, flights excluded.",
    },
    fixed: {
      image: "https://i.imgur.com/J3tnzCw.png",
      title: "Fixed Package",
      text: "Pre-set schedule for beaches and lagoon tours.",
    },
    custom: {
      image: "https://i.imgur.com/IIaHcNF.png",
      title: "Customized Package",
      text: "Choose your islands, resorts, and excursions.",
    },
    solo: {
      image: "https://i.imgur.com/cu1Wc6u.png",
      title: "Solo Booking",
      text: "A flexible island escape for one.",
    },
    group: {
      image: "https://i.imgur.com/K8MkNl7.png",
      title: "Grouped Booking",
      text: "Share island adventures with your group.",
    },
    customize: {
      airline: "Philippine Airlines",
      hotel: "Seaside Cove Resort",
    },
  },
}

const ADDON_OPTIONS = [
  { id: "addon-1", label: "In-flight Meals/Snacks" },
  { id: "addon-2", label: "In-flight Meals" },
  { id: "addon-3", label: "In-flight Pillow" },
]

const TOUR_OPTIONS = [
  { id: "tour-1", label: "Base on Package" },
  { id: "tour-2", label: "Option 2" },
  { id: "tour-3", label: "Option 3" },
]

const defaultTravelers = {
  adult: 1,
  child: 0,
  infant: 0,
  senior: 0,
}

export default function PackageDetails({ route, navigation }) {
  const [isSidebarVisible, setSidebarVisible] = useState(false)

  const pkg = route?.params?.pkg ?? {
    id: "1",
    title: "Baguio City Tour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7e/b0/b9/photo4jpg.jpg?w=900&h=500&s=1",
    price: "₱67,000",
    duration: "3 Days",
    isInternational: false,
  }

  const modalContent = MODAL_CONTENT[pkg.id] ?? MODAL_CONTENT["1"]

  const [activeTab, setActiveTab] = useState("itinerary")
  const [activeModal, setActiveModal] = useState(null)
  const [selectedDateKey, setSelectedDateKey] = useState(() =>
    new Date(modalContent.dateDetails.startingDate).toISOString().slice(0, 10)
  )
  const [selectedDate, setSelectedDate] = useState(() =>
    new Date(modalContent.dateDetails.startingDate).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  )
  const [availableDateId, setAvailableDateId] = useState(
    () => modalContent.availableDates[0]?.id ?? "date-1"
  )
  const [allInLand, setAllInLand] = useState("all-in")
  const [fixedCustom, setFixedCustom] = useState("fixed")
  const [soloGrouped, setSoloGrouped] = useState("solo")
  const [travelers, setTravelers] = useState(defaultTravelers)
  const [airline, setAirline] = useState(() => modalContent.customize.airline)
  const [hotel, setHotel] = useState(() => modalContent.customize.hotel)
  const [addons, setAddons] = useState(["addon-1"])
  const [tours, setTours] = useState(["tour-1"])

  const modalTitle = useMemo(() => {
    if (activeModal === "date") return "Choose Date"
    if (activeModal === "available") return "Available Dates"
    if (activeModal === "allin") return "ALL IN OR LAND"
    if (activeModal === "fixed") return "FIXED OR CUSTOMIZED"
    if (activeModal === "solo") return "SOLO OR GROUPED"
    if (activeModal === "travelers") return "Travelers"
    if (activeModal === "customize") return "Customize"
    if (activeModal === "addons") return "Add-ons"
    if (activeModal === "summary") return "Booking Summary"
    if (activeModal === "approval") return "Booking for Approval"
    return ""
  }, [activeModal])

  const startAvailability = () => {
    setActiveModal(pkg.isInternational ? "available" : "date")
  }

  const nextModal = () => {
    if (activeModal === "date" || activeModal === "available") {
      setActiveModal("allin")
      return
    }
    if (activeModal === "allin") {
      setActiveModal("fixed")
      return
    }
    if (activeModal === "fixed") {
      setActiveModal("solo")
      return
    }
    if (activeModal === "solo") {
      setActiveModal("travelers")
      return
    }
    if (activeModal === "travelers") {
      setActiveModal(fixedCustom === "custom" ? "customize" : "addons")
      return
    }
    if (activeModal === "customize") {
      setActiveModal("addons")
      return
    }
    if (activeModal === "addons") {
      setActiveModal("summary")
      return
    }
    if (activeModal === "summary") {
      setActiveModal("approval")
      return
    }
    if (activeModal === "approval") {
      setActiveModal(null)
    }
  }

  const prevModal = () => {
    if (activeModal === "approval") {
      setActiveModal("summary")
      return
    }
    if (activeModal === "summary") {
      setActiveModal("addons")
      return
    }
    if (activeModal === "addons") {
      setActiveModal(fixedCustom === "custom" ? "customize" : "travelers")
      return
    }
    if (activeModal === "customize") {
      setActiveModal("travelers")
      return
    }
    if (activeModal === "travelers") {
      setActiveModal("solo")
      return
    }
    if (activeModal === "solo") {
      setActiveModal("fixed")
      return
    }
    if (activeModal === "fixed") {
      setActiveModal("allin")
      return
    }
    if (activeModal === "allin") {
      setActiveModal(pkg.isInternational ? "available" : "date")
      return
    }
    if (activeModal === "date" || activeModal === "available") {
      setActiveModal(null)
    }
  }

  const closeModal = () => setActiveModal(null)

  const handleDateSelect = (day) => {
    setSelectedDateKey(day.dateString)
    const parsedDate = new Date(day.dateString)
    setSelectedDate(
      parsedDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    )
  }

  const adjustTraveler = (key, delta) => {
    setTravelers((prev) => {
      const nextValue = Math.max(0, prev[key] + delta)
      return { ...prev, [key]: nextValue }
    })
  }

  const toggleItem = (items, setItems, id) => {
    if (items.includes(id)) {
      setItems(items.filter((item) => item !== id))
      return
    }
    setItems([...items, id])
  }

  const totalTravelers =
    travelers.adult + travelers.child + travelers.infant + travelers.senior

  return (
    <View style={styles.detailsContainer}>
      <Sidebar
        visible={isSidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />

      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.sideBarButton}
          onPress={() => setSidebarVisible(true)}
        >
          <Image
            source={require('../materials/sidebar_btn.png')}
            style={styles.sideBarImage}
          />
        </TouchableOpacity>

        <Image
          source={require('../materials/mrc_logo2.png')}
          style={styles.logo}
        />

        <View style={styles.rightIconsContainer}>
          <TouchableOpacity style={styles.bellButton}>
            <Image
              source={require('../materials/bell_icon.png')}
              style={styles.bellIcon}
            />
          </TouchableOpacity>

          <Image
            source={require('../materials/profile_icon.png')}
            style={styles.profileIcon}
          />
        </View>
      </View>

      {/* <Header onBack={() => navigation.goBack()} /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.detailsHeader}>
          <View style={styles.titleRow}>
            <Text style={styles.detailsTitle}>{pkg.title}</Text>
            <View style={styles.daysBadge}>
              <Text style={styles.daysText}>{pkg.duration}</Text>
            </View>
          </View>
          <Image source={{ uri: pkg.image }} style={styles.heroImage} />
        </View>

        <View style={styles.heroCard}>
          <Text style={styles.heroDescription}>{pkg.description}</Text>
          <View style={styles.priceRow}>
            <View>
              <Text style={styles.priceLabel}>FROM</Text>
              <Text style={styles.priceValue}>{pkg.price}</Text>
              <Text style={styles.priceUnit}>/Adult</Text>
            </View>
            <TouchableOpacity
              style={styles.availabilityButton}
              onPress={startAvailability}
            >
              <Text style={styles.availabilityText}>Check Availability</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabRow}>
          {["itinerary", "inclusions", "terms"].map((tab, index) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                index === 2 && { borderRightWidth: 0 },
                activeTab === tab && styles.tabButtonActive,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={styles.tabText}>
                {tab === "itinerary" && "Itinerary"}
                {tab === "inclusions" && "Inclusions & Exclusions"}
                {tab === "terms" && "Terms & Conditions"}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sectionBody}>
          {activeTab === "itinerary" && (
            <>
              <Text style={styles.sectionTitle}>DAY 1</Text>
              <Text style={styles.sectionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </>
          )}
          {activeTab === "inclusions" && (
            <>
              <Text style={styles.sectionTitle}>INCLUSIONS</Text>
              <Text style={styles.sectionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </>
          )}
          {activeTab === "terms" && (
            <>
              <Text style={styles.sectionTitle}>TERMS AND CONDITIONS</Text>
              <Text style={styles.sectionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </>
          )}
        </View>
      </ScrollView>

      <Modal visible={!!activeModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
              <TouchableOpacity onPress={closeModal}>
                <Ionicons name="close" size={18} color="#333" />
              </TouchableOpacity>
            </View>

            <View style={styles.modalBody}>
              {activeModal === "date" && (
                <>
                  <View style={styles.calendarBox}>
                    <Text style={styles.modalParagraph}>Choose Date</Text>
                    <Calendar
                      current={selectedDateKey}
                      onDayPress={handleDateSelect}
                      markedDates={{
                        [selectedDateKey]: {
                          selected: true,
                          selectedColor: Colors.primary,
                        },
                      }}
                      theme={{
                        arrowColor: Colors.primary,
                        todayTextColor: Colors.primary,
                        textMonthFontWeight: "700",
                        textDayHeaderFontWeight: "600",
                      }}
                      style={styles.calendar}
                    />
                  </View>
                  <Text style={styles.modalSubTitle}>Package Details</Text>
                  <View style={styles.modalBox}>
                    <Text style={styles.modalParagraph}>{pkg.title}</Text>
                    <Text style={styles.modalParagraph}>
                      {modalContent.dateDetails.packageLine}
                    </Text>
                    <Text style={styles.modalParagraph}>
                      Starting Date: {selectedDate}
                    </Text>
                    <Text style={styles.modalParagraph}>
                      Available Time: {modalContent.dateDetails.availableTime}
                    </Text>
                  </View>
                </>
              )}

              {activeModal === "available" && (
                <>
                  {modalContent.availableDates.map((option) => (
                    <TouchableOpacity
                      key={option.id}
                      style={styles.cardOption}
                      onPress={() => setAvailableDateId(option.id)}
                    >
                      <View style={styles.radioRow}>
                        <View style={styles.radioOuter}>
                          {availableDateId === option.id && (
                            <View style={styles.radioInner} />
                          )}
                        </View>
                        <Text style={styles.cardOptionTitle}>{option.range}</Text>
                      </View>
                      <Text style={styles.cardOptionText}>{option.note}</Text>
                    </TouchableOpacity>
                  ))}
                </>
              )}

              {activeModal === "allin" && (
                <>
                  <TouchableOpacity
                    style={styles.cardOption}
                    onPress={() => setAllInLand("all-in")}
                  >
                    <Image
                      source={{ uri: modalContent.allIn.image }}
                      style={styles.optionImage}
                    />
                    <Text style={styles.cardOptionTitle}>
                      {modalContent.allIn.title}
                    </Text>
                    <Text style={styles.cardOptionText}>{modalContent.allIn.text}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cardOption}
                    onPress={() => setAllInLand("land")}
                  >
                    <Image
                      source={{ uri: modalContent.land.image }}
                      style={styles.optionImage}
                    />
                    <Text style={styles.cardOptionTitle}>
                      {modalContent.land.title}
                    </Text>
                    <Text style={styles.cardOptionText}>{modalContent.land.text}</Text>
                  </TouchableOpacity>
                </>
              )}

              {activeModal === "fixed" && (
                <>
                  <TouchableOpacity
                    style={styles.cardOption}
                    onPress={() => setFixedCustom("fixed")}
                  >
                    <Image
                      source={{ uri: modalContent.fixed.image }}
                      style={styles.optionImage}
                    />
                    <Text style={styles.cardOptionTitle}>
                      {modalContent.fixed.title}
                    </Text>
                    <Text style={styles.cardOptionText}>{modalContent.fixed.text}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cardOption}
                    onPress={() => setFixedCustom("custom")}
                  >
                    <Image
                      source={{ uri: modalContent.custom.image }}
                      style={styles.optionImage}
                    />
                    <Text style={styles.cardOptionTitle}>
                      {modalContent.custom.title}
                    </Text>
                    <Text style={styles.cardOptionText}>{modalContent.custom.text}</Text>
                  </TouchableOpacity>
                </>
              )}

              {activeModal === "solo" && (
                <>
                  <TouchableOpacity
                    style={styles.cardOption}
                    onPress={() => setSoloGrouped("solo")}
                  >
                    <Image
                      source={{ uri: modalContent.solo.image }}
                      style={styles.optionImage}
                    />
                    <Text style={styles.cardOptionTitle}>
                      {modalContent.solo.title}
                    </Text>
                    <Text style={styles.cardOptionText}>{modalContent.solo.text}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cardOption}
                    onPress={() => setSoloGrouped("group")}
                  >
                    <Image
                      source={{ uri: modalContent.group.image }}
                      style={styles.optionImage}
                    />
                    <Text style={styles.cardOptionTitle}>
                      {modalContent.group.title}
                    </Text>
                    <Text style={styles.cardOptionText}>{modalContent.group.text}</Text>
                  </TouchableOpacity>
                </>
              )}

              {activeModal === "travelers" && (
                <View style={styles.modalBox}>
                  <View style={styles.travelerRow}>
                    <View>
                      <Text style={styles.travelerLabel}>Adult</Text>
                      <Text style={styles.travelerSub}>
                        Age 18 years and above
                      </Text>
                    </View>
                    <View style={styles.counter}>
                      <TouchableOpacity
                        style={styles.counterButton}
                        onPress={() => adjustTraveler("adult", -1)}
                      >
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.counterValue}>{travelers.adult}</Text>
                      <TouchableOpacity
                        style={styles.counterButton}
                        onPress={() => adjustTraveler("adult", 1)}
                      >
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.travelerRow}>
                    <View>
                      <Text style={styles.travelerLabel}>Child</Text>
                      <Text style={styles.travelerSub}>Age 2-17 years old</Text>
                    </View>
                    <View style={styles.counter}>
                      <TouchableOpacity
                        style={styles.counterButton}
                        onPress={() => adjustTraveler("child", -1)}
                      >
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.counterValue}>{travelers.child}</Text>
                      <TouchableOpacity
                        style={styles.counterButton}
                        onPress={() => adjustTraveler("child", 1)}
                      >
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.travelerRow}>
                    <View>
                      <Text style={styles.travelerLabel}>Infant</Text>
                      <Text style={styles.travelerSub}>Age 0-23 months</Text>
                    </View>
                    <View style={styles.counter}>
                      <TouchableOpacity
                        style={styles.counterButton}
                        onPress={() => adjustTraveler("infant", -1)}
                      >
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.counterValue}>{travelers.infant}</Text>
                      <TouchableOpacity
                        style={styles.counterButton}
                        onPress={() => adjustTraveler("infant", 1)}
                      >
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.travelerRow}>
                    <View>
                      <Text style={styles.travelerLabel}>Senior/PWD</Text>
                      <Text style={styles.travelerSub}>Age 60+ or with ID</Text>
                    </View>
                    <View style={styles.counter}>
                      <TouchableOpacity
                        style={styles.counterButton}
                        onPress={() => adjustTraveler("senior", -1)}
                      >
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.counterValue}>{travelers.senior}</Text>
                      <TouchableOpacity
                        style={styles.counterButton}
                        onPress={() => adjustTraveler("senior", 1)}
                      >
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}

              {activeModal === "customize" && (
                <>
                  <View style={styles.selectRow}>
                    <Text style={styles.modalParagraph}>Select your Airlines...</Text>
                    <Text style={styles.modalParagraph}>{airline}</Text>
                  </View>
                  <View style={styles.selectRow}>
                    <Text style={styles.modalParagraph}>Select your Hotel...</Text>
                    <Text style={styles.modalParagraph}>{hotel}</Text>
                  </View>
                </>
              )}

              {activeModal === "addons" && (
                <>
                  <View style={styles.modalBox}>
                    <Text style={styles.modalSubTitle}>Flight Add-ons</Text>
                    {ADDON_OPTIONS.map((option) => (
                      <TouchableOpacity
                        key={option.id}
                        style={styles.checkboxRow}
                        onPress={() => toggleItem(addons, setAddons, option.id)}
                      >
                        <View style={styles.checkbox}>
                          {addons.includes(option.id) && (
                            <View style={styles.checkboxFill} />
                          )}
                        </View>
                        <Text style={styles.checkboxLabel}>{option.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View style={[styles.modalBox, { marginTop: 12 }]}
                  >
                    <Text style={styles.modalSubTitle}>Optional Tours</Text>
                    {TOUR_OPTIONS.map((option) => (
                      <TouchableOpacity
                        key={option.id}
                        style={styles.checkboxRow}
                        onPress={() => toggleItem(tours, setTours, option.id)}
                      >
                        <View style={styles.checkbox}>
                          {tours.includes(option.id) && (
                            <View style={styles.checkboxFill} />
                          )}
                        </View>
                        <Text style={styles.checkboxLabel}>{option.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </>
              )}

              {activeModal === "summary" && (
                <View style={styles.modalBox}>
                  <Text style={styles.summaryText}>Package: {pkg.title}</Text>
                  <Text style={styles.summaryText}>
                    Date: {pkg.isInternational ? "Jan. 21" : selectedDate}
                  </Text>
                  <Text style={styles.summaryText}>
                    All in or Land: {allInLand === "all-in" ? "All in" : "Land"}
                  </Text>
                  <Text style={styles.summaryText}>
                    Fixed or Custom: {fixedCustom === "fixed" ? "Fixed" : "Custom"}
                  </Text>
                  <Text style={styles.summaryText}>
                    Solo or Grouped: {soloGrouped === "solo" ? "Solo" : "Grouped"}
                  </Text>
                  <Text style={styles.summaryText}>
                    Travelers: {totalTravelers}
                  </Text>
                  <Text style={styles.summaryText}>Airlines: {airline}</Text>
                  <Text style={styles.summaryText}>Hotel: {hotel}</Text>
                  <Text style={styles.summaryText}>
                    Flight Add-ons: {addons.length} selected
                  </Text>
                  <Text style={styles.summaryText}>
                    Optional Tours: {tours.length} selected
                  </Text>
                  <Text style={styles.summaryWarning}>
                    MUST READ! Please double check everything before confirming.
                  </Text>
                </View>
              )}

              {activeModal === "approval" && (
                <View style={styles.approvalCard}>
                  <View style={styles.approvalIcon}>
                    <Ionicons name="checkmark" size={28} color="#fff" />
                  </View>
                  <Text style={styles.approvalText}>Booking for Approval</Text>
                </View>
              )}
            </View>

            {activeModal !== "approval" && (
              <View style={styles.modalButtonRow}>
                <TouchableOpacity style={styles.primaryButton} onPress={nextModal}>
                  <Text style={styles.primaryText}>Proceed</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dangerButton} onPress={prevModal}>
                  <Text style={styles.primaryText}>Back</Text>
                </TouchableOpacity>
              </View>
            )}

            {activeModal === "approval" && (
              <View style={styles.modalButtonRow}>
                <TouchableOpacity style={styles.primaryButton} onPress={closeModal}>
                  <Text style={styles.primaryText}>Done</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  )
}