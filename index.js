import { AppRegistry } from 'react-native';
import AppRoot from './app/index';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => AppRoot);
