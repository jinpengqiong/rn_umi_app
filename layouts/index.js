import React, {useLayoutEffect} from 'react';
import {BackButton, connect, Redirect} from 'umi';

function Layout({children, hasSignedIn, route, navigation}) {
  useLayoutEffect(() => {
    if (route.name === '/login' || route.name === '/') {
      console.log('route', route)
      navigation.setOptions({headerShown: false});
    } else {
      navigation.setOptions({headerShown: true});
    }
  }, [navigation, route.name]);

  return (
    <BackButton>
      {hasSignedIn || route.name === '/login' ? (
        children
      ) : (
        <Redirect to="/login" push />
      )}
    </BackButton>
  );
}

export default connect(({user: {hasSignedIn}}) => ({
  hasSignedIn,
}))(Layout);
