import React, { useState, useCallback } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'redux/reducer';
import { signIn, signInAction } from 'redux/actions/userAction';

interface reduxProps {
  signIn: (name: string) => signInAction;
}
function SignInTest({ signIn }: reduxProps) {
  const [name, setName] = useState<string>('');

  const signInHandler = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      console.log('로그인', name);
      if (name.length > 0) {
        signIn(name);
        setName('');
      }
    },
    [name]
  );
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(name);
    setName(e.target.value);
  };
  return (
    <>
      <p>
        이름을 적어주세요. (이광수, 김종국, 유재석 으로 로그인 해주세요, 회원가입 기능은 구현하지
        않았습니다.)
      </p>
      <form onSubmit={signInHandler}>
        <label htmlFor='sign-in'>
          <input type='text' id='sign-in' onChange={onChangeHandler} value={name} />
        </label>
        <button type='submit'>로그인</button>
      </form>
    </>
  );
}

export default connect(
  (state: RootState) => ({
    user: state.userReducer.isLoggin,
  }),
  (dispatch: Dispatch) => ({
    signIn: (name: string) => dispatch(signIn(name)),
  })
)(SignInTest);
