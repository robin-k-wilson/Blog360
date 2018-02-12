import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  asset,
  Pano,
  View,
  Animated,
  Text
} from 'react-vr';

import {
  _Text,
  GrayPanel,
  BlogPost,
  LeftIcon
} from './_common';

import Middle2 from './Middle2.js';
import Left2 from './Left2.js';
import Right2 from './Right2.js';
import HomeButton2 from './HomeButton2.js';

import {
  loadHomeThunk,
} from './store';

import stylesheet from './content/stylesheet.js';

class Home2 extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cur_pano: {},
  //     //hideSlide: new Animated.Value(1),
  //     hide: props.hide
  //   };
  //   console.log(props);
  // }

  componentDidMount() {
    this.props.fetchHome();
  }

  // handleHide() {
  //   if (!this.state.hide) { // visible > hidden
  //     this.setState({ hide: true });
  //     Animated.timing(
  //       this.state.hideSlide,
  //       {
  //         toValue: 0,
  //         duration: 1000,
  //       }
  //     ).start();
  //   } else { // hidden > visible
  //     this.setState({ hide: false });
  //     Animated.timing(
  //       this.state.hideSlide,
  //       {
  //         toValue: 1,
  //         duration: 1000,
  //       }
  //     ).start();
  //   }
  // }

  render() {
    const { cur_pano, hide } = this.props;
    return (
      <View>
        {
          cur_pano && cur_pano.pano_img && <Pano
            source={asset(cur_pano.pano_img)}
            style={{
              transform: [{ rotateY: cur_pano.rotateY }]
            }}
          />
        }
        <Animated.View>
          <Left2 />
          <Middle2 />
          <Right2 />
          <HomeButton2 />
        </Animated.View>
      </View>
    );
  }
}

const mapState = (state) => {
  return {
    cur_pano: state.page.cur_pano_info,
    hide: state.hide.hide,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchHome: () => dispatch(loadHomeThunk()),
  }
}


export default connect(mapState, mapDispatch)(Home2);