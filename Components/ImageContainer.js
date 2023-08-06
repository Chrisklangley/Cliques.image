import React, { useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Video,
  Alert,
  TouchableHighlight,
  Modal,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ImageContainer = ({ gallery, setGallery }) => {
  const [selectedMedia, setSelectedMedia] = useState({ uri: null, type: null });
  const [toggleEdit, setToggleEdit] = useState(true);
  const [toggleModal, setToggleModal] = useState(false);
  const navigation = useNavigation();
  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedMedia({ uri: result.uri, type: result.type });
      setGallery((prevGallery) => [...prevGallery, result.uri]);
      setToggleEdit(!toggleEdit);
    }
  };

  const editHandler = ({}) => {
    Alert.alert(
      "Image Settings",
      "Would you like to edit or remove this image?",
      [
        {
          text: "Edit",
          onPress: () => {
            // Implement your edit logic here
            navigation.navigate("imageView");
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
          onPress: () => {},
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
      <Modal
        control={toggleModal}
        visible={toggleModal}
        style={styles.modalContainer}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity
            onPress={() => {
              this.setState({ visibleModal: false });
            }}
          >
            <Ionicons
              style={styles.backBtn}
              name="return-up-back-outline"
              size={40}
              color="black"
            />
          </TouchableOpacity>
          <Image
            source={{ uri: selectedMedia.uri }}
            style={styles.mediaInModal}
          />
          {/* Add your delete and edit options here */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mediaContainer: {
    width: 100,
    height: 100,
    backgroundColor: "lightgray",
    borderRadius: 20,
    overflow: "hidden",
  },
  media: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  mediaInModal: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  plusButton: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 0,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    opacity: 1,
  },
  modalContent: {
    // width: "80%",
    padding: 20,
    backgroundColor: "#F3E6FE",
    borderRadius: 10,
    alignItems: "center",
    opacity: 0.98,
  },
  backBtn: {
    position: "absolute",
    marginTop: 90,
    right: 10,
  },
});

export default ImageContainer;
