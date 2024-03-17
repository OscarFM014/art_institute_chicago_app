import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/amplifyconfiguration.json';

// Move here works the form
Amplify.configure(awsconfig);

// Instead of doing the const, use the App
function App() {

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;