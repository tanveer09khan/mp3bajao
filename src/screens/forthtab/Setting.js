import React from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import {
    List, Switch, Card, Headline,
} from 'react-native-paper';


import * as themeActions from "../../_redux/actions/theamction";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
const Setting = ({ navigation }) => {
    const dispatch = useDispatch();
    const themeReducer = useSelector(({ themeReducer }) => themeReducer);
    return (
           <ScrollView>
        <View style={{ flex: 1 }}>

            {/* <List.Item
                title="Help"
                // description="Item description"
                left={props => <List.Icon {...props} icon="color-helper" />}
            /> */}


            <Headline style={{ marginLeft: 23, marginBottom: 10 ,fontSize:20,marginTop:30}}>Account</Headline>

            <Card style={{ marginVertical: 2 }}>
                <List.Item
                 onPress={() => {
                    navigation.navigate(
                        'MyAccount'
                    )
                }}
                    title ="My Account"
                    left={() => <Icon name="shield-checkmark-outline" size={25} style={{ marginRight: 30, color:"grey",padding:10}} />}
                />
            </Card>
            <Card style={{ marginVertical: 2 ,marginBottom: 20 }}>
                <List.Item
                    title="Create New Account"
                    left={() => <Icon name="person-circle" size={25} style={{ marginRight: 30, color:"grey",padding:10}} />}
                />
            </Card>

            <Card style={{ marginVertical: 2 }}>
                <List.Item
                    title="Help"
                    left={() => <Icon name="help-circle-outline" size={25} style={{ marginRight: 30, color:"grey",padding:10}} />}
                />
            </Card>

            <Card style={{ marginVertical: 2 }}>
                <List.Item
                    title="Rate On Play Store"
                    left={() => <Icon name="star" size={25} style={{ marginRight: 30, color:"grey",padding:10}}/>}
                />
            </Card>


            <Card style={{ marginVertical: 2 , marginBottom: 10}}>
                <List.Item
                    title="About"
                    left={() => <Icon name="information-circle-outline"  size={25} style={{ marginRight: 30, color:"grey",padding:10}}  />}
                />
            </Card>

            <Card style={{ marginVertical: 2 }}>
                <List.Item
                    title="Enable Dark Mode"
                    left={() => <Icon name="star" size={25} style={{ marginRight: 30, color:"grey",padding:10}} />}
                    right={() => <Switch
                        value={themeReducer.theme}
                        onValueChange={(val) => dispatch(themeActions.ToggleTheme(val))}
                    />}
                />
            </Card>


            <Card style={{ marginVertical: 2 }}>
                <List.Item
                    onPress={() => { 
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Login' }],
                        })
                    }}
                    title="Logout"
                    left={() => <Icon name="exit-outline" size={25} style={{ marginRight: 30, color:"grey",padding:10}}/>}
                />
            </Card>

        </View>
        </ScrollView>
    )
}
export default Setting;

// function mapStateToProps(){
//   return null
// }

// export default connect(mapStateToProps,themeActions)(Setting);