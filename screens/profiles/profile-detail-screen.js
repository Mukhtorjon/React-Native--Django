import { useRoute } from "@react-navigation/native"
import { useNavigation } from "expo-router"
import { useLayoutEffect } from "react"
import{ View, Text, StyleSheet } from "react-native"
import { HeaderBackButton } from "@react-navigation/elements"

const ProfileDetailScreen = () =>{
    const route = useRoute()
    const navigation = useNavigation()
    const {profileId} =route.params

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft: ()=>(
                <HeaderBackButton
                    tintColor="white"
                    onPress={()=> navigation.goBack()}/>

            )
        })
    })
    
    return(
        <View style={styles.screen}>
            <Text style={{fontSize:20}}>Tis is the Event detail Screen  {eventId}</Text>
            <Text style={{fontSize:20}}>{first_name}  {last_name}</Text>
            <Text style={{fontSize:20}}>{email}</Text>
            
        </View>
    )
}

const styles= StyleSheet.create({
    screen:{
        padding:20,
    }
})
export default ProfileDetailScreen;