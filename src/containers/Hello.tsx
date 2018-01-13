import { StoreState } from '../types/index';
import * as actions from '../actions';
import Hello from '../components/Hello';
import { connect,  Dispatch } from 'react-redux';

const mapStateToProps = ({ enthusiasmLevel, languageName }: StoreState) => {
  return {
    enthusiasmLevel,
    name: languageName
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);