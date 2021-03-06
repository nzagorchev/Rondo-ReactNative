import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Divider, ThemeContext} from 'react-native-elements';
import {Leanplum} from '@leanplum/react-native-sdk';
import {withNavigation, NavigationScreenProp} from 'react-navigation';
import {AppsStorage, LeanplumAppConfig} from 'utils';

const SessionComponent = ({
  navigation,
}: {
  navigation: NavigationScreenProp<any, any>;
}) => {
  const {theme} = useContext(ThemeContext);
  const [deviceId, setDeviceId] = useState('');
  const [userId, setUserId] = useState('');

  const [app, setApp] = useState<LeanplumAppConfig>();

  useEffect(() => {
    async function getSession() {
      const userIdValue = await Leanplum.userId();
      const deviceIdValue = await Leanplum.deviceId();
      setUserId(userIdValue);
      setDeviceId(deviceIdValue);
      const app = await AppsStorage.currentApp();
      setApp(app);
    }
    navigation.addListener('didFocus', () => {
      getSession();
    });
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{color: theme?.colors?.primary}}>
          Application Settings
        </Text>
        <View style={styles.propertyView}>
          <Text style={styles.label}>App Name: </Text>
          <Text style={styles.value}>{app?.name}</Text>
        </View>
        <View style={styles.propertyView}>
          <Text style={styles.label}>App Id: </Text>
          <Text style={styles.appValue}>{app?.appId}</Text>
        </View>
        <View style={styles.propertyView}>
          <Text style={styles.label}>Dev Key: </Text>
          <Text style={styles.appValue}>{app?.developmentKey}</Text>
        </View>
        <View style={styles.propertyView}>
          <Text style={styles.label}>Prod Key: </Text>
          <Text style={styles.appValue}>{app?.productionKey}</Text>
        </View>
      </View>
      <View style={styles.userView}>
        <Text style={{color: theme?.colors?.primary}}>
          User and Device Settings
        </Text>
        <View style={styles.propertyView}>
          <Text style={styles.label}>UserId: </Text>
          <Text style={styles.value}>{userId}</Text>
        </View>
        <View style={styles.propertyView}>
          <Text style={styles.label}>DeviceId: </Text>
          <Text style={styles.value}>{deviceId}</Text>
        </View>
      </View>
    </View>
  );
};

export const Session = withNavigation(SessionComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  propertyView: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontSize: 14,
    color: 'gray',
  },
  appValue: {
    fontSize: 11,
    color: 'gray',
  },
  button: {
    marginTop: 10,
  },
  userView: {
    marginTop: 10,
  },
});
