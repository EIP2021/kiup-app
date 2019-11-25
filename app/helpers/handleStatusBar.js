import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';
import { withNavigationFocus } from 'react-navigation';

const handleStatusBar = (
  statusBarStyle,
  backgroundColor,
  withHeader = true
) => {
  return Component => {
    const Handler = ({ isFocused, ...props }) => {
      useEffect(() => {
        if (isFocused) {
          StatusBar.setBarStyle(statusBarStyle, true);
          if (Platform.OS === 'android') {
            if (backgroundColor === 'transparent') {
              StatusBar.setTranslucent(true);
            }
            StatusBar.setBackgroundColor(backgroundColor);
          }
        }
        return () => {
          if (Platform.OS === 'android' && backgroundColor === 'transparent') {
            StatusBar.setTranslucent(false);
          }
        };
      }, [isFocused]);
      return <Component {...props} />;
    };

    Handler.navigationOptions = {
      headerStyle: {
        backgroundColor,
        shadowOpacity: 0,
        elevation: 0,
        height: withHeader ? moderateScale(45) : 0,
        borderBottomWidth: withHeader ? moderateScale(1) : 0,
      },
    };

    Handler.propTypes = {
      isFocused: PropTypes.bool,
    };

    Handler.defaultProps = {
      isFocused: false,
    };
    return withNavigationFocus(Handler);
  };
};

export default handleStatusBar;
