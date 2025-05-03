
import json

from django.test import TestCase

from rest_framework import status
from rest_framework.reverse import reverse
from rest_framework.test import  APIClient

from Stock.models import Boitier, Raionage, Salle
from users.models import User

class ConsultationTestCase(TestCase):

    def setUp(self):
        
        self.salle = Salle.objects.create(nom= "Salle A")
        self.raionage = Raionage.objects.create(salle = self.salle,code = "Gedar12")
        raionage_object = { 'raionage' : self.raionage,
                        'code' : "Etat2"
        }
        self.boitier = Boitier.objects.create(**raionage_object)

        self.url_salle_api = reverse("salle-list")
        self.url_boitier_api = reverse("boitier-list")
        self.url_raionnage_api = reverse("raionage-list")
        self.client = APIClient()
        self.user = User.objects.create_user('john',
                                             'lennon@thebeatles.com',
                                             'johnpassword')

    def test_can_create_stock_app(self):
        salle1 = Salle.objects.get(nom= "Salle A")
        self.assertEqual(salle1.nom,"Salle A")
        raionage1 = Raionage.objects.get(code = "Gedar12")
        self.assertEqual(raionage1.salle,salle1)
        self.assertEqual(raionage1.code,"Gedar12")
        self.boitier1 = Boitier.objects.get(code="Etat2")
        self.assertEqual(self.boitier1.raionage,raionage1)
        self.assertEqual(self.boitier1.code,"Etat2")
    
    def test_can_create_api_salle(self):
        
        response = self.client.post(self.url_salle_api, 
                                    data = {"nom":"Test nom "})
        self.assertEqual(response.status_code,status.HTTP_403_FORBIDDEN)
        
        self.client.force_authenticate(user=self.user)
        response = self.client.post(self.url_salle_api, 
                                    data = {"nom":"Test nom "})
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)

        response = self.client.get(self.url_salle_api)
        self.assertEqual(response.status_code,200)
        self.data_salle1 = self.string_to_json(response.data[0])
        self.data_salle2 = self.string_to_json(response.data[1])
        self.assertEqual(self.data_salle1["nom"],"Salle A")
        self.assertEqual(self.data_salle2["nom"],"Test nom")
   
    def test_can_create_api_raionnage(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(self.url_salle_api)
        self.data_salle2 = self.string_to_json(response.data)
        self.data_salle2 = self.data_salle2[0]
        response = self.client.post(self.url_raionnage_api,
                                    data = {'salle': self.data_salle2["url"],
                                    'code' : "code2"})
        response = self.client.get(self.url_raionnage_api)
        data_raionage = self.string_to_json(response.data)
        self.data_raionage1= data_raionage[0]
        self.data_raionage2 = data_raionage[1]
        self.assertEqual(self.data_raionage1["salle"],self.data_salle2["url"])
        self.assertEqual(self.data_raionage1["code"],"Gedar12")
        self.assertEqual(self.data_raionage2["salle"],self.data_salle2["url"])
        self.assertEqual(self.data_raionage2["code"],"code2")
     
    def test_can_create_api_boitier(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get(self.url_raionnage_api)
        self.data_raionage1 = self.string_to_json(response.data)
        self.data_raionage1 =  self.data_raionage1[0]    

        response = self.client.post(self.url_boitier_api,
                                   data={"code" :"code",
                                   "raionage": self.data_raionage1['url']})
        self.assertEqual(response.status_code,status.HTTP_201_CREATED)
        response = self.client.get(self.url_boitier_api)
        self.data_boitier = self.string_to_json(response.data)
        self.data_boitier1 = self.data_boitier[0]
        self.data_boitier2 = self.data_boitier[1]
        self.assertEqual(self.data_boitier1["code"],"Etat2")
        self.assertEqual(self.data_boitier1["raionage"],self.data_raionage1['url'])
        self.assertEqual(self.data_boitier2["code"],"code")
        self.assertEqual(self.data_boitier2["raionage"],self.data_raionage1['url'])

    def string_to_json(self,data):
        return json.loads(json.dumps(data))
