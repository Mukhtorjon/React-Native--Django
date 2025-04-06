import { Text, View,FlatList, RefreshControl } from "react-native";
import { DUMMY_DATA} from "../../data/dummy";
import  EventItem  from "./event_items";
const EventList = ()=>{
        const renderItem = ({item})=>{
            return <EventItem id={item.id} first_name={item.first_name} last_name={item.last_name} email={item.email}/>
        }
    return(
        <View>
            <FlatList   
            data={DUMMY_DATA}
            keyExtractor={item=> item.id}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl 
                refreshing={false}
                onRefresh={()=>console.log('Refreshing...')}/>
            }
            
            />
        </View>
    );
}

export default EventList;