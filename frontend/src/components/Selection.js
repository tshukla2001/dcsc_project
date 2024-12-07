import React, { useState } from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateFeedTopics } from '../redux/actions';

const Selection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tiles = Array.from({ length: 24 }, (_, index) => `Lorem Ipsum ${index + 1}`);
  const [selectedTiles, setSelectedTiles] = useState([]);

  const handleTileClick = (tile) => {
    setSelectedTiles((prev) =>
      prev.includes(tile) ? prev.filter((t) => t !== tile) : [...prev, tile]
    );
  };

  const handleProceed = () => {
    dispatch(updateFeedTopics(selectedTiles)); // Save selected tiles to Redux
    navigate('/feed'); // Navigate to the feed page
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" mb={4} textAlign="center">
        Select Your Topics
      </Typography>
      <Grid container spacing={2}>
        {tiles.map((tile, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Box
              sx={{
                border: `2px solid ${selectedTiles.includes(tile) ? '#1976d2' : '#ccc'}`,
                borderRadius: 2,
                padding: 2,
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: selectedTiles.includes(tile) ? '#e3f2fd' : '#f5f5f5',
                '&:hover': { backgroundColor: '#eeeeee' },
              }}
              onClick={() => handleTileClick(tile)}
            >
              {tile}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        disabled={selectedTiles.length < 5}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          textTransform: 'none',
        }}
        onClick={handleProceed}
      >
        Proceed to Feed
      </Button>
    </Box>
  );
};

export default Selection;
