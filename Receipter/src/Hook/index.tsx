import { useMutation } from '@tanstack/react-query';
import { docApi } from '@/Api/docApi';
import type { Login, LoginResponseTokenData } from '@/Interface/auth';
import { useAuthStore } from '@/Store/auth';

export const useLogin = () => {
  const setTokens = useAuthStore((state) => state.setTokens);

  return useMutation({
    mutationFn: (body: Login) => docApi.Login(body),

    onSuccess: (response: LoginResponseTokenData) => {
      const { accessToken, refreshToken } = response;

      if (accessToken && refreshToken) {
        setTokens(accessToken, refreshToken);
        sessionStorage.setItem('accessToken', accessToken);
        sessionStorage.setItem('refreshToken', refreshToken);
        console.log('Access Token:', accessToken);
      }
    },
  });
};
