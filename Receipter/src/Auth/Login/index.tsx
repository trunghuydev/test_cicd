import { Button, Input, Select, Form, Divider } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Loading from '@/Components/Loading/index';
import { useLogin } from '@/Hook/Login/useLogin';

const { Option } = Select;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const loginMutation = useLogin();

  const onFinish = (values: { username: string; password: string }) => {
    setLoading(true);
    loginMutation.mutate(
      {
        email: values.username,
        password: values.password,
      },
      {
        onSuccess: () => {
          setLoading(false);
          toast.success(t('login.loginSuccess') || 'Login successful');
          navigate('/dashboard');
        },
        onError: (error: any) => {
          setLoading(false);
          toast.error(t('login.loginFailed') || 'Login failed');
          console.error(error);
        },
      }
    );
  };

  return (
    <>
      {loading && <Loading />}

      <div className="relative flex items-center justify-center min-h-screen bg-loginbg">
        <div className="absolute flex items-center space-x-4 top-10">
          <div className="flex items-center justify-center w-12 h-12 bg-black rounded-lg">
            <span className="text-3xl font-bold text-pink-100">Z</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-wide text-white">ZENTRY</h1>
        </div>
        <Select
          defaultValue={i18n.language}
          onChange={(lng) => i18n.changeLanguage(lng)}
          className="absolute w-40 top-6 right-6"
        >
          <Option value="vi">
            <span className="mr-2 flag-icon flag-icon-vn"></span>
            {t('language.vi')}
          </Option>
          <Option value="en">
            <span className="mr-2 flag-icon flag-icon-gb"></span>
            {t('language.en')}
          </Option>
        </Select>

        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-xl">
          <h2 className="text-2xl font-bold text-center text-gray-800">{t('login.title')}</h2>
          <p className="mb-6 text-sm text-center text-gray-500">{t('login.description')}</p>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label={t('login.username')}
              name="username"
              rules={[{ required: true, message: t('login.usernamePlaceholder') }]}
            >
              <Input placeholder={t('login.usernamePlaceholder')} />
            </Form.Item>

            <Form.Item
              label={t('login.password')}
              name="password"
              rules={[{ required: true, message: t('login.passwordPlaceholder') }]}
            >
              <Input.Password placeholder={t('login.passwordPlaceholder')} />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {t('login.loginButton')}
              </Button>
            </Form.Item>
          </Form>

          <p className="text-sm text-center text-gray-500">{t('login.needHelp')}</p>

          <Divider style={{ margin: 10, borderTop: '1px solid #e0e0e0' }} />

          <p className="mt-2 text-xs text-center text-gray-400">{t('login.copyright')}</p>
        </div>
      </div>
    </>
  );
};

export default Login;
