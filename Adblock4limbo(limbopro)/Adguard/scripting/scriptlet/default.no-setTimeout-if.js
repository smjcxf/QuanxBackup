/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noSetTimeoutIf = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["push","500"],[".call(null)","10"],[".call(null)"],["(null)","10"],["userHasAdblocker"],["objSubPromo"],["adb"],["nrWrapper"],["warn"],["adBlockerDetected"],["show"],["InfMediafireMobileFunc","1000"],["google_jobrunner"],["()","45000"],["0x"],["displayAdBlockedVideo"],[".adsbygoogle"],["location.href"],["isDesktopApp","1000"],["Bait"],["admc"],["AdBlocker"],["Blocked"],["ai_adb"],["match","100"],["'0x"],["apstagLOADED"],["/Adb|moneyDetect/"],["disableDeveloper"],["Blocco","2000"],["test","0"],["checkAdblockUser","1000"],["checkPub","6000"],["document.querySelector","5000"],["nextFunction","250"],["popup"],["()","150"],["backRedirect"],["document.querySelectorAll","1000"],["style"],["clientHeight"],["addEventListener","0"],["adblock","2000"],["start","0"],["nextFunction","2000"],["byepopup","5000"],["test.remove","100"],["additional_src","300"],["()","2000"],["css_class.show"],["CANG","3000"],["updato-overlay","500"],["innerText","2000"],["alert","8000"],["css_class"],["()","50"],["debugger"],["initializeCourier","3000"],["redirectPage"],["_0x","2000"],["ads","750"],["location.href","500"],["Adblock","5000"],["disable","200"],["CekAab","0"],["rbm_block_active","1000"],["show()"],["_0x"],["n.trigger","1"],["adblock"],["abDetected"],["KeepOpeningPops","1000"],["appendChild"],["adb","0"],["adBlocked"],["warning","100"],["adblock_popup","500"],["Adblock"],["#chatWrap","1000"],["keep-ads","2000"],["#rbm_block_active","1000"],["null","4000"],["()","2500"],["myaabpfun","3000"],["nextFunction"],["adFilled","2500"],["()","15000"],["showPopup"],["()","1"],["()","1000"],["document.cookie","2500"],["window.open"],["innerHTML"],["readyplayer","2000"],["checkStopBlock"],["adspot_top","1500"],["/offsetHeight|google|Global/"],["an_message","500"],["Adblocker","10000"],["trigger","0"],["timeoutChecker"],["bait","1"],["pum-open"],["overlay","2000"],["/adblock/i"],["test","100"],["Math.round","1000"],["adblock","5"],["bioEp"],["ag_adBlockerDetected"],["null"],["adb","6000"],["pop"],["sadbl"],["checkAdStatus"],["mdp"],["brave_load_popup"],["0x","3000"],["invoke"],["adsbytrafficjunkycontext"],["ipod"],["offsetWidth"],["/$|adBlock/"],["ads"],["adsbygoogle"],["()"],["AdBlock"],["stop-scrolling"],["Adv"],["blockUI","2000"],["mdpDeBlocker"],["/_0x|debug/"],["/ai_adb|_0x/"],["iframe"],["adBlock"],["","1"],["undefined"],["check","1"],["adsBlocked"],["blocker"],["aswift_"],["afs_ads","2000"],["visibility","2000"],["bait"],["getComputedStyle","250"],["blocked"],["{r()","0"],["nextFunction","450"],["Debug"],["r()","0"],["purple_box"],["offsetHeight"],["checkSiteNormalLoad"],["adBlockOverlay"],["Detected","500"],["modal"],[".show","1000"],[".show"],["showModal"],["getComputedStyle"],["blur"],["samOverlay"],["bADBlock"],["location"],["","4000"],["blocker","100"],["alert"],["length"],["t()","0"],["$"],["offset"],["contrformpub"],["getComputedStyle","2000"],["video-popup"],["detectAdblock"],["EzoIvent"],["detectAdBlocker"],["nads"],["1e3*"],["current.children"],["adStatus"],["BN_CAMPAIGNS"],["media_place_list"],["cvad"],["...","300"],["","5"],["/adblock|isRequestPresent/"],["_0x","500"],["isRequestPresent"],["offsetLeft"],["height"],["mdp_deblocker"],["charAt"],["checkAds"],["fadeIn","0"],["jQuery"],["/^/"],["afterOpen"],["check"],["Adblocker"],["eabdModal"],["ab_root.show"],["gaData"],["ad"],["prompt","1000"],["googlefc"],["adblock detection"],[".offsetHeight","100"],["popState"],["ad-block-popup"],["exitTimer"],["innerHTML.replace"],["ab","2000"],["data?","4000"],[".data?"],["eabpDialog"],["adsense"],["/Adblock|_ad_/"],["googletag"],["f.parentNode.removeChild(f)","100"],["swal","500"],["keepChecking","1000"],["openPopup"],[".offsetHeight"],["()=>{"],["nitroAds"],["class.scroll","1000"],["disableDeveloperTools"],["Check"],["insertBefore"],["css_class.scroll"],["/null|Error/","10000"],["window.location.href","50"],["/out.php"],["/0x|devtools/"],["location.replace","300"],["window.location.href"],["checkVisible"],["_0x","3000"],["fetch"],["window.location.href=link"],["ai_"],["reachGoal"],["Adb"],["ai"],["","3000"],["/width|innerHTML/"],["magnificPopup"],["adblockEnabled"],["google_ad"],["document.location"],["google"],["top-right","2000"],["enforceAdStatus"],["loadScripts"],["mfp"],["display","5000"],["eb"],[").show()"],["","1000"],["site-access"],["atob"],["Msg"],["UABP"],["href"],["aaaaa-modal"],["\\x63"],["()=>"],["keepChecking"],["null","10"],["","500"],["/Adform|didomi|adblock|forEach/"],["showAdblock"],["-0x"],["display"],["gclid"],["event","3000"],["rejectWith"],["refresh"],["location.href","3000"],["window.location"],["ga"],["adbl"],["Ads"],["ShowAdBLockerNotice"],["ad_listener"],["open"],["(!0)"],["Delay"],["/appendChild|e\\(\"/"],["=>"],["ADB"],["site-access-popup"],["data?"],["/debugger|UserCustomPop/"],["checkAdblockUser"],["offsetHeight","100"],["AdDetect"],["displayMessage","2000"],["/salesPopup|mira-snackbar/"],["advanced"],["detectImgLoad"],["offsetHeight","200"],["detector"],["replace"],["touchstart"],["siteAccessFlag"],["ab"],["/adblocker|alert/"],["redURL"],["/children\\('ins'\\)|Adblock|adsbygoogle/"],["displayMessage"],["chkADB"],["onDetected"],["myinfoey","1500"],["fuckadb"],["detect"],["siteAccessPopup"],["/adsbygoogle|adblock/"],["akadb"],["biteDisplay"],["/[a-z]\\(!0\\)/","800"],["ad_block"],["/detectAdBlocker|window.open/"],["adBlockDetected"],["popUnder"],["/GoToURL|delay/"],["window.location.href","300"],["ad_display"],["/adScriptPath|MMDConfig/"],["0x","100"],["/native|\\{n\\(\\)/"],["adblocker"],["/Detect|adblock|style\\.display|\\[native code]|\\.call\\(null\\)/"],["removeChild"],["ad blocker"]];

