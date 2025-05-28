const axios = require('axios');

async function testHelloRoute() {
  try {
    const response = await axios.get('http://localhost:3000/api/hello');
    if (response.status === 200 && response.data.message === 'Hello from backend API!') {
      console.log('✅ /api/hello test passed.');
    } else {
      console.error('❌ /api/hello test failed. Unexpected response:', response.data);
    }
  } catch (err) {
    console.error('❌ /api/hello test failed.');
    console.error('↪ error message:', err.message);
    console.error('↪ full error:', err);
  }
}

testHelloRoute();
