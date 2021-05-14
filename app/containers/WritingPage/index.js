import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';

// import { loadRepos } from '../App/actions';
// import { changeUsername } from './actions';
// import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Root from 'components/Root'
import BoardContent from 'components/BoardContent'
import Button from './Button'
import SmallBox from 'components/SmallBox'
import Box from 'components/Box'
import Input from 'components/Input'
import SmallInput from 'components/SmallInput'

const key = 'home';

export function WritingPage({
  registerLoding,
  registerError,
  board,
  onSubmitForm,
  onChangeBoard,
}) {
  
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Root style={{marginTop: 70}}>
    <BoardContent>
        <div>
            <div>
                user id
            </div>
            <SmallBox>
                <SmallInput 
                name="user_no"
                onChange={onChangeBoard}
                type="textarea" />
            </SmallBox>
        </div>
        <div>
            <div>
                board title
            </div>
            <Box>
                <Input 
                name="title"
                onChange={onChangeBoard}
                type="textarea" />
            </Box>
        </div>
        <div>
            <div>
                board content
            </div>
            <Box>
                <Input 
                name="content"
                onChange={onChangeBoard}
                type="textarea"
                 />
            </Box>
        </div>
        <div>
            <Button
            onClick={onSubmitForm}
            >
              Register
            </Button>
        </div>
    </BoardContent>
</Root>
  );
}


// get state and map it to props here. 
const mapStateToProps = createStructuredSelector({
  // boardTitle: makeSelectRepos(),
  // boardContent: makeSelectUsername()  
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeBoard: e => {
      e.preventDefault();
      

      dispatch(changeBoard(e.target.name, e.target.value))
    },
    onSubmitForm: e => {
      if (evt !== undefined && e.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WritingPage);