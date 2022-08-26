import React, {useLayoutEffect} from 'react';
import {BackButton, connect, Redirect} from 'umi';

function Layout({children, hasSignedIn, route, navigation}) {
  useLayoutEffect(() => {
    if (route.name === '/login' || route.name === '/' || route.name === '/help') {
      navigation.setOptions({ headerShown: false });
    } else {
      navigation.setOptions({ headerShown: true });
    }
  }, [navigation, route.name]);

  return <BackButton>{hasSignedIn || route.name === '/login' || route.name === '/register' ? children : <Redirect to="/login" push />}</BackButton>;
}

export default connect(({user: {hasSignedIn}}) => ({
  hasSignedIn,
}))(Layout);
