import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export const icons = {
    index: (props) => <AntDesign name = "home" size={26} color = 'grey' {...props}/>,
    grading: (props) => <Ionicons name="school-outline" size={26} color="grey" {...props}/>,
    notify: (props) => <Ionicons name="notifications-outline" size={26} color="grey" {...props}/>,
    user: (props) => <Feather name="user" size={24} color="grey" {...props}/>,
  }