const hostnamesMap = new Map([["4-liga.com",1],["4fansites.de",1],["4players.de",1],["9monate.de",1],["aachener-nachrichten.de",1],["aachener-zeitung.de",1],["abendblatt.de",1],["abendzeitung-muenchen.de",1],["about-drinks.com",1],["abseits-ka.de",1],["airliners.de",1],["ajaxshowtime.com",1],["allgemeine-zeitung.de",1],["alpin.de",1],["antenne.de",1],["arcor.de",1],["areadvd.de",1],["areamobile.de",1],["ariva.de",1],["astronews.com",1],["aussenwirtschaftslupe.de",1],["auszeit.bio",1],["auto-motor-und-sport.de",1],["auto-service.de",1],["autobild.de",1],["autoextrem.de",1],["autopixx.de",1],["autorevue.at",1],["az-online.de",1],["baby-vornamen.de",1],["babyclub.de",1],["bafoeg-aktuell.de",1],["berliner-kurier.de",1],["berliner-zeitung.de",1],["bigfm.de",1],["bikerszene.de",1],["bildderfrau.de",1],["blackd.de",1],["blick.de",1],["boerse-online.de",1],["boerse.de",1],["boersennews.de",1],["braunschweiger-zeitung.de",1],["brieffreunde.de",1],["brigitte.de",1],["buerstaedter-zeitung.de",1],["buffed.de",1],["businessinsider.de",1],["buzzfeed.at",1],["buzzfeed.de",1],["caravaning.de",1],["cavallo.de",1],["chefkoch.de",1],["cinema.de",1],["clever-tanken.de",1],["computerbild.de",1],["computerhilfen.de",1],["comunio-cl.com",1],["connect.de",1],["chip.de",1],["da-imnetz.de",1],["dasgelbeblatt.de",1],["dbna.com",1],["dbna.de",1],["deichstube.de",1],["deine-tierwelt.de",1],["der-betze-brennt.de",1],["derwesten.de",1],["desired.de",1],["dhd24.com",1],["dieblaue24.com",1],["digitalfernsehen.de",1],["dnn.de",1],["donnerwetter.de",1],["e-hausaufgaben.de",1],["e-mountainbike.com",1],["eatsmarter.de",1],["echo-online.de",1],["ecomento.de",1],["einfachschoen.me",1],["elektrobike-online.com",1],["eltern.de",1],["epochtimes.de",1],["essen-und-trinken.de",1],["express.de",1],["extratipp.com",1],["familie.de",1],["fanfiktion.de",1],["fehmarn24.de",1],["fettspielen.de",1],["fid-gesundheitswissen.de",1],["finanznachrichten.de",1],["finanztreff.de",1],["finya.de",1],["firmenwissen.de",1],["fitforfun.de",1],["fnp.de",1],["football365.fr",1],["formel1.de",1],["fr.de",1],["frankfurter-wochenblatt.de",1],["freenet.de",1],["fremdwort.de",1],["froheweihnachten.info",1],["frustfrei-lernen.de",1],["fuldaerzeitung.de",1],["funandnews.de",1],["fussballdaten.de",1],["futurezone.de",1],["gala.de",1],["gamepro.de",1],["gamersglobal.de",1],["gamesaktuell.de",1],["gamestar.de",1],["gamezone.de",1],["gartendialog.de",1],["gartenlexikon.de",1],["gedichte.ws",1],["geissblog.koeln",1],["gelnhaeuser-tageblatt.de",1],["general-anzeiger-bonn.de",1],["geniale-tricks.com",1],["genialetricks.de",1],["gesund-vital.de",1],["gesundheit.de",1],["gevestor.de",1],["gewinnspiele.tv",1],["giessener-allgemeine.de",1],["giessener-anzeiger.de",1],["gifhorner-rundschau.de",1],["giga.de",1],["gipfelbuch.ch",1],["gmuender-tagespost.de",1],["golem.de",[1,9,10]],["gruenderlexikon.de",1],["gusto.at",1],["gut-erklaert.de",1],["gutfuerdich.co",1],["hallo-muenchen.de",1],["hamburg.de",1],["hanauer.de",1],["hardwareluxx.de",1],["hartziv.org",1],["harzkurier.de",1],["haus-garten-test.de",1],["hausgarten.net",1],["haustec.de",1],["haz.de",1],["heidelberg24.de",1],["heilpraxisnet.de",1],["heise.de",1],["helmstedter-nachrichten.de",1],["hersfelder-zeitung.de",1],["hftg.co",1],["hifi-forum.de",1],["hna.de",1],["hochheimer-zeitung.de",1],["hoerzu.de",1],["hofheimer-zeitung.de",1],["iban-rechner.de",1],["ikz-online.de",1],["immobilienscout24.de",1],["ingame.de",1],["inside-digital.de",1],["inside-handy.de",1],["investor-verlag.de",1],["jappy.com",1],["jpgames.de",1],["kabeleins.de",1],["kachelmannwetter.com",1],["kamelle.de",1],["kicker.de",1],["kindergeld.org",1],["klettern-magazin.de",1],["klettern.de",1],["kochbar.de",1],["kreis-anzeiger.de",1],["kreisbote.de",1],["kreiszeitung.de",1],["ksta.de",1],["kurierverlag.de",1],["lachainemeteo.com",1],["lampertheimer-zeitung.de",1],["landwirt.com",1],["laut.de",1],["lauterbacher-anzeiger.de",1],["leckerschmecker.me",1],["leinetal24.de",1],["lesfoodies.com",1],["levif.be",1],["lifeline.de",1],["liga3-online.de",1],["likemag.com",1],["linux-community.de",1],["linux-magazin.de",1],["live.vodafone.de",1],["ln-online.de",1],["lokalo24.de",1],["lustaufsleben.at",1],["lustich.de",1],["lvz.de",1],["lz.de",1],["macwelt.de",1],["macworld.co.uk",1],["mail.de",1],["main-spitze.de",1],["manager-magazin.de",1],["manga-tube.me",1],["mathebibel.de",1],["mathepower.com",1],["maz-online.de",1],["medisite.fr",1],["mehr-tanken.de",1],["mein-kummerkasten.de",1],["mein-mmo.de",1],["mein-wahres-ich.de",1],["meine-anzeigenzeitung.de",1],["meinestadt.de",1],["menshealth.de",1],["mercato365.com",1],["merkur.de",1],["messen.de",1],["metal-hammer.de",1],["metalflirt.de",1],["meteologix.com",1],["minecraft-serverlist.net",1],["mittelbayerische.de",1],["modhoster.de",1],["moin.de",1],["mopo.de",1],["morgenpost.de",1],["motor-talk.de",1],["motorbasar.de",1],["motorradonline.de",1],["motorsport-total.com",1],["motortests.de",1],["mountainbike-magazin.de",1],["moviejones.de",1],["moviepilot.de",1],["mt.de",1],["mtb-news.de",1],["musiker-board.de",1],["musikexpress.de",1],["musikradar.de",1],["mz-web.de",1],["n-tv.de",1],["naumburger-tageblatt.de",1],["netzwelt.de",1],["neuepresse.de",1],["neueroeffnung.info",1],["news.at",1],["news.de",1],["news38.de",1],["newsbreak24.de",1],["nickles.de",1],["nicknight.de",1],["nl.hardware.info",1],["nn.de",1],["nnn.de",1],["nordbayern.de",1],["notebookchat.com",1],["notebookcheck-ru.com",1],["notebookcheck-tr.com",1],["noz-cdn.de",1],["noz.de",1],["nrz.de",1],["nw.de",1],["nwzonline.de",1],["oberhessische-zeitung.de",1],["och.to",1],["oeffentlicher-dienst.info",1],["onlinekosten.de",1],["onvista.de",1],["op-marburg.de",1],["op-online.de",1],["outdoor-magazin.com",1],["outdoorchannel.de",1],["paradisi.de",1],["pc-magazin.de",1],["pcgames.de",1],["pcgameshardware.de",1],["pcwelt.de",1],["pcworld.es",1],["peiner-nachrichten.de",1],["pferde.de",1],["pietsmiet.de",1],["pixelio.de",1],["pkw-forum.de",1],["playboy.de",1],["playfront.de",1],["pnn.de",1],["pons.com",1],["prad.de",[1,127]],["prignitzer.de",1],["profil.at",1],["promipool.de",1],["promobil.de",1],["prosiebenmaxx.de",1],["psychic.de",[1,151]],["quoka.de",1],["radio.at",1],["radio.de",1],["radio.dk",1],["radio.es",1],["radio.fr",1],["radio.it",1],["radio.net",1],["radio.pl",1],["radio.pt",1],["radio.se",1],["ran.de",1],["readmore.de",1],["rechtslupe.de",1],["recording.de",1],["rennrad-news.de",1],["reuters.com",1],["reviersport.de",1],["rhein-main-presse.de",1],["rheinische-anzeigenblaetter.de",1],["rimondo.com",1],["roadbike.de",1],["roemische-zahlen.net",1],["rollingstone.de",1],["rot-blau.com",1],["rp-online.de",1],["rtl.de",[1,269]],["rtv.de",1],["rugby365.fr",1],["ruhr24.de",1],["rundschau-online.de",1],["runnersworld.de",1],["safelist.eu",1],["salzgitter-zeitung.de",1],["sat1.de",1],["sat1gold.de",1],["schoener-wohnen.de",1],["schwaebische-post.de",1],["schwarzwaelder-bote.de",1],["serienjunkies.de",1],["shz.de",1],["sixx.de",1],["skodacommunity.de",1],["smart-wohnen.net",1],["sn.at",1],["sozialversicherung-kompetent.de",1],["spiegel.de",1],["spielen.de",1],["spieletipps.de",1],["spielfilm.de",1],["sport.de",1],["sport365.fr",1],["sportal.de",1],["spox.com",1],["stern.de",1],["stuttgarter-nachrichten.de",1],["stuttgarter-zeitung.de",1],["sueddeutsche.de",1],["svz.de",1],["szene1.at",1],["szene38.de",1],["t-online.de",1],["tagesspiegel.de",1],["taschenhirn.de",1],["techadvisor.co.uk",1],["techstage.de",1],["tele5.de",1],["the-voice-of-germany.de",1],["thueringen24.de",1],["tichyseinblick.de",1],["tierfreund.co",1],["tiervermittlung.de",1],["torgranate.de",1],["trend.at",1],["tv-media.at",1],["tvdigital.de",1],["tvinfo.de",1],["tvspielfilm.de",1],["tvtoday.de",1],["tz.de",1],["unicum.de",1],["unnuetzes.com",1],["unsere-helden.com",1],["unterhalt.net",1],["usinger-anzeiger.de",1],["usp-forum.de",1],["videogameszone.de",1],["vienna.at",1],["vip.de",1],["virtualnights.com",1],["vox.de",1],["wa.de",1],["wallstreet-online.de",[1,4]],["waz.de",1],["weather.us",1],["webfail.com",1],["weihnachten.me",1],["weihnachts-bilder.org",1],["weihnachts-filme.com",1],["welt.de",1],["weltfussball.at",1],["weristdeinfreund.de",1],["werkzeug-news.de",1],["werra-rundschau.de",1],["wetterauer-zeitung.de",1],["wiesbadener-kurier.de",1],["wiesbadener-tagblatt.de",1],["winboard.org",1],["windows-7-forum.net",1],["winfuture.de",1],["wintotal.de",1],["wlz-online.de",1],["wn.de",1],["wohngeld.org",1],["wolfenbuetteler-zeitung.de",1],["wolfsburger-nachrichten.de",1],["woman.at",1],["womenshealth.de",1],["wormser-zeitung.de",1],["woxikon.de",1],["wp.de",1],["wr.de",1],["yachtrevue.at",1],["ze.tt",1],["zeit.de",1],["meineorte.com",2],["osthessen-news.de",2],["techadvisor.com",2],["focus.de",2],["economictimes.indiatimes.com",5],["m.timesofindia.com",6],["timesofindia.indiatimes.com",6],["youmath.it",6],["redensarten-index.de",6],["lesoir.be",6],["electriciansforums.net",6],["keralatelecom.info",6],["betaseries.com",6],["free-sms-receive.com",6],["sms-receive-online.com",6],["universegunz.net",6],["happypenguin.altervista.org",6],["everyeye.it",6],["bluedrake42.com",6],["streamservicehd.click",6],["supermarioemulator.com",6],["futbollibrehd.com",6],["newsrade.com",6],["eska.pl",6],["eskarock.pl",6],["voxfm.pl",6],["mathaeser.de",6],["freethesaurus.com",8],["thefreedictionary.com",8],["hdbox.ws",10],["todopolicia.com",10],["scat.gold",10],["freecoursesite.com",10],["windowcleaningforums.co.uk",10],["cruisingearth.com",10],["hobby-machinist.com",10],["freegogpcgames.com",10],["latitude.to",10],["kitchennovel.com",10],["w3layouts.com",10],["blog.receivefreesms.co.uk",10],["eductin.com",10],["dealsfinders.blog",10],["audiobooks4soul.com",10],["tinhocdongthap.com",10],["sakarnewz.com",10],["downloadr.in",10],["topcomicporno.com",10],["dongknows.com",10],["traderepublic.community",10],["babia.to",10],["celtadigital.com",10],["iptvrun.com",10],["adsup.lk",10],["cryptomonitor.in",10],["areatopik.com",10],["cardscanner.co",10],["nullforums.net",10],["courseclub.me",10],["tamarindoyam.com",10],["jeep-cj.com",10],["choiceofmods.com",10],["myqqjd.com",10],["ssdtop.com",10],["apkhex.com",10],["gezegenforum.com",10],["mbc2.live",10],["iptvapps.net",10],["null-scripts.net",10],["nullscripts.net",10],["bloground.ro",10],["witcherhour.com",10],["ottverse.com",10],["torrentmac.net",10],["mazakony.com",10],["laptechinfo.com",10],["mc-at.org",10],["playstationhaber.com",10],["mangapt.com",10],["seriesperu.com",10],["pesprofessionals.com",10],["wpsimplehacks.com",10],["sportshub.to",[10,268]],["topsporter.net",[10,268]],["darkwanderer.net",10],["truckingboards.com",10],["coldfrm.org",10],["azrom.net",10],["freepatternsarea.com",10],["alttyab.net",10],["hq-links.com",10],["mobilkulup.com",10],["esopress.com",10],["rttar.com",10],["nesiaku.my.id",10],["jipinsoft.com",10],["surfsees.com",10],["truthnews.de",10],["farsinama.com",10],["worldofiptv.com",10],["vuinsider.com",10],["crazydl.net",10],["gamemodsbase.com",10],["babiato.tech",10],["secuhex.com",10],["turkishaudiocenter.com",10],["galaxyos.net",10],["blackhatworld.com",10],["bizdustry.com",10],["storefront.com.ng",10],["pkbiosfix.com",10],["casi3.xyz",10],["mediafire.com",11],["wcoanimedub.tv",12],["wcoforever.net",12],["openspeedtest.com",12],["addtobucketlist.com",12],["3dzip.org",[12,81]],["ilmeteo.it",12],["wcoforever.com",12],["comprovendolibri.it",12],["healthelia.com",12],["keephealth.info",13],["afreesms.com",14],["kinoger.re",14],["laksa19.github.io",14],["javcl.com",14],["tvlogy.to",14],["live.dragaoconnect.net",14],["beststremo.com",14],["seznam.cz",14],["seznamzpravy.cz",14],["xerifetech.com",14],["wallpapershome.com",16],["imgkings.com",17],["pornvideotop.com",17],["xstory-fr.com",17],["krotkoosporcie.pl",17],["anghami.com",18],["wired.com",19],["tutele.sx",20],["footyhunter3.xyz",20],["magesypro.pro",[21,22]],["audiotools.pro",22],["magesy.blog",[22,23,24]],["robloxscripts.com",23],["libreriamo.it",23],["postazap.com",23],["medebooks.xyz",23],["tutorials-technology.info",23],["mashtips.com",23],["marriedgames.com.br",23],["4allprograms.me",23],["nurgsm.com",23],["certbyte.com",23],["plugincrack.com",23],["gamingdeputy.com",23],["freewebcart.com",23],["katestube.com",25],["short.pe",25],["footystreams.net",25],["seattletimes.com",26],["yiv.com",27],["globalrph.com",28],["e-glossa.it",29],["webcheats.com.br",30],["gala.fr",32],["gentside.com",32],["geo.fr",32],["hbrfrance.fr",32],["nationalgeographic.fr",32],["ohmymag.com",32],["serengo.net",32],["vsd.fr",32],["updato.com",[33,51]],["methbox.com",34],["daizurin.com",34],["pendekarsubs.us",34],["dreamfancy.org",34],["rysafe.blogspot.com",34],["techacode.com",34],["toppng.com",34],["th-world.com",34],["avjamack.com",34],["avjamak.net",34],["tickzoo.tv",35],["dlhd.sx",36],["embedstream.me",36],["yts-subs.net",36],["cnnamador.com",37],["nudecelebforum.com",38],["pronpic.org",39],["thewebflash.com",40],["discordfastfood.com",40],["xup.in",40],["popularmechanics.com",41],["op.gg",42],["lequipe.fr",43],["comunidadgzone.es",44],["mp3fy.com",44],["lebensmittelpraxis.de",44],["ebookdz.com",44],["forum-pokemon-go.fr",44],["praxis-jugendarbeit.de",44],["gdrivez.xyz",44],["dictionnaire-medical.net",44],["cle0desktop.blogspot.com",44],["up-load.io",44],["direct-link.net",44],["direkt-wissen.com",44],["keysbrasil.blogspot.com",44],["hotpress.info",44],["turkleech.com",44],["anibatch.me",44],["anime-i.com",44],["plex-guide.de",44],["healthtune.site",44],["gewinde-normen.de",44],["tucinehd.com",44],["jellynote.com",45],["eporner.com",47],["pornbimbo.com",48],["allmonitors24.com",48],["4j.com",48],["avoiderrors.com",49],["cgtips.org",[49,214]],["sitarchive.com",49],["livenewsof.com",49],["topnewsshow.com",49],["gatcha.org",49],["empregoestagios.com",49],["everydayonsales.com",49],["kusonime.com",49],["aagmaal.xyz",49],["suicidepics.com",49],["codesnail.com",49],["codingshiksha.com",49],["graphicux.com",49],["asyadrama.com",49],["bitcoinegypt.news",49],["citychilli.com",49],["talkjarvis.com",49],["hdmotori.it",50],["femdomtb.com",52],["camhub.cc",52],["bobs-tube.com",52],["ru-xvideos.me",52],["pornfd.com",52],["popno-tour.net",52],["molll.mobi",52],["watchmdh.to",52],["camwhores.tv",52],["elfqrin.com",53],["satcesc.com",54],["apfelpatient.de",54],["lusthero.com",55],["m2list.com",56],["embed.nana2play.com",56],["elahmad.com",56],["dofusports.xyz",56],["dallasnews.com",57],["lnk.news",58],["lnk.parts",58],["efukt.com",59],["wendycode.com",59],["springfieldspringfield.co.uk",60],["porndoe.com",61],["smsget.net",[62,63]],["kjanime.net",64],["gioialive.it",65],["classicreload.com",66],["scriptzhub.com",66],["hotpornfile.org",67],["coolsoft.altervista.org",67],["hackedonlinegames.com",67],["jkoding.xyz",67],["settlersonlinemaps.com",67],["magdownload.org",67],["kpkuang.org",67],["shareus.site",67],["crypto4yu.com",67],["faucetwork.space",67],["thenightwithoutthedawn.blogspot.com",67],["entutes.com",67],["claimlite.club",67],["bazadecrypto.com",[67,314]],["chicoer.com",68],["bostonherald.com",68],["dailycamera.com",68],["maxcheaters.com",69],["rbxoffers.com",69],["mhn.quest",69],["leagueofgraphs.com",69],["hieunguyenphoto.com",69],["benzinpreis.de",69],["postimees.ee",69],["police.community",69],["gisarea.com",69],["schaken-mods.com",69],["theclashify.com",69],["newscon.org",69],["txori.com",69],["olarila.com",69],["deletedspeedstreams.blogspot.com",69],["schooltravelorganiser.com",69],["xhardhempus.net",69],["sportsplays.com",70],["deinesexfilme.com",72],["einfachtitten.com",72],["halloporno.com",72],["herzporno.com",72],["lesbenhd.com",72],["milffabrik.com",[72,243]],["porn-monkey.com",72],["porndrake.com",72],["pornhubdeutsch.net",72],["pornoaffe.com",72],["pornodavid.com",72],["pornoente.tv",[72,243]],["pornofisch.com",72],["pornofelix.com",72],["pornohammer.com",72],["pornohelm.com",72],["pornoklinge.com",72],["pornotom.com",[72,243]],["pornotommy.com",72],["pornovideos-hd.com",72],["pornozebra.com",[72,243]],["xhamsterdeutsch.xyz",72],["xnxx-sexfilme.com",72],["zerion.cc",72],["letribunaldunet.fr",73],["vladan.fr",73],["live-tv-channels.org",74],["eslfast.com",75],["freegamescasual.com",76],["tcpvpn.com",77],["oko.sh",77],["timesnownews.com",77],["timesnowhindi.com",77],["timesnowmarathi.com",77],["zoomtventertainment.com",77],["xxxuno.com",78],["sholah.net",79],["2rdroid.com",79],["bisceglielive.it",80],["pandajogosgratis.com.br",82],["5278.cc",83],["altblogger.net",84],["hl-live.de",84],["wohnmobilforum.de",84],["nulledbear.com",84],["sinnerclownceviri.net",84],["satoshi-win.xyz",84],["encurtandourl.com",[84,144]],["freedeepweb.blogspot.com",84],["freesoft.id",84],["zcteam.id",84],["www-daftarharga.blogspot.com",84],["ear-phone-review.com",84],["telefullenvivo.com",84],["listatv.pl",84],["ltc-faucet.xyz",84],["coin-profits.xyz",84],["relampagomovies.com",84],["tonspion.de",86],["duplichecker.com",87],["plagiarismchecker.co",87],["plagiarismdetector.net",87],["searchenginereports.net",87],["giallozafferano.it",88],["autojournal.fr",88],["autoplus.fr",88],["sportauto.fr",88],["linkspaid.com",89],["proxydocker.com",89],["beeimg.com",[90,91]],["emturbovid.com",91],["ftlauderdalebeachcam.com",92],["ftlauderdalewebcam.com",92],["juneauharborwebcam.com",92],["keywestharborwebcam.com",92],["kittycatcam.com",92],["mahobeachcam.com",92],["miamiairportcam.com",92],["morganhillwebcam.com",92],["njwildlifecam.com",92],["nyharborwebcam.com",92],["paradiseislandcam.com",92],["pompanobeachcam.com",92],["portbermudawebcam.com",92],["portcanaveralwebcam.com",92],["portevergladeswebcam.com",92],["portmiamiwebcam.com",92],["portnywebcam.com",92],["portnassauwebcam.com",92],["portstmaartenwebcam.com",92],["portstthomaswebcam.com",92],["porttampawebcam.com",92],["sxmislandcam.com",92],["gearingcommander.com",92],["themes-dl.com",92],["badassdownloader.com",92],["badasshardcore.com",92],["badassoftcore.com",92],["nulljungle.com",92],["teevee.asia",92],["otakukan.com",92],["generate.plus",94],["calculate.plus",94],["avcesar.com",95],["audiotag.info",96],["tudigitale.it",97],["ibcomputing.com",98],["eodev.com",99],["legia.net",100],["acapellas4u.co.uk",101],["streamhentaimovies.com",102],["konten.co.id",103],["diariodenavarra.es",104],["tubereader.me",104],["scripai.com",104],["myfxbook.com",104],["whatfontis.com",104],["xiaomifans.pl",105],["eletronicabr.com",105],["optifine.net",106],["luzernerzeitung.ch",107],["tagblatt.ch",107],["spellcheck.net",108],["spellchecker.net",108],["spellweb.com",108],["ableitungsrechner.net",109],["alternet.org",110],["gourmetsupremacy.com",110],["shrib.com",111],["pandafiles.com",112],["vidia.tv",[112,133]],["hortonanderfarom.blogspot.com",112],["clarifystraight.com",112],["tutelehd3.xyz",113],["mega4upload.com",113],["coolcast2.com",113],["techclips.net",113],["earthquakecensus.com",113],["footyhunter.lol",113],["gamerarcades.com",113],["poscitech.click",113],["starlive.stream",113],["utopianwilderness.com",113],["wecast.to",113],["sportbar.live",113],["lordchannel.com",113],["play-old-pc-games.com",114],["tunovelaligera.com",115],["tapchipi.com",115],["cuitandokter.com",115],["tech-blogs.com",115],["cardiagn.com",115],["dcleakers.com",115],["esgeeks.com",115],["pugliain.net",115],["uplod.net",115],["worldfreeware.com",115],["fikiri.net",115],["myhackingworld.com",115],["phoenixfansub.com",115],["freecourseweb.com",116],["devcourseweb.com",116],["coursewikia.com",116],["courseboat.com",116],["coursehulu.com",116],["lne.es",120],["pornult.com",121],["webcamsdolls.com",121],["bitcotasks.com",[121,166]],["adsy.pw",121],["playstore.pw",121],["exactpay.online",121],["thothd.to",121],["proplanta.de",122],["hydrogenassociation.org",123],["ludigames.com",123],["sportitalialive.com",123],["made-by.org",123],["xenvn.com",123],["worldtravelling.com",123],["igirls.in",123],["technichero.com",123],["roshiyatech.my.id",123],["24sport.stream",123],["aeroxplorer.com",123],["mad4wheels.com",124],["logi.im",124],["emailnator.com",124],["textograto.com",125],["voyageforum.com",126],["hmc-id.blogspot.com",126],["jemerik.com",126],["myabandonware.com",126],["chatta.it",128],["ketubanjiwa.com",129],["nsfw247.to",130],["funzen.net",130],["fighter.stream",130],["ilclubdellericette.it",130],["hubstream.in",130],["extremereportbot.com",131],["getintopc.com",132],["qoshe.com",134],["lowellsun.com",135],["mamadu.pl",135],["dobrapogoda24.pl",135],["motohigh.pl",135],["namasce.pl",135],["ultimate-catch.eu",136],["cpopchanelofficial.com",137],["creditcardgenerator.com",138],["creditcardrush.com",138],["bostoncommons.net",138],["thejobsmovie.com",138],["livsavr.co",138],["nilopolisonline.com.br",139],["mesquitaonline.com",139],["yellowbridge.com",139],["socialgirls.im",140],["yaoiotaku.com",141],["camhub.world",142],["moneyhouse.ch",143],["ihow.info",144],["filesus.com",144],["sturls.com",144],["re.two.re",144],["turbo1.co",144],["cartoonsarea.xyz",144],["valeronevijao.com",145],["cigarlessarefy.com",145],["figeterpiazine.com",145],["yodelswartlike.com",145],["generatesnitrosate.com",145],["crownmakermacaronicism.com",145],["chromotypic.com",145],["gamoneinterrupted.com",145],["metagnathtuggers.com",145],["wolfdyslectic.com",145],["rationalityaloelike.com",145],["sizyreelingly.com",145],["simpulumlamerop.com",145],["urochsunloath.com",145],["monorhinouscassaba.com",145],["counterclockwisejacky.com",145],["35volitantplimsoles5.com",145],["scatch176duplicities.com",145],["antecoxalbobbing1010.com",145],["boonlessbestselling244.com",145],["cyamidpulverulence530.com",145],["guidon40hyporadius9.com",145],["449unceremoniousnasoseptal.com",145],["19turanosephantasia.com",145],["30sensualizeexpression.com",145],["321naturelikefurfuroid.com",145],["745mingiestblissfully.com",145],["availedsmallest.com",145],["greaseball6eventual20.com",145],["toxitabellaeatrebates306.com",145],["20demidistance9elongations.com",145],["audaciousdefaulthouse.com",145],["fittingcentermondaysunday.com",145],["fraudclatterflyingcar.com",145],["launchreliantcleaverriver.com",145],["matriculant401merited.com",145],["realfinanceblogcenter.com",145],["reputationsheriffkennethsand.com",145],["telyn610zoanthropy.com",145],["tubelessceliolymph.com",145],["tummulerviolableness.com",145],["un-block-voe.net",145],["v-o-e-unblock.com",145],["voe-un-block.com",145],["voeun-block.net",145],["voeunbl0ck.com",145],["voeunblck.com",145],["voeunblk.com",145],["voeunblock.com",145],["voeunblock1.com",145],["voeunblock2.com",145],["voeunblock3.com",145],["agefi.fr",146],["cariskuy.com",147],["letras2.com",147],["yusepjaelani.blogspot.com",148],["letras.mus.br",149],["mtlurb.com",150],["port.hu",151],["acdriftingpro.com",151],["flight-report.com",151],["forumdz.com",151],["abandonmail.com",151],["flmods.com",151],["zilinak.sk",151],["projectfreetv.stream",151],["hotdesimms.com",151],["pdfaid.com",151],["mconverter.eu",151],["dzeko11.net",[151,268]],["mail.com",151],["expresskaszubski.pl",151],["moegirl.org.cn",151],["onemanhua.com",152],["t3n.de",153],["allindiaroundup.com",154],["vectorizer.io",155],["smgplaza.com",155],["onehack.us",155],["thapcam.net",155],["thefastlaneforum.com",156],["trade2win.com",157],["modagamers.com",158],["freemagazines.top",158],["straatosphere.com",158],["nullpk.com",158],["adslink.pw",158],["downloadudemy.com",158],["picgiraffe.com",158],["weadown.com",158],["freepornsex.net",158],["nurparatodos.com.ar",158],["librospreuniversitariospdf.blogspot.com",159],["msdos-games.com",159],["blocklayer.com",159],["forexeen.us",159],["khsm.io",159],["webcreator-journal.com",159],["nu6i-bg-net.com",159],["routech.ro",160],["hokej.net",160],["turkmmo.com",161],["palermotoday.it",162],["baritoday.it",162],["trentotoday.it",162],["agrigentonotizie.it",162],["anconatoday.it",162],["arezzonotizie.it",162],["avellinotoday.it",162],["bresciatoday.it",162],["brindisireport.it",162],["casertanews.it",162],["cataniatoday.it",162],["cesenatoday.it",162],["chietitoday.it",162],["forlitoday.it",162],["frosinonetoday.it",162],["genovatoday.it",162],["ilpescara.it",162],["ilpiacenza.it",162],["latinatoday.it",162],["lecceprima.it",162],["leccotoday.it",162],["livornotoday.it",162],["messinatoday.it",162],["milanotoday.it",162],["modenatoday.it",162],["monzatoday.it",162],["novaratoday.it",162],["padovaoggi.it",162],["parmatoday.it",162],["perugiatoday.it",162],["pisatoday.it",162],["quicomo.it",162],["ravennatoday.it",162],["reggiotoday.it",162],["riminitoday.it",162],["romatoday.it",162],["salernotoday.it",162],["sondriotoday.it",162],["sportpiacenza.it",162],["ternitoday.it",162],["today.it",162],["torinotoday.it",162],["trevisotoday.it",162],["triesteprima.it",162],["udinetoday.it",162],["veneziatoday.it",162],["vicenzatoday.it",162],["thumpertalk.com",163],["arkcod.org",163],["facciabuco.com",164],["softx64.com",165],["thelayoff.com",166],["manwan.xyz",166],["blog.cryptowidgets.net",166],["blog.insurancegold.in",166],["blog.wiki-topia.com",166],["blog.coinsvalue.net",166],["blog.cookinguide.net",166],["blog.freeoseocheck.com",166],["blog.makeupguide.net",166],["blog.carstopia.net",166],["blog.carsmania.net",166],["shorterall.com",166],["blog24.me",166],["maxstream.video",166],["maxlinks.online",166],["tvepg.eu",166],["pstream.net",167],["dailymaverick.co.za",168],["apps2app.com",169],["cheatermad.com",170],["ville-ideale.fr",171],["fm-arena.com",172],["tradersunion.com",173],["tandess.com",174],["faqwiki.us",175],["sonixgvn.net",175],["spontacts.com",176],["dankmemer.lol",177],["apkmoddone.com",178],["getexploits.com",179],["fplstatistics.com",180],["breitbart.com",181],["salidzini.lv",182],["choosingnothing.com",183],["cryptorank.io",184],["enit.in",185],["financerites.com",185],["fadedfeet.com",186],["homeculina.com",186],["ineedskin.com",186],["kenzo-flowertag.com",186],["lawyex.co",186],["mdn.lol",186],["bitzite.com",187],["coingraph.us",188],["impact24.us",188],["my-code4you.blogspot.com",189],["vrcmods.com",190],["osuskinner.com",190],["osuskins.net",190],["pentruea.com",[191,192]],["mchacks.net",193],["why-tech.it",194],["compsmag.com",195],["tapetus.pl",196],["gaystream.online",197],["bembed.net",197],["embedv.net",197],["fslinks.org",197],["listeamed.net",197],["v6embed.xyz",197],["vgplayer.xyz",197],["vid-guard.com",197],["autoroad.cz",198],["brawlhalla.fr",198],["tecnobillo.com",198],["sexcamfreeporn.com",199],["breatheheavy.com",200],["wenxuecity.com",201],["key-hub.eu",202],["fabioambrosi.it",203],["tattle.life",204],["emuenzen.de",204],["terrylove.com",204],["mynet.com",205],["cidade.iol.pt",206],["fantacalcio.it",207],["hentaifreak.org",208],["hypebeast.com",209],["krankheiten-simulieren.de",210],["catholic.com",211],["ad-doge.com",212],["3dmodelshare.org",213],["gourmetscans.net",214],["techinferno.com",215],["ibeconomist.com",216],["bookriot.com",217],["purposegames.com",218],["schoolcheats.net",218],["globo.com",219],["latimes.com",219],["claimrbx.gg",220],["perelki.net",221],["vpn-anbieter-vergleich-test.de",222],["livingincebuforums.com",223],["paperzonevn.com",224],["alltechnerd.com",225],["malaysianwireless.com",226],["erinsakura.com",227],["infofuge.com",227],["freejav.guru",227],["novelmultiverse.com",227],["fritidsmarkedet.dk",228],["maskinbladet.dk",228],["15min.lt",229],["baddiehub.com",230],["mr9soft.com",231],["21porno.com",232],["adult-sex-gamess.com",233],["hentaigames.app",233],["mobilesexgamesx.com",233],["mysexgamer.com",233],["porngameshd.com",233],["sexgamescc.com",233],["xnxx-sex-videos.com",233],["f2movies.to",234],["freeporncave.com",235],["tubsxxx.com",236],["pornojenny.com",237],["subtitle.one",238],["manga18fx.com",239],["freebnbcoin.com",239],["sextvx.com",240],["studydhaba.com",241],["freecourse.tech",241],["victor-mochere.com",241],["papunika.com",241],["mobilanyheter.net",241],["prajwaldesai.com",[241,260]],["ftuapps.dev",241],["muztext.com",242],["pornohans.com",243],["nursexfilme.com",243],["pornohirsch.net",243],["xhamster-sexvideos.com",243],["pornoschlange.com",243],["hdpornos.net",243],["gutesexfilme.com",243],["short1.site",243],["zona-leros.com",243],["charbelnemnom.com",244],["simplebits.io",245],["online-fix.me",246],["gamersdiscussionhub.com",247],["owlzo.com",248],["q1003.com",249],["blogpascher.com",250],["testserver.pro",251],["lifestyle.bg",251],["money.bg",251],["news.bg",251],["topsport.bg",251],["webcafe.bg",251],["mgnet.xyz",252],["advertiserandtimes.co.uk",253],["xvideos2020.me",254],["111.90.159.132",255],["techsolveprac.com",256],["joomlabeginner.com",257],["largescaleforums.com",258],["dubznetwork.com",259],["mundodonghua.com",259],["hentaidexy.com",261],["code2care.org",262],["xxxxsx.com",264],["ngontinh24.com",265],["panel.freemcserver.net",266],["idevicecentral.com",267],["zona11.com",268],["scsport.live",268],["mangacrab.com",270],["idnes.cz",271],["viefaucet.com",272],["cloud-computing-central.com",273],["afk.guide",274],["businessnamegenerator.com",275],["derstandard.at",276],["derstandard.de",276],["rocketnews24.com",277],["soranews24.com",277],["youpouch.com",277],["ilsole24ore.com",278],["ipacrack.com",279],["hentaiporn.one",280],["infokik.com",281],["daemonanime.net",282],["daemon-hentai.com",282],["deezer.com",283],["fosslinux.com",284],["shrdsk.me",285],["examword.com",286],["sempreupdate.com.br",286],["tribuna.com",287],["trendsderzukunft.de",288],["gal-dem.com",288],["lostineu.eu",288],["oggitreviso.it",288],["speisekarte.de",288],["mixed.de",288],["lightnovelspot.com",[289,290]],["lightnovelworld.com",[289,290]],["novelpub.com",[289,290]],["webnovelpub.com",[289,290]],["mail.yahoo.com",291],["hwzone.co.il",292],["nammakalvi.com",293],["javmoon.me",294],["c2g.at",295],["terafly.me",295],["elamigos-games.com",295],["elamigos-games.net",295],["dktechnicalmate.com",296],["recipahi.com",296],["converter-btc.world",296],["kaystls.site",297],["aquarius-horoscopes.com",298],["cancer-horoscopes.com",298],["dubipc.blogspot.com",298],["echoes.gr",298],["engel-horoskop.de",298],["freegames44.com",298],["fuerzasarmadas.eu",298],["gemini-horoscopes.com",298],["jurukunci.net",298],["krebs-horoskop.com",298],["leo-horoscopes.com",298],["maliekrani.com",298],["nklinks.click",298],["ourenseando.es",298],["pisces-horoscopes.com",298],["radio-en-direct.fr",298],["sagittarius-horoscopes.com",298],["scorpio-horoscopes.com",298],["singlehoroskop-loewe.de",298],["skat-karten.de",298],["skorpion-horoskop.com",298],["taurus-horoscopes.com",298],["the1security.com",298],["torrentmovies.online",298],["virgo-horoscopes.com",298],["zonamarela.blogspot.com",298],["yoima.hatenadiary.com",298],["vpntester.org",299],["watchhentai.net",300],["japscan.lol",301],["digitask.ru",302],["tempumail.com",303],["sexvideos.host",304],["10alert.com",306],["cryptstream.de",307],["nydus.org",307],["techhelpbd.com",308],["fapdrop.com",309],["cellmapper.net",310],["hdrez.com",311],["youwatch-serie.com",311],["printablecreative.com",312],["comohoy.com",313],["leak.sx",313],["paste.bin.sx",313],["pornleaks.in",313],["merlininkazani.com",313],["j91.asia",315],["jeniusplay.com",316],["indianyug.com",317],["rgb.vn",317],["needrom.com",318],["criptologico.com",319],["megadrive-emulator.com",320],["eromanga-show.com",321],["hentai-one.com",321],["hentaipaw.com",321],["10minuteemails.com",322],["luxusmail.org",322],["w3cub.com",323],["bangpremier.com",324],["nyaa.iss.ink",325],["tnp98.xyz",327],["freepdfcomic.com",328],["memedroid.com",329],["animesync.org",330],["karaoketexty.cz",331],["resortcams.com",332],["mjakmama24.pl",334],["security-demo.extrahop.com",335]]);

