import { View, Text, StyleSheet, Button } from "react-native";
import EventList from "@/components/events/event_list";
import { useCallback, useEffect, useState } from "react";

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch("http://192.168.19.14:8000/api/events/");
      if (!response.ok) {
        throw new console.error("HTTP error! status: ${response.ststus}");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <View style={styles.screen}>
      <EventList data={data} />
    </View>
  );
};


const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
export default HomeScreen;
