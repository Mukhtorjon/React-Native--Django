import{ View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EventList from "@/components/events/event_list";

const HomeScreen = ({navigation}) =>{
    
    return(
        <View style={styles.screen}>
            <EventList/>
        </View>
    )
}

const styles= StyleSheet.create({
    screen:{
        padding:20,
    }
})
export default HomeScreen;