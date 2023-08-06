import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Video,
  Alert,
  TouchableHighlight,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

const ProfileImg = ({ gallery, setGallery }) => {
  const [selectedMedia, setSelectedMedia] = useState({ uri: null, type: null });
  const [toggleEdit, setToggleEdit] = useState(true);

  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedMedia({ uri: result.uri, type: result.type });
      setGallery((prevGallery) => [...prevGallery, result.uri]); // Add the new image to the gallery
      setToggleEdit(!toggleEdit);
    }
  };

  const editHandler = () => {
    Alert.alert(
      "Image Settings",
      "Would you like to edit or remove this image?",
      [
        {
          text: "Edit",
          onPress: () => {
            // Implement your edit logic here
          },
        },
        {
          text: "Remove",
          onPress: () => {
            // Implement your delete logic here
          },
        },
        {
          text: "Cancel",
          onPress: () => {
            setToggleEdit(!toggleEdit);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mediaContainer}>
        {selectedMedia.type === "video" ? (
          <TouchableHighlight>
            <Video source={{ uri: selectedMedia.uri }} style={styles.media} />
          </TouchableHighlight>
        ) : (
          <TouchableHighlight onPressIn={() => setToggleEdit(!toggleEdit)}>
            <Image source={{ uri: selectedMedia.uri }} style={styles.media} />
          </TouchableHighlight>
        )}
        {!selectedMedia.uri && (
          <TouchableOpacity style={styles.plusButton} onPress={pickMedia}>
            <Ionicons name="ios-add" size={30} color="white" />
          </TouchableOpacity>
        )}
        {toggleEdit && selectedMedia.uri && (
          <TouchableOpacity style={styles.plusButton} onPress={editHandler}>
            <Ionicons name="ios-options-outline" size={30} color="white" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mediaContainer: {
    width: 320,
    height: 150,
    backgroundColor: "lightgray",
    borderRadius: 20,
    overflow: "hidden",
    marginRight: 70,
  },
  media: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  plusButton: {
    position: "absolute",
    width: "37",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 0,
  },
});

export default ProfileImg;
