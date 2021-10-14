import requests
import unittest
import json

class TestClient(unittest.TestCase):

    # Test the GET for service type
    def test_GET_ServiceType(self):
        r = requests.get('http://localhost:3001/api/client')
        self.assertEqual(r.status_code, 200)
        self.assertIsNotNone(r.json())
        try:
            result = json.loads(r.json())
            # check if the json contains the two expected fields
            # check if the each field is well formed
        except:
            self.fail()

    # Test with FAIL result
    def test_GET2(self):
        r = requests.get('http://localhost:3001/api/clients')
        self.assertEqual(r.status_code, 404)
    
    # Test with OK result
    def test_POST(self):
        r = requests.post('http://localhost:3001/api/client')
        self.assertEqual(r.status_code, 404)

if __name__ == '__main__':
    unittest.main(verbosity=2)
