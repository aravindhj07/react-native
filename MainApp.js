import React, {Component} from 'react';
import {Text, Dimensions, Image, View, TouchableOpacity} from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { store, persistor } from '../platform/redux/store/store';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';

import AuthLoadingScreen from './screens/auth/AuthLoadingScreen';

import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import ForgotPassword from './screens/auth/ForgotPassword';

import Notification from './screens/user/global/Notification';
import Settings from './screens/user/global/Settings';

import Profile from './screens/user/profile/Profile';
import InviteAndFollow from './screens/obj/socialmedia/InviteAndFollow';
import ProfileEdit from './screens/user/profile/ProfileEdit';
import ProfileView from './screens/user/profile/ProfileView';
import ChangePassword from './screens/user/global/ChangePassword';
import BlockedUserList from './screens/user/global/BlockedUserList';

import CreateRecommendation from './screens/obj/recommendations/CreateRecommendation';

// import NewTrip from './screens/obj/trip/CreateTrip';
import NewTrip from './screens/obj/trip/NewTrip';
import TripView from './screens/obj/trip/TripView';
import EditTrip from './screens/obj/trip/EditTrip';
import AddActivity from './screens/obj/activity/AddActivity';
import EditActivity from './screens/obj/activity/EditActivity';

import BookmarkList from './screens/user/global/BookmarkList';
import BookmarkDetails from './screens/user/global/BookmarkDetails';
import Explore from './screens/user/global/Explore';
import RecommendedTripographers from './screens/user/global/RecommendedTripographers';
import TripList from './screens/obj/trip/TripList';
import Dashboard from './screens/user/global/Dashboard';

import AddTripActivity from './screens/obj/activity/AddTripActivity';
import Comment from './screens/user/global/Comment';


import FooterMenu from './component/footer/FooterMenu';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReportProblem from './screens/user/global/reportProblem';
import Feedback from './screens/user/global/Feedback';
import EditEmail from './screens/user/global/EditEmail';
import EditBirthday from './screens/user/global/EditBirthday';
import Config from './config/Config';
import FollowingFollowerList from './screens/user/profile/FollowingFollowerList';
export default class TripographersApp extends Component {

    constructor(props: Object) {
        super(props);
        let {height, width} = Dimensions.get('window');
        this.state = {
            height: height,
            width: width,
        };
    };

    render() {
        let headerHeight = 80; // 60
        let headerStyle = {
            height: headerHeight,
            elevation: 0,
            borderBottomWidth: 0.9,
            borderColor: '#e0e2e1',
            backgroundColor: '#FFF',
        };
        let headerTitleStyle = {
            textAlign: 'center', alignSelf: 'center',
        };

        const AuthStack = createStackNavigator({
            SignUp: {
                screen: ({navigation}) => <SignUp navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerStyle: headerStyle,
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            SignIn: {
                screen: ({navigation}) => <SignIn navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerStyle: headerStyle,
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            ForgotPassword: {
                screen: ({navigation}) => <ForgotPassword navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerStyle: headerStyle,
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            headerLayoutPreset: 'center',
        },{
            initialRouteName: 'SignIn',
        });


        const AppTabs = createBottomTabNavigator({
            Dashboard: {
                screen: ({navigation}) => <Dashboard navigation={navigation}/>,
            },
            TripList: {
                screen: ({navigation}) => <TripList navigation={navigation}/>,
            },
            Explore: {
                screen: ({navigation}) => <Explore navigation={navigation}/>,
            },
            BookmarkList: {
                screen: ({navigation}) => <BookmarkList navigation={navigation}/>,
            },
        }, {
            tabBarComponent : ({navigation}) => <FooterMenu navigation={navigation}/>,
            initialRouteName: 'Dashboard',
        });

        const AppStack = createStackNavigator({
            Comment: {
                screen: ({navigation}) => <Comment navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            AddTripActivity: {
                screen: ({navigation}) => <AddTripActivity navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            BookmarkDetails: {
                screen: ({navigation}) => <BookmarkDetails navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            CreateRecommendation: {
                screen: ({navigation}) => <CreateRecommendation navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            Notification: {
                screen: ({navigation}) => <Notification navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerStyle: headerStyle,
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            Settings: {
                screen: ({navigation}) => <Settings navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerStyle: headerStyle,
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            Profile: {
                screen: ({navigation}) => <Profile navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerStyle: headerStyle,
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            InviteAndFollow: {
                screen: ({navigation}) => <InviteAndFollow navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerStyle: headerStyle,
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            ProfileEdit: {
                screen: ({navigation}) => <ProfileEdit navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerStyle: headerStyle,
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            ProfileView: {
                screen: ({navigation}) => <ProfileView navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerStyle: headerStyle,
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            ChangePassword: {
                screen: ({navigation}) => <ChangePassword navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            BlockedUserList: {
                screen: ({navigation}) => <BlockedUserList navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            TripView: {
                screen: ({navigation}) => <TripView navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerStyle: headerStyle,
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            CreateTrip: {
                screen: ({navigation}) => <NewTrip navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            EditTrip: {
                screen: ({navigation}) => <EditTrip navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            AddActivity: {
                screen: ({navigation}) => <AddActivity navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false
                }),
            },
            EditActivity: {
                screen: ({navigation}) => <EditActivity navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            Feedback: {
                screen: ({navigation}) => <Feedback navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            ReportProblem: {
                screen: ({navigation}) => <ReportProblem navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            EditEmail: {
                screen: ({navigation}) => <EditEmail navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            EditBirthday: {
                screen: ({navigation}) => <EditBirthday navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            FollowingFollowerList: {
                screen: ({navigation}) => <FollowingFollowerList navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            RecommendedTripographers: {
                screen: ({navigation}) => <RecommendedTripographers navigation={navigation}/>,
                navigationOptions: ({navigation}) => ({
                    headerShown: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                        transitionSpec: {
                            duration: 0,
                            timing: 0,
                        },
                    })
                }),
            },
            headerLayoutPreset: 'center',
        },{
            initialRouteName: 'InviteAndFollow',
        },);

        const TripographersAppContainer = createAppContainer(createSwitchNavigator(
            {
                AuthLoading: AuthLoadingScreen,
                App: createSwitchNavigator({
                    tab : AppTabs,
                    stack : AppStack,
                },{
                    initialRouteName: 'tab',
                }),
                Auth: AuthStack,
            },
            {
                initialRouteName: 'AuthLoading',
            },
        ));

        return (
            <Provider store={store}>
                <PersistGate
                    loading={null}
                    persistor={persistor}
                >
                    {/* <ReportProblem/> */}
                    <TripographersAppContainer/>
                </PersistGate>
            </Provider>

        );
    }
}
