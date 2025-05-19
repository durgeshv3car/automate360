"use client";

import React from "react";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";
import ReactJson from "react-json-view";

export default function ApiDocumentationVersion2Mandarin() {
  const sampleApiUrl = "http://www.intellectlite.com/api/offers-v2.php?apikey=578&js=false";


const sampleData = {

"status":200,
"status_message":"CampaignFound",
"campaigns":[
{
"AdvertiserName":"IntellectAdvertiser",
"AdvertiserId":"1",
"Campaignid":"258",
"CampaignName":"SharekhanFeb’20",
"Description":"Flow-instal–register.Avalidregistrationshouldhavethename,cityandphonenumber&isdefinedasnetoftest,dummy,junk,multiple/duplicateleadsandwilltargetthecitiesgivenbyus.Registrationswithincorrect/incompleteinformationwillbeconsideredasinvalid",
"PackageName":"com.sharekhan.androidsharemobile",
"previewurl":"https://play.google.com/store/apps/details?id=com.sharekhan.androidsharemobile&hl=en_IN",
"StartDate":"2020-02-17",
"EndDate":"2021-02-17",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=258&pid=612&did=504&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"MailerA(18/02/2020)",
"creativeId":"504",
"imageUrl":null,
"size":null
},
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=258&pid=612&did=505&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"MailerB(18/02/2020)",
"creativeId":"505",
"imageUrl":null,
"size":null
},
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=258&pid=612&did=512&code=648&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"sharekhan-144by144",
"creativeId":"512",
"imageUrl":"http://www.intellectlite.com/images/creatives/258-512.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"IN",
"OS":"Android",
"PayoutEvent":"Registration–Sharekhan",
"PayoutType":"CPI",
"PayoutValue":0.4,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"IntellectAdvertiser",
"AdvertiserId":"1",
"Campaignid":"259",
"CampaignName":"Vedantu–Feb’20",
"Description":"CostPerRegistration.FLow-Install–>Registration.Pleasenotethatonlythese10citiesneedtobetargeted(anyothercitywillnotbeconsidered):Bengaluru,Kolkata,Mumbai,Indore,Chennai,Jaipur,Guwahati,Bhubaneshwar,Coimbatore,Ranchi.",
"PackageName":"com.vedantu.app",
"previewurl":"https://play.google.com/store/apps/details?id=com.vedantu.app",
"StartDate":"2020-02-17",
"EndDate":"2021-02-17",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=259&pid=612&did=507&code=262&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"DefaultCreative",
"creativeId":"507",
"imageUrl":"http://www.intellectlite.com/images/creatives/259-507.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"IN",
"OS":"Android",
"PayoutEvent":"Registration–Vedantu",
"PayoutType":"CPI",
"PayoutValue":0.18,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"IntellectAdvertiser",
"AdvertiserId":"1",
"Campaignid":"268",
"CampaignName":"CreditMantriApp–Feb’20",
"Description":"targetgroup-Usersgreaterthan26years\n\nUserswhohavevisited/installedcompetitor,BFSI,mobilewalletapps\n\nUserswhoareinterestedinloansandcreditcards\n\nUserswhohaveabadcreditscoreandwanttoimproveit–Thisisthemostimportanttargetsegmentforus.\n\nOwntwowheeler\n\nOwnfourwheeler\n\nHavebankaccounts\n\nInterestedinfinancialproducts",
"PackageName":"com.creditmantri",
"previewurl":"https://play.google.com/store/apps/details?id=com.creditmantri",
"StartDate":"2020-02-24",
"EndDate":"2021-02-24",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=268&pid=612&did=517&code=893&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"creditmantri",
"creativeId":"517",
"imageUrl":"http://www.intellectlite.com/images/creatives/268-517.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"IN",
"OS":"Android",
"PayoutEvent":"Red–CreditMantri,Green–CreditMantri",
"PayoutType":"CPI",
"PayoutValue":0.35,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"Automate360-AdvertiserLogin",
"AdvertiserId":"109",
"Campaignid":"248",
"CampaignName":"Entertainer_MENA_IOS_CPS_appnlab",
"Description":"Theclientwontpayfor3kindofactivities:\n1-Fraud\n2-0rev(whenusersubscribeforfree/notpayingpackage)\n3-adds-onfeatures:itcomesfromthepayinguserwhentheyaddanew(add-onpackage).ThisisonlyanissuebecauseofhowtheclientsendpurchaseeventstoAppsFlyer.Soitisaneventcounterratherthanunique.onotherword:itsnotnewpayinguser.\n\nWewillbesendingyouareportforthe3activitiesifithappnsfromyoursourcesaftereachmonth\n\nUserFlow:\nInstall–Login/Registration–Purchase",
"PackageName":"id702813714",
"previewurl":"https://apps.apple.com/ae/app/the-entertainer/id702813714",
"StartDate":"2020-02-13",
"EndDate":"2021-02-13",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=248&pid=612&did=497&code=592&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"DefaultCreative",
"creativeId":"497",
"imageUrl":"http://www.intellectlite.com/images/creatives/248-497.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"BH,KW,OM,QA,SA",
"OS":"ios",
"PayoutEvent":"purchase",
"PayoutType":"CPS",
"PayoutValue":4.9,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"Automate360-AdvertiserLogin",
"AdvertiserId":"109",
"Campaignid":"249",
"CampaignName":"Entertainer_UAE_IOS_CPS_appnlab",
"Description":"Theclientwontpayfor3kindofactivities:\n1-Fraud\n2-0rev(whenusersubscribeforfree/notpayingpackage)\n3-adds-onfeatures:itcomesfromthepayinguserwhentheyaddanew(add-onpackage).ThisisonlyanissuebecauseofhowtheclientsendpurchaseeventstoAppsFlyer.Soitisaneventcounterratherthanunique.onotherword:itsnotnewpayinguser.\n\nWewillbesendingyouareportforthe3activitiesifithappnsfromyoursourcesaftereachmonth\n\nUserFlow:\nInstall–Login/Registration–Purchase",
"PackageName":"id702813714",
"previewurl":"https://apps.apple.com/ae/app/the-entertainer/id702813714",
"StartDate":"2020-02-13",
"EndDate":"2021-02-13",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=249&pid=612&did=496&code=259&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"DefaultCreative",
"creativeId":"496",
"imageUrl":"http://www.intellectlite.com/images/creatives/249-496.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"AE",
"OS":"ios",
"PayoutEvent":"purchase",
"PayoutType":"CPS",
"PayoutValue":4.2,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"Automate360-AdvertiserLogin",
"AdvertiserId":"109",
"Campaignid":"250",
"CampaignName":"Entertainer_SEA_IOS_CPS_appnlab",
"Description":"Theclientwontpayfor3kindofactivities:\n1-Fraud\n2-0rev(whenusersubscribeforfree/notpayingpackage)\n3-adds-onfeatures:itcomesfromthepayinguserwhentheyaddanew(add-onpackage).ThisisonlyanissuebecauseofhowtheclientsendpurchaseeventstoAppsFlyer.Soitisaneventcounterratherthanunique.onotherword:itsnotnewpayinguser.\n\nWewillbesendingyouareportforthe3activitiesifithappnsfromyoursourcesaftereachmonth\n\nUserFlow:\nInstall–Login/Registration–Purchase",
"PackageName":"id702813714",
"previewurl":"https://apps.apple.com/ae/app/the-entertainer/id702813714",
"StartDate":"2020-02-13",
"EndDate":"2021-02-13",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=250&pid=612&did=495&code=810&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"DefaultCreative",
"creativeId":"495",
"imageUrl":"http://www.intellectlite.com/images/creatives/250-495.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"CY,MY,MT,ZA",
"OS":"ios",
"PayoutEvent":"purchase",
"PayoutType":"CPS",
"PayoutValue":4.2,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"Automate360-AdvertiserLogin",
"AdvertiserId":"109",
"Campaignid":"251",
"CampaignName":"Entertainer_SG_HK_IOS_CPS_appnlab",
"Description":"Theclientwontpayfor3kindofactivities:\n1-Fraud\n2-0rev(whenusersubscribeforfree/notpayingpackage)\n3-adds-onfeatures:itcomesfromthepayinguserwhentheyaddanew(add-onpackage).ThisisonlyanissuebecauseofhowtheclientsendpurchaseeventstoAppsFlyer.Soitisaneventcounterratherthanunique.onotherword:itsnotnewpayinguser.\n\nWewillbesendingyouareportforthe3activitiesifithappnsfromyoursourcesaftereachmonth\n\nUserFlow:\nInstall–Login/Registration–Purchase",
"PackageName":"id702813714",
"previewurl":"https://apps.apple.com/ae/app/the-entertainer/id702813714",
"StartDate":"2020-02-13",
"EndDate":"2021-02-13",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=251&pid=612&did=494&code=381&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"DefaultCreative",
"creativeId":"494",
"imageUrl":"http://www.intellectlite.com/images/creatives/251-494.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"HK,SG",
"OS":"ios",
"PayoutEvent":"purchase",
"PayoutType":"CPS",
"PayoutValue":4.9,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"Cred-Automate",
"AdvertiserId":"114",
"Campaignid":"112",
"CampaignName":"Cred_AND_IN_CPR_NOV_2019",
"Description":"approvalrateis50to60%.Approvalisbasiscibil",
"PackageName":"com.dreamplug.androidapp",
"previewurl":"https://play.google.com/store/apps/details?id=com.dreamplug.androidapp&hl=en_US",
"StartDate":"2019-11-04",
"EndDate":"2020-11-04",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=112&pid=612&did=248&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"cult-320by250",
"creativeId":"248",
"imageUrl":"http://www.intellectlite.com/images/creatives/112-248.jpg",
"size":"300×250"
},
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=112&pid=612&did=249&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"cult-320by480",
"creativeId":"249",
"imageUrl":"http://www.intellectlite.com/images/creatives/112-249.jpg",
"size":"320x480"
},
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=112&pid=612&did=250&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"cult-480by320",
"creativeId":"250",
"imageUrl":"http://www.intellectlite.com/images/creatives/112-250.jpg",
"size":"480x320"
},
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=112&pid=612&did=251&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"cult-568by320",
"creativeId":"251",
"imageUrl":"http://www.intellectlite.com/images/creatives/112-251.jpg",
"size":"568x320"
},
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=112&pid=612&did=252&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"DefaultCreative",
"creativeId":"252",
"imageUrl":null,
"size":null
},
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=112&pid=612&did=312&code=640&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"144cby144",
"creativeId":"312",
"imageUrl":"http://www.intellectlite.com/images/creatives/112-312.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"IN",
"OS":"Android",
"PayoutEvent":"onboard_gating_successful",
"PayoutType":"CPS",
"PayoutValue":0.9,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"Cred-Automate",
"AdvertiserId":"114",
"Campaignid":"113",
"CampaignName":"Cred_iOS_IN_CPR_NOV_2019",
"Description":"approvalrateis50to60%.Approvalisbasiscibil.FraudDetectionTool:mFilterit\n\nFraudoptimsation:Below25%",
"PackageName":"id1428580080",
"previewurl":"https://apps.apple.com/in/app/cred-pay-credit-card-bills/id1428580080",
"StartDate":"2019-11-04",
"EndDate":"2020-11-04",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=113&pid=612&did=253&code=393&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"DefaultCreative",
"creativeId":"253",
"imageUrl":null,
"size":null
},
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=113&pid=612&did=311&code=393&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"144by144",
"creativeId":"311",
"imageUrl":"http://www.intellectlite.com/images/creatives/113-311.jpg",
"size":"144x144"
}
],
"Blacklist":[
{
"pub_sub2":"69_11181_117",
"pub_sub3":""
}
],
"Country":"IN",
"OS":"ios",
"PayoutEvent":"onboard_gating_successful",
"PayoutType":"CPS",
"PayoutValue":1.2,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"IndiabullsHousingFinanceLimited-Automate",
"AdvertiserId":"117",
"Campaignid":"148",
"CampaignName":"IndiabullsShubh_CPR_ADR_IN-Automate",
"Description":"Demographic:PANIndia\nTier1and2cities\nIncome:morethan5lac\nAge:25-55Years\nOS:Android\nGeo:India\nTheleadwouldbevalidatedoncetheleadhasmadea/copeningpaymentsuccessfully.\nFlow–install–>register(payableevent)–>Accountopen",
"PackageName":"com.shubh.ibsecurities",
"previewurl":"https://play.google.com/store/apps/details?id=com.shubh.ibsecurities",
"StartDate":"2019-12-03",
"EndDate":"2020-12-03",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=148&pid=612&did=337&code=734&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"DefaultCreative–144*144",
"creativeId":"337",
"imageUrl":"http://www.intellectlite.com/images/creatives/148-337.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"IN",
"OS":"Android",
"PayoutEvent":"af_nu_mobile_registeration",
"PayoutType":"CPS",
"PayoutValue":0.8,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"IndiabullsHousingFinanceLimited-Automate",
"AdvertiserId":"117",
"Campaignid":"261",
"CampaignName":"Indiabulls_Dhani_ADR_IN_Cost_Per_Registration_Automate360",
"Description":"Flow-install–registration(payable)–>loansubmit.\nSoftKPi-loansubmittoinstallhastobe25%.",
"PackageName":"com.indiaBulls",
"previewurl":"https://play.google.com/store/apps/details?id=com.indiaBulls",
"StartDate":"2020-02-20",
"EndDate":"2021-02-20",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=261&pid=612&did=509&code=117&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"dhani144by144",
"creativeId":"509",
"imageUrl":"http://www.intellectlite.com/images/creatives/261-509.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"IN",
"OS":"Android",
"PayoutEvent":"af_mobile_otp_entered",
"PayoutType":"CPS",
"PayoutValue":0.26,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"IndiabullsHousingFinanceLimited-Automate",
"AdvertiserId":"117",
"Campaignid":"262",
"CampaignName":"Indiabulls_Dhani_iOS_IN_Cost_Per_Registration_Automate360",
"Description":"Flow-install–registration(payable)–>loansubmit.\nSoftKPi-loansubmittoinstallhastobe25%.",
"PackageName":"id1273192455",
"previewurl":"https://apps.apple.com/us/app/indiabulls-dhani-phone-se-loan/id1273192455",
"StartDate":"2020-02-20",
"EndDate":"2021-02-20",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=262&pid=612&did=508&code=650&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"DefaultCreative",
"creativeId":"508",
"imageUrl":"http://www.intellectlite.com/images/creatives/262-508.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"IN",
"OS":"ios",
"PayoutEvent":"af_mobile_otp_entered",
"PayoutType":"CPS",
"PayoutValue":0.26,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"Rehlat-Automate",
"AdvertiserId":"127",
"Campaignid":"265",
"CampaignName":"Rehlat_ADR_MEA_CPS_Interceptd",
"Description":"NoFraudPurchase.NoVPNorproxytobeused.Interceptedusedforidentifyingfraudulentclicks.\nFlow-Install–>Book(newcustomer),Existingcustomer-Flow–OpentheApp–>Book.\nNoFraud.InterceptdisusedasFraudtool",
"PackageName":"com.app.rehlat",
"previewurl":"https://play.google.com/store/apps/details?id=com.app.rehlat&hl=en_IN",
"StartDate":"2020-02-21",
"EndDate":"2021-02-21",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=265&pid=612&did=514&code=695&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"rehlat-144by144",
"creativeId":"514",
"imageUrl":"http://www.intellectlite.com/images/creatives/265-514.png",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"BH,KW,OM,QA,SA,AE",
"OS":"Android",
"PayoutEvent":"PURCHASE",
"PayoutType":"CPS",
"PayoutValue":8,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"Rehlat-Automate",
"AdvertiserId":"127",
"Campaignid":"266",
"CampaignName":"Rehlat_iOS_MEA_CPS_Interceptd",
"Description":"Flow-Install–>Book(newcustomer),Existingcustomer-Flow–OpentheApp–>Book.\nNoFraud.InterceptdisusedasFraudtool",
"PackageName":"id1141857583",
"previewurl":"https://apps.apple.com/us/app/rehlat-%D8%B1%D8%AD%D9%84%D8%A7%D8%AA/id1141857583",
"StartDate":"2020-02-21",
"EndDate":"2021-02-21",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=266&pid=612&did=513&code=199&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"rehlat144by144",
"creativeId":"513",
"imageUrl":"http://www.intellectlite.com/images/creatives/266-513.png",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"BH,KW,OM,QA,SA,AE",
"OS":"ios",
"PayoutEvent":"PURCHASE",
"PayoutType":"CPS",
"PayoutValue":8,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"Adflex",
"AdvertiserId":"137",
"Campaignid":"263",
"CampaignName":"MBbank_iOS_VN_CPR_Automate360",
"Description":"KPI:\nCPA,action=newcompletedregistrationuserinapp\n\nFlowaction:Install=>SubmitPhonenumber=>SubmitIdentityID=>SubmitPersonalinformation=>OTPcode.",
"PackageName":"id1205807363",
"previewurl":"https://apps.apple.com/us/app/id1205807363",
"StartDate":"2020-02-20",
"EndDate":"2020-03-14",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=263&pid=612&did=511&code=224&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"mbbank",
"creativeId":"511",
"imageUrl":"http://www.intellectlite.com/images/creatives/263-511.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"VN",
"OS":"ios",
"PayoutEvent":"DANGKIAPPTHANHCONG",
"PayoutType":"CPS",
"PayoutValue":0.96,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"Adflex",
"AdvertiserId":"137",
"Campaignid":"264",
"CampaignName":"MBbank_ADR_VN_CPI_Automate360",
"Description":"Flowaction:Install=>SubmitPhonenumber=>SubmitIdentityID=>SubmitPersonalinformation=>OTPcode.",
"PackageName":"com.mbmobile",
"previewurl":"https://play.google.com/store/apps/details?id=com.mbmobile",
"StartDate":"2020-02-20",
"EndDate":"2020-03-14",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=264&pid=612&did=510&code=291&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"mbabnk",
"creativeId":"510",
"imageUrl":"http://www.intellectlite.com/images/creatives/264-510.jpg",
"size":"144x144"
}
],
"Blacklist":[
{
"pub_sub2":"68_2305_10160_10629",
"pub_sub3":""
},
{
"pub_sub2":"94_182",
"pub_sub3":""
},
{
"pub_sub2":"94_55",
"pub_sub3":""
}
],
"Country":"VN",
"OS":"Android",
"PayoutEvent":"DANGKIAPPTHANHCONG",
"PayoutType":"CPS",
"PayoutValue":0.8,
"PayoutCurrency":"USD"
},
{
"AdvertiserName":"EarlySalary",
"AdvertiserId":"139",
"Campaignid":"273",
"CampaignName":"EarlySalary_ADR_IN_CPD",
"Description":"City-DelhiNCR,Mumbai(Mumbai,NaviMumbai,Thane),Pune,HyderabadandSecunderabad,ChennaiandCoimbatore,Bangalore,Mangalore,Mysore,Gujarat,AhemedabadJaipur,Koklata,Bhabaneshwar,Chandigarh,Vishakahpatnam,Vijaywada\n",
"PackageName":"com.earlysalary.android",
"previewurl":"https://play.google.com/store/apps/details?id=com.earlysalary.android",
"StartDate":"2020-02-26",
"EndDate":"2021-02-26",
"Capping":"0",
"Creatives":[
{
"creativeTrackingLink":"http://track.intellectlite.com/offer/?cid=273&pid=612&did=516&code=827&pub_sub=&pub_sub2=&pub_sub3=&pub_sub4=&pub_sub5=&device_id=&google_aid=",
"creativeName":"earlysalary-144by144",
"creativeId":"516",
"imageUrl":"http://www.intellectlite.com/images/creatives/273-516.jpg",
"size":"144x144"
}
],
"Blacklist":[],
"Country":"IN",
"OS":"Android",
"PayoutEvent":"disbursement",
"PayoutType":"CPD",
"PayoutValue":6,
"PayoutCurrency":"USD"
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
              <div class="post-1179 page type-page status-publish hentry">
                <h1><span >API Documentation Version 2 ( Date 28 Feb 2020)</span></h1>
                <h2>Changelog</h2>
                <p>Added a new node- "Blacklist". This array contains the sub sources values sent during click in "pub_sub2" and "pub_sub3".This should be used for blacklisting at campaign level.</p>
                <h2>Introduction</h2>
                <p><span >This API is for publishers who want to get offers and its details from automate360.io platform. For the API, publishers need to have the API keywhich is their publisher id generated from the automate360.io platform.Please get the API key from your Account Manager.</span></p>
                <p><span >This is a server to server API call. Offers should be refreshed every 30 minutes to get the updated details.</span></p>
                <ul>
                    <li>Informations mentioned below may change , <span >so updating the offer details every 30 minute is highly recommended</span></li>
                </ul>
                <p>&nbsp;</p>
                <ul>
                    <li >
                        <ul>
                            <li><span >imageUrl</span></li>
                            <li><span >creativeTrackingLink</span></li>
                            <li><span >Blacklist</span></li>
                            <li><span > Payout Value</span></li>
                            <li><span >Capping</span></li>
                        </ul>
                    </li>
                    <li><span >An offer may become inactive or paused. If an offer is no longer available in API , it means the offer has been paused and it should be paused at your end too. <strong>But if the same offer is visible in API again, then it should be reactivated at your end again.</strong>For example-</span>If
                        an existing offer is not there in API at time "t1″ and then is visible in API again at time " t2″, then that offer should be reactivated again at your end in the next " 30 min update cycle of API.</li>
                    <li>New creatives may get added on an offer, so newly added creatives should get added at campaign level.</li>
                </ul>
                <p>&nbsp;</p>
                <h2><span >Sample API call</span></h2>
                <p>&nbsp;</p>
                <h3><strong>Get Method</strong></h3>
                <p>&nbsp;</p>
                <p>http://www.intellectlite.com/api/offers-v2.php?apikey=578&amp;js=false</p>
                <h3><strong>POST Method</strong></h3>
                
                
                    <div>
                        <h3 class="text-2xl font-semibold mb-2">Parameter Notes</h3><ul class="list-disc pl-5 space-y-2"><li>Click ID: <code>pub_sub</code></li><li>Source: <code>pub_sub2</code></li><li>Sub-source: <code>pub_sub3</code></li><li>iOS Device ID: <code>device_id</code></li><li>Google Advertising ID: <code>google_aid</code></li></ul>
                    </div>

                

                <h3></h3>
                <h3>API Response Parameters</h3>
                <p>&nbsp;</p>
               <div class="tableMainContent">
               	 <table class="tablecontent">
                   
                        <thead>
                        <tr>
                            <th><b>Field Name</b></th>
                            <th><b>Description</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span >Advertiser Name</span></td>
                            <td><span >Name of the advertiser on our Platform</span></td>
                        </tr>
                        <tr>
                            <td><span >Advertiser Id</span></td>
                            <td><span >Id of the advertiser on our platform</span></td>
                        </tr>
                        <tr>
                            <td><span >Campaign id</span></td>
                            <td><span >Campaign Id</span></td>
                        </tr>
                        <tr>
                            <td><span >Campaign Name</span></td>
                            <td><span >Campaign Name</span></td>
                        </tr>
                        <tr>
                            <td><span >Description</span></td>
                            <td><span >Description of the campaign</span></td>
                        </tr>
                        <tr>
                            <td><span >Package Name</span></td>
                            <td><span >Google Play store package name or play store id</span></td>
                        </tr>
                        <tr>
                            <td><span >preview url</span></td>
                            <td><span >Google Play or itune preview url</span></td>
                        </tr>
                        <tr>
                            <td><span >Start Date</span></td>
                            <td><span >Start date of the campaign</span></td>
                        </tr>
                        <tr>
                            <td><span >End date</span></td>
                            <td><span >End date of the campaign</span></td>
                        </tr>
                        <tr>
                            <td><span >Capping</span></td>
                            <td><span >Daily cap of the event on which payout would be made</span></td>
                        </tr>
                        <tr>
                            <td><span >creativeTrackingLink</span></td>
                            <td><span >Tracking link of the creative for the publisher. If a campaign has multiple creatives then all the creatives of that campaign will be returned.Example link-</span><p></p>
                                <p>http://track.intellectlite.com/offer/?cid=87&amp;pid=582&amp;code=563&amp;pub_sub=&amp;pub_sub2=&amp;pub_sub3=&amp;pub_sub4=&amp;pub_sub5=&amp;device_id=&amp;google_aid=</p>
                                <p>Publisher should pass</p>
                                <p>their click id in "pub_sub" parameter.</p>
                                <p>their source information in "pub_sub2"</p>
                                <p>their sub sub source information in "pub_sub3"</p>
                                <p>"pub_sub4", "pub_sub5"- any other information</p>
                                <p>"device_id" should be used to pass the iOS Advertising identifier</p>
                                <p>"google_aid" should be used to pass the Google Advertising identifier.</p></td>
                        </tr>
                        <tr>
                            <td><span >creativeName:</span></td>
                            <td><span >Name of the creative</span></td>
                        </tr>
                        <tr>
                            <td><span >creativeId</span></td>
                            <td><span >id of the creative</span></td>
                        </tr>
                        <tr>
                            <td><span >imageUrl</span></td>
                            <td><span >image url of creative. Supported format jpg,png,</span></td>
                        </tr>
                        <tr>
                            <td><span >size</span></td>
                            <td><span >Size of the creative in pixel. Sizes available-</span><p></p>
                                <p><span >320 by 50</span></p>
                                <p><span >300 by 250</span></p>
                                <p><span >250 by 250</span></p>
                                <p><span >120 by 20</span></p>
                                <p><span >168 by 28</span></p>
                                <p><span >216 by 36</span></p>
                                <p><span >468 by 60</span></p>
                                <p><span >728 by 90</span></p>
                                <p><span >144 by 144</span></p>
                                <p><span >320 by 100</span></p>
                                <p><span >336 by 280</span></p>
                                <p><span >120 by 600</span></p>
                                <p><span >160 by 600</span></p>
                                <p><span >300 by 600</span></p>
                                <p><span >320 by 480</span></p>
                                <p><span >480 by 320</span></p>
                                <p><span >768 by 1024</span></p>
                                <p><span >1024 by 768</span></p>
                                <p><span >1200 by 627</span></p>
                                <p><span >1200 by 624</span></p>
                                <p><span >1200 by 628</span></p></td>
                        </tr>
                        <tr>
                            <td><span >Blacklist</span></td>
                            <td><span >An array that contain values sent during click in pub_sub2 and pub_sub3. This node contains source information that should be blacklisted. </span></td>
                        </tr>
                        <tr>
                            <td><span >Country</span></td>
                            <td><span >Two Letter ISO Country Code. Multiple country code can be presented separated with ","</span></td>
                        </tr>
                        <tr>
                            <td><span >OS</span></td>
                            <td><span >ios or android</span></td>
                        </tr>
                        <tr>
                            <td><span >Payout Event</span></td>
                            <td><span >Event on which payout will be done</span></td>
                        </tr>
                        <tr>
                            <td><span >Payout Type</span></td>
                            <td><span >CPI,CPS,CPL,CPD,CPM,CPC</span></td>
                        </tr>
                        <tr>
                            <td><span >Payout Value</span></td>
                            <td><span >Payout value</span></td>
                        </tr>
                        <tr>
                            <td><span >Payout Currency</span></td>
                            <td><span >Three Letter ISO Country Code of Payout Value</span></td>
                        </tr>

                    </tbody>
                </table>
               </div>
                <h3>API Sample Response</h3>
             <div style={{ textAlign: "left", whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
  <ReactJson src={sampleData} />
</div>
                <p><span id="more-1179"></span></p>
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
