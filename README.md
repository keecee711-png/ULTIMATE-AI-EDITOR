# 🤖 Ultimate AI Editor

An AI-powered image editor using Hugging Face and OpenAI APIs for face swapping and text-to-image generation.

## Features

- 🔄 **Face Swap** - Swap faces between two images using Hugging Face
- 🎨 **Text to Image** - Generate images from text descriptions using OpenAI
- 📁 **Drag & Drop** - Easy file upload with drag and drop support
- ⚡ **Real-time Processing** - Quick API integration
- 🎯 **Modern UI** - Beautiful gradient design with smooth interactions

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Create `.env` File
```bash
cp .env.example .env
```

Add your API keys:
```
HF_API_KEY=your_hugging_face_api_key
OPENAI_API_KEY=your_openai_api_key
```

### 3. Run Server
```bash
npm start
```

Navigate to `http://localhost:3000`

## API Keys

- **Hugging Face**: Get from https://huggingface.co/settings/tokens
- **OpenAI**: Get from https://platform.openai.com/api-keys

## Usage

1. **Face Swap**: Upload an image, click "Face Swap", paste a second image URL
2. **Text to Image**: Click "Text to Image", describe what you want generated

## Project Structure

```
Ultimate-AI-Editor/
├── index.html          # Frontend UI
├── server.js           # Express backend
├── package.json        # Dependencies
├── .env.example        # Environment variables template
├── .gitignore          # Git ignore rules
└── README.md           # Documentation
```

## Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **APIs**: Hugging Face Inference, OpenAI
- **HTTP Client**: Axios

---

Made with ❤️