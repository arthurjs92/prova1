import { FlatList, Text, View } from "react-native";
import {numberFormat} from '../services/numberFormat'

export const Cart = ({ items, getTotalPrice }) => {
  const total = getTotalPrice();

  const Total = ({ total }) => (
    <View style={{ borderTopWidth: 0.5, margin: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "space-between",
          marginTop: 5,
          padding: -5
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Total</Text>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          {numberFormat(total)}
        </Text>
      </View>
    </View>
  );
  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 20 }}>
        {item.product.name} x {item.qty}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        {numberFormat(item.product.price * item.qty)}
      </Text>
    </View>
  );
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      ListFooterComponent={() => <Total total={total} />}
    />
  );
};
