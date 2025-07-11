import { Language } from '../types';

type Translations = {
  [key: string]: string;
};

export const translations: Record<Language, Translations> = {
  en: {
    headerTitle: "AgriSynth AI",
    headerSubtitle: "Your Partner in Sustainable Farming",
    formTitle: "Farm Details",
    formSubtitle: "Provide your farm's information to get a personalized AI-driven plan.",
    locationLabel: "Farm Location (e.g., 'Central Valley, California')",
    locationPlaceholder: "Enter your city, region, or state",
    landSizeLabel: "Land Size (Acres)",
    soilTypeLabel: "Predominant Soil Type",
    financialGoalLabel: "Primary Financial Goal",
    submitButton: "Generate Farming Plan",
    submitButtonLoading: "Analyzing...",
    dashboardTitle: "Your Personalized Farming Plan",
    advisorCardTitle: "Farmer Advisor",
    marketCardTitle: "Market Researcher",
    weatherCardTitle: "Weather Station",
    marketCardSubtitle: "Top profitable crops based on market demand and pricing.",
    weatherCardSubtitle: "5-day forecast for your location to help with planning.",
    loaderTitle: "AI Agents at Work...",
    loaderSubtitle: "Analyzing market trends, weather patterns, and your farm's unique profile.",
    newAnalysisButton: "Start New Analysis",
    errorTitle: "Analysis Failed",
    errorTryAgainButton: "Try Again",
    soilTypeClay: "Clay",
    soilTypeSandy: "Sandy",
    soilTypeSilt: "Silt",
    soilTypeLoam: "Loam",
    soilTypePeat: "Peat",
    soilTypeChalky: "Chalky",
    financialGoalProfit: "Maximize Profit",
    financialGoalRisk: "Minimize Risk",
    financialGoalBalance: "Balance Profit and Sustainability",
    financialGoalHobby: "Experimental/Hobby",
  },
  hi: {
    headerTitle: "एग्रीसिंथ एआई",
    headerSubtitle: "टिकाऊ खेती में आपका साथी",
    formTitle: "खेत का विवरण",
    formSubtitle: "व्यक्तिगत एआई-संचालित योजना प्राप्त करने के लिए अपने खेत की जानकारी प्रदान करें।",
    locationLabel: "खेत का स्थान (उदा., 'सेंट्रल वैली, कैलिफोर्निया')",
    locationPlaceholder: "अपना शहर, क्षेत्र, या राज्य दर्ज करें",
    landSizeLabel: "भूमि का आकार (एकड़)",
    soilTypeLabel: "प्रमुख मिट्टी का प्रकार",
    financialGoalLabel: "प्राथमिक वित्तीय लक्ष्य",
    submitButton: "खेती की योजना बनाएं",
    submitButtonLoading: "विश्लेषण हो रहा है...",
    dashboardTitle: "आपकी व्यक्तिगत खेती योजना",
    advisorCardTitle: "किसान सलाहकार",
    marketCardTitle: "बाजार शोधकर्ता",
    weatherCardTitle: "मौसम स्टेशन",
    marketCardSubtitle: "बाजार की मांग और मूल्य निर्धारण के आधार पर शीर्ष लाभदायक फसलें।",
    weatherCardSubtitle: "योजना बनाने में मदद के लिए आपके स्थान का 5-दिवसीय पूर्वानुमान।",
    loaderTitle: "एआई एजेंट काम पर हैं...",
    loaderSubtitle: "बाजार के रुझान, मौसम के पैटर्न और आपके खेत की अनूठी प्रोफ़ाइल का विश्लेषण।",
    newAnalysisButton: "नया विश्लेषण शुरू करें",
    errorTitle: "विश्लेषण विफल",
    errorTryAgainButton: "पुनः प्रयास करें",
    soilTypeClay: "चिकनी मिट्टी",
    soilTypeSandy: "रेतीली मिट्टी",
    soilTypeSilt: "गाद मिट्टी",
    soilTypeLoam: "दोमट मिट्टी",
    soilTypePeat: "पीट मिट्टी",
    soilTypeChalky: "खड़िया मिट्टी",
    financialGoalProfit: "मुनाफा अधिकतम करें",
    financialGoalRisk: "जोखिम कम करें",
    financialGoalBalance: "लाभ और स्थिरता को संतुलित करें",
    financialGoalHobby: "प्रायोगिक/शौक",
  },
  mr: {
    headerTitle: "अ‍ॅग्रीसिंथ एआय",
    headerSubtitle: "शाश्वत शेतीत तुमचा भागीदार",
    formTitle: "शेतीचा तपशील",
    formSubtitle: "वैयक्तिकृत एआय-चालित योजना मिळविण्यासाठी तुमच्या शेतीची माहिती द्या.",
    locationLabel: "शेतीचे ठिकाण (उदा., 'सेंट्रल व्हॅली, कॅलिफोर्निया')",
    locationPlaceholder: "तुमचे शहर, प्रदेश किंवा राज्य प्रविष्ट करा",
    landSizeLabel: "जमिनीचे क्षेत्र (एकर)",
    soilTypeLabel: "प्रमुख मातीचा प्रकार",
    financialGoalLabel: "प्राथमिक आर्थिक ध्येय",
    submitButton: "शेती योजना तयार करा",
    submitButtonLoading: "विश्लेषण करत आहे...",
    dashboardTitle: "तुमची वैयक्तिकृत शेती योजना",
    advisorCardTitle: "शेतकरी सल्लागार",
    marketCardTitle: "बाजार संशोधक",
    weatherCardTitle: "हवामान केंद्र",
    marketCardSubtitle: "बाजारातील मागणी आणि किमतींवर आधारित शीर्ष फायदेशीर पिके.",
    weatherCardSubtitle: "नियोजनात मदत करण्यासाठी तुमच्या स्थानाचा ५-दिवसांचा अंदाज.",
    loaderTitle: "एआय एजंट कामावर आहेत...",
    loaderSubtitle: "बाजारातील ट्रेंड, हवामानाचे नमुने आणि तुमच्या शेतीच्या प्रोफाइलचे विश्लेषण करत आहे.",
    newAnalysisButton: "नवीन विश्लेषण सुरू करा",
    errorTitle: "विश्लेषण अयशस्वी",
    errorTryAgainButton: "पुन्हा प्रयत्न करा",
    soilTypeClay: "चिकणमाती",
    soilTypeSandy: "वाळुंजा जमीन",
    soilTypeSilt: "गाळाची जमीन",
    soilTypeLoam: "पोयट्याची जमीन",
    soilTypePeat: "पीट माती",
    soilTypeChalky: "खडूची माती",
    financialGoalProfit: "नफा वाढवा",
    financialGoalRisk: "धोका कमी करा",
    financialGoalBalance: "नफा आणि टिकाऊपणा संतुलित करा",
    financialGoalHobby: "प्रायोगिक/छंद",
  },
  gu: {
    headerTitle: "એગ્રીસિન્થ એઆઈ",
    headerSubtitle: "ટકાઉ ખેતીમાં તમારા ભાગીદાર",
    formTitle: "ખેતરની વિગતો",
    formSubtitle: "વ્યક્તિગત એઆઈ-સંચાલિત યોજના મેળવવા માટે તમારા ખેતરની માહિતી પ્રદાન કરો.",
    locationLabel: "ખેતરનું સ્થાન (દા.ત., 'સેન્ટ્રલ વેલી, કેલિફોર્નિયા')",
    locationPlaceholder: "તમારું શહેર, પ્રદેશ અથવા રાજ્ય દાખલ કરો",
    landSizeLabel: "જમીનનું કદ (એકર)",
    soilTypeLabel: "મુખ્ય માટીનો પ્રકાર",
    financialGoalLabel: "પ્રાથમિક નાણાકીય લક્ષ્ય",
    submitButton: "ખેતી યોજના બનાવો",
    submitButtonLoading: "વિશ્લેષણ કરી રહ્યું છે...",
    dashboardTitle: "તમારી વ્યક્તિગત ખેતી યોજના",
    advisorCardTitle: "ખેડૂત સલાહકાર",
    marketCardTitle: "બજાર સંશોધક",
    weatherCardTitle: "હવામાન સ્ટેશન",
    marketCardSubtitle: "બજારની માંગ અને કિંમતો પર આધારિત ટોચના નફાકારક પાક.",
    weatherCardSubtitle: "યોજનામાં મદદ કરવા માટે તમારા સ્થાન માટે 5-દિવસની આગાહી.",
    loaderTitle: "એઆઈ એજન્ટો કામ પર છે...",
    loaderSubtitle: "બજારના વલણો, હવામાનની પેટર્ન અને તમારા ફાર્મની અનન્ય પ્રોફાઇલનું વિશ્લેષણ.",
    newAnalysisButton: "નવું વિશ્લેષણ શરૂ કરો",
    errorTitle: "વિશ્લેષણ નિષ્ફળ",
    errorTryAgainButton: "ફરીથી પ્રયાસ કરો",
    soilTypeClay: "ચીકણી માટી",
    soilTypeSandy: "રેતાળ માટી",
    soilTypeSilt: "કાંપવાળી માટી",
    soilTypeLoam: "ગોરાડુ માટી",
    soilTypePeat: "પીટ માટી",
    soilTypeChalky: "ચૂનાવાળી માટી",
    financialGoalProfit: "નફો મહત્તમ કરો",
    financialGoalRisk: "જોખમ ઓછું કરો",
    financialGoalBalance: "નફો અને ટકાઉપણું સંતુલિત કરો",
    financialGoalHobby: "પ્રાયોગિક/શોખ",
  },
};
