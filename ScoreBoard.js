import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, Alert, Dimensions } from 'react-native';
var w = Dimensions.get("screen").width
const ScoreBoard = () => {
    const [leaderboardData, setLeaderboardData] = useState(
        [
            { "id": 1, "name": "Michael Welsh", "score": 150120, "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
            { "id": 2, "name": "Annie Thomas", "score": 149110, "image": "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg" },
            { "id": 3, "name": "Marie Nua", "score": 148950, "image": "https://static.vecteezy.com/system/resources/previews/009/887/693/non_2x/male-man-african-american-black-diversity-person-afro-hair-ethnic-happy-smile-model-close-up-face-enjoyment-hashion-lifestyle-professional-human-father-boy-business-education-young-adult-teenage-photo.jpg" },
            { "id": 4, "name": "Elanor Pera", "score": 139120, "image": "https://cdn.vectorstock.com/i/1000v/87/50/man-male-young-person-icon-vector-10458750.jpg" },
            { "id": 5, "name": "Michael Welsh", "score": 150120, "image": "https://static.vecteezy.com/system/resources/previews/009/887/693/non_2x/male-man-african-american-black-diversity-person-afro-hair-ethnic-happy-smile-model-close-up-face-enjoyment-hashion-lifestyle-professional-human-father-boy-business-education-young-adult-teenage-photo.jpg" },
            { "id": 6, "name": "Annie Thomas", "score": 149110, "image": "https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg" },
            { "id": 7, "name": "Marie Nua", "score": 148950, "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" },
            { "id": 8, "name": "Elanor Pera", "score": 139120, "image": "https://cdn.vectorstock.com/i/1000v/87/50/man-male-young-person-icon-vector-10458750.jpg" },

        ]

    );
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // fetchLeaderboardData();
    }, []);

    const fetchLeaderboardData = async () => {
        try {
            // Replace with your actual API endpoint
            const response = await fetch('https://api.example.com/leaderboard');
            if (!response.ok) {
                throw new Error('Failed to fetch leaderboard data');
            }
            const data = await response.json();
            setLeaderboardData(data);
        } catch (error) {
            Alert.alert('Error', error.message);
        } finally {
            setLoading(false);
        }
    };

    const renderTopThree = () => (
        <View style={styles.topThreeContainer}>
            {/* {leaderboardData.slice(0, 3).map((item, index) => ( */}
            <View key={leaderboardData[1].id} style={[styles.topThreeItem, { width: w / 3.7 }]}>
                <Image source={{ uri: leaderboardData[1].image }} style={styles.profileImage} />
                <Text style={{ fontSize: 12, color: '#000' }}>{leaderboardData[1].name}</Text>
                <View style={styles.rankBadge}>
                    <Text style={styles.rankText}>{2}</Text>
                </View>
            </View>
            <View key={leaderboardData[0].id} style={[styles.topThreeItem, { width: w / 3.4 }]}>
                <Image source={{ uri: leaderboardData[0].image }} style={{
                    width: 65,
                    height: 65,
                    borderRadius: 40,
                    marginVertical: 14
                }} />
                <Text style={{ fontSize: 12, color: '#000' }}>{leaderboardData[0].name}</Text>
                <View style={styles.rankBadge}>
                    <Text style={styles.rankText}>{1}</Text>
                </View>
            </View>
            <View key={leaderboardData[2].id} style={[styles.topThreeItem, { width: w / 3.7 }]}>
                <Image source={{ uri: leaderboardData[2].image }} style={styles.profileImage} />
                <Text style={{ fontSize: 12, color: '#000' }}>{leaderboardData[2].name}</Text>
                <View style={styles.rankBadge}>
                    <Text style={styles.rankText}>{3}</Text>
                </View>
            </View>
        </View >
    );

    const renderItem = ({ item, index }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.rank}>{index + 4}</Text>
            <Image source={{ uri: item.image }} style={styles.smallProfileImage} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.score}>{item.score.toLocaleString()}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Leaderboard</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#007BFF" />
            ) : (
                <>
                    {renderTopThree()}
                    <FlatList
                        style={{
                            backgroundColor: '#fff', paddingTop: 20
                        }}
                        data={leaderboardData.slice(3)}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007BFF',
        paddingTop: 10
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#fff',
    },
    topThreeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#007BFF',
        paddingVertical: 20
    },
    topThreeItem: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation:4
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 35,
        marginVertical: 8,
    },
    rankBadge: {
        backgroundColor: 'blue',
        borderRadius: 20,
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: -10,
        marginVertical: 10
    },
    rankText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    rank: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
        color: '#555',
    },
    smallProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    score: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF',
    },
});

export default ScoreBoard;