import { Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const AppStyles = {

    primaryThemeColor: 'tomato',
    primaryBackgroundColor: '#202020',
    lightFontStyles: { fontFamily: 'Airbnb-Cereal' },
    calculateFontSizeByPlatform: (size) => responsiveFontSize(size - (Platform.OS === 'ios' ? 0.4 : 0.5))
};

export default AppStyles;