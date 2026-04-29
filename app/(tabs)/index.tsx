import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />

      {/* HERO SECTION */}
      <View style={styles.hero}>
        <Text style={styles.title}>Welcome to my trading bot👋</Text>
        <Text style={styles.subtitle}>
          Money Making Machine
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* FEATURES */}
      <View style={styles.features}>
        <Text style={styles.sectionTitle}>Features</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>⚡ Fast Performance</Text>
          <Text style={styles.cardText}>
            Optimized layout for smooth and seamless mobile experience.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>🎨 Modern UI</Text>
          <Text style={styles.cardText}>
            Clean design with better spacing and structure.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>📱 Mobile Ready</Text>
          <Text style={styles.cardText}>
            Fully responsive design for all screen sizes.
          </Text>
        </View>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Built by Moses Grant
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B1220",
    padding: 20,
  },

  hero: {
    marginTop: 60,
    marginBottom: 40,
    alignItems: "center",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
  },

  subtitle: {
    fontSize: 16,
    color: "#AAB3C5",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#4F46E5",
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  features: {
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#111A2E",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },

  cardText: {
    color: "#AAB3C5",
    marginTop: 5,
  },

  footer: {
    marginTop: 40,
    alignItems: "center",
    paddingBottom: 20,
  },

  footerText: {
    color: "#6B7280",
    fontSize: 12,
  },
});