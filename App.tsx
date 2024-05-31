import { NavigationContainer } from '@react-navigation/native'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Details from './pages/Details'
import Category from './pages/Category'
import Platform from './pages/Platform'
import CategoryDetails from './pages/CategoryDetails'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const AuthStack = createNativeStackNavigator()
const AppStack = createBottomTabNavigator()
const Nav = createNativeStackNavigator()

function NavAll() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Category" component={Category} />
      <AppStack.Screen name="Platform" component={Platform} />
    </AppStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen name="Navbar" component={NavAll} options={{ headerShown: false }} />
        <Nav.Screen name="Details" component={Details} />
        <Nav.Screen name="CategoryDetails" component={CategoryDetails} />
      </Nav.Navigator>
    </NavigationContainer>
  )
}
