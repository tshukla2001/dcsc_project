import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Define navigate

  const handleLogin = () => {
    const user = { email, password }; // Replace with actual authentication logic
    dispatch(login(user));
    navigate('/selection'); // Navigate to the Selection Page
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h4" textAlign="center" mb={2}>
          Login
        </Typography>
        <TextField
          fullWidth
          label="Email ID"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link
          href="#"
          sx={{ display: 'block', textAlign: 'right', mb: 2, fontSize: '0.9rem' }}
        >
          Forgot password?
        </Link>
        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#1976d2',
            color: '#fff',
            textTransform: 'none',
            mb: 2,
            '&:hover': { backgroundColor: '#1565c0' },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography textAlign="center" variant="body2">
          Don't have an account?{' '}
          <Link href="/signup" sx={{ fontWeight: 'bold' }}>
            Create new
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;