const entitiesMap = new Map([["lablue",0],["comunio",1],["finanzen",[1,7]],["gameswelt",1],["heftig",1],["notebookcheck",1],["testedich",1],["transfermarkt",1],["truckscout24",1],["tvtv",1],["wetteronline",1],["wieistmeineip",1],["wetter",3],["1337x",6],["eztv",6],["sushi-scan",10],["spigotunlocked",10],["ahmedmode",10],["kissasian",13],["rp5",14],["mma-core",15],["yts",20],["720pstream",20],["1stream",20],["magesy",21],["shortzzy",23],["thefmovies",25],["urlcero",31],["totaldebrid",34],["sandrives",34],["oploverz",35],["fxporn69",44],["aliancapes",44],["pouvideo",46],["povvideo",46],["povw1deo",46],["povwideo",46],["powv1deo",46],["powvibeo",46],["powvideo",46],["powvldeo",46],["tubsexer",52],["porno-tour",52],["lenkino",52],["pornomoll",52],["camsclips",52],["m4ufree",56],["writedroid",67],["telerium",71],["pandafreegames",85],["thoptv",93],["brainly",99],["streameast",113],["thestreameast",113],["daddylivehd",113],["solvetube",117],["hdfilme",118],["pornhub",119],["wcofun",126],["bollyholic",130],["gotxx",144],["turkanime",145],["voe-unblock",145],["khatrimaza",158],["pogolinks",158],["popcornstream",160],["vembed",197],["xhamsterdeutsch",243],["privatemoviez",247],["gmx",263],["lightnovelpub",[289,290]],["camcaps",305],["drivebot",326],["thenextplanet1",327],["autoscout24",333]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noSetTimeoutIf(
    needle = '',
    delay = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('prevent-setTimeout', needle, delay);
    const needleNot = needle.charAt(0) === '!';
    if ( needleNot ) { needle = needle.slice(1); }
    if ( delay === '' ) { delay = undefined; }
    let delayNot = false;
    if ( delay !== undefined ) {
        delayNot = delay.charAt(0) === '!';
        if ( delayNot ) { delay = delay.slice(1); }
        delay = parseInt(delay, 10);
    }
    const reNeedle = safe.patternToRegex(needle);
    self.setTimeout = new Proxy(self.setTimeout, {
        apply: function(target, thisArg, args) {
            const a = args[0] instanceof Function
                ? String(safe.Function_toString(args[0]))
                : String(args[0]);
            const b = args[1];
            if ( needle === '' && delay === undefined ) {
                safe.uboLog(logPrefix, `Called:\n${a}\n${b}`);
                return Reflect.apply(target, thisArg, args);
            }
            let defuse;
            if ( needle !== '' ) {
                defuse = reNeedle.test(a) !== needleNot;
            }
            if ( defuse !== false && delay !== undefined ) {
                defuse = (b === delay || isNaN(b) && isNaN(delay) ) !== delayNot;
            }
            if ( defuse ) {
                args[0] = function(){};
                safe.uboLog(logPrefix, `Prevented:\n${a}\n${b}`);
            }
            return Reflect.apply(target, thisArg, args);
        },
        get(target, prop, receiver) {
            if ( prop === 'toString' ) {
                return target.toString.bind(target);
            }
            return Reflect.get(target, prop, receiver);
        },
    });
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( bcBuffer === undefined ) {
            return bc.postMessage({ what: 'messageToLogger', type, text });
        }
        bcBuffer.push({ type, text });
    };
    bc.onmessage = ev => {
        const msg = ev.data;
        switch ( msg ) {
        case 'iamready!':
            if ( bcBuffer === undefined ) { break; }
            bcBuffer.forEach(({ type, text }) =>
                bc.postMessage({ what: 'messageToLogger', type, text })
            );
            bcBuffer = undefined;
            break;
        case 'setScriptletLogLevelToOne':
            safe.logLevel = 1;
            break;
        case 'setScriptletLogLevelToTwo':
            safe.logLevel = 2;
            break;
        }
    };
    bc.postMessage('areyouready?');
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { noSetTimeoutIf(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_noSetTimeoutIf();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noSetTimeoutIf = cloneInto([
            [ '(', uBOL_noSetTimeoutIf.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noSetTimeoutIf);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_noSetTimeoutIf;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
