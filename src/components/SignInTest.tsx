import React, { useState, useCallback } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from 'redux/reducer';
import { signIn, signInAction } from 'redux/actions/userAction';
import { User } from 'types/user';

interface reduxProps {
  userList: User[];
  signIn: (name: string) => signInAction;
}
function SignInTest({ userList, signIn }: reduxProps) {
  const [name, setName] = useState<string>('');

  const signInHandler = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (name.length > 0 && userList.some((user) => user.userName === name)) {
        console.log('로그인', name);
        signIn(name);
        setName('');
      } else {
        alert('존재하지 않는 사용자입니다.');
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
    userList: state.userReducer.userList,
  }),
  (dispatch: Dispatch) => ({
    signIn: (name: string) => dispatch(signIn(name)),
  })
)(SignInTest);
