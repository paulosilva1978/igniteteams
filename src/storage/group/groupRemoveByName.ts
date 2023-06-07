import AsyncStorage from "@react-native-async-storage/async-storage";

import { groupsGetAll } from "./groupsGetAll";
import { GROUP_COLLETION, PLAYER_COLLETION } from "@storage/storageConfig";

export async function groupRemoveByName(groupDeleted: string){
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter(group => group !== groupDeleted);

    await AsyncStorage.setItem(GROUP_COLLETION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLETION}-${groupDeleted}`);

  } catch (error) {
    console.log(error);
    throw error;
  }
}
