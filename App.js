import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';


// Instead of doing the const, use the App
function App() {

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;