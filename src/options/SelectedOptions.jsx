import Options from './Options.jsx';
import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors.js';
import { toggleOption } from './options.actions.js';

const mapState = (state) => {
  return {
    options: selectedOptionsSelector(state),
  };
};

const mapDispatch = {
  moveOption: toggleOption,
};
const connector = connect(mapState, mapDispatch);
export default connector(Options);
