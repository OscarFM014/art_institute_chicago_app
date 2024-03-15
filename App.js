import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/amplifyconfiguration.json';
import { withAuthenticator } from 'aws-amplify-react-native';

// Move here works the form
Amplify.configure(awsconfig);

// Instead of doing the const, use the App
function App() {

  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);