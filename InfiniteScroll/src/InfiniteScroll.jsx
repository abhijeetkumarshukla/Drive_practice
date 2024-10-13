import { useState, useEffect } from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

 
  const fetchData = async (pageNumber) => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        const newItems = Array.from({ length: 10 }, (_, index) => ({
          id: (pageNumber - 1) * 10 + index + 1,
          text: `Item ${(pageNumber - 1) * 10 + index + 1}`,
        }));
        resolve(newItems);
      }, 1000);
    });
  };

 
  useEffect(() => {
    const loadMoreItems = async () => {
      setIsLoading(true);
      const newItems = await fetchData(page);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setIsLoading(false);

     
      if (newItems.length === 0) {
        setHasMore(false);
      }
    };

    if (hasMore) {
      loadMoreItems();
    }
  }, [page, hasMore]);

  
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.scrollHeight
      ) {
        if (!isLoading && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, hasMore]);

  return (
    <Box maxW="600px" mx="auto" mt="20px" p="4">
      {items.map((item) => (
        <Box
          key={item.id}
          p="4"
          mb="2"
          borderRadius="md"
          bg="gray.100"
          textAlign="center"
        >
          <Text>{item.text}</Text>
        </Box>
      ))}
      {isLoading && (
        <Box textAlign="center" mt="4">
          <Spinner />
          <Text mt="2">Loading more items...</Text>
        </Box>
      )}
      {!hasMore && (
        <Box textAlign="center" mt="4">
          <Text>No more items to load</Text>
        </Box>
      )}
    </Box>
  );
};

export default InfiniteScroll;
