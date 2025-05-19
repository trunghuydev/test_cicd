
export interface Login {
    email: string;
    password: string;
}

export interface LoginResponseTokenData {

  refreshToken: string | null;
  accessToken: string| null;
  expiresIn?: number;
  tokenType?: string;
  createdAt?: string; 
}



