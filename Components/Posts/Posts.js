import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native';
import { Ionicons, Feather, AntDesign, Entypo, EvilIcons, FontAwesome } from '@expo/vector-icons';


function Posts() {
    return (
        <View>
            <View style={styles.postsContainer} >

                <View style={styles.postHeader} >
                    <View style={styles.lsHeader} >
                        <View style={styles.avatarConatiner} >
                            <Image
                                style={{ height: 35, width: 35, borderRadius: 50 }}
                                source={require('../../Images/st3.jpg')}
                            />
                        </View>
                        <Text style={{ fontWeight: 'bold', marginLeft: 8, fontSize: 15 }} >TayyabNadeem</Text>
                    </View>

                    <View style={{ marginHorizontal: 15 }} >
                        <Entypo
                            name='dots-three-vertical'
                            size={20}

                        />
                    </View>

                </View>



                <View style={styles.postPictureDiv} >
                    <Image
                        style={{ height: "100%", width: "100%" }}
                        source={require('../../Images/st1.jpg')}
                    />
                </View>



                <View style={styles.postFooter}  >
                    {/* post Comments */}

                    <View style={styles.lsFooter} >
                        <AntDesign
                            name='hearto'
                            size={25}
                            style={{ marginHorizontal: 5 }}

                        />
                        <EvilIcons
                            name='comment'
                            size={35}
                            style={{ marginHorizontal: 5 }}


                        />
                        <Ionicons
                            name='paper-plane-outline'
                            size={25}
                            style={{ marginHorizontal: 5 }}


                        />


                    </View>

                    <View>
                        <FontAwesome
                            name='bookmark-o'
                            size={25}


                        />
                    </View>
                </View>


            </View>


            <View style={styles.postsContainer} >

                <View style={styles.postHeader} >
                    <View style={styles.lsHeader} >
                        <View style={styles.avatarConatiner} >
                            <Image
                                style={{ height: 35, width: 35, borderRadius: 50 }}
                                source={require('../../Images/st1.jpg')}
                            />
                        </View>
                        <Text style={{ fontWeight: 'bold', marginLeft: 8, fontSize: 15 }} >TayyabNadeem</Text>
                    </View>

                    <View style={{ marginHorizontal: 15 }} >
                        <Entypo
                            name='dots-three-vertical'
                            size={20}

                        />
                    </View>

                </View>



                <View style={styles.postPictureDiv} >
                    <Image
                        style={{ height: "100%", width: "100%" }}
                        source={require('../../Images/st2.jpg')}
                    />
                </View>



                <View style={styles.postFooter}  >
                    {/* post Comments */}

                    <View style={styles.lsFooter} >
                        <AntDesign
                            name='hearto'
                            size={25}
                            style={{ marginHorizontal: 5 }}

                        />
                        <EvilIcons
                            name='comment'
                            size={35}
                            style={{ marginHorizontal: 5 }}


                        />
                        <Ionicons
                            name='paper-plane-outline'
                            size={25}
                            style={{ marginHorizontal: 5 }}


                        />


                    </View>

                    <View>
                        <FontAwesome
                            name='bookmark-o'
                            size={25}


                        />
                    </View>
                </View>


            </View>
            <View style={styles.postsContainer} >

                <View style={styles.postHeader} >
                    <View style={styles.lsHeader} >
                        <View style={styles.avatarConatiner} >
                            <Image
                                style={{ height: 35, width: 35, borderRadius: 50 }}
                                source={require('../../Images/st2.jpg')}
                            />
                        </View>
                        <Text style={{ fontWeight: 'bold', marginLeft: 8, fontSize: 15 }} >TayyabNadeem</Text>
                    </View>

                    <View style={{ marginHorizontal: 15 }} >
                        <Entypo
                            name='dots-three-vertical'
                            size={20}

                        />
                    </View>

                </View>



                <View style={styles.postPictureDiv} >
                    <Image
                        style={{ height: "100%", width: "100%" }}
                        source={require('../../Images/st1.jpg')}
                    />
                </View>



                <View style={styles.postFooter}  >
                    {/* post Comments */}

                    <View style={styles.lsFooter} >
                        <AntDesign
                            name='hearto'
                            size={25}
                            style={{ marginHorizontal: 5 }}

                        />
                        <EvilIcons
                            name='comment'
                            size={35}
                            style={{ marginHorizontal: 5 }}


                        />
                        <Ionicons
                            name='paper-plane-outline'
                            size={25}
                            style={{ marginHorizontal: 5 }}


                        />


                    </View>

                    <View>
                        <FontAwesome
                            name='bookmark-o'
                            size={25}


                        />
                    </View>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postsContainer: {
        height: 555,
        // backgroundColor: "red",
    },

    postHeader: {
        height: "10%",
        // backgroundColor: "brown",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    lsHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarConatiner: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'white',
        marginLeft: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
        borderWidth: 1,


    },



    postPictureDiv: {
        height: "80%",
        backgroundColor: "green"
    },


    lsFooter: {
        display: 'flex',
        flexDirection: 'row',
    },



    postFooter: {
        height: "10%",
        // backgroundColor: "purple",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10
    }




});

export default Posts
