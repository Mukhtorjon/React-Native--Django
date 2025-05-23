import { Ionicons } from "@expo/vector-icons"
import { Text } from "react-native"


export const navOptions = (nav) =>{
    return{
        headerTintColor: 'white',
        headerTitleAlign: 'center', 

        headerStyle: {
           backgroundColor: '#323749',
        },
        headerRight: ()=> (
            <Ionicons
                name = "menu"
                size={32}
                color="white"
                onPress={()=> nav.toggleDrawer()}/>
        ),
        headerLeft:()=>(
            <Text style={{color:"white", fontSize:20, paddingLeft:5}}>Logo</Text>
        )
    }
}