import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as HomeActions from '../redux/actions/HomeActions';
import { bindActionCreators } from 'redux';

import * as AppActions from '../redux/actions/AppActions';

import {
  View
} from 'amazeui-touch';

import { Buy, Sell, Lease, Rent, Recruit, Apply} from '../components'

class HomeTypeContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.clickss = this.clickss.bind(this);
  // }

  componentWillMount() {
    const { appActions } = this.props;
    appActions.hideTabbar(true);
    appActions.hideNavLeft(false);
    appActions.setNavBackLink('/');
  }

  renderComponent = () => {
    const { appActions, homeActions} = this.props;
    const { type } = this.props.params;
    switch (type) {
      case 'buy':
        const { buys } = this.props;
        return (
          <Buy buys={buys} homeActions={homeActions} appActions={appActions}/>
        );
        break;
      case 'sell':
        const { sells } = this.props;
        return (
          <Sell sells={sells} homeActions={homeActions} appActions={appActions}/>
        );
        break;
      case 'lease':
        const { leases } = this.props;
        return (
          <Lease leases={leases} homeActions={homeActions} appActions={appActions}/>
        );
        break;
      case 'rent':
        const { rents } = this.props;
        return (
          <Rent rents={rents} homeActions={homeActions} appActions={appActions}/>
        );
        break;
      case 'recruit':
        const { recruits } = this.props;
        return (
          <Recruit recruits={recruits} homeActions={homeActions} appActions={appActions}/>
        );
        break;
      case 'apply':
        const { applys } = this.props;
        return (
          <Apply applys={applys} homeActions={homeActions} appActions={appActions}/>
        );
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <View>
        {this.renderComponent()}
      </View>
    );
  }
}

HomeTypeContainer.propTypes = {
  buys: PropTypes.object.isRequired,
  sells: PropTypes.object.isRequired,
  leases: PropTypes.object.isRequired,
  rents: PropTypes.object.isRequired,
  recruits: PropTypes.object.isRequired,
  applys: PropTypes.object.isRequired,

  homeActions: PropTypes.object.isRequired,
  appActions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    buys: state.buys,
    sells: state.sells,
    leases: state.leases,
    rents: state.rents,
    recruits: state.recruits,
    applys: state.applys
  }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions : bindActionCreators(HomeActions, dispatch),
    appActions : bindActionCreators(AppActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTypeContainer)
