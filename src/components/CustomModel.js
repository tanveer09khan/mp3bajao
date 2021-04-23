import React, { Component } from 'react'
import { Text, View, Modal, SafeAreaView } from 'react-native'


export class Custompopup extends Component {
  state = {
    modalVisible: false,
    value: 0,
  };
  render() {
    return (
      <Modal
        animationType={this.props.animationType || 'slide'}
        transparent={true}
        onRequestClose={() => this.props.hideModel()}
        visible={this.props.modalVisible}>
        {this.props.children}
      </Modal>
    );
  }
}
