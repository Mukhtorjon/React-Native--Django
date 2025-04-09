import { Text, View, FlatList, RefreshControl } from "react-native";
// import { DUMMY_DATA} from "../../data/dummy";
import EventItem from "./event_items";
const EventList = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <EventItem
        id={item.id}
        name={item.name}
        description={item.description}
        qr_code={item.qr_code}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => console.log("Refreshing...")}
          />
        }
      />
    </View>
  );
};

export default EventList;
