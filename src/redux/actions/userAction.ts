export const SIGN_IN = 'SIGN_IN' as const;
export const SIGN_OUT = 'SIGN_OUT' as const;

export interface signInAction {
  type: typeof SIGN_IN;
  name: string;
}

export const signIn = (name: string): signInAction => {
  return { type: SIGN_IN, name };
};

export interface signOutAction {
  type: typeof SIGN_OUT;
}

export const signOut = (): signOutAction => {
  return { type: SIGN_OUT };
};

export type userReducerAction = signInAction | signOutAction;
