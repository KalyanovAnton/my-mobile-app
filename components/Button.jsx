import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Button({ text }) {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textBtn}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 48,
    backgroundColor: "#523308",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 24,
  },

  textBtn: {
    color: "#FFFFFF",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 15,
  },
});
