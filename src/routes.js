import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import color from '~/styles/colors';

import Index from '~/pages/Index';
import Share from '~/pages/Index/Share';

import Notification from '~/pages/Notification';
import NotificationConfig from '~/pages/Notification/Config';

import Payment from '~/pages/Payment';

import Wallet from '~/pages/Wallet';
import MoneyAdd from '~/pages/Wallet/Add&Remove/Add';
import MoneyRemove from '~/pages/Wallet/Add&Remove/Remove';
import AddCard from '~/pages/Wallet/CodePromotional';
import CodePromotional from '~/pages/Wallet/AddCard';

import Config from '~/pages/Config';
import Profile from '~/pages/Config/Profile';

import SplashScreen from '~/components/splashScreen';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Splash: createSwitchNavigator({
          SplashScreen,
        }),
        SubPages: createSwitchNavigator({
          Profile,
          Share,
          NotificationConfig,
          MoneyAdd,
          MoneyRemove,
          AddCard,
          CodePromotional,
        }),
        App: createBottomTabNavigator(
          {
            Index,
            Wallet,
            Payment,
            Notification,
            Config,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: color.activeIcon,
              inactiveTintColor: color.inativeIcon,
              style: {
                backgroundColor: color.tabBarColor,
                borderTopWidth: 1,
                borderTopColor: color.border,
              },
            },
          },
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Splash',
      },
    ),
  );
