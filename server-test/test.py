import requests
import unittest
import json


def TestSuiteBackend():
    suite = unittest.TestSuite()
    suite.addTest(TestManager('test_POST_StatisticsForCounter'))
    suite.addTest(TestManager('test_POST_StatisticsForServiceType'))
    suite.addTest(TestManager('test_POST_StatisticsError_1'))
    suite.addTest(TestManager('test_POST_StatisticsError_2'))
    suite.addTest(TestManager('test_POST_StatisticsError_3'))
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

    # This is the json format to be passe dinto the body of the requests
    # {
    #   "typeOfRequest": "manager",
    #   "ID": counterID,
    #   "serviceType": "",
    #   "startDate": startDate,
    #   "endDate": endDate
    # }

    # This function tests the POST request for the statistics about a counter
    def test_POST_StatisticsForCounter(self):

        payload = {
            "typeOfRequest": "manager",
            "ID": 1,
            "serviceType": "",
            "startDate": "2021/05/21",
            "endDate": "2021/05/25"
        }

        # Request sent
        r = requests.post(
            'http://localhost:3001/api/manager',
            json=payload
            )

        # The response code should be 200
        self.assertEqual(r.status_code, 200)

        print(r.text)

    # This function tests the POST request for the statistics about a service type
    def test_POST_StatisticsForServiceType(self):

        payload = {
            "typeOfRequest": "manager",
            "ID": "",
            "serviceType": "serviceType1",
            "startDate": "2021/05/21",
            "endDate": "2021/05/25"
        }

        # Request sent
        r = requests.post(
            'http://localhost:3001/api/manager',
            json=payload
            )

        # The response code should be 200
        self.assertEqual(r.status_code, 200)

        print(r.text)

    # This function tests the POST request for the statistics about a counter
    def test_POST_StatisticsError_1(self):

        payload = {
            "typeOfRequest": "manager",
            "ID": "",
            "serviceType": "",
            "startDate": "2021/05/21",
            "endDate": "2021/05/25"
        }

        # Request sent
        r = requests.post(
            'http://localhost:3001/api/manager',
            json=payload
            )

        # The response code should be 400
        self.assertEqual(r.status_code, 400)

    # This function tests the POST request for the statistics about a counter
    def test_POST_StatisticsError_2(self):

        payload = {
            "typeOfRequest": "manager",
            "ID": 1,
            "serviceType": "serviceType1",
            "startDate": "2021/05/21",
            "endDate": "2021/05/25"
        }

        # Request sent
        r = requests.post(
            'http://localhost:3001/api/manager',
            json=payload
            )

        # The response code should be 400
        self.assertEqual(r.status_code, 400)

    # This function tests the POST request for the statistics about a counter
    def test_POST_StatisticsError_3(self):

        payload = {
            "typeOfRequest": "wrongTypeOfRequest",
            "ID": 1,
            "serviceType": "serviceType1",
            "startDate": "2021/05/21",
            "endDate": "2021/05/25"
        }

        # Request sent
        r = requests.post(
            'http://localhost:3001/api/manager',
            json=payload
            )

        # The response code should be 400
        self.assertEqual(r.status_code, 400)


if __name__ == '__main__':
    runner = unittest.TextTestRunner()
    runner.run(TestSuiteBackend())