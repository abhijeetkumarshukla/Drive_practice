import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Pagination from './Pagination';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;  

  const handlePageChange = (page) => {
    setCurrentPage(page);
   
  };

  return (
    <Box>
     
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default App;
