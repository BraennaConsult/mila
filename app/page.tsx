'use client';

import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { AppPreview } from "@/app/sections/AppPreview";
import { CTA } from "@/app/sections/CTA";
import { FAQ } from "@/app/sections/FAQ";
import { Hero } from "@/app/sections/Hero";
import { MyLuck } from "@/app/sections/MyLuck";
import { Testimonials } from "@/app/sections/Testimonials";
import { MarathonBenefits } from "./sections/MarathonBenefits";
import { WhyMyLuck } from "./sections/WhyMyLuck";
import { ParticipantsReview } from "./sections/ParticipantsReview";
import { WhatYouGet } from "./sections/WhatYouGet";
import { NavigationalCTA } from "@/app/sections/NavigationalCTA";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const APP_ID = "buqv5sev"; // Replace with your actual Workspace ID

    // Define window.intercomSettings with the correct type
    (window as any).intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: APP_ID,
    };

    (function() {
      var w = window as any;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic('reattach_activator');
        ic('update', w.intercomSettings);
      } else {
        var d = document;
        var i: any = function(...args: any[]) { i.c(args); };
        i.q = [];
        i.c = function(args: any) { i.q.push(args); };
        w.Intercom = i;
        var l = function() {
          var s = d.createElement('script');
          s.type = 'text/javascript'; s.async = true;
          s.src = 'https://widget.intercom.io/widget/' + APP_ID;
          var x = d.getElementsByTagName('script')[0];
          if (x && x.parentNode) {
            x.parentNode.insertBefore(s, x);
          }
        };
        if (document.readyState === 'complete') { l(); }
        else if (w.attachEvent) { w.attachEvent('onload', l); }
        else { w.addEventListener('load', l, false); }
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-[#F7F6F6]">
        <Hero />
        <NavigationalCTA className="pt-12 md:pt-0 lg:pt-20" />
        <MarathonBenefits />
        <WhyMyLuck />
        <ParticipantsReview />
        <WhatYouGet />
        <NavigationalCTA className="pt-0 md:pt-0 lg:pt-0" />
        <Testimonials />
        <NavigationalCTA className="pt-0 md:pt-0 lg:pt-0" />
        {/* <FAQ /> */}
        {/* <MyLuck /> */}
        {/* <AppPreview /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
// export default function Home() {

//   useEffect(() => {
//     const APP_ID = "buqv5sev"; // Replace with your actual Workspace ID

//     window.intercomSettings = {
//       api_base: "https://api-iam.intercom.io",
//       app_id: APP_ID,
//     };

//     (function(){
//       var w=window;var ic=w.Intercom;
//       if(typeof ic==="function"){
//         ic('reattach_activator');
//         ic('update',w.intercomSettings);
//       }else{
//         var d=document;var i=function(){i.c(arguments);};
//         i.q=[];i.c=function(args){i.q.push(args);};
//         w.Intercom=i;
//         var l=function(){
//           var s=d.createElement('script');
//           s.type='text/javascript';s.async=true;
//           s.src='https://widget.intercom.io/widget/' + APP_ID;
//           var x=d.getElementsByTagName('script')[0];
//           x.parentNode.insertBefore(s, x);
//         };
//         if(document.readyState==='complete'){l();}
//         else if(w.attachEvent){w.attachEvent('onload',l);}
//         else{w.addEventListener('load',l,false);}
//       }
//     })();
//   }, []);
//   return (
//     <>
//       <Header />
//       <main className="bg-[#F7F6F6]">
//         <Hero />
//         <NavigationalCTA className="pt-12 md:pt-0 lg:pt-20" />
//         <MarathonBenefits />
//         <WhyMyLuck />
//         <ParticipantsReview />
//         <WhatYouGet />
//         <NavigationalCTA className="pt-0 md:pt-0 lg:pt-0" />
//         <Testimonials />
//         <NavigationalCTA className="pt-0 md:pt-0 lg:pt-0" />
//         {/* <FAQ /> */}

//         {/* <MyLuck /> */}
//         {/* <AppPreview /> */}
//         {/* <CTA /> */}
//       </main>
//       <Footer />
//     </>
//   );
// }
