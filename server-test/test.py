import requests
import unittest

class TestClient(unittest.TestCase):

    # Test with OK result
    def test_GET(self):
        r = requests.get('http://localhost:3001/api/client')
        self.assertEqual(r.status_code, 200)

    # Test with FAIL result
    def test_GET2(self):
        r = requests.get('http://localhost:3001/api/clients')
        self.assertEqual(r.status_code, 200)
    
    # Test with OK result
    def test_POST(self):
        r = requests.post('http://localhost:3001/api/client')
        self.assertEqual(r.status_code, 404)

if __name__ == '__main__':
    unittest.main(verbosity=2)
