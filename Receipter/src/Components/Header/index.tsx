import { Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/logout');
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 shadow-md bg-gradient-to-r from-green-900 to-green-700">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-12 h-12 bg-black rounded-lg">
          <span className="text-3xl font-bold text-pink-100">Z</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-wide text-white">ZENTRY</h1>
      </div>
      <Menu
        mode="horizontal"
        theme="dark"
        defaultSelectedKeys={['ticket']}
        className="text-white bg-transparent border-none"
      >
        <Menu.Item key="ticket">
          <Link to="/ticket">Vé</Link>
        </Menu.Item>
        <Menu.Item key="cancel-ticket">
          <Link to="/cancel-ticket">Hủy vé</Link>
        </Menu.Item>
        <Menu.Item key="shift">
          <Link to="/shift">Ca làm việc</Link>
        </Menu.Item>
        <Menu.Item key="report">
          <Link to="/report">Báo Cáo</Link>
        </Menu.Item>
      </Menu>

      <button onClick={handleLogout} className="text-white transition-transform hover:scale-110">
        <LogoutOutlined style={{ fontSize: 18 }} />
      </button>
    </header>
  );
};

export default Navbar;
