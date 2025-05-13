// backend/server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const ROOMS_FILE = 'rooms.json';
const USERS_FILE = 'users.json';

// Helper to read JSON
function readData(file) {
  return JSON.parse(fs.readFileSync(file, 'utf-8'));
}

// Helper to write JSON
function writeData(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
}

// 1. Get all rooms
app.get('/api/rooms', (req, res) => {
  const rooms = readData(ROOMS_FILE);
  res.json(rooms);
});

// 2. Get room by ID
app.get('/api/rooms/:id', (req, res) => {
  const rooms = readData(ROOMS_FILE);
  const room = rooms.find(r => r.id === req.params.id);
  if (room) res.json(room);
  else res.status(404).json({ message: 'Room not found' });
});

// 3. Add new room
app.post('/api/rooms', (req, res) => {
  const rooms = readData(ROOMS_FILE);
  const newRoom = { id: Date.now().toString(), ...req.body };
  rooms.push(newRoom);
  writeData(ROOMS_FILE, rooms);
  res.status(201).json(newRoom);
});

// 4. Edit room
app.put('/api/rooms/:id', (req, res) => {
  const rooms = readData(ROOMS_FILE);
  const index = rooms.findIndex(r => r.id === req.params.id);
  if (index !== -1) {
    rooms[index] = { ...rooms[index], ...req.body };
    writeData(ROOMS_FILE, rooms);
    res.json(rooms[index]);
  } else res.status(404).json({ message: 'Room not found' });
});

// 5. Delete room
app.delete('/api/rooms/:id', (req, res) => {
  let rooms = readData(ROOMS_FILE);
  const originalLength = rooms.length;
  rooms = rooms.filter(r => r.id !== req.params.id);
  if (rooms.length < originalLength) {
    writeData(ROOMS_FILE, rooms);
    res.json({ message: 'Room deleted' });
  } else res.status(404).json({ message: 'Room not found' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

