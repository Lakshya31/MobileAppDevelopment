import { Text, Button, View, Image, Linking } from 'react-native';
import React from 'react';

const AlbumDetail = (props) => {
    const { album } = props;
    const { title, artist, url, image, thumbnail_image } = album;

    return (
        <View style={{ margin: 10, borderWidth: 2, borderColor: "teal", backgroundColor:"skyblue", borderRadius:10 }}>
            <View style={{flexDirection:"row", borderBottomWidth:1}}>
                <Image source={{ uri: thumbnail_image }} style={{ width: 60, height: 60, borderWidth: 1, borderColor: "black", margin:5 }} />
                <View style={{margin:5}}>
                    <Text style={{ fontSize: 15, fontFamily: "Arial", margin: 5 }}>
                        Title: {title}
                    </Text>
                    <Text style={{ fontSize: 15, fontFamily: "Arial", margin: 5 }}>
                        Artist: {artist}
                    </Text>
                </View>
            </View>
            <View style={{alignItems:"center", margin:2}}>
                <Image source={{ uri: image }} style={{width:"100%", height: 400, borderWidth: 1, borderColor: "black" }} />
            </View>
            <View style={{paddingLeft:100, paddingRight:100, marginTop:10, marginBottom:10}}>
                <Button title="Buy This Album!" onPress={() => { Linking.openURL(url) }} />
            </View>
        </View>
    )
}

export default AlbumDetail;