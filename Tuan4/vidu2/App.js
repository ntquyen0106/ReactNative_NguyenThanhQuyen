import React, { useState } from 'react';
import { View, Button, Text, FlatList } from 'react-native';

export default function RandomArray() {
  const taoDaySo = () => Math.floor(Math.random() * 10);
  const [array, setArray] = useState([
    [taoDaySo(), taoDaySo(), taoDaySo()],
  ]);

  const handleClick = () => {
    const lastArray = array[array.length - 1];
    const newArray = [...lastArray.slice(-2), taoDaySo()];
    setArray([...array, newArray]);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={array}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            {item.map((num, index) => (
              <Text key={index} style={{ marginHorizontal: 10 }}>
                {num}
              </Text>
            ))}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Click" onPress={handleClick} />
    </View>
  );
}
