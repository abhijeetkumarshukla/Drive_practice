import  { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Input,
  Button,
  Text,
  Heading,
  VStack,
  HStack,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'b80f88eb21235860c485526431858990'; 

  const fetchWeather = async () => {
    if (!city.trim()) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  return (
    <Box p={5} maxWidth="400px" mx="auto" textAlign="center">
      <Heading mb={5}>Weather App</Heading>
      <VStack spacing={4}>
        <HStack>
          <Input
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button colorScheme="blue" onClick={fetchWeather}>
            Get Weather
          </Button>
        </HStack>

        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {weather && (
          <Box mt={5} p={4} borderWidth={1} borderRadius="lg" w="100%">
            <Heading size="md" mb={2}>
              {weather.name}
            </Heading>
            <Text>Temperature: {weather.main.temp}°C</Text>
            <Text>Weather: {weather.weather[0].description}</Text>
            <Text>Humidity: {weather.main.humidity}%</Text>
            <Text>Wind Speed: {weather.wind.speed} m/s</Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Weather;
