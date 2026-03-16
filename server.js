require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.static(path.join(__dirname, '.')));

const HF_API_KEY = process.env.HF_API_KEY;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Hugging Face Inference
app.post('/api/hf', async (req, res) => {
  try {
    const { model, inputs } = req.body;
    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${model}`,
      inputs,
      {
        headers: { Authorization: `Bearer ${HF_API_KEY}` },
        responseType: 'arraybuffer'
      }
    );
    res.set('Content-Type', 'image/png');
    res.send(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

// OpenAI Endpoint
app.post('/api/openai', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      { prompt, n: 1, size: "1024x1024" },
      { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
    );
    res.json(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: err.response?.data || err.message });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => console.log('🤖 AI Editor backend running on http://localhost:3000'));