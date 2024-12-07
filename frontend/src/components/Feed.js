import React from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material";

const Feed = () => {
  const selectedTopics = useSelector((state) => state.feed.topics);

  // Example data for each feed tile with unique links and images
  const feedData = Array.from({ length: 24 }).map((_, index) => ({
    id: index,
    title: `Lorem Ipsum ${index + 1}`,
    content: `This is content related to the topic: Lorem Ipsum ${index + 1}.`,
    link: `https://example.com/topic/${index + 1}`, // Unique external link for each tile
    image: `https://source.unsplash.com/random/80x80?sig=${index}`, // Unique image for each tile
  }));

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" mb={4}>
        Your Feed
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // One tile per row
          gap: 2, // Space between tiles
        }}
      >
        {feedData.map((item) => (
          <a
            key={item.id}
            href={item.link} // External link
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security measure
            style={{ textDecoration: "none" }}
          >
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 2,
                height: "100%",
              }}
            >
              <Avatar
                src={item.image}
                alt={item.title}
                sx={{
                  width: 80,
                  height: 80,
                  marginRight: 2,
                  flexShrink: 0,
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "normal",
                    maxHeight: 48,
                  }}
                >
                  {item.content}
                </Typography>
              </CardContent>
            </Card>
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default Feed;






