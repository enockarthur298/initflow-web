import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your backend API URL

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/user-accounts', userData),
  logout: () => api.post('/auth/logout'),
};

// Rooms API calls
export const roomsAPI = {
  getAllRooms: () => api.get('/rooms'),
  getRoomById: (id) => api.get(`/rooms/${id}`),
  createRoom: (roomData) => api.post('/rooms', roomData),
  updateRoom: (id, roomData) => api.put(`/rooms/${id}`, roomData),
  deleteRoom: (id) => api.delete(`/rooms/${id}`),
};

// Room Types API calls
export const roomTypesAPI = {
  getAllRoomTypes: () => api.get('/room-types'),
  getRoomTypeById: (id) => api.get(`/room-types/${id}`),
  createRoomType: (roomTypeData) => api.post('/room-types', roomTypeData),
  updateRoomType: (id, roomTypeData) => api.put(`/room-types/${id}`, roomTypeData),
  deleteRoomType: (id) => api.delete(`/room-types/${id}`),
};

// Bookings API calls
export const bookingsAPI = {
  getAllBookings: () => api.get('/bookings'),
  getBookingById: (id) => api.get(`/bookings/${id}`),
  createBooking: (bookingData) => api.post('/bookings', bookingData),
  updateBooking: (id, bookingData) => api.put(`/bookings/${id}`, bookingData),
  cancelBooking: (id) => api.delete(`/bookings/${id}`),
};

export default api; 