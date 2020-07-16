import React, {Component} from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TextInput, 
        TouchableOpacity, StatusBar, ScrollView}
        from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

export default class PLN extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nominal: ''
    }
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor='#4C2B86' />
        <View style={style.fill}>
          <View style={style.accent2}>
            <View style={style.header}>
              <Text style={style.headerTitle}>Listrik Prabayar</Text>
              <TextInput style={style.nominalInput} placeholder='Nomor Pelanggan PLN' />
            </View>
            <View style={style.nominal}>
              <Text style={style.headerTitle}>Pilih Nominal</Text>
              <View style={style.nominalWrapper}>
                <TouchableOpacity 
                  style={style.nominalBtn}
                  onPress={() => {this.setState({nominal: '100000'})}}
                >
                  <Text style={style.nominalBtnText}>Rp 100.000</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={style.nominalBtn}
                  onPress={() => {this.setState({nominal: '200000'})}}
                >
                  <Text style={style.nominalBtnText}>Rp 200.000</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={style.nominalBtn}
                  onPress={() => {this.setState({nominal: '500000'})}}
                >
                  <Text style={style.nominalBtnText}>Rp 500.000</Text>
                </TouchableOpacity>
              </View>
              <TextInput 
                placeholder='Ketik Nominal'
                style={style.nominalInput} 
                value={this.state.nominal}
              />
            </View>
            <View style={style.btnTopUpWrapper}>
              <TouchableOpacity style={style.btnTopUp}>
                <Text style={style.btnTopUpText}>TOP UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const style = StyleSheet.create({
  fill: {
    flex: 1,
    position: 'relative',
  },
  accent1: {
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    zIndex: 0,
  },
  accent2: {
    alignItems: "center",
    width: 200,
    height: 80,
    width: deviceWidth,
    height: deviceHeight,
    position: 'absolute',
    zIndex: 1,
  },
  header: {
    width: deviceWidth,
    height: 150,
    backgroundColor: 'white',
    padding: 25
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 2
  },
  headerSubWrapper: {
    width: deviceWidth-50,
    height: 80,
    marginTop: 10,
    borderWidth: 3,
    borderColor: '#F1F1F1',
    borderRadius: 10,
    padding: 10
  },
  subWrapperTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2
  },
  nominal: {
    marginTop: 15,
    width: deviceWidth,
    height: 200,
    backgroundColor: 'white',
    padding: 25
  },
  nominalWrapper: {
    flexDirection: 'row',
    marginTop: 10
  },
  nominalBtn: {
    width: 110,
    height: 45,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5
  },
  nominalBtnText: {
    fontWeight: 'bold'
  },
  nominalInput: {
    width: deviceWidth-50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#F4F4F4',
    padding: 10,
    marginTop: 10,
    fontWeight: 'bold'
  },
  btnTopUpWrapper: {
    marginTop: 150,
    alignItems: "center",
    marginBottom: 150
  },
  btnTopUp: {
    width: deviceWidth-50,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#01B0B7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTopUpText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 2
  }
});