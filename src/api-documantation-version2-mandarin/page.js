"use client";

import React from "react";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";
import ReactJson from "react-json-view";

export default function ApiDocumentationVersion2Mandarin() {
    const sampleApiUrl = "http://www.intellectlite.com/api/offers-v2.php?apikey=578&js=false";


    const sampleData = {

        "status": 200,
        "status_message": "CampaignFound",
        "campaigns": [
            {
                "AdvertiserName": "IntellectAdvertiser",
                "AdvertiserId": "1",
                "Campaignid": "258",
                "CampaignName": "SharekhaFeb’20",
                "Description": "Flow-instal–register.Avalidregistrationshouldhavethe name, city and phone number & is defined as net of test, dummy, junk, multiple/duplicate leads and will target the cities given by us. Registrations with incorrec/ incomplete informatiowill be considered as invalid",
                "Package Name": "com.sharekhan.androidsharemobile",
                "previewurl": "#8220;https://play.google.com/store/apps/details?id=com.sharekhan.androidsharemobile&hl=en_IN",
                "StartDate": "2020-02-17",
                "EndDate": "2021-02-17",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "#8220;http://track.intellectlite.com/offer/?cid=258&pid=612&did=504&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "Mailer A(18/02/2020)",
                        "creativeId": "504",
                        "imageUrl": null,
                        "size": null
                    },
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=258&pid=612&did=505&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "Mailer B(18/02/2020)",
                        "creativeId": "505",
                        "imageUrl": null,
                        "size": null
                    },
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=258&pid=612&did=512&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "sharekhan-144 by 144",
                        "creativeId": "512",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/258-512.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "IN",
                "OS": "Android",
                "Payout Event": "Registration – Sharekhan",
                "Payout Type": "CPI",
                "Payout Value": 0.4,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Intellect Advertiser",
                "Advertiser Id": "1",
                "Campaign id": "259",
                "Campaign Name": "Vedantu – Feb’20",
                "Description": "Cost Per Registration. FLow- Install–> Registration.Please note that only these 10 cities need to be targeted (any other city will not be considered): Bengaluru, Kolkata, Mumbai, Indore, Chennai, Jaipur, Guwahati, Bhubaneshwar, Coimbatore, Ranchi.",
                "Package Name": "com.vedantu.app",
                "preview url": "https://play.google.com/store/apps/details?id=com.vedantu.app",
                "Start Date": "2020-02-17",
                "End Date": "2021-02-17",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=259&pid=612&did=507&code=262&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "Default Creative",
                        "creativeId": "507",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/259-507.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "IN",
                "OS": "Android",
                "Payout Event": "Registration – Vedantu",
                "Payout Type": "CPI",
                "Payout Value": 0.18,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Intellect Advertiser",
                "Advertiser Id": "1",
                "Campaign id": "268",
                "Campaign Name": "Credit Mantri App – Feb’20",
                "Description": "target group- Users greater than 26 years\n\nUsers who have visited / installed competitor, BFSI, mobile wallet apps\n\nUsers who are interested in loans and credit cards\n\nUsers who have a bad credit score and want to improve it – This is the most important target segment for us. \n\nOwn two wheeler\n\nOwn four wheeler\n\nHave bank accounts\n\nInterested in financial products",
                "Package Name": "com.creditmantri",
                "preview url": "https://play.google.com/store/apps/details?id=com.creditmantri",
                "Start Date": "2020-02-24",
                "End Date": "2021-02-24",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=268&pid=612&did=517&code=893&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "credit mantri",
                        "creativeId": "517",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/268-517.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "IN",
                "OS": "Android",
                "Payout Event": "Red – Credit Mantri,Green – Credit Mantri",
                "Payout Type": "CPI",
                "Payout Value": 0.35,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Automate360-Advertiser Login",
                "Advertiser Id": "109",
                "Campaign id": "248",
                "Campaign Name": "Entertainer_MENA_IOS_CPS_appnlab",
                "Description": "The client wont pay for 3 kind of activities: \n1- Fraud \n2- 0 rev (when user subscribe for free/ not paying package) \n3- adds-on features: it comes from the paying user when they add a new (add-on package). This is only an issue because of how the client send purchase events to AppsFlyer. So it is an event counter rather than unique. on other word: its not new paying user. \n\nWe will be sending you a report for the 3 activities if it happns from your sources after each month\n\nUser Flow:\nInstall – Login/Registration – Purchase",
                "Package Name": "id702813714",
                "preview url": "https://apps.apple.com/ae/app/the-entertainer/id702813714",
                "Start Date": "2020-02-13",
                "End Date": "2021-02-13",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=248&pid=612&did=497&code=592&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "Default Creative",
                        "creativeId": "497",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/248-497.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "BH,KW,OM,QA,SA",
                "OS": "ios",
                "Payout Event": "purchase",
                "Payout Type": "CPS",
                "Payout Value": 4.9,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Automate360-Advertiser Login",
                "Advertiser Id": "109",
                "Campaign id": "249",
                "Campaign Name": "Entertainer_UAE_IOS_CPS_appnlab",
                "Description": "The client wont pay for 3 kind of activities: \n1- Fraud \n2- 0 rev (when user subscribe for free/ not paying package) \n3- adds-on features: it comes from the paying user when they add a new (add-on package). This is only an issue because of how the client send purchase events to AppsFlyer. So it is an event counter rather than unique. on other word: its not new paying user. \n\nWe will be sending you a report for the 3 activities if it happns from your sources after each month\n\nUser Flow:\nInstall – Login/Registration – Purchase",
                "Package Name": "id702813714",
                "preview url": "https://apps.apple.com/ae/app/the-entertainer/id702813714",
                "Start Date": "2020-02-13",
                "End Date": "2021-02-13",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=249&pid=612&did=496&code=259&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "Default Creative",
                        "creativeId": "496",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/249-496.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "AE",
                "OS": "ios",
                "Payout Event": "purchase",
                "Payout Type": "CPS",
                "Payout Value": 4.2,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Automate360-Advertiser Login",
                "Advertiser Id": "109",
                "Campaign id": "250",
                "Campaign Name": "Entertainer_SEA_IOS_CPS_appnlab",
                "Description": "The client wont pay for 3 kind of activities: \n1- Fraud \n2- 0 rev (when user subscribe for free/ not paying package) \n3- adds-on features: it comes from the paying user when they add a new (add-on package). This is only an issue because of how the client send purchase events to AppsFlyer. So it is an event counter rather than unique. on other word: its not new paying user. \n\nWe will be sending you a report for the 3 activities if it happns from your sources after each month\n\nUser Flow:\nInstall – Login/Registration – Purchase",
                "Package Name": "id702813714",
                "preview url": "https://apps.apple.com/ae/app/the-entertainer/id702813714",
                "Start Date": "2020-02-13",
                "End Date": "2021-02-13",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=250&pid=612&did=495&code=810&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "Default Creative",
                        "creativeId": "495",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/250-495.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "CY,MY,MT,ZA",
                "OS": "ios",
                "Payout Event": "purchase",
                "Payout Type": "CPS",
                "Payout Value": 4.2,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Automate360-Advertiser Login",
                "Advertiser Id": "109",
                "Campaign id": "251",
                "Campaign Name": "Entertainer_SG_HK_IOS_CPS_appnlab",
                "Description": "The client wont pay for 3 kind of activities: \n1- Fraud \n2- 0 rev (when user subscribe for free/ not paying package) \n3- adds-on features: it comes from the paying user when they add a new (add-on package). This is only an issue because of how the client send purchase events to AppsFlyer. So it is an event counter rather than unique. on other word: its not new paying user. \n\nWe will be sending you a report for the 3 activities if it happns from your sources after each month\n\nUser Flow:\nInstall – Login/Registration – Purchase",
                "Package Name": "id702813714",
                "preview url": "https://apps.apple.com/ae/app/the-entertainer/id702813714",
                "Start Date": "2020-02-13",
                "End Date": "2021-02-13",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=251&pid=612&did=494&code=381&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "Default Creative",
                        "creativeId": "494",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/251-494.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "HK,SG",
                "OS": "ios",
                "Payout Event": "purchase",
                "Payout Type": "CPS",
                "Payout Value": 4.9,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Cred- Automate",
                "Advertiser Id": "114",
                "Campaign id": "112",
                "Campaign Name": "Cred_AND_IN_CPR_NOV_2019",
                "Description": "approval rate is 50 to 60%. Approval is basis cibil",
                "Package Name": "com.dreamplug.androidapp",
                "preview url": "https://play.google.com/store/apps/details?id=com.dreamplug.androidapp&hl=en_US",
                "Start Date": "2019-11-04",
                "End Date": "2020-11-04",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=112&pid=612&did=248&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "cult- 320 by 250",
                        "creativeId": "248",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/112-248.jpg",
                        "size": "300×250"
                    },
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=112&pid=612&did=249&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "cult- 320 by 480",
                        "creativeId": "249",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/112-249.jpg",
                        "size": "320 x 480"
                    },
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=112&pid=612&did=250&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "cult- 480 by 320",
                        "creativeId": "250",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/112-250.jpg",
                        "size": "480 x 320"
                    },
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=112&pid=612&did=251&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "cult- 568 by 320",
                        "creativeId": "251",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/112-251.jpg",
                        "size": "568 x 320"
                    },
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=112&pid=612&did=252&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "Default Creative",
                        "creativeId": "252",
                        "imageUrl": null,
                        "size": null
                    },
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=112&pid=612&did=312&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "144cby 144",
                        "creativeId": "312",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/112-312.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "IN",
                "OS": "Android",
                "Payout Event": "onboard_gating_successful",
                "Payout Type": "CPS",
                "Payout Value": 0.9,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Cred- Automate",
                "Advertiser Id": "114",
                "Campaign id": "113",
                "Campaign Name": "Cred_iOS_IN_CPR_NOV_2019",
                "Description": "approval rate is 50 to 60%. Approval is basis cibil. Fraud Detection Tool: mFilterit\n\nFraud optimsation: Below 25%",
                "Package Name": "id1428580080",
                "preview url": "https://apps.apple.com/in/app/cred-pay-credit-card-bills/id1428580080",
                "Start Date": "2019-11-04",
                "End Date": "2020-11-04",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=113&pid=612&did=253&code=393&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "Default Creative",
                        "creativeId": "253",
                        "imageUrl": null,
                        "size": null
                    },
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=113&pid=612&did=311&code=393&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "144 by 144",
                        "creativeId": "311",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/113-311.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [
                    {
                        "pub_sub2": "69_11181_117",
                        "pub_sub3": ""
                    }
                ],
                "Country": "IN",
                "OS": "ios",
                "Payout Event": "onboard_gating_successful",
                "Payout Type": "CPS",
                "Payout Value": 1.2,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Indiabulls Housing Finance Limited- Automate",
                "Advertiser Id": "117",
                "Campaign id": "148",
                "Campaign Name": "Indiabulls Shubh_CPR_ADR_IN-Automate",
                "Description": "Demographic: PAN India\nTier 1 and 2 cities\nIncome: more than 5 lac\nAge: 25- 55 Years\nOS: Android\nGeo: India\nThe lead would be validated once the lead has made a/c opening payment successfully.\nFlow– install– > register ( payable event)–> Account open",
                "Package Name": "com.shubh.ibsecurities",
                "preview url": "https://play.google.com/store/apps/details?id=com.shubh.ibsecurities",
                "Start Date": "2019-12-03",
                "End Date": "2020-12-03",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=148&pid=612&did=337&code=734&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "Default Creative – 144*144",
                        "creativeId": "337",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/148-337.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "IN",
                "OS": "Android",
                "Payout Event": "af_nu_mobile_registeration",
                "Payout Type": "CPS",
                "Payout Value": 0.8,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Indiabulls Housing Finance Limited- Automate",
                "Advertiser Id": "117",
                "Campaign id": "261",
                "Campaign Name": "Indiabulls_Dhani_ADR_IN_Cost_Per_Registration_Automate360",
                "Description": "Flow- install–registration ( payable)–> loan submit. \nSoft KPi- loan submit to install has to be 25%.",
                "Package Name": "com.indiaBulls",
                "preview url": "https://play.google.com/store/apps/details?id=com.indiaBulls",
                "Start Date": "2020-02-20",
                "End Date": "2021-02-20",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=261&pid=612&did=509&code=117&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "dhani 144 by 144",
                        "creativeId": "509",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/261-509.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "IN",
                "OS": "Android",
                "Payout Event": "af_mobile_otp_entered",
                "Payout Type": "CPS",
                "Payout Value": 0.26,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Indiabulls Housing Finance Limited- Automate",
                "Advertiser Id": "117",
                "Campaign id": "262",
                "Campaign Name": "Indiabulls_Dhani_iOS_IN_Cost_Per_Registration_Automate360",
                "Description": "Flow- install–registration ( payable)–> loan submit. \nSoft KPi- loan submit to install has to be 25%.",
                "Package Name": "id1273192455",
                "preview url": "https://apps.apple.com/us/app/indiabulls-dhani-phone-se-loan/id1273192455",
                "Start Date": "2020-02-20",
                "End Date": "2021-02-20",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=262&pid=612&did=508&code=650&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "Default Creative",
                        "creativeId": "508",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/262-508.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "IN",
                "OS": "ios",
                "Payout Event": "af_mobile_otp_entered",
                "Payout Type": "CPS",
                "Payout Value": 0.26,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Rehlat- Automate",
                "Advertiser Id": "127",
                "Campaign id": "265",
                "Campaign Name": "Rehlat_ADR_MEA_CPS_Interceptd",
                "Description": "No Fraud Purchase. No VPN or proxy to be used. Intercepted used for identifying fraudulent clicks.\nFlow- Install –> Book ( new customer), Existing customer- Flow– Open the App– > Book. \nNo Fraud. Interceptd is used as Fraud tool",
                "Package Name": "com.app.rehlat",
                "preview url": "https://play.google.com/store/apps/details?id=com.app.rehlat&hl=en_IN",
                "Start Date": "2020-02-21",
                "End Date": "2021-02-21",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=265&pid=612&did=514&code=695&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "rehlat- 144 by 144",
                        "creativeId": "514",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/265-514.png",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "BH,KW,OM,QA,SA,AE",
                "OS": "Android",
                "Payout Event": "PURCHASE",
                "Payout Type": "CPS",
                "Payout Value": 8,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Rehlat- Automate",
                "Advertiser Id": "127",
                "Campaign id": "266",
                "Campaign Name": "Rehlat_iOS_MEA_CPS_Interceptd",
                "Description": "Flow- Install –> Book ( new customer), Existing customer- Flow– Open the App– > Book. \nNo Fraud. Interceptd is used as Fraud tool",
                "Package Name": "id1141857583",
                "preview url": "https://apps.apple.com/us/app/rehlat-%D8%B1%D8%AD%D9%84%D8%A7%D8%AA/id1141857583",
                "Start Date": "2020-02-21",
                "End Date": "2021-02-21",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=266&pid=612&did=513&code=199&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "rehlat 144 by 144",
                        "creativeId": "513",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/266-513.png",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "BH,KW,OM,QA,SA,AE",
                "OS": "ios",
                "Payout Event": "PURCHASE",
                "Payout Type": "CPS",
                "Payout Value": 8,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Adflex",
                "Advertiser Id": "137",
                "Campaign id": "263",
                "Campaign Name": "MBbank_iOS_VN_CPR_Automate360",
                "Description": "KPI:\nCPA, action = new completed registration user in app\n\nFlow action: Install => Submit Phone number => Submit Identity ID => Submit Personal information => OTP code.",
                "Package Name": "id1205807363",
                "preview url": "https://apps.apple.com/us/app/id1205807363",
                "Start Date": "2020-02-20",
                "End Date": "2020-03-14",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=263&pid=612&did=511&code=224&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "mbbank",
                        "creativeId": "511",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/263-511.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "VN",
                "OS": "ios",
                "Payout Event": "DANG KI APP THANH CONG",
                "Payout Type": "CPS",
                "Payout Value": 0.96,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "Adflex",
                "Advertiser Id": "137",
                "Campaign id": "264",
                "Campaign Name": "MBbank_ADR_VN_CPI_Automate360",
                "Description": "Flow action: Install => Submit Phone number => Submit Identity ID => Submit Personal information => OTP code.",
                "Package Name": "com.mbmobile",
                "preview url": "https://play.google.com/store/apps/details?id=com.mbmobile",
                "Start Date": "2020-02-20",
                "End Date": "2020-03-14",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=264&pid=612&did=510&code=291&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "mbabnk",
                        "creativeId": "510",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/264-510.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [
                    {
                        "pub_sub2": "68_2305_10160_10629",
                        "pub_sub3": ""
                    },
                    {
                        "pub_sub2": "94_182",
                        "pub_sub3": ""
                    },
                    {
                        "pub_sub2": "94_55",
                        "pub_sub3": ""
                    }
                ],
                "Country": "VN",
                "OS": "Android",
                "Payout Event": "DANG KI APP THANH CONG",
                "Payout Type": "CPS",
                "Payout Value": 0.8,
                "Payout Currency": "USD"
            },
            {
                "Advertiser Name": "EarlySalary",
                "Advertiser Id": "139",
                "Campaign id": "273",
                "Campaign Name": "EarlySalary_ADR_IN_CPD",
                "Description": "City- Delhi NCR, Mumbai ( Mumbai, Navi Mumbai, Thane ) , Pune , Hyderabad and Secunderabad, Chennai and Coimbatore, Bangalore, Mangalore , Mysore, Gujarat, Ahemedabad Jaipur, Koklata, Bhabaneshwar, Chandigarh, Vishakahpatnam, Vijaywada\n",
                "Package Name": "com.earlysalary.android",
                "preview url": "https://play.google.com/store/apps/details?id=com.earlysalary.android",
                "Start Date": "2020-02-26",
                "End Date": "2021-02-26",
                "Capping": "0",
                "Creatives": [
                    {
                        "creativeTrackingLink": "http://track.intellectlite.com/offer/?cid=273&pid=612&did=516&code=827&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
                        "creativeName": "earlysalary-144 by 144",
                        "creativeId": "516",
                        "imageUrl": "http://www.intellectlite.com/images/creatives/273-516.jpg",
                        "size": "144 x 144"
                    }
                ],
                "Blacklist": [],
                "Country": "IN",
                "OS": "Android",
                "Payout Event": "disbursement",
                "Payout Type": "CPD",
                "Payout Value": 6,
                "Payout Currency": "USD"
            }
        ]

    }
    const responseExample = {
        status: 200,
        status_message: "CampaignFound",
        campaigns: [
            {
                AdvertiserName: "IntellectAdvertiser",
                AdvertiserId: "1",
                Campaignid: "258",
                CampaignName: "SharekhaFeb'20",
                Description:
                    "Flow-install-register. A valid registration should have the name, city and phone number & is defined as net of test, dummy, junk, multiple/duplicate leads.",
                PackageName: "com.sharekhan.androidsharemobile",
                previewurl:
                    "https://play.google.com/store/apps/details?id=com.sharekhan.androidsharemobile&hl=en_IN",
                StartDate: "2020-02-17",
                EndDate: "2021-02-17",
                Capping: "0",
                Creatives: [
                    {
                        creativeTrackingLink:
                            "http://track.intellectlite.com/offer/?cid=258&pid=612&did=504&code=648",
                        creativeName: "Mailer A(18/02/2020)",
                        creativeId: "504",
                        imageUrl: null,
                        size: null,
                    },
                ],
                Blacklist: [],
                Country: "IN",
                OS: "Android",
                PayoutEvent: "Registration - Sharekhan",
                PayoutType: "CPI",
                PayoutValue: 0.4,
                PayoutCurrency: "USD",
            },
        ],
    };

    const parameters = [
        { field: "Advertiser Name", description: "我们平台上的广告商名称" },
        { field: "Advertiser Id", description: "我们平台上的广告商 ID" },
        { field: "Campaign id", description: "活动 ID" },
        { field: "Campaign Name", description: "活动名称" },
        { field: "Description", description: "活动描述" },
        { field: "Package Name", description: "Google Play 商店软件包名称或 Play 商店 ID" },
        { field: "preview url", description: "Google Play 或 iTunes 预览网址" },
        { field: "Start Date", description: "活动开始日期" },
        { field: "End date", description: "活动结束日期" },
        { field: "Capping", description: "每日支付活动的上限" },
        { field: "creativeTrackingLink", description: "广告素材的点击追踪链接" },
        { field: "creativeName", description: "广告素材名称" },
        { field: "creativeId", description: "广告素材的 ID" },
        { field: "imageUrl", description: "创意图片网址。支持格式 jpg、png" },
        { field: "size", description: "广告图片尺寸，如 320x50, 300x250 等" },
        { field: "Blacklist", description: "黑名单源的信息" },
        { field: "Country", description: "两个字母的 ISO 国家代码" },
        { field: "OS", description: "ios 或 android" },
        { field: "Payout Event", description: "付款事件" },
        { field: "Payout Type", description: "CPI,CPS,CPL,CPD,CPM,CPC" },
        { field: "Payout Value", description: "支付价值" },
        { field: "Payout Currency", description: "支付金额的三字母 ISO 代码" },
    ];

    return (
        <>
            <Navbar />
            <div class="container page-contents">
                <div class="post-1196 page type-page status-publish hentry">
                    <h1>API Documentation Version 2 ( Date 28 Feb 2020)</h1>
                    <p class="p1"><strong></strong></p>
                    <p class="p1" > Blacklist pub_sub2  pub_sub3 campaign </p>
                    <p class="p1"><strong></strong></p>
                    <p class="p1"><span class="s1"></span>API<span class="s1"></span>automate360.io<span class="s1"></span>publisher<span class="s1"></span>API<span class="s1"></span>publisher<span class="s1"></span>API key<span class="s1"></span>automate360.io
                        <span class="s1"></span>publisher ID<span class="s1"></span>API key<span class="s1"></span></p>
                    <p class="p2"><span class="s2">s2s</span><span class="s2">API</span><span class="s2">offer</span><span class="s2">30</span></p>
                    <ul>
                        <li class="p1"><span class="s1">30</span>
                            <ul>
                                <li>
                                    <p class="p1">imageUrl</p>
                                </li>
                                <li>
                                    <p class="p1">creativeTrackingLink</p>
                                </li>
                                <li>
                                    <p class="p1">Blacklist</p>
                                </li>
                                <li>
                                    <p class="p1">Payout Value</p>
                                </li>
                                <li>
                                    <p class="p1">Capping</p>
                                </li>
                            </ul>
                        </li>
                        <li class="p1"><span class="s1">offer</span><span class="s1">offer</span><span class="s1">API</span><span class="s1">offer</span><span class="s1">offer</span><span class="s1">API</span>
                            <span class="s1">–</span><span class="s1">offer</span><span class="s1"> t1</span><span class="s1">API</span><span class="s1">t2</span><span class="s1">API</span><span class="s1"> API</span>
                            <span class="s1">30</span><span class="s1"></span><span class="s1">offer</span></li>
                        <li>
                            <p class="p1"><span class="s1">offer</span><span class="s1">campaign</span></p>
                        </li>
                    </ul>

                    <div>
                        <h3 class="text-2xl font-semibold mb-2">Parameter Notes</h3><ul class="list-disc pl-5 space-y-2"><li>Click ID: <code>pub_sub</code></li><li>Source: <code>pub_sub2</code></li><li>Sub-source: <code>pub_sub3</code></li><li>iOS Device ID: <code>device_id</code></li><li>Google Advertising ID: <code>google_aid</code></li></ul>
                    </div>


                    <h2><span >Sample API call</span></h2>
                    <p>&nbsp;</p>
                    <h3><strong>Get Method</strong></h3>
                    <p>&nbsp;</p>
                    <p>http://www.intellectlite.com/api/offers-v2.php?apikey=578&amp;js=false</p>
                    <h3><strong>POST Method</strong></h3>
                    <p>&nbsp;</p>
                    <h3>API Response Parameters</h3>
                    <p>&nbsp;</p>
                    <div class="tableMainContent">
                        <table class="tablecontent">
                            <thead>
                                <tr>
                                    <td><b>Field Name</b></td>
                                    <td><b>Description</b></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span >Advertiser Name</span></td>
                                    <td>我们平台上的广告商名称</td>
                                </tr>
                                <tr>
                                    <td><span >Advertiser Id</span></td>
                                    <td>我们平台上的广告商 ID</td>
                                </tr>
                                <tr>
                                    <td><span >Campaign id</span></td>
                                    <td>活动 ID</td>
                                </tr>
                                <tr>
                                    <td><span >Campaign Name</span></td>
                                    <td>活动名称</td>
                                </tr>
                                <tr>
                                    <td><span >Description</span></td>
                                    <td>活动描述</td>
                                </tr>
                                <tr>
                                    <td><span >Package Name</span></td>
                                    <td>Google Play 商店软件包名称或 Play 商店 ID</td>
                                </tr>
                                <tr>
                                    <td><span >preview url</span></td>
                                    <td>Google Play 或 itune 预览网址</td>
                                </tr>
                                <tr>
                                    <td><span >Start Date</span></td>
                                    <td>活动开始日期</td>
                                </tr>
                                <tr>
                                    <td><span >End date</span></td>
                                    <td>活动结束日期</td>
                                </tr>
                                <tr>
                                    <td><span >Capping</span></td>
                                    <td>每日支付活动的上限</td>
                                </tr>
                                <tr>
                                    <td><span >creativeTrackingLink</span></td>
                                    <td> http://track.intellectlite.com/offer/?cid=87&amp;pid=582&amp;code=563&amp;pub_sub=&amp;pub_sub2=&amp;pub_sub3=&amp;pub_sub4=&amp;pub_sub5=&amp;device_id=&amp;google_aid=
                                        Publisher should pass their<p></p>
                                        <p>click id in pub_sub parameter.</p>
                                        <p>their source/pub information in pub_sub2</p>
                                        <p>their sub sub source information in pub_sub3</p>
                                        <p>pub_sub4, pub_sub5 any other information</p>
                                        <p>device_id should be used to pass the iOS Advertising identifier</p>
                                        <p>google_aid should be used to pass the Google Advertising identifier.</p></td>
                                </tr>
                                <tr>
                                    <td><span >creativeName:</span></td>
                                    <td>广告素材名称</td>
                                </tr>
                                <tr>
                                    <td><span >creativeId</span></td>
                                    <td>广告素材的 ID</td>
                                </tr>
                                <tr>
                                    <td><span >imageUrl</span></td>
                                    <td><span >创意图片网址。支持格式 jpg、png、</span></td>
                                </tr>
                                <tr>
                                    <td><span >size</span></td>
                                    <td><p></p>
                                        <p>320 * 50</p>
                                        <p>300 * 250</p>
                                        <p>250 * 250</p>
                                        <p>120* 20</p>
                                        <p>168 * 28</p>
                                        <p>216 *36</p>
                                        <p>468 * 60</p>
                                        <p>728 * 90</p>
                                        <p>144 * 144</p>
                                        <p>320 * 100</p>
                                        <p>336 * 280</p>
                                        <p>120 * 600</p>
                                        <p>160 * 600</p>
                                        <p>300 * 600</p>
                                        <p>320 * 480</p>
                                        <p>480 * 320</p>
                                        <p>768 * 1024</p>
                                        <p>1024 * 768</p>
                                        <p>1200 * 627</p>
                                        <p>1200 * 624</p>
                                        <p>1200 * 628</p></td>
                                </tr>
                                <tr>
                                    <td><span >Blacklist</span></td>
                                    <td>包含点击 pub_sub2 和 pub_sub3 期间发送的值的数组。此节点包含应列入黑名单的源信息。</td>
                                </tr>
                                <tr>
                                    <td><span >Country</span></td>
                                    <td>两个字母的 ISO 国家代码。多个国家代码可以用 "," 分隔。</td>
                                </tr>
                                <tr>
                                    <td><span >OS</span></td>
                                    <td><span >ios or android</span></td>
                                </tr>
                                <tr>
                                    <td><span >Payout Event</span></td>
                                    <td>付款日期</td>
                                </tr>
                                <tr>
                                    <td><span >Payout Type</span></td>
                                    <td><span >CPI,CPS,CPL,CPD,CPM,CPC</span></td>
                                </tr>
                                <tr>
                                    <td><span >Payout Value</span></td>
                                    <td>支付价值</td>
                                </tr>
                                <tr>
                                    <td><span >Payout Currency</span></td>
                                    <td>支付金额的三字母 ISO 国家代码</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <br></br>

       <div style={{ textAlign: "left", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
  <ReactJson src={sampleData} />
</div>

                    <p><span id="more-1196"></span></p>
                </div>
            </div>
            <Footer />

<style jsx="true">{`

 ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
    text-align: left;
  }

  ul li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.6;
    text-align: left;
    color: #2c3e50;
    list-style-type: disc; /* You can use circle, square, or none */
  }

  ul ul {
    margin-left: 1.5rem;
    text-align: left;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    text-align: left;
    font-family: Arial, sans-serif;
  }

  .page-contents {
    background-color: #fff;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  h1, h2, h3 {
    color: #2c3e50;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
    border-bottom: 2px solid #ecf0f1;
    padding-bottom: 0.3rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #34495e;
    margin-bottom: 1rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  ul li {
    margin-bottom: 0.5rem;
  }

  .tableMainContent {
    overflow-x: auto;
  }

  .tablecontent {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    font-size: 0.95rem;
  }

  .tablecontent th,
  .tablecontent td {
    border: 1px solid #ddd;
    padding: 0.75rem;
    text-align: left;
  }

  .tablecontent th {
    background-color: #f5f5f5;
    font-weight: bold;
  }

  .tablecontent tr:nth-child(even) {
    background-color: #fafafa;
  }
`}</style>


        </>
    );
}
