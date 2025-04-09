import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

const EventItem = ({ id, name, description, qr_code }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("Event", {
          eventId: id,
          name,
          description,
          qr_code,
        })
       }
    >
      <Text>{name}</Text>
      <Text>{description}</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: qr_code }}
      ></Image>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#0f172a",
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
  },
});
export default EventItem;
