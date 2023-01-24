import {StyleSheet, Dimensions} from 'react-native';

let fontSize = 14;
let container_padding = 20;
let border_radius = 10;
let margin_top = '8%';
let textColor = '#1B1B1B';
let backgroundColor = '#FFFFFF';
let fontFamilyRegular = 'Montserrat-Regular';
let fontFamilyMedium = 'Montserrat-Medium';

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH - container_padding * 2;

export default StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: container_padding,
    marginTop: margin_top,
    justifyContent: 'center',
  },
  elements: {
    flex: 1,
    marginTop: margin_top,
    justifyContent: 'center',
  },
  setFlex1: {
    flex: 1,
  },
  setFlex2: {
    flex: 2,
  },
  setFlex3: {
    flex: 3,
  },
  setFlex4: {
    flex: 4,
  },
  setFlex5: {
    flex: 5,
  },
  align: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRegular: {
    color: textColor,
    fontFamily: fontFamilyRegular,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMedium: {
    color: textColor,
    fontFamily: fontFamilyMedium,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1B1B1B',
    fontFamily: fontFamilyRegular,
    backgroundColor: textColor,
    paddingHorizontal: '5%',
    height: 45,
    borderRadius: 10,
  },
  buttonAnother: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#1B1B1B',
    fontFamily: fontFamilyRegular,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: '5%',
    height: 45,
    borderRadius: 4,
  },
  shadow: {
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  buttonText: {
    color: backgroundColor,
    fontFamily: fontFamilyRegular,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextAnother: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#1B1B1B',
    fontFamily: fontFamilyRegular,
  },
  input: {
    alignSelf: 'stretch',
    color: '#1B1B1B',
    fontSize: 16,
    marginVertical: 10,
    padding: 2,
    borderBottomColor: textColor,
    borderBottomWidth: 1,
  },
  dropdownBoxStyles: {
    alignSelf: 'stretch',
    borderColor: 'transparent',
    marginVertical: 10,
    borderBottomColor: textColor,
    borderBottomWidth: 1,
    borderRadius: 0,
  },
  dropdownTextStyles: {
    fontSize: fontSize,
    color: '#1B1B1B',
    fontFamily: fontFamilyRegular,
    borderColor: 'transparent',
  },
  dropdownInputStyles: {
    fontSize: fontSize,
    color: 'gray',
    fontFamily: fontFamilyRegular,
  },
  box: {
    width: CARD_WIDTH,
    height: 175,
    borderRadius: border_radius,
    color: '#C5C5C5',
    fontFamily: fontFamilyRegular,
    borderWidth: 0.5,
    borderColor: '#C5C5C5',
    borderStyle: 'solid',
  },
});
