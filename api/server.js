const express = require('express');
const server = express();

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
server.use(express.json());

const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router');

server.use('/api/actions', actionsRouter);
server.use('/api/projects', projectsRouter);

module.exports = server;