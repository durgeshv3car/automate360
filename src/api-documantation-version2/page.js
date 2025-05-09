"use client";

import React from "react";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";

export default function ApiDocumentationVersion2() {
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
          Added a new node - <code className="bg-gray-100 px-1 py-0.5 rounded">Blacklist</code>. This array contains the sub-source values sent during click in <code>pub_sub2</code> and <code>pub_sub3</code>. This should be used for blacklisting at the campaign level.
        </p>
      </section>

      {/* Introduction */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">Introduction</h3>
        <p>This API is for publishers who want to get offers and their details from the automate360.io platform. Publishers need an API key, which is their publisher ID from the automate360.io platform. Please get it from your Account Manager.</p>
        <ul className="list-disc pl-5 mt-4 space-y-2">
          <li>This is a server-to-server API call. Offers should be refreshed every 30 minutes for updated details.</li>
          <li>Offer data (like <code>imageUrl</code>, <code>creativeTrackingLink</code>, <code>Blacklist</code>, <code>Payout Value</code>, and <code>Capping</code>) may change, so refresh frequently.</li>
          <li>If an offer disappears from the API, it is paused and should be paused on your end. If it reappears, it should be reactivated at your end on the next 30-minute cycle.</li>
          <li>New creatives may be added; add them to your campaign when they appear.</li>
        </ul>
      </section>

      {/* Sample API Call */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">Sample API Call</h3>
        <p className="mb-2 font-medium">GET Method:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          http://www.intellectlite.com/api/offers-v2.php?apikey=578&amp;js=false
        </pre>
        <p className="mt-4 font-medium">POST Method:</p>
        <p className="text-gray-500">(POST implementation not provided in example)</p>
      </section>

      {/* API Parameters Table */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">API Response Parameters</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Field Name</th>
                <th className="border p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr><td className="border p-2">Advertiser Name</td><td className="border p-2">Name of the advertiser on our platform</td></tr>
              <tr><td className="border p-2">Advertiser Id</td><td className="border p-2">ID of the advertiser on our platform</td></tr>
              <tr><td className="border p-2">Campaign id</td><td className="border p-2">Campaign ID</td></tr>
              <tr><td className="border p-2">Campaign Name</td><td className="border p-2">Campaign name</td></tr>
              <tr><td className="border p-2">Description</td><td className="border p-2">Campaign description</td></tr>
              <tr><td className="border p-2">Package Name</td><td className="border p-2">App's package name</td></tr>
              <tr><td className="border p-2">preview url</td><td className="border p-2">Play Store or iTunes preview URL</td></tr>
              <tr><td className="border p-2">Start Date / End date</td><td className="border p-2">Campaign validity period</td></tr>
              <tr><td className="border p-2">Capping</td><td className="border p-2">Daily cap for payable events</td></tr>
              <tr><td className="border p-2">creativeTrackingLink</td><td className="border p-2">URL for tracking clicks with multiple pub_sub fields</td></tr>
              <tr><td className="border p-2">creativeName / creativeId</td><td className="border p-2">Name and ID of the creative</td></tr>
              <tr><td className="border p-2">imageUrl</td><td className="border p-2">Creative image URL (.jpg, .png)</td></tr>
              <tr><td className="border p-2">size</td><td className="border p-2">Creative size in px (e.g., 320x50, 300x250)</td></tr>
              <tr><td className="border p-2">Blacklist</td><td className="border p-2">Array of pub_sub2/pub_sub3 values to blacklist</td></tr>
              <tr><td className="border p-2">Country</td><td className="border p-2">Two-letter ISO codes (comma-separated)</td></tr>
              <tr><td className="border p-2">OS</td><td className="border p-2">Android / iOS</td></tr>
              <tr><td className="border p-2">Payout Event / Type / Value / Currency</td><td className="border p-2">Event name, payout model (CPI, CPL, etc.), value, and currency</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sample Response */}
      <section>
        <h3 className="text-2xl font-semibold mb-2">API Sample Response</h3>
        <p className="text-sm text-gray-500 mb-2">Example JSON with multiple campaigns and creatives</p>
        <pre className="bg-black text-green-200 text-xs text-left p-4 rounded overflow-auto whitespace-pre-wrap">
{`[TRUNCATED FOR DISPLAY]

{
“status”:200,
“status_message”:“CampaignFound”,
“campaigns”:[
{
“AdvertiserName”:“IntellectAdvertiser”,
“AdvertiserId”:“1”,
“Campaignid”:“258”,
“CampaignName”:“SharekhanFeb’20”,
“Description”:“Flow-instal–register.Avalidregistrationshouldhavethename,cityandphonenumber&isdefinedasnetoftest,dummy,junk,multiple/duplicateleadsandwilltargetthecitiesgivenbyus.Registrationswithincorrect/incompleteinformationwillbeconsideredasinvalid”,
“PackageName”:“com.sharekhan.androidsharemobile”,
“previewurl”:“https://play.google.com/store/apps/details?id=com.sharekhan.androidsharemobile&hl=en_IN”,
“StartDate”:“2020-02-17”,
“EndDate”:“2021-02-17”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=258&pid=612&did=504&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“MailerA(18/02/2020)”,
“creativeId”:“504”,
“imageUrl”:null,
“size”:null
},
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=258&pid=612&did=505&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“MailerB(18/02/2020)”,
“creativeId”:“505”,
“imageUrl”:null,
“size”:null
},
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=258&pid=612&did=512&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“sharekhan-144by144”,
“creativeId”:“512”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/258-512.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“IN”,
“OS”:“Android”,
“PayoutEvent”:“Registration–Sharekhan”,
“PayoutType”:“CPI”,
“PayoutValue”:0.4,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“IntellectAdvertiser”,
“AdvertiserId”:“1”,
“Campaignid”:“259”,
“CampaignName”:“Vedantu–Feb’20”,
“Description”:“CostPerRegistration.FLow-Install–>Registration.Pleasenotethatonlythese10citiesneedtobetargeted(anyothercitywillnotbeconsidered):Bengaluru,Kolkata,Mumbai,Indore,Chennai,Jaipur,Guwahati,Bhubaneshwar,Coimbatore,Ranchi.”,
“PackageName”:“com.vedantu.app”,
“previewurl”:“https://play.google.com/store/apps/details?id=com.vedantu.app”,
“StartDate”:“2020-02-17”,
“EndDate”:“2021-02-17”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=259&pid=612&did=507&code=262&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“DefaultCreative”,
“creativeId”:“507”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/259-507.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“IN”,
“OS”:“Android”,
“PayoutEvent”:“Registration–Vedantu”,
“PayoutType”:“CPI”,
“PayoutValue”:0.18,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“IntellectAdvertiser”,
“AdvertiserId”:“1”,
“Campaignid”:“268”,
“CampaignName”:“CreditMantriApp–Feb’20”,
“Description”:“targetgroup-Usersgreaterthan26years\n\nUserswhohavevisited/installedcompetitor,BFSI,mobilewalletapps\n\nUserswhoareinterestedinloansandcreditcards\n\nUserswhohaveabadcreditscoreandwanttoimproveit–Thisisthemostimportanttargetsegmentforus.\n\nOwntwowheeler\n\nOwnfourwheeler\n\nHavebankaccounts\n\nInterestedinfinancialproducts”,
“PackageName”:“com.creditmantri”,
“previewurl”:“https://play.google.com/store/apps/details?id=com.creditmantri”,
“StartDate”:“2020-02-24”,
“EndDate”:“2021-02-24”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=268&pid=612&did=517&code=893&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“creditmantri”,
“creativeId”:“517”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/268-517.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“IN”,
“OS”:“Android”,
“PayoutEvent”:“Red–CreditMantri,Green–CreditMantri”,
“PayoutType”:“CPI”,
“PayoutValue”:0.35,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“Automate360-AdvertiserLogin”,
“AdvertiserId”:“109”,
“Campaignid”:“248”,
“CampaignName”:“Entertainer_MENA_IOS_CPS_appnlab”,
“Description”:“Theclientwontpayfor3kindofactivities:\n1-Fraud\n2-0rev(whenusersubscribeforfree/notpayingpackage)\n3-adds-onfeatures:itcomesfromthepayinguserwhentheyaddanew(add-onpackage).ThisisonlyanissuebecauseofhowtheclientsendpurchaseeventstoAppsFlyer.Soitisaneventcounterratherthanunique.onotherword:itsnotnewpayinguser.\n\nWewillbesendingyouareportforthe3activitiesifithappnsfromyoursourcesaftereachmonth\n\nUserFlow:\nInstall–Login/Registration–Purchase”,
“PackageName”:“id702813714”,
“previewurl”:“https://apps.apple.com/ae/app/the-entertainer/id702813714”,
“StartDate”:“2020-02-13”,
“EndDate”:“2021-02-13”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=248&pid=612&did=497&code=592&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“DefaultCreative”,
“creativeId”:“497”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/248-497.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“BH,KW,OM,QA,SA”,
“OS”:“ios”,
“PayoutEvent”:“purchase”,
“PayoutType”:“CPS”,
“PayoutValue”:4.9,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“Automate360-AdvertiserLogin”,
“AdvertiserId”:“109”,
“Campaignid”:“249”,
“CampaignName”:“Entertainer_UAE_IOS_CPS_appnlab”,
“Description”:“Theclientwontpayfor3kindofactivities:\n1-Fraud\n2-0rev(whenusersubscribeforfree/notpayingpackage)\n3-adds-onfeatures:itcomesfromthepayinguserwhentheyaddanew(add-onpackage).ThisisonlyanissuebecauseofhowtheclientsendpurchaseeventstoAppsFlyer.Soitisaneventcounterratherthanunique.onotherword:itsnotnewpayinguser.\n\nWewillbesendingyouareportforthe3activitiesifithappnsfromyoursourcesaftereachmonth\n\nUserFlow:\nInstall–Login/Registration–Purchase”,
“PackageName”:“id702813714”,
“previewurl”:“https://apps.apple.com/ae/app/the-entertainer/id702813714”,
“StartDate”:“2020-02-13”,
“EndDate”:“2021-02-13”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=249&pid=612&did=496&code=259&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“DefaultCreative”,
“creativeId”:“496”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/249-496.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“AE”,
“OS”:“ios”,
“PayoutEvent”:“purchase”,
“PayoutType”:“CPS”,
“PayoutValue”:4.2,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“Automate360-AdvertiserLogin”,
“AdvertiserId”:“109”,
“Campaignid”:“250”,
“CampaignName”:“Entertainer_SEA_IOS_CPS_appnlab”,
“Description”:“Theclientwontpayfor3kindofactivities:\n1-Fraud\n2-0rev(whenusersubscribeforfree/notpayingpackage)\n3-adds-onfeatures:itcomesfromthepayinguserwhentheyaddanew(add-onpackage).ThisisonlyanissuebecauseofhowtheclientsendpurchaseeventstoAppsFlyer.Soitisaneventcounterratherthanunique.onotherword:itsnotnewpayinguser.\n\nWewillbesendingyouareportforthe3activitiesifithappnsfromyoursourcesaftereachmonth\n\nUserFlow:\nInstall–Login/Registration–Purchase”,
“PackageName”:“id702813714”,
“previewurl”:“https://apps.apple.com/ae/app/the-entertainer/id702813714”,
“StartDate”:“2020-02-13”,
“EndDate”:“2021-02-13”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=250&pid=612&did=495&code=810&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“DefaultCreative”,
“creativeId”:“495”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/250-495.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“CY,MY,MT,ZA”,
“OS”:“ios”,
“PayoutEvent”:“purchase”,
“PayoutType”:“CPS”,
“PayoutValue”:4.2,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“Automate360-AdvertiserLogin”,
“AdvertiserId”:“109”,
“Campaignid”:“251”,
“CampaignName”:“Entertainer_SG_HK_IOS_CPS_appnlab”,
“Description”:“Theclientwontpayfor3kindofactivities:\n1-Fraud\n2-0rev(whenusersubscribeforfree/notpayingpackage)\n3-adds-onfeatures:itcomesfromthepayinguserwhentheyaddanew(add-onpackage).ThisisonlyanissuebecauseofhowtheclientsendpurchaseeventstoAppsFlyer.Soitisaneventcounterratherthanunique.onotherword:itsnotnewpayinguser.\n\nWewillbesendingyouareportforthe3activitiesifithappnsfromyoursourcesaftereachmonth\n\nUserFlow:\nInstall–Login/Registration–Purchase”,
“PackageName”:“id702813714”,
“previewurl”:“https://apps.apple.com/ae/app/the-entertainer/id702813714”,
“StartDate”:“2020-02-13”,
“EndDate”:“2021-02-13”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=251&pid=612&did=494&code=381&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“DefaultCreative”,
“creativeId”:“494”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/251-494.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“HK,SG”,
“OS”:“ios”,
“PayoutEvent”:“purchase”,
“PayoutType”:“CPS”,
“PayoutValue”:4.9,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“Cred-Automate”,
“AdvertiserId”:“114”,
“Campaignid”:“112”,
“CampaignName”:“Cred_AND_IN_CPR_NOV_2019”,
“Description”:“approvalrateis50to60%.Approvalisbasiscibil”,
“PackageName”:“com.dreamplug.androidapp”,
“previewurl”:“https://play.google.com/store/apps/details?id=com.dreamplug.androidapp&hl=en_US”,
“StartDate”:“2019-11-04”,
“EndDate”:“2020-11-04”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=112&pid=612&did=248&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“cult-320by250”,
“creativeId”:“248”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/112-248.jpg”,
“size”:“300×250”
},
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=112&pid=612&did=249&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“cult-320by480”,
“creativeId”:“249”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/112-249.jpg”,
“size”:“320x480”
},
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=112&pid=612&did=250&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“cult-480by320”,
“creativeId”:“250”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/112-250.jpg”,
“size”:“480x320”
},
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=112&pid=612&did=251&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“cult-568by320”,
“creativeId”:“251”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/112-251.jpg”,
“size”:“568x320”
},
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=112&pid=612&did=252&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“DefaultCreative”,
“creativeId”:“252”,
“imageUrl”:null,
“size”:null
},
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=112&pid=612&did=312&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“144cby144”,
“creativeId”:“312”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/112-312.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“IN”,
“OS”:“Android”,
“PayoutEvent”:“onboard_gating_successful”,
“PayoutType”:“CPS”,
“PayoutValue”:0.9,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“Cred-Automate”,
“AdvertiserId”:“114”,
“Campaignid”:“113”,
“CampaignName”:“Cred_iOS_IN_CPR_NOV_2019”,
“Description”:“approvalrateis50to60%.Approvalisbasiscibil.FraudDetectionTool:mFilterit\n\nFraudoptimsation:Below25%”,
“PackageName”:“id1428580080”,
“previewurl”:“https://apps.apple.com/in/app/cred-pay-credit-card-bills/id1428580080”,
“StartDate”:“2019-11-04”,
“EndDate”:“2020-11-04”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=113&pid=612&did=253&code=393&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“DefaultCreative”,
“creativeId”:“253”,
“imageUrl”:null,
“size”:null
},
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=113&pid=612&did=311&code=393&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“144by144”,
“creativeId”:“311”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/113-311.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[
{
“pub_sub2”:“69_11181_117”,
“pub_sub3”:“”
}
],
“Country”:“IN”,
“OS”:“ios”,
“PayoutEvent”:“onboard_gating_successful”,
“PayoutType”:“CPS”,
“PayoutValue”:1.2,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“IndiabullsHousingFinanceLimited-Automate”,
“AdvertiserId”:“117”,
“Campaignid”:“148”,
“CampaignName”:“IndiabullsShubh_CPR_ADR_IN-Automate”,
“Description”:“Demographic:PANIndia\nTier1and2cities\nIncome:morethan5lac\nAge:25-55Years\nOS:Android\nGeo:India\nTheleadwouldbevalidatedoncetheleadhasmadea/copeningpaymentsuccessfully.\nFlow–install–>register(payableevent)–>Accountopen”,
“PackageName”:“com.shubh.ibsecurities”,
“previewurl”:“https://play.google.com/store/apps/details?id=com.shubh.ibsecurities”,
“StartDate”:“2019-12-03”,
“EndDate”:“2020-12-03”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=148&pid=612&did=337&code=734&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“DefaultCreative–144*144”,
“creativeId”:“337”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/148-337.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“IN”,
“OS”:“Android”,
“PayoutEvent”:“af_nu_mobile_registeration”,
“PayoutType”:“CPS”,
“PayoutValue”:0.8,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“IndiabullsHousingFinanceLimited-Automate”,
“AdvertiserId”:“117”,
“Campaignid”:“261”,
“CampaignName”:“Indiabulls_Dhani_ADR_IN_Cost_Per_Registration_Automate360”,
“Description”:“Flow-install–registration(payable)–>loansubmit.\nSoftKPi-loansubmittoinstallhastobe25%.”,
“PackageName”:“com.indiaBulls”,
“previewurl”:“https://play.google.com/store/apps/details?id=com.indiaBulls”,
“StartDate”:“2020-02-20”,
“EndDate”:“2021-02-20”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=261&pid=612&did=509&code=117&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“dhani144by144”,
“creativeId”:“509”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/261-509.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“IN”,
“OS”:“Android”,
“PayoutEvent”:“af_mobile_otp_entered”,
“PayoutType”:“CPS”,
“PayoutValue”:0.26,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“IndiabullsHousingFinanceLimited-Automate”,
“AdvertiserId”:“117”,
“Campaignid”:“262”,
“CampaignName”:“Indiabulls_Dhani_iOS_IN_Cost_Per_Registration_Automate360”,
“Description”:“Flow-install–registration(payable)–>loansubmit.\nSoftKPi-loansubmittoinstallhastobe25%.”,
“PackageName”:“id1273192455”,
“previewurl”:“https://apps.apple.com/us/app/indiabulls-dhani-phone-se-loan/id1273192455”,
“StartDate”:“2020-02-20”,
“EndDate”:“2021-02-20”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=262&pid=612&did=508&code=650&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“DefaultCreative”,
“creativeId”:“508”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/262-508.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“IN”,
“OS”:“ios”,
“PayoutEvent”:“af_mobile_otp_entered”,
“PayoutType”:“CPS”,
“PayoutValue”:0.26,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“Rehlat-Automate”,
“AdvertiserId”:“127”,
“Campaignid”:“265”,
“CampaignName”:“Rehlat_ADR_MEA_CPS_Interceptd”,
“Description”:“NoFraudPurchase.NoVPNorproxytobeused.Interceptedusedforidentifyingfraudulentclicks.\nFlow-Install–>Book(newcustomer),Existingcustomer-Flow–OpentheApp–>Book.\nNoFraud.InterceptdisusedasFraudtool”,
“PackageName”:“com.app.rehlat”,
“previewurl”:“https://play.google.com/store/apps/details?id=com.app.rehlat&hl=en_IN”,
“StartDate”:“2020-02-21”,
“EndDate”:“2021-02-21”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=265&pid=612&did=514&code=695&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“rehlat-144by144”,
“creativeId”:“514”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/265-514.png”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“BH,KW,OM,QA,SA,AE”,
“OS”:“Android”,
“PayoutEvent”:“PURCHASE”,
“PayoutType”:“CPS”,
“PayoutValue”:8,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“Rehlat-Automate”,
“AdvertiserId”:“127”,
“Campaignid”:“266”,
“CampaignName”:“Rehlat_iOS_MEA_CPS_Interceptd”,
“Description”:“Flow-Install–>Book(newcustomer),Existingcustomer-Flow–OpentheApp–>Book.\nNoFraud.InterceptdisusedasFraudtool”,
“PackageName”:“id1141857583”,
“previewurl”:“https://apps.apple.com/us/app/rehlat-%D8%B1%D8%AD%D9%84%D8%A7%D8%AA/id1141857583”,
“StartDate”:“2020-02-21”,
“EndDate”:“2021-02-21”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=266&pid=612&did=513&code=199&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“rehlat144by144”,
“creativeId”:“513”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/266-513.png”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“BH,KW,OM,QA,SA,AE”,
“OS”:“ios”,
“PayoutEvent”:“PURCHASE”,
“PayoutType”:“CPS”,
“PayoutValue”:8,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“Adflex”,
“AdvertiserId”:“137”,
“Campaignid”:“263”,
“CampaignName”:“MBbank_iOS_VN_CPR_Automate360”,
“Description”:“KPI:\nCPA,action=newcompletedregistrationuserinapp\n\nFlowaction:Install=>SubmitPhonenumber=>SubmitIdentityID=>SubmitPersonalinformation=>OTPcode.”,
“PackageName”:“id1205807363”,
“previewurl”:“https://apps.apple.com/us/app/id1205807363”,
“StartDate”:“2020-02-20”,
“EndDate”:“2020-03-14”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=263&pid=612&did=511&code=224&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“mbbank”,
“creativeId”:“511”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/263-511.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“VN”,
“OS”:“ios”,
“PayoutEvent”:“DANGKIAPPTHANHCONG”,
“PayoutType”:“CPS”,
“PayoutValue”:0.96,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“Adflex”,
“AdvertiserId”:“137”,
“Campaignid”:“264”,
“CampaignName”:“MBbank_ADR_VN_CPI_Automate360”,
“Description”:“Flowaction:Install=>SubmitPhonenumber=>SubmitIdentityID=>SubmitPersonalinformation=>OTPcode.”,
“PackageName”:“com.mbmobile”,
“previewurl”:“https://play.google.com/store/apps/details?id=com.mbmobile”,
“StartDate”:“2020-02-20”,
“EndDate”:“2020-03-14”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=264&pid=612&did=510&code=291&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“mbabnk”,
“creativeId”:“510”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/264-510.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[
{
“pub_sub2”:“68_2305_10160_10629”,
“pub_sub3”:“”
},
{
“pub_sub2”:“94_182”,
“pub_sub3”:“”
},
{
“pub_sub2”:“94_55”,
“pub_sub3”:“”
}
],
“Country”:“VN”,
“OS”:“Android”,
“PayoutEvent”:“DANGKIAPPTHANHCONG”,
“PayoutType”:“CPS”,
“PayoutValue”:0.8,
“PayoutCurrency”:“USD”
},
{
“AdvertiserName”:“EarlySalary”,
“AdvertiserId”:“139”,
“Campaignid”:“273”,
“CampaignName”:“EarlySalary_ADR_IN_CPD”,
“Description”:“City-DelhiNCR,Mumbai(Mumbai,NaviMumbai,Thane),Pune,HyderabadandSecunderabad,ChennaiandCoimbatore,Bangalore,Mangalore,Mysore,Gujarat,AhemedabadJaipur,Koklata,Bhabaneshwar,Chandigarh,Vishakahpatnam,Vijaywada\n”,
“PackageName”:“com.earlysalary.android”,
“previewurl”:“https://play.google.com/store/apps/details?id=com.earlysalary.android”,
“StartDate”:“2020-02-26”,
“EndDate”:“2021-02-26”,
“Capping”:“0”,
“Creatives”:[
{
“creativeTrackingLink”:“http://track.intellectlite.com/offer/?cid=273&pid=612&did=516&code=827&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=”,
“creativeName”:“earlysalary-144by144”,
“creativeId”:“516”,
“imageUrl”:“http://www.intellectlite.com/images/creatives/273-516.jpg”,
“size”:“144x144”
}
],
“Blacklist”:[],
“Country”:“IN”,
“OS”:“Android”,
“PayoutEvent”:“disbursement”,
“PayoutType”:“CPD”,
“PayoutValue”:6,
“PayoutCurrency”:“USD”
}
]
}

/* Response includes campaigns with fields like: AdvertiserName, Campaignid, Creatives[], Blacklist[], Country, OS, Payout */`}
        </pre>
      </section>
    </div>
   <Footer/>
   </>
  );
}
