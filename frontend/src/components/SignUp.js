import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { login } from '../redux/actions'; // Import login action
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch(); // Initialize dispatch
  const navigate = useNavigate(); // Initialize navigate

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const user = { email, password }; // Replace with actual signup logic
    dispatch(login(user)); // Simulate login after signup
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
          Sign Up
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
        <TextField
          fullWidth
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={!!error} // Highlight the field red if there's an error
          helperText={error} // Show the error message
        />
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
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <Typography textAlign="center" variant="body2">
          Have an account?{' '}
          <Link href="/login" sx={{ fontWeight: 'bold' }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;


