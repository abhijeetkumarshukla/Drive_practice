import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
} from '@chakra-ui/react';

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', formData);
      
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Box maxW="400px" mx="auto" mt="50px">
      <form onSubmit={handleSubmit}>
        
        <FormControl isInvalid={errors.name} mb="4">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>

         
        <FormControl isInvalid={errors.email} mb="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>

     
        <FormControl isInvalid={errors.password} mb="4">
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="teal" mt="4" width="full">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SimpleForm;
