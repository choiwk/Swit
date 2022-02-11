import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ChatInput from 'components/ChatInput/ChatInput';
import Example from 'components/Example';
import SignInTest from 'components/Auth/SignInTest';
import { RootState } from 'redux/reducer';
import { reduxUser, reduxSignOut } from 'types/reduxTypes';

import { signOut } from 'redux/actions/userAction';

import './App.css';
import Navbar from 'components/Nav/Navbar';
import Aside from 'components/Aside/Aside';
interface reduxProps {
  user: reduxUser;
  signOut: reduxSignOut;
}
function App({ user, signOut }: reduxProps) {
  useEffect(() => {
    console.log(user, '로그인중');
  }, [user]);

  const signOutHandler = () => {
    signOut();
  };
  return (
    <div className='App'>
      {user.userName === '' ? (
        <SignInTest />
      ) : (
        <>
          <Navbar />
          <Aside />
          <Example />
          <ChatInput />
          {/* <TextArea /> */}
        </>
      )}
    </div>
  );
}

export default connect(
  (state: RootState) => ({
    user: state.userReducer.isLoggin,
  }),
  (dispatch: Dispatch) => ({
    signOut: () => dispatch(signOut()),
  })
)(App);
