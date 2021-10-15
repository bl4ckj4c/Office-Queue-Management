import requests
import unittest
import json


def TestSuiteBackend():
    suite = unittest.TestSuite()
    suite.addTest(TestManager('test_GET_StatisticsForCounter'))
    return suite


"""This class tests the backend with a focus on the Client part"""


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

#"""This class tests the backend with a focus on the Officer part"""
# class TestOfficer(unittest.TestCase):

    # Test the GET for service type
    # def test_GET_ServiceType(self):
        #r = requests.get('http://localhost:3001/api/officer')
        #self.assertEqual(r.status_code, 200)
        # self.assertIsNotNone(r.json())
        # try:
            #result = json.loads(r.json())
            # check if the json contains the two expected fields
            # check if the each field is well formed
        # except:
            # self.fail()


"""This class tests the backend with a focus on the Manager part"""


class TestManager(unittest.TestCase):

    # {
    #   "typeOfRequest": "manager",
    #   "ID": counterID,
    #   "serviceType": "",
    #   "startDate": startDate,
    #   "endDate": endDate
    # }

    """ This function tests the GET request for the statistics about a counter"""

    def test_GET_StatisticsForCounter(self):
        try:
            r = requests.get('http://localhost:3001/api/manager')
            self.assertEqual(r.status_code, 200)

            bodyJSON = r.json()
            #bodyJSON = "{\"typeOfRequest\":\"manager\",\"ID\":1,\"serviceType\":\"\",\"startDate\":\"START\",\"endDate\":\"END\"}"
            self.assertIsNotNone(bodyJSON)

            try:
                jsonData = json.loads(bodyJSON)

                # Check the presence of each field in the JSON and if each of them is well-formed

                # Type of request
                self.assertIn("typeOfRequest", jsonData)
                self.assertEqual(type(jsonData["typeOfRequest"]), str)

                # ID
                self.assertIn("ID", jsonData)
                self.assertEqual(type(jsonData["ID"]), int)

                # Service Type
                self.assertIn("serviceType", jsonData)
                self.assertEqual(type(jsonData["serviceType"]), str)

                # Start date
                self.assertIn("startDate", jsonData)
                self.assertEqual(type(jsonData["startDate"]), str)

                # End date
                self.assertIn("endDate", jsonData)
                self.assertEqual(type(jsonData["endDate"]), str)

            except:
                self.fail()
        except:
            self.fail("Request not working, check if server is up and running")


if __name__ == '__main__':
    runner = unittest.TextTestRunner()
    runner.run(TestSuiteBackend())
