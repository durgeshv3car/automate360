"use client";

import React from "react";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";

export default function Apidocumantationversion2mandarin() {
  return (
   <>
   <Navbar/>
   <div className="text-gray-800 font-sans px-4 py-12 max-w-6xl mx-auto space-y-12">
      {/* Title and Changelog */}
      <section>
        <h2 className="text-4xl font-bold mb-2">API Documentation Version 2</h2>
        <p className="text-gray-500 mb-4">Date: 28 Feb 2020</p>
        <h3 className="text-2xl font-semibold mb-2">Changelog</h3>
        <p>
          Added field - <code className="bg-gray-100 px-1 py-0.5 rounded">Blacklist</code>. This array contains sub-source values sent during the click in <code>pub_sub2</code> and <code>pub_sub3</code>. These should be used for campaign-level blacklisting.
        </p>
      </section>

      {/* Introduction */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">Introduction</h3>
        <p>This API is for publishers who want to get offers and their details from the automate360.io platform. Publishers need an API key, which is their Publisher ID from the platform. Please get it from your Account Manager.</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li>This is a server-to-server API call. Offers should be refreshed every 30 minutes for updates.</li>
          <li>Offer data like <code>imageUrl</code>, <code>creativeTrackingLink</code>, <code>Blacklist</code>, <code>Payout Value</code>, and <code>Capping</code> may change, so frequent refreshes are recommended.</li>
          <li>If an offer disappears from the API, it is paused and should be paused at your end. If it reappears, it should be reactivated during the next refresh.</li>
          <li>New creatives may be added to a campaign. These should be added as they appear.</li>
        </ul>
      </section>

      {/* Sample API Call */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">Sample API Call</h3>
        <p className="mb-2 font-medium">GET Request:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          http://www.intellectlite.com/api/offers-v2.php?apikey=578&amp;js=false
        </pre>
        <p className="mt-4 font-medium">POST Request:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">(Not provided in documentation)</pre>
      </section>

      {/* Parameters Note */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">Parameter Notes</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Click ID: <code>pub_sub</code></li>
          <li>Source: <code>pub_sub2</code></li>
          <li>Sub-source: <code>pub_sub3</code></li>
          <li>iOS Device ID: <code>device_id</code></li>
          <li>Google Advertising ID: <code>google_aid</code></li>
        </ul>
      </section>

      {/* API Parameters Table */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">API Response Field Descriptions</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Field</th>
                <th className="border p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="border p-2">status</td><td className="border p-2">Status code, e.g., 200 = Success</td></tr>
              <tr><td className="border p-2">status_message</td><td className="border p-2">Status message, e.g., "CampaignFound"</td></tr>
              <tr><td className="border p-2">campaigns</td><td className="border p-2">Array containing campaign objects</td></tr>
              <tr><td className="border p-2">Advertiser Name</td><td className="border p-2">Name of the advertiser</td></tr>
              <tr><td className="border p-2">Advertiser Id</td><td className="border p-2">ID of the advertiser</td></tr>
              <tr><td className="border p-2">Campaign id</td><td className="border p-2">Campaign ID</td></tr>
              <tr><td className="border p-2">Campaign Name</td><td className="border p-2">Name of the campaign</td></tr>
              <tr><td className="border p-2">Description</td><td className="border p-2">Campaign description</td></tr>
              <tr><td className="border p-2">Package Name</td><td className="border p-2">App package name</td></tr>
              <tr><td className="border p-2">preview url</td><td className="border p-2">App store preview URL</td></tr>
              <tr><td className="border p-2">Start Date / End date</td><td className="border p-2">Campaign validity period</td></tr>
              <tr><td className="border p-2">Capping</td><td className="border p-2">Daily conversion cap</td></tr>
              <tr><td className="border p-2">Creatives</td><td className="border p-2">Array of creative objects</td></tr>
              <tr><td className="border p-2">creativeTrackingLink</td><td className="border p-2">Click tracking URL</td></tr>
              <tr><td className="border p-2">creativeName / creativeId</td><td className="border p-2">Creative name / ID</td></tr>
              <tr><td className="border p-2">imageUrl</td><td className="border p-2">Image URL (.jpg/.png)</td></tr>
              <tr><td className="border p-2">size</td><td className="border p-2">Creative size in px (e.g., 320x50)</td></tr>
              <tr><td className="border p-2">Blacklist</td><td className="border p-2">Array of blacklisted pub_sub2/pub_sub3 values</td></tr>
              <tr><td className="border p-2">Country</td><td className="border p-2">Comma-separated ISO country codes</td></tr>
              <tr><td className="border p-2">OS</td><td className="border p-2">Android or iOS</td></tr>
              <tr><td className="border p-2">Payout Event / Type / Value / Currency</td><td className="border p-2">Event name, payout model, amount, currency</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sample Response */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">Sample API Response</h3>
        <p className="text-sm text-gray-500 mb-2">Below is the structure of the full API response:</p>
        <pre className="bg-black text-green-200 text-xs p-4 rounded overflow-auto whitespace-pre-wrap text-left">
{`{
“status”200,
“status_message”:“CampaignFound”,
“campaigns”:[
{
“AdvertiserName”:“IntellectAdvertiser”,
“AdvertiserId”:“1”,
“Campaignid”:“258”,
“CampaignName”:“SharekhaFeb’20”,
“Description”:“Flow-instal–register.Avalidregistrationshouldhavethe name, city and phone number & is defined as net of test, dummy, junk, multiple/duplicate leads and will target the cities given by us. Registrations with incorrec/ incomplete informatiowill be considered as invalid”,
“Package Name”: “com.sharekhan.androidsharemobile”,
“previewurl”:#8220;https://play.google.com/store/apps/details?id=com.sharekhan.androidsharemobile&hl=en_IN”,
“StartDate”:“2020-02-17”,
“EndDate”:“2021-02-17”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:#8220;http://track.intellectlite.com/offer/?cid=258&pid=612&did=504&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “Mailer A(18/02/2020)”,
“creativeId”: “504”,
“imageUrl”: null,
“size”: null
},
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=258&pid=612&did=505&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “Mailer B(18/02/2020)”,
“creativeId”: “505”,
“imageUrl”: null,
“size”: null
},
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=258&pid=612&did=512&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “sharekhan-144 by 144”,
“creativeId”: “512”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/258-512.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “IN”,
“OS”: “Android”,
“Payout Event”: “Registration – Sharekhan”,
“Payout Type”: “CPI”,
“Payout Value”: 0.4,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Intellect Advertiser”,
“Advertiser Id”: “1”,
“Campaign id”: “259”,
“Campaign Name”: “Vedantu – Feb’20”,
“Description”: “Cost Per Registration. FLow- Install–> Registration.Please note that only these 10 cities need to be targeted (any other city will not be considered): Bengaluru, Kolkata, Mumbai, Indore, Chennai, Jaipur, Guwahati, Bhubaneshwar, Coimbatore, Ranchi.”,
“Package Name”: “com.vedantu.app”,
“preview url”: “https://play.google.com/store/apps/details?id=com.vedantu.app”,
“Start Date”: “2020-02-17”,
“End Date”: “2021-02-17”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=259&pid=612&did=507&code=262&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “Default Creative”,
“creativeId”: “507”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/259-507.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “IN”,
“OS”: “Android”,
“Payout Event”: “Registration – Vedantu”,
“Payout Type”: “CPI”,
“Payout Value”: 0.18,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Intellect Advertiser”,
“Advertiser Id”: “1”,
“Campaign id”: “268”,
“Campaign Name”: “Credit Mantri App – Feb’20”,
“Description”: “target group- Users greater than 26 years\n\nUsers who have visited / installed competitor, BFSI, mobile wallet apps\n\nUsers who are interested in loans and credit cards\n\nUsers who have a bad credit score and want to improve it – This is the most important target segment for us. \n\nOwn two wheeler\n\nOwn four wheeler\n\nHave bank accounts\n\nInterested in financial products”,
“Package Name”: “com.creditmantri”,
“preview url”: “https://play.google.com/store/apps/details?id=com.creditmantri”,
“Start Date”: “2020-02-24”,
“End Date”: “2021-02-24”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=268&pid=612&did=517&code=893&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “credit mantri”,
“creativeId”: “517”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/268-517.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “IN”,
“OS”: “Android”,
“Payout Event”: “Red – Credit Mantri,Green – Credit Mantri”,
“Payout Type”: “CPI”,
“Payout Value”: 0.35,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Automate360-Advertiser Login”,
“Advertiser Id”: “109”,
“Campaign id”: “248”,
“Campaign Name”: “Entertainer_MENA_IOS_CPS_appnlab”,
“Description”: “The client wont pay for 3 kind of activities: \n1- Fraud \n2- 0 rev (when user subscribe for free/ not paying package) \n3- adds-on features: it comes from the paying user when they add a new (add-on package). This is only an issue because of how the client send purchase events to AppsFlyer. So it is an event counter rather than unique. on other word: its not new paying user. \n\nWe will be sending you a report for the 3 activities if it happns from your sources after each month\n\nUser Flow:\nInstall – Login/Registration – Purchase”,
“Package Name”: “id702813714”,
“preview url”: “https://apps.apple.com/ae/app/the-entertainer/id702813714”,
“Start Date”: “2020-02-13”,
“End Date”: “2021-02-13”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=248&pid=612&did=497&code=592&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “Default Creative”,
“creativeId”: “497”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/248-497.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “BH,KW,OM,QA,SA”,
“OS”: “ios”,
“Payout Event”: “purchase”,
“Payout Type”: “CPS”,
“Payout Value”: 4.9,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Automate360-Advertiser Login”,
“Advertiser Id”: “109”,
“Campaign id”: “249”,
“Campaign Name”: “Entertainer_UAE_IOS_CPS_appnlab”,
“Description”: “The client wont pay for 3 kind of activities: \n1- Fraud \n2- 0 rev (when user subscribe for free/ not paying package) \n3- adds-on features: it comes from the paying user when they add a new (add-on package). This is only an issue because of how the client send purchase events to AppsFlyer. So it is an event counter rather than unique. on other word: its not new paying user. \n\nWe will be sending you a report for the 3 activities if it happns from your sources after each month\n\nUser Flow:\nInstall – Login/Registration – Purchase”,
“Package Name”: “id702813714”,
“preview url”: “https://apps.apple.com/ae/app/the-entertainer/id702813714”,
“Start Date”: “2020-02-13”,
“End Date”: “2021-02-13”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=249&pid=612&did=496&code=259&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “Default Creative”,
“creativeId”: “496”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/249-496.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “AE”,
“OS”: “ios”,
“Payout Event”: “purchase”,
“Payout Type”: “CPS”,
“Payout Value”: 4.2,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Automate360-Advertiser Login”,
“Advertiser Id”: “109”,
“Campaign id”: “250”,
“Campaign Name”: “Entertainer_SEA_IOS_CPS_appnlab”,
“Description”: “The client wont pay for 3 kind of activities: \n1- Fraud \n2- 0 rev (when user subscribe for free/ not paying package) \n3- adds-on features: it comes from the paying user when they add a new (add-on package). This is only an issue because of how the client send purchase events to AppsFlyer. So it is an event counter rather than unique. on other word: its not new paying user. \n\nWe will be sending you a report for the 3 activities if it happns from your sources after each month\n\nUser Flow:\nInstall – Login/Registration – Purchase”,
“Package Name”: “id702813714”,
“preview url”: “https://apps.apple.com/ae/app/the-entertainer/id702813714”,
“Start Date”: “2020-02-13”,
“End Date”: “2021-02-13”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=250&pid=612&did=495&code=810&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “Default Creative”,
“creativeId”: “495”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/250-495.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “CY,MY,MT,ZA”,
“OS”: “ios”,
“Payout Event”: “purchase”,
“Payout Type”: “CPS”,
“Payout Value”: 4.2,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Automate360-Advertiser Login”,
“Advertiser Id”: “109”,
“Campaign id”: “251”,
“Campaign Name”: “Entertainer_SG_HK_IOS_CPS_appnlab”,
“Description”: “The client wont pay for 3 kind of activities: \n1- Fraud \n2- 0 rev (when user subscribe for free/ not paying package) \n3- adds-on features: it comes from the paying user when they add a new (add-on package). This is only an issue because of how the client send purchase events to AppsFlyer. So it is an event counter rather than unique. on other word: its not new paying user. \n\nWe will be sending you a report for the 3 activities if it happns from your sources after each month\n\nUser Flow:\nInstall – Login/Registration – Purchase”,
“Package Name”: “id702813714”,
“preview url”: “https://apps.apple.com/ae/app/the-entertainer/id702813714”,
“Start Date”: “2020-02-13”,
“End Date”: “2021-02-13”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=251&pid=612&did=494&code=381&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “Default Creative”,
“creativeId”: “494”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/251-494.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “HK,SG”,
“OS”: “ios”,
“Payout Event”: “purchase”,
“Payout Type”: “CPS”,
“Payout Value”: 4.9,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Cred- Automate”,
“Advertiser Id”: “114”,
“Campaign id”: “112”,
“Campaign Name”: “Cred_AND_IN_CPR_NOV_2019”,
“Description”: “approval rate is 50 to 60%. Approval is basis cibil”,
“Package Name”: “com.dreamplug.androidapp”,
“preview url”: “https://play.google.com/store/apps/details?id=com.dreamplug.androidapp&hl=en_US”,
“Start Date”: “2019-11-04”,
“End Date”: “2020-11-04”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=112&pid=612&did=248&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “cult- 320 by 250”,
“creativeId”: “248”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/112-248.jpg”,
“size”: “300×250”
},
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=112&pid=612&did=249&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “cult- 320 by 480”,
“creativeId”: “249”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/112-249.jpg”,
“size”: “320 x 480”
},
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=112&pid=612&did=250&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “cult- 480 by 320”,
“creativeId”: “250”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/112-250.jpg”,
“size”: “480 x 320”
},
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=112&pid=612&did=251&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “cult- 568 by 320”,
“creativeId”: “251”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/112-251.jpg”,
“size”: “568 x 320”
},
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=112&pid=612&did=252&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “Default Creative”,
“creativeId”: “252”,
“imageUrl”: null,
“size”: null
},
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=112&pid=612&did=312&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “144cby 144”,
“creativeId”: “312”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/112-312.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “IN”,
“OS”: “Android”,
“Payout Event”: “onboard_gating_successful”,
“Payout Type”: “CPS”,
“Payout Value”: 0.9,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Cred- Automate”,
“Advertiser Id”: “114”,
“Campaign id”: “113”,
“Campaign Name”: “Cred_iOS_IN_CPR_NOV_2019”,
“Description”: “approval rate is 50 to 60%. Approval is basis cibil. Fraud Detection Tool: mFilterit\n\nFraud optimsation: Below 25%”,
“Package Name”: “id1428580080”,
“preview url”: “https://apps.apple.com/in/app/cred-pay-credit-card-bills/id1428580080”,
“Start Date”: “2019-11-04”,
“End Date”: “2020-11-04”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=113&pid=612&did=253&code=393&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “Default Creative”,
“creativeId”: “253”,
“imageUrl”: null,
“size”: null
},
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=113&pid=612&did=311&code=393&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “144 by 144”,
“creativeId”: “311”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/113-311.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [
{
“pub_sub2”: “69_11181_117”,
“pub_sub3”: “”
}
],
“Country”: “IN”,
“OS”: “ios”,
“Payout Event”: “onboard_gating_successful”,
“Payout Type”: “CPS”,
“Payout Value”: 1.2,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Indiabulls Housing Finance Limited- Automate”,
“Advertiser Id”: “117”,
“Campaign id”: “148”,
“Campaign Name”: “Indiabulls Shubh_CPR_ADR_IN-Automate”,
“Description”: “Demographic: PAN India\nTier 1 and 2 cities\nIncome: more than 5 lac\nAge: 25- 55 Years\nOS: Android\nGeo: India\nThe lead would be validated once the lead has made a/c opening payment successfully.\nFlow– install– > register ( payable event)–> Account open”,
“Package Name”: “com.shubh.ibsecurities”,
“preview url”: “https://play.google.com/store/apps/details?id=com.shubh.ibsecurities”,
“Start Date”: “2019-12-03”,
“End Date”: “2020-12-03”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=148&pid=612&did=337&code=734&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “Default Creative – 144*144”,
“creativeId”: “337”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/148-337.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “IN”,
“OS”: “Android”,
“Payout Event”: “af_nu_mobile_registeration”,
“Payout Type”: “CPS”,
“Payout Value”: 0.8,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Indiabulls Housing Finance Limited- Automate”,
“Advertiser Id”: “117”,
“Campaign id”: “261”,
“Campaign Name”: “Indiabulls_Dhani_ADR_IN_Cost_Per_Registration_Automate360”,
“Description”: “Flow- install–registration ( payable)–> loan submit. \nSoft KPi- loan submit to install has to be 25%.”,
“Package Name”: “com.indiaBulls”,
“preview url”: “https://play.google.com/store/apps/details?id=com.indiaBulls”,
“Start Date”: “2020-02-20”,
“End Date”: “2021-02-20”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=261&pid=612&did=509&code=117&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “dhani 144 by 144”,
“creativeId”: “509”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/261-509.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “IN”,
“OS”: “Android”,
“Payout Event”: “af_mobile_otp_entered”,
“Payout Type”: “CPS”,
“Payout Value”: 0.26,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Indiabulls Housing Finance Limited- Automate”,
“Advertiser Id”: “117”,
“Campaign id”: “262”,
“Campaign Name”: “Indiabulls_Dhani_iOS_IN_Cost_Per_Registration_Automate360”,
“Description”: “Flow- install–registration ( payable)–> loan submit. \nSoft KPi- loan submit to install has to be 25%.”,
“Package Name”: “id1273192455”,
“preview url”: “https://apps.apple.com/us/app/indiabulls-dhani-phone-se-loan/id1273192455”,
“Start Date”: “2020-02-20”,
“End Date”: “2021-02-20”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=262&pid=612&did=508&code=650&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “Default Creative”,
“creativeId”: “508”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/262-508.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “IN”,
“OS”: “ios”,
“Payout Event”: “af_mobile_otp_entered”,
“Payout Type”: “CPS”,
“Payout Value”: 0.26,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Rehlat- Automate”,
“Advertiser Id”: “127”,
“Campaign id”: “265”,
“Campaign Name”: “Rehlat_ADR_MEA_CPS_Interceptd”,
“Description”: “No Fraud Purchase. No VPN or proxy to be used. Intercepted used for identifying fraudulent clicks.\nFlow- Install –> Book ( new customer), Existing customer- Flow– Open the App– > Book. \nNo Fraud. Interceptd is used as Fraud tool”,
“Package Name”: “com.app.rehlat”,
“preview url”: “https://play.google.com/store/apps/details?id=com.app.rehlat&hl=en_IN”,
“Start Date”: “2020-02-21”,
“End Date”: “2021-02-21”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=265&pid=612&did=514&code=695&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “rehlat- 144 by 144”,
“creativeId”: “514”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/265-514.png”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “BH,KW,OM,QA,SA,AE”,
“OS”: “Android”,
“Payout Event”: “PURCHASE”,
“Payout Type”: “CPS”,
“Payout Value”: 8,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Rehlat- Automate”,
“Advertiser Id”: “127”,
“Campaign id”: “266”,
“Campaign Name”: “Rehlat_iOS_MEA_CPS_Interceptd”,
“Description”: “Flow- Install –> Book ( new customer), Existing customer- Flow– Open the App– > Book. \nNo Fraud. Interceptd is used as Fraud tool”,
“Package Name”: “id1141857583”,
“preview url”: “https://apps.apple.com/us/app/rehlat-%D8%B1%D8%AD%D9%84%D8%A7%D8%AA/id1141857583”,
“Start Date”: “2020-02-21”,
“End Date”: “2021-02-21”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=266&pid=612&did=513&code=199&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “rehlat 144 by 144”,
“creativeId”: “513”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/266-513.png”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “BH,KW,OM,QA,SA,AE”,
“OS”: “ios”,
“Payout Event”: “PURCHASE”,
“Payout Type”: “CPS”,
“Payout Value”: 8,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Adflex”,
“Advertiser Id”: “137”,
“Campaign id”: “263”,
“Campaign Name”: “MBbank_iOS_VN_CPR_Automate360”,
“Description”: “KPI:\nCPA, action = new completed registration user in app\n\nFlow action: Install => Submit Phone number => Submit Identity ID => Submit Personal information => OTP code.”,
“Package Name”: “id1205807363”,
“preview url”: “https://apps.apple.com/us/app/id1205807363”,
“Start Date”: “2020-02-20”,
“End Date”: “2020-03-14”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=263&pid=612&did=511&code=224&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “mbbank”,
“creativeId”: “511”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/263-511.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “VN”,
“OS”: “ios”,
“Payout Event”: “DANG KI APP THANH CONG”,
“Payout Type”: “CPS”,
“Payout Value”: 0.96,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “Adflex”,
“Advertiser Id”: “137”,
“Campaign id”: “264”,
“Campaign Name”: “MBbank_ADR_VN_CPI_Automate360”,
“Description”: “Flow action: Install => Submit Phone number => Submit Identity ID => Submit Personal information => OTP code.”,
“Package Name”: “com.mbmobile”,
“preview url”: “https://play.google.com/store/apps/details?id=com.mbmobile”,
“Start Date”: “2020-02-20”,
“End Date”: “2020-03-14”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=264&pid=612&did=510&code=291&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “mbabnk”,
“creativeId”: “510”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/264-510.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [
{
“pub_sub2”: “68_2305_10160_10629”,
“pub_sub3”: “”
},
{
“pub_sub2”: “94_182”,
“pub_sub3”: “”
},
{
“pub_sub2”: “94_55”,
“pub_sub3”: “”
}
],
“Country”: “VN”,
“OS”: “Android”,
“Payout Event”: “DANG KI APP THANH CONG”,
“Payout Type”: “CPS”,
“Payout Value”: 0.8,
“Payout Currency”: “USD”
},
{
“Advertiser Name”: “EarlySalary”,
“Advertiser Id”: “139”,
“Campaign id”: “273”,
“Campaign Name”: “EarlySalary_ADR_IN_CPD”,
“Description”: “City- Delhi NCR, Mumbai ( Mumbai, Navi Mumbai, Thane ) , Pune , Hyderabad and Secunderabad, Chennai and Coimbatore, Bangalore, Mangalore , Mysore, Gujarat, Ahemedabad Jaipur, Koklata, Bhabaneshwar, Chandigarh, Vishakahpatnam, Vijaywada\n”,
“Package Name”: “com.earlysalary.android”,
“preview url”: “https://play.google.com/store/apps/details?id=com.earlysalary.android”,
“Start Date”: “2020-02-26”,
“End Date”: “2021-02-26”,
“Capping”: “0”,
“Creatives”: [
{
“creativeTrackingLink”: “http://track.intellectlite.com/offer/?cid=273&pid=612&did=516&code=827&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”: “earlysalary-144 by 144”,
“creativeId”: “516”,
“imageUrl”: “http://www.intellectlite.com/images/creatives/273-516.jpg”,
“size”: “144 x 144”
}
],
“Blacklist”: [],
“Country”: “IN”,
“OS”: “Android”,
“Payout Event”: “disbursement”,
“Payout Type”: “CPD”,
“Payout Value”: 6,
“Payout Currency”: “USD”
}
]
}`}
        </pre>
      </section>
    </div>
   <Footer/>
   </>
  );
}
