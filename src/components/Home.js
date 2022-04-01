import React from 'react';
import { Responsive, WidthProvider } from "react-grid-layout";

import * as Config from "@/utils/Config";
import { H6, Button } from '@blueprintjs/core';

import { connect } from 'react-redux';

import Maps from "@/components/Grid/Maps";
import Menu from "@/components/Widget/Menu";
import Table from "@/components/Widget/Table";

const ResponsiveGridLayout = WidthProvider(Responsive);

import * as GeneralActions from "@/redux/actions/GeneralActions"

class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      dataset: null
    };
  }

  render() {
    return (
      <React.Fragment>
      <div className="container-row bp3-dark">
          <div className="layer1"><Maps/></div>
          <div className="layer2">
              <ResponsiveGridLayout
                onWidthChange={() => {}}
                onBreakpointChange={() => {}}
                containerPadding={[20, 20]}
                {...Config.RGL_PROPS}>
                  <div key="menu"><Menu/></div>
                  {/* <div key="data"><Table/></div> */}
              </ResponsiveGridLayout>
          </div>
      </div>
  </React.Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {
    generalReducer: state.GeneralReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    toggleNewsSelected: () => {
      dispatch(GeneralActions.toggleNewsSelected())
    }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
