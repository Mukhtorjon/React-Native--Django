import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Text } from "react-native";


const EventItem =({id, first_name, last_name, email})=>{
    const navigation = useNavigation()
    return(
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Event", {eventId: id, first_name, last_name, email})}>
            <Text>{first_name}</Text>
            <Text>{last_name}</Text>
            <Text>{email}</Text>

        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    card:{
        borderWidth: 1,
        borderColor: '#0f172a',
        borderRadius: 10,
        marginVertical: 5,
        padding: 10
    }
});
export default EventItem;