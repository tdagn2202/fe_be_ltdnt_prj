import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
export default function MyTabBar({ state, descriptors, navigation }) {
  
  const icons = {
    index: (props) => <AntDesign name = "home" size={26} color = 'grey' {...props}/>,
    grading: (props) => <Ionicons name="school-outline" size={26} color="grey" {...props}/>,
    notify: (props) => <Ionicons name="notifications-outline" size={26} color="grey" {...props}/>,
    user: (props) => <Feather name="user" size={24} color="grey" {...props}/>,

  }

  const primaryColor = '#12469a'
  
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        // console.log(route.name)
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarItems}
          >
            {
              icons[route.name]({
                color: isFocused ? '#12469A' : 'grey'
              })
            }
            <Text style={{ color: isFocused ? primaryColor : 'grey' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
  
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 15,
    marginHorizontal: 20,
    borderRadius: 50,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  tabbarItems: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  }
});
