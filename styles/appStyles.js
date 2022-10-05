import {StyleSheet} from 'react-native';

const COLORS = {primary: '#1F145C', white: '#FFF'};

export default StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textTodo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.primary,
  },

  listItem: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: COLORS.white,
    elevation: 4,
    shadowColor: 'gray',
    shadowOpacity: 90,
    borderRadius: 6,
    marginVertical: 10,
  },

  listItemFlex: {
    flex: 1,
  },

  textItem: {
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.primary,
  },

  actionItem: {
    height: 25,
    width: 25,
    backgroundColor: '#010101',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
  },

  textChecklist: {
    color: COLORS.white,
  },

  textDeleteList: {
    backgroundColor: 'red',
    color: 'white',
    padding: 3,
    borderRadius: 4,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    color: COLORS.white,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  inputContainer: {
    backgroundColor: COLORS.white,
    elevation: 40,
    flex: 1,
    height: 50,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
  },

  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    elevation: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textIconPlus: {
    color: 'white',
    fontSize: 20,
  },
});
