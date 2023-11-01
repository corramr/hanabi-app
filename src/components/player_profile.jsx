import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const PlayerProfile = ({ profile }) => {
    return (
        <View style={styles.profile_container}>
            <View style={styles.profile_pic}>
                <Image source={profile.pic} style={{ width: 50, height: 50, borderRadius: 50 }} />
            </View>
            <View style={styles.profile_name}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{profile.name}</Text>
            </View>
            <View style={styles.profile_status}>
                <Text style={{ fontSize: 20 }}>{profile.status}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    profile_container: {
        flexDirection: 'row',
        alignItems: 'center',

        padding: 15,
        borderTopWidth: 1,
        borderTopColor: 'black',
        position: 'relative,'
    },

    profile_pic: {
        marginRight: 20,
    },

    profile_name: {

    },

    profile_status: {
        position: 'absolute',
        right: 35,
        borderWidth: 1,
        borderColor: 'red',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 7,
        paddingBottom: 7,
        borderRadius: 50,
    },


})

export default PlayerProfile