import { TabNavigator, TabBarBottom } from 'react-navigation';

// ## View Imports ##
import PeopleView from '../views/PeopleView';
import FollowingView from '../views/Following';
import InboxView from '../views/Inbox';
import MyProfile from '../views/MyProfile';
import LoginView from '../views/Login';
import WelcomeView from '../views/Welcome';
//import PeopleView from '../views/PeopleList';

const TabNavigatorConfig = {
  tabBarOptions: {
    tintColor: 'black',
    activeTintColor: '#219412',
    inactiveTintColor: '#000000',
    style: {
      backgroundColor: 'white',
    },
    scrollEnabled: true,
    tabBarComponent: TabBarBottom,
    showIcon: true,
    labelStyle: {
      fontSize: 11,
      paddingBottom: 2,
    },
  },
};

export default TabNavigator(
  {
    Welcome: { screen: WelcomeView },
    //People:{ screen: PeopleView}
    Login: { screen: LoginView },

    Search: { screen: PeopleView },
    Following: { screen: FollowingView },
    Inbox: { screen: InboxView },
    MyProfile: { screen: MyProfile },
    // ## End TabNavigator Views ##
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      tintColor: 'black',
      activeTintColor: '#219412',
      inactiveTintColor: '#000000',
      style: {
        backgroundColor: 'white',
      },
      showIcon: true,
      labelStyle: {
        fontSize: 11,
        paddingBottom: 2,
      },
    },
  },
  TabNavigatorConfig,
);
