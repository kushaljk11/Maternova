import { useMemo } from 'react';

export default function useRoleRedirect(role) {
  return useMemo(() => {
    if (role === 'patient') return '/patient';
    if (role === 'worker') return '/worker';
    if (role === 'doctor') return '/doctor';
    if (role === 'admin') return '/admin';
    return '/';
  }, [role]);
}
