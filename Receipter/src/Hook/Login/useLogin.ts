import { useMutation } from '@tanstack/react-query';
import { docApi } from '@/Api/docApi';
import type { Login } from '@/Interface/auth';
import { useAuthStore } from '@/Store/auth';

export const useLogin = () => {
    const setTokens = useAuthStore((state) => state.setTokens);

    return useMutation({
        mutationFn: (body: Login) => docApi.Login(body),
        onSuccess: (response) => {
            const { access_token, refresh_token } = response.data;
            if (access_token && refresh_token) {
                setTokens(access_token, refresh_token);
                sessionStorage.setItem("accessToken", access_token);
                sessionStorage.setItem("refreshToken", refresh_token);
                console.log("Access_Token: ", access_token);

            }
        },
    });
};