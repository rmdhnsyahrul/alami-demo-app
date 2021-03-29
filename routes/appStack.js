import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/home'
import Account from '../screens/account'
import Camera from '../screens/camera'

const screens = {
    Home: Home,
    Account: Account,
    Camera: Camera,
}

const AppStack = createStackNavigator(screens, {
    initialRouteName: 'Home',
    headerMode: 'none'
})

export default createAppContainer(AppStack);