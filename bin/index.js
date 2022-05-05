#!/usr/bin/env node

const yargs = require("yargs");
const axios = require("axios");

const options = yargs
 .usage("Usage: -u <username> -p  <pass> -k <key>")
 .option("u", { alias: "username", describe: "Your name", type: "string", demandOption: true })
 .option("p", { alias: "password", describe: "Your pass", type: "string", demandOption: true })
 .option("k", { alias: "key", describe: "Your key", type: "string", demandOption: true })
 .argv;

const greeting = `Hello, ${options.username}!`;
console.log(greeting);

 const tokenReqOpts = {
    method: 'POST',
    url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
    params: {key: `${options.key}`},
    headers: {'Content-Type': 'application/json'},
    data: {
      email: `${options.username}`,
      password: `${options.password}`,
      returnSecureToken: true
    }
  };
  

const facilityOptions = {
    method: 'POST',
    url: 'https://api-gateway-qhqutz5o2a-ew.a.run.app/api/facilities',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '
    },
    data: {
      name: '______STORE_____',
      locationType: 'STORE',
      address: {
        street: 'Mordor Ave.',
        houseNumber: '1331',
        postalCode: '66666',
        city: 'Mordor',
        country: 'DE',
        companyName: 'Mordor Novelty Items Inc.',
        phoneNumbers: [{value: '066 - 66 66 66 66', type: 'PHONE', label: 'Direct Connection'}],
        emailAddresses: [{value: 'tim@mordornovelties.com', recipient: 'Tim Otter'}]
      },
      contact: {firstName: 'Tim', lastName: 'Hotter', roleDescription: 'Head of Everything'},
      status: 'ONLINE',
      services: [{type: 'SHIP_FROM_STORE'}, {type: 'PICKUP'}],
      pickingTimes: {
        friday: [{end: {hour: 23, minute: 0}, start: {hour: 0, minute: 0}}],
        monday: [{end: {hour: 23, minute: 0}, start: {hour: 0, minute: 0}}],
        saturday: [{end: {hour: 23, minute: 0}, start: {hour: 0, minute: 0}}],
        sunday: [{end: {hour: 23, minute: 0}, start: {hour: 0, minute: 0}}],
        thursday: [{end: {hour: 23, minute: 0}, start: {hour: 0, minute: 0}}],
        tuesday: [{end: {hour: 23, minute: 0}, start: {hour: 0, minute: 0}}],
        wednesday: [{end: {hour: 23, minute: 0}, start: {hour: 0, minute: 0}}]
      }
    }
  };
  
  
