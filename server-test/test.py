import requests
import unittest
import json


def TestSuiteBackend():
    suite = unittest.TestSuite()
    suite.addTest(TestManager('test_POST_StatisticsForCounter'))
    suite.addTest(TestManager('test_POST_StatisticsForCounters'))
    suite.addTest(TestManager('test_POST_StatisticsForServiceType'))
    suite.addTest(TestManager('test_POST_StatisticsForServiceTypes'))
    return suite


"""This class tests the backend with a focus on the Client part"""


# class TestClient(unittest.TestCase):

# Test the GET for service type
# def test_GET_ServiceType(self):
#r = requests.get('http://localhost:3001/api/client')
#self.assertEqual(r.status_code, 200)
# self.assertIsNotNone(r.json())
# try:
#result = json.loads(r.json())
# check if the json contains the two expected fields
# check if the each field is well formed
# except:
# self.fail()

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

    # This is the json format to be passed into the body of the requests
    # {
    #   "typeOfRequest": "manager",
    #   "ID": "counter1",
    #   "serviceType": "bank",
    #   "startDate": "2021-10-06",
    #   "endDate": "2021-10-10"
    # }

    payloads = {
        0: {
            "typeOfRequest": "manager",
            "ID": "counter1",
            "serviceType": "",
            "startDate": "2021-10-06",
            "endDate": "2021-10-10"
        },
        1: {
            "typeOfRequest": "",
            "ID": "counter1",
            "serviceType": "",
            "startDate": "2021-10-06",
            "endDate": "2021-10-10"
        },
        2: {
            "typeOfRequest": "manager",
            "ID": "counter1",
            "serviceType": "",
            "startDate": "2021-10",
            "endDate": "2021-10-10"
        },
        3: {
            "typeOfRequest": "manager",
            "ID": "counter1",
            "serviceType": "",
            "startDate": "2021-10-06",
            "endDate": "2021-10"
        },
        4: {
            "typeOfRequest": "manager",
            "ID": "counter1",
            "serviceType": "",
            "startDate": "2021-02-31",
            "endDate": "2021-10-10"
        },
        5: {
            "typeOfRequest": "manager",
            "ID": "counter1",
            "serviceType": "",
            "startDate": "2021-10-31",
            "endDate": "2021-09-10"
        },
        6: {
            "typeOfRequest": "manager",
            "serviceType": "",
            "startDate": "2021-10-31",
            "endDate": "2021-09-10"
        }
    }

    responses = [
        200,
        400,
        400,
        400,
        400,
        400,
        400
    ]

    payloads2 = {
        0: {
            "typeOfRequest": "manager",
            "ID": "counter1",
            "serviceType": "bank",
            "startDate": "2021-10-06",
            "endDate": "2021-10-10"
        },
        1: {
            "typeOfRequest": "",
            "ID": "counter1",
            "serviceType": "bank",
            "startDate": "2021-10-06",
            "endDate": "2021-10-10"
        },
        2: {
            "typeOfRequest": "manager",
            "ID": "counter1",
            "serviceType": "bank",
            "startDate": "2021-10",
            "endDate": "2021-10-10"
        },
        3: {
            "typeOfRequest": "manager",
            "ID": "counter1",
            "serviceType": "bank",
            "startDate": "2021-10-06",
            "endDate": "2021-10"
        },
        4: {
            "typeOfRequest": "manager",
            "ID": "counter1",
            "serviceType": "bank",
            "startDate": "2021-02-31",
            "endDate": "2021-10-10"
        },
        5: {
            "typeOfRequest": "manager",
            "ID": "counter1",
            "serviceType": "bank",
            "startDate": "2021-10-31",
            "endDate": "2021-09-10"
        },
        6: {
            "typeOfRequest": "manager",
            "serviceType": "",
            "startDate": "2021-10-06",
            "endDate": "2021-10-10"
        }
    }

    responses2 = [
        200,
        400,
        400,
        400,
        400,
        400,
        200
    ]

    # This function tests the POST request for the statistics about a counter
    def test_POST_StatisticsForCounter(self):

        for i, payload in self.payloads.items():
            # Request sent
            r = requests.post(
                'http://localhost:3001/api/manager/counter',
                json=payload
            )

            # The response code should be coherent
            #print("Actual: " + str(r.status_code) + " --> Expected: " + str(self.responses[i]))
            #print(str(r.text) + "\n")
            self.assertEqual(r.status_code, self.responses[i])

    # This function tests the POST request for the statistics about all counters
    def test_POST_StatisticsForCounters(self):

        for i, payload in self.payloads.items():
            # Request sent
            r = requests.post(
                'http://localhost:3001/api/manager/counters',
                json=payload
            )

            # The response code should be coherent
            #print("Actual: " + str(r.status_code) + " --> Expected: " + str(self.responses[i]))
            #print(str(r.text) + "\n")
            self.assertEqual(r.status_code, self.responses[i])

    # This function tests the POST request for the statistics about a service type
    def test_POST_StatisticsForServiceType(self):

        for i, payload in self.payloads2.items():
            # Request sent
            r = requests.post(
                'http://localhost:3001/api/manager/servicetype',
                json=payload
            )

            # The response code should be coherent
            #print("Actual: " + str(r.status_code) + " --> Expected: " + str(self.responses2[i]))
            #print(str(r.text) + "\n")
            self.assertEqual(r.status_code, self.responses2[i])

    # This function tests the POST request for the statistics about all service types
    def test_POST_StatisticsForServiceTypes(self):

        for i, payload in self.payloads2.items():
            # Request sent
            r = requests.post(
                'http://localhost:3001/api/manager/servicetypes',
                json=payload
            )

            # The response code should be coherent
            #print("Actual: " + str(r.status_code) + " --> Expected: " + str(self.responses2[i]))
            #print(str(r.text) + "\n")
            self.assertEqual(r.status_code, self.responses2[i])


if __name__ == '__main__':
    runner = unittest.TextTestRunner()
    runner.run(TestSuiteBackend())