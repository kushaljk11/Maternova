import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [role, setRole] = useState('patient');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ role, token: 'demo-token' });
    navigate(`/${role}`);
  };

  return (
    <Card title="Login">
      <form onSubmit={handleSubmit} className="space-y-3">
        <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded border p-2">
          <option value="patient">Patient</option>
          <option value="worker">Worker</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        </select>
        <Button type="submit">Sign in</Button>
      </form>
    </Card>
  );
}

export default Login;
