import { TouchableOpacity, View, Image, Text, SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ct({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.chuaanh}>
        <Image 
          source={{ uri: "https://vn1.vdrive.vn/maruishi-cycle.vn/2023/10/Xe-dap-tre-em-Nishiki-Angel-18-inches-2.png" }} 
          style={styles.image}
        />
      </View>
      <Text style={styles.text1}>Pina Mountain</Text>
      <Text>15% OFF 1350$     499$</Text>
      <Text style={{
        marginBottom:10,
        marginTop:10,
        fontWeight:'bold',
      }}>Description</Text>
      <Text>My school allows 4th and 5th grade students to ride their bicycles to school. Therefore, my parents bought me a bicycle so I could go to school and hang out with friends.</Text>
      
      <View style={styles.chuanut}>
        <TouchableOpacity style={styles.iconHeart}>
          <Icon name="heart" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.but}>
          <Text style={{ color: 'white' }} onPress={() => navigation.navigate('BD')}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text1: {
    marginTop:10,
    marginBottom:10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  chuaanh: {
    backgroundColor: "#FFA24C",
    width: 350,
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  but: {
    color: '#FEF9F2',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 30,
    backgroundColor: 'red',
  },
  image: {
    width: 200,
    height: 200,
  },
  chuanut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconHeart: {
    marginRight: 10,
  },
});
