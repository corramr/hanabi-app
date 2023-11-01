import React from 'react';
import { View, StyleSheet } from 'react-native';
import Row from '../components/card_row';
import PlayerGame from '../components/player_game';
import catImage from '../../assets/pics/cat.jpeg';

const player_hand = [
    { color: 'red', number: 5 },
    { color: 'blue', number: 2 },
    { color: 'green', number: 1 },
    { color: 'orange', number: 2 },
    { color: 'green', number: 3 },

];

const profile = {
    name: 'paolo',
    pic: catImage,
};

const token = 4;


const Game = () => {
    return (
        <View style={styles.game_container}>
            <View style={styles.top_container}>
                <View style={styles.menubar} />
                <View style={styles.move_container}>

                </View>
            </View>

            <View style={styles.center_container}>
                <View style={styles.top_opponent_container}>
                    <View style={styles.top_opponent}>
                        <PlayerGame player_hand={player_hand} profile={profile} token={token}></PlayerGame>
                    </View>
                </View>
                <View style={styles.base_opponent_container}>
                    <View style={styles.base_opponent}>
                        <PlayerGame player_hand={player_hand} profile={profile} token={token}></PlayerGame>
                    </View>
                    <View style={styles.base_opponent}>
                        <PlayerGame player_hand={player_hand} profile={profile} token={token}></PlayerGame>
                    </View>
                </View>
            </View>

            <View style={styles.bottom_container}>
                <View style={styles.bottom_container_top}>
                    <View style={styles.discard_container}>
                        <Row numbers={[1, 2, 3, 4, 5]} color='green'></Row>
                        <Row numbers={[1, 2, 3, 4, 5]} color='red'></Row>
                        <Row numbers={[1, 2, 3, 4, 5]} color='blue'></Row>
                        <Row numbers={[1, 2, 3, 4, 5]} color='orange'></Row>
                        <Row numbers={[1, 2, 3, 4, 5]} color='purple'></Row>
                    </View>
                    <View style={styles.field_container}>
                        <Row numbers={[1, 2, 3, 4, 5]} color='green'></Row>
                        <Row numbers={[1, 2, 3, 4, 5]} color='red'></Row>
                        <Row numbers={[1, 2, 3, 4, 5]} color='blue'></Row>
                        <Row numbers={[1, 2, 3, 4, 5]} color='orange'></Row>
                        <Row numbers={[1, 2, 3, 4, 5]} color='purple'></Row>
                    </View>
                </View>
                <View style={styles.bottom_container_bottom}>
                    <View style={styles.my_player_container}>
                        <PlayerGame player_hand={player_hand} profile={profile} token={token}></PlayerGame>
                    </View>
                </View>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({

    game_container: {
        padding: 0,
        margin: 0,
    },




    menubar: {
        backgroundColor: 'gray',
        width: '100%',
        height: 30,
        marginBottom: 10, // Add marginBottom property here

    },

    move_container: {
        width: '100%',
        height: 60,
        backgroundColor: 'green',
    },





    top_opponent_container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: 'red',

    },

    top_opponent: {

    },

    base_opponent_container: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 4,
        paddingRight: 4,
        marginTop: 10,
        backgroundColor: 'red',
    },

    base_opponent: {

    },




    bottom_container: {
        flexDirection: 'column',
        backgroundColor: 'orange',
        height: 300,
        marginTop: 10,
    },

    bottom_container_top: {
        flexDirection: 'row',
        backgroundColor: 'blue',
    },

    bottom_container_bottom: {
        backgroundColor: 'green',
    },

    discard_container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },

    field_container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },

    my_player_container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
    },


});

export default Game;
