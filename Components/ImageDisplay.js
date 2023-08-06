import React, { useState } from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import ImageContainer from "./ImageContainer";
import ProfileImg from "./ProfileImg";

const ImageDisplay = () => {
  const [gallery, setGallery] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Media</Text>
      <View style={styles.galleryContainer}>
        <View style={styles.firstImageWrapper}>
          <ProfileImg gallery={gallery} setGallery={setGallery} />
        </View>
        <View style={styles.imageWrapper}>
          <ImageContainer gallery={gallery} setGallery={setGallery} />
        </View>
        <View style={styles.imageWrapper}>
          <ImageContainer gallery={gallery} setGallery={setGallery} />
        </View>
        <View style={styles.imageWrapper}>
          <ImageContainer gallery={gallery} setGallery={setGallery} />
        </View>
        <View style={styles.imageWrapper}>
          <ImageContainer gallery={gallery} setGallery={setGallery} />
        </View>
        <View style={styles.imageWrapper}>
          <ImageContainer gallery={gallery} setGallery={setGallery} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  galleryContainer: {
    backgroundColor: "#F3E6FE",
    height: 600,
    width: 380,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "blue",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 30,
    flexWrap: "wrap",
  },
  headingText: {
    alignSelf: "flex-start",
    marginLeft: 40,
    fontSize: 30,
  },
  imageWrapper: {
    width: "33.33%",
    paddingHorizontal: 5,
    marginBottom: 10,
    height: 100,
  },
  firstImageWrapper: {
    width: "82%",
    paddingHorizontal: 5,
    marginBottom: 20,
    height: 100,
    // backgroundColor: "red",
    marginTop: 90,
    marginRight: 70,
  },
});

export default ImageDisplay;
