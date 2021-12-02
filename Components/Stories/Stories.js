import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native';



function Stories() {
    return (

        <View style={styles.storiesContainer} >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                <View style={styles.stories} >

                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../../Images/st1.jpg')}
                        />
                    </View>
                    <View style={{ marginTop: 3 }} ><Text style={{ fontSize: 13 }} >Tayyab</Text></View>

                </View>

                {/* Pic 2 */}

                <View style={styles.stories} >

                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../../Images/st3.jpg')}
                        />
                    </View>
                    <View style={{ marginTop: 5 }} ><Text style={{ fontSize: 13 }} >Tayyab</Text></View>

                </View>

                {/* Pic 3 */}

                <View style={styles.stories} >

                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../../Images/st2.jpg')}
                        />
                    </View>
                    <View style={{ marginTop: 5 }} ><Text style={{ fontSize: 13 }} >Tayyab</Text></View>

                </View>


                {/* Pic 1 */}

                <View style={styles.stories} >

                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../../Images/st3.jpg')}
                        />
                    </View>
                    <View style={{ marginTop: 5 }} ><Text style={{ fontSize: 13 }} >Tayyab</Text></View>

                </View>


                {/* Pic 3 */}

                <View style={styles.stories} >

                    <View style={styles.picturesContainer} >
                        <Image
                            style={styles.storiesPic}
                            source={require('../../Images/st1.jpg')}
                        />
                    </View>
                    <View style={{ marginTop: 5 }} ><Text style={{ fontSize: 13 }} >Tayyab</Text></View>

                </View>


            </ScrollView>

        </View >
    )
}




const styles = StyleSheet.create({

    storiesContainer: {
        flex: 0.14,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: .6,
        borderBottomColor: "lightgrey",
        paddingBottom: 7


    },

    picturesContainer: {
        width: 67,
        height: 67,
        borderRadius: 50,
        marginLeft: 8,
        borderColor: 'blue',
        borderWidth: 2,
        justifyContent: "center",
        alignItems: 'center',
        marginHorizontal: 10


    },

    storiesPic: {
        width: 61,
        height: 61,
        borderRadius: 50,

    },
    stories: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }


});



export default Stories
