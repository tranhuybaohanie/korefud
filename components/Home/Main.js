
import SecondScreen from 'SecondScreen'


let routeConfigs = {
    Home: SecondScreen
}

let tabNavigatorConfigs={
    tabBarPosition:'bottom',
    animationEnabled:true,
    swipeEnabled:true
}

export default TabNavigator(routeConfigs,tabNavigatorConfigs);