const createListingReqOpts = {
    method: 'PUT',
    url: 'https://api-gateway-qhqutz5o2a-ew.a.run.app/api/facilities/citVwnTMCmcyqgSjAYWUc4/listings',
    headers: {
      Authorization: 'Bearer ',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    data: '{\n    "listings": [\n        {\n            "title": "Exim Panshard\'s Mask",\n            "subtitle": "Exim Panshard\'s Mask",\n            "tenantArticleId": "empire-3",\n            "imageUrl": "https://pre00.deviantart.net/7974/th/pre/i/2016/128/3/1/sith_holocron_by_jmk_prime-da1eban.png",\n            "price": 100300000,\n            "stockinformation":\n             {\n                    "stock": 68,\n                    "reserved": 1\n             }\n        }, {\n            "title": "The Lightsabers Of Darth Atrius",\n            "subtitle": "The Lightsabers Of Darth Atrius",\n            "tenantArticleId": "empire-4",\n            "imageUrl": "https://orig00.deviantart.net/933e/f/2015/251/0/1/darth_vader_lightsaber_ignited_by_adrian1997-d98u1aq.png",\n            "price": 104000000,\n            "stockinformation":\n             {\n                    "stock": 68,\n                    "reserved": 1\n             }\n        }, {\n            "title": "Sith Scrolls",\n            "subtitle": "Sith Scrolls",\n            "tenantArticleId": "empire-5",\n            "imageUrl": "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/11/Rise-of-Skywalker-Sith-scrolls-concept-art.jpg",\n            "price": 100500000,\n            "stockinformation":\n             {\n                    "stock": 68,\n                    "reserved": 1\n             }\n        }\n       \n    ]\n}'
  };

const createOrderReqOpts = {
    method: 'POST',
    url: 'https://api-gateway-qhqutz5o2a-ew.a.run.app/api/orders',
    headers: {
      Authorization: 'Bearer ',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    data: {
        consumer: {
            addresses: [
                {
                    additionalAddressInfo: "tocareof:Mrs.Müller",
                    city: "Langenfeld",
                    country: "DE",
                    customAttributes: {},
                    houseNumber: "42a",
                    phoneNumbers: [
                        {
                            customAttributes: {},
                            label: "string",
                            type: "MOBILE",
                            value: "1000"
                        }
                    ],
                    postalCode: "40764",
                    street: "Hauptstr.",
                    companyName: "SpeedyBoxalesLtd.",
                    firstName: "Maxine",
                    lastName: "Muller",
                    salutation: "Frau"
                }
            ],
            customAttributes: {},
            email: "max@speedyboxales.com"
        },
        deliveryPreferences: {
            collect: [
                {
                    facilityRef: "",
                    paid: false,
                    supplyingFacilities: []
                }
            ],
            supplyingFacilities: [],
            targetTime: "2022-05-10T09:45:51.525Z"
        },
        orderDate: "2022-02-03T08:45:50.525Z",
        orderLineItems: [
            {
                article: {
                    tenantArticleId: "empire-3",
                    title: "Darth Vader's Mask"
                },
                measurementUnitKey: "unit",
                quantity: 21,
                shopPrice: 1200
            }
        ],
        status: "OPEN"
    }
  };

const pickJobReqOpts = {
    method: 'POST',
    url: 'https://api-gateway-qhqutz5o2a-ew.a.run.app/api/pickjobs',
    headers: {
      Authorization: '',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    data: {
      deliveryinformation: {
        channel: 'COLLECT',
        details: {collect: {identifier: 'string', paid: false}},
        targetTime: '2022-05-10T09:45:51.525Z'
      },
      facilityRef: '',
      orderDate: '',
      orderRef: '',
      pickLineItems: [
        {
            article: {
                tenantArticleId:  "empire-4",
            title: "The Lightsabers Of Darth Atrius",
                attributes: [
                  {
                    key: "The Lightsabers Of Darth Atrius",
                    priority: 100,
                    value: "100000"
                  }
                ]
              },
          measurementUnitKey: 'unit',
          quantity: 21,
          scannableCodes: ['string']
        }
      ],
      processId: '',
      shortId: 'AS0000000001',
      status: 'OPEN',
      tenantOrderId: 'R1234567890987654321'
    }
  };

const modifyPickJobReqOpts1 = {
    method: 'PATCH',
    url: 'https://api-gateway-qhqutz5o2a-ew.a.run.app/api/pickjobs/',
    headers: {
      Authorization: 'Bearer ',
      'Content-Type': 'application/json'
    },
    data: {version: 1, actions: [{action: 'ModifyPickJob', status: 'IN_PROGRESS'}]}
};

const modifyPickJobReqOpts2 =  {
    method: 'PATCH',
    url: 'https://api-gateway-qhqutz5o2a-ew.a.run.app/api/pickjobs/',
    headers: {
      Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVmMzAxNjFhOWMyZGI3ODA5ZjQ1MTNiYjRlZDA4NzNmNDczMmY3MjEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU3RlbGl5YW4gRGlua292Iiwicm9sZXMiOlt7Im5hbWUiOiJBRE1JTklTVFJBVE9SIiwiZmFjaWxpdGllcyI6W119XSwibG9jYWxlIjoiZW5fVVMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vb2NmZi1yZWR0aWdlci1naXQiLCJhdWQiOiJvY2ZmLXJlZHRpZ2VyLWdpdCIsImF1dGhfdGltZSI6MTY1MTc0Mjk3OCwidXNlcl9pZCI6Ikk1c3Y0VUVDdDlUTW5QTzgzeWJVSU96Qk01bTIiLCJzdWIiOiJJNXN2NFVFQ3Q5VE1uUE84M3liVUlPekJNNW0yIiwiaWF0IjoxNjUxNzQyOTc4LCJleHAiOjE2NTE3NDY1NzgsImVtYWlsIjoic3RlbGl5YW5Ab2NmZi1yZWR0aWdlci1naXQuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbInN0ZWxpeWFuQG9jZmYtcmVkdGlnZXItZ2l0LmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.NIif9mKYjIalx3mMuaEpWLa1JuVwLuLGfPAdj-BI1RfiU_dEIBlrJhbAwlDpvgDZdSxIWQgUVCyEmZ3V831BM2bbEmniV0YDsIaAMCsz3QuImbPR1MD-tIYNtWWKahfVCB1ap8Q_Qye7zOM1S1LVwbkkxTPgC_9wIN5tKW3kgCXwdUQuxQKmxy9K2w6nP39WNaTn-5_GwZcoINZ7ERJEzRNoWoOvDjvXCRd8CzqswdwmkPdIdwch-AQ6Zr8kTpbiA_2FHg95sHdop-l9i6WxD9VIcMbcqGA7Ozh-lF7ji3hheloJDRSgRLLnlthXZD-cw5CJnFy3XzGMluCSRNu_3A',
      'Content-Type': 'application/json'
    },
    data: {
      version: 2,
      actions: [
        {action: 'ModifyPickJob', status: 'CLOSED'},
        {
          id: 'pickItemId',
          action: 'ModifyPickLineItem',
          status: 'CLOSED',
          picked: 21
        }
      ]
    }
  };

// start by creating a token
axios.request(tokenReqOpts)
    .then(function (response) {
        // get token and update headers options for next calls
        facilityOptions.headers.Authorization = `Bearer ${response.data.idToken}`;
        createListingReqOpts.headers.Authorization = `Bearer ${response.data.idToken}`;
        createOrderReqOpts.headers.Authorization = `Bearer ${response.data.idToken}`;
        pickJobReqOpts.headers.Authorization = `Bearer ${response.data.idToken}`;
        modifyPickJobReqOpts1.headers.Authorization = `Bearer ${response.data.idToken}`;
        modifyPickJobReqOpts2.headers.Authorization = `Bearer ${response.data.idToken}`;

        // create a facility
        axios.request(facilityOptions)
            .then(function (response) {
                console.log(response.data);
                // update request options for listing and order
                createListingReqOpts.url = `https://api-gateway-qhqutz5o2a-ew.a.run.app/api/facilities/${
                    response.data.id}/listings`;
                createOrderReqOpts.data.deliveryPreferences.supplyingFacilities.push(response.data.id);
                createOrderReqOpts.data.deliveryPreferences.collect[0].facilityRef = `${response.data.id}`;
                createOrderReqOpts.data.deliveryPreferences.collect[0].supplyingFacilities.push(response.data.id);
                pickJobReqOpts.data.facilityRef = `${response.data.id}`;

                // create listing
                axios.request(createListingReqOpts)
                    .then(function (response) {
                        console.log("Listings created: " + response.status);
                        // create order 
                        axios.request(createOrderReqOpts)
                            .then(function (response) {
                                console.log("Order created: " + JSON.stringify(response.data));
                                pickJobReqOpts.data.processId = `${response.data.processId}`;
                                pickJobReqOpts.data.orderRef = `${response.data.id}`;
                                pickJobReqOpts.data.orderDate = `${response.data.orderDate}`;
                                // create pickJob
                                axios.request(pickJobReqOpts).then(function (response) {
                                    console.log(`Created PickJob: ${response.data.id}`);
                                    modifyPickJobReqOpts1.url = `https://api-gateway-qhqutz5o2a-ew.a.run.app/api/pickjobs/${response.data.id}`
                                    modifyPickJobReqOpts2.url = `https://api-gateway-qhqutz5o2a-ew.a.run.app/api/pickjobs/${response.data.id}`
                                    axios.request(modifyPickJobReqOpts1).then(function (response) {
                                        console.log(`Updated PickJob: ${response.data.id}`);
                                        modifyPickJobReqOpts2.data.actions[1].id= `${response.data.pickLineItems[0].id}`
                                        axios.request(modifyPickJobReqOpts2).then(function (response) {
                                            console.log(`Closed PickJob: ${response.data.id}`);
                                            console.log(`Closed PickJob: ${JSON.stringify(response.data)}`);

                                            }).catch(function (error) {
                                            console.error(error);
                                          });
                                        }).catch(function (error) {
                                        console.error(error);
                                      });

                                  }).catch(function (error) {
                                    console.error(error);
                                  });
                            }).catch(function (error) {
                                console.error(error);
                            });
                    }).catch(function (error) {
                        console.error(error);
                    });
            }).catch(function (error) {
                console.error(error);
            });
    }).catch(function (error) {
        console.error(error);
    });

