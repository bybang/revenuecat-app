import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

// We get all of the screens, and put which screen we're on(home)
export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  title: string;
  screen: any;
  color: string;
  icon?: any;
  vertical?: boolean;
  requiresPro?: boolean;
};

const ActionRow = ({
  title,
  screen,
  color,
  icon,
  vertical,
  requiresPro,
}: Props) => {
  // Then pass navigationProp here
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={{ backgroundColor: color }}
      className={`flex flex-1 items-center justify-center py-6 rounded-lg space-x-2 m-2 ${
        vertical ? "flex-col" : "flex-row"
      }`}
    >
      <Ionicons name={icon} size={30} color="white" />
      <Text className="text-white text-lg font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
