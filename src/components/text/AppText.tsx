import * as React from 'react';
import {Text, useTheme} from 'react-native-paper';

type IProps = React.ComponentProps<typeof Text> & {
  boldOrLight?: 'normal' | 'bold' | 'light';
};

const AppText: React.FC<IProps> = props => {
  const theme = useTheme();
  const {boldOrLight} = props;
  let font = theme.fonts.regular;

  if (boldOrLight && boldOrLight === 'bold') {
    font = theme.fonts.bold;
  } else if (boldOrLight && boldOrLight === 'light') {
    font = theme.fonts.light;
  }

  const propsWithTheme = {
    ...props,
    style: [
      props.style,
      {
        fontFamily: 'regular',
        fontWeight: '300'
      },
    ],
    theme,
  };
  return <Text {...propsWithTheme} />;
};

export default AppText;
