import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

function DisplayCount({ count }) {
  return (
    <View>
      <Text>Số: {count}</Text>
    </View>
  );
}

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DisplayCount count={count} />
      <Button title="Click" onPress={handleClick} />
    </View>
  );
}
