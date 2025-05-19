
export interface Login {
    email: string;
    password: string;
}

export interface LoginResponseTokenData {

  refreshToken: string;
  accessToken: string;
  expiresIn: number;
  tokenType: string;
  createdAt: string; 
}



