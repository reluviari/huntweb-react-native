import React from 'react';
import {Text} from 'react-native';
import {WebView} from 'react-native-webview';

// const Product = props => <Text>{this.props.navigation}</Text>;

const Product = ({navigation}) => (
  <WebView source={{uri: navigation.state.params.product.url}} />
);

Product.navegationOptions = ({navigation}) => ({
  // title: navigation.state.params.product.title,
  title: 'Props navigation não funcinou :(',
});

export default Product;
