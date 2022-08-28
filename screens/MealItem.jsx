import { StyleSheet, Text, View } from "react-native";

export const MealItem = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
