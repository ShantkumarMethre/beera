import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

const Data = require('./Data.json');
const { title, value, image } = Data[i];
for(i=0;i<title.length;i++)
const AlbumDetails = ({ album } ) => {
    const { title, artist,image} = album;
    
    return (
        <View style={{width:100,height:100,backgroundColor:"red"}}>
        <Image
                      source={{ uri: image }} 
                    />
                       <Text>{title}</Text>
        </View>

    );
};

export default AlbumDetails;