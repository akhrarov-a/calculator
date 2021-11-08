import { useEffect } from 'react';
import { useNavigate } from 'react-router';

/**
 * Renders Not Found
 */
const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/calculator');
  }, []);

  return <div>Not Found</div>;
};

export { NotFound };
