import React from "react";
import { Icon, Tab, Tabs } from "@blueprintjs/core";
import News from "@/components/Widget/News";
import Tools from "@/components/Widget/Tools";
import Layers from "@/components/Widget/Layers";
import Info from "@/components/Widget/Info";
import Search from "@/components/Widget/Search";
// import * as GeneralActions from "@/redux/actions/GeneralActions";

import { connect } from "react-redux";

class Menu extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    return (
      <React.Fragment>
        <Tabs
            animate={true}
            id="TabsExample"
            key={"horizontal"}
            renderActiveTabPanelOnly={false}
        >
          <Tab id="xg" title={<Icon icon="globe-network" />} panel={<div><News /></div>} />
          <Tab id="layers" title={<Icon icon="layers" />} panel={<div><Layers/></div>} />
          {/* <Tab id="tools" title={<Icon icon="wrench" />} panel={<div><Tools/></div>} /> */}
          <Tab id="search" title={<Icon icon="search" />} panel={<div><Search/></div>} />
          <Tab id="information" title={<Icon icon="info-sign" />} panel={<div style={{overflow: "hidden"}}><Info/></div>} />

          <Tab id="settings" title={<Icon icon="cog" />} panel={<div>Settings</div>} />
            {/* {
              (() => {
                if (this.props.GeneralReducer["newsSelectedFlag"] !== undefined &&
                this.props.GeneralReducer["newsSelectedFlag"]) {
                  return (
                    <React.Fragment>
                      <Tab id="layers" title={<Icon icon="layers" />} panel={<div>React</div>} />
                      <Tab id="Tools" title={<Icon icon="wrench" />} panel={<div><Tools/></div>} />
                      <Tab id="filter" title={<Icon icon="filter"/>} panel={<div>Angular</div>} />
                      <Tab id="settings" title={<Icon icon="cog"/>} panel={<div>Menu</div>} />
                    </React.Fragment>
                  );
                } else {
                  return (
                    <React.Fragment>
                      <Tab id="layers" title={<Icon icon="layers" />} panel={<div>Layers</div>} />
                      <Tab id="Tools" title={<Icon icon="wrench" />} panel={<div>Tools</div>} />
                      <Tab id="filter" title={<Icon icon="filter" />} panel={<div>Filter</div>} />
                      <Tab id="settings" title={<Icon icon="cog" />} panel={<div>Settings</div>} />
                    </React.Fragment>)
                }
              })()
            } */}

        </Tabs>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    GeneralReducer: state.GeneralReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    dispatchPayload: (args) => {
      dispatch(args);
    },
    // toggleNewsSelected: () => {
    //   dispatch(GeneralActions.toggleNewsSelected())
    // }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
