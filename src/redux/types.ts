export interface User {
  id: number | string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  profile_photo?: string;
  is_staff?: boolean;
  is_superuser?: boolean;
}

export interface Auth {
  token: string;
  user: User;
}

export interface LoginData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  username: string;
  tokens?: {
    access: string;
    refresh: string;
  };
}

export interface RegisterData {
  id: number;
  email: string;
  first_name?: string;
  last_name?: string;
  tokens: {
    access: string;
    refresh: string;
  };
}

export interface ResetPassword {
  message: string;
}

export interface ResetPasswordConfirm {
  success: boolean;
  message: string;
}

export interface setCredentialsAction {
  type: "auth/setCredentials";
  payload: LoginData;
}

export type Post = {
  id: number | string;
  album?: number;
  file_url: string;
  name: string;
  description: string;
};

export interface Posts {
  isLoading: boolean;
  isError: boolean;
  posts: Post[];
}
