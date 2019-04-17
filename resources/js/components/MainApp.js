import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionsCreators from "../actions/actionCreators";
import Header from "./Header";

function mapStateToProps(state) {
    return {
        counter: state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
}

const MainApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default MainApp;
