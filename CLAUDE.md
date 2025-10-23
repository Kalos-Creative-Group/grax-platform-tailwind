# GRAX Frontend Code & Style Guide

## Overview

This guide defines the frontend development standards for all GRAX web projects. It serves as a single source of truth for visual design, code standards, and technical implementation requirements. All new web projects should follow these guidelines to ensure brand consistency and technical excellence.

**Brand Promise:** "Adapt Faster" - This central message should guide all design and content decisions.

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Technical Requirements](#technical-requirements)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Components](#components)
7. [Accessibility](#accessibility)
8. [SEO Standards](#seo-standards)
9. [Build Pipeline](#build-pipeline)

---

## Brand Identity

### Core Message

**"Adapt Faster"** - This is GRAX's central brand promise and should guide all content.

### Supporting Messages

- Capture and act on every single change in your data over time
- Turn historical data into strategic asset
- Generate revenue, retain customers, meet regulatory compliance

### Logo

The GRAX logo features a gradient-filled mark with the wordmark. Always use the provided SVG:

```html
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="136px" height="40px" viewBox="0 0 136 40" version="1.1">
  <defs>
    <linearGradient x1="91.141271%" y1="80.7240542%" x2="11.0271194%" y2="20.8647299%" id="brandLinearGradient">
      <stop stop-color="#5F6FE6" offset="0%"></stop>
      <stop stop-color="#552C98" offset="100%"></stop>
    </linearGradient>
  </defs>
  <g id="brandSymbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="nav/desktop" transform="translate(-150.000000, -44.000000)">
      <g id="brandLogo" transform="translate(150.000000, 44.000000)">
        <path d="M133.532245,9.12342042 C134.702847,9.12342042 135.525432,9.89374411 135.525432,10.9104181 C135.525432,11.4340849 135.335604,11.9582116 135.019225,12.3587799 L129.546028,19.7227678 L135.525432,27.7646405 C135.810173,28.1652088 136,28.6893355 136,29.2130023 C136,30.2298296 135.209053,31 134.006813,31 C133.310779,31 132.70966,30.7229901 132.266729,30.1067311 L127.173186,23.0195999 L122.111282,30.1067311 C121.636713,30.7229901 121.035594,31 120.33956,31 C119.168958,31 118.346373,30.2298296 118.346373,29.2130023 C118.346373,28.6893355 118.5362,28.1652088 118.820941,27.7646405 L124.800345,19.7227678 L119.327148,12.3587799 C119.042407,11.9582116 118.852579,11.4340849 118.852579,10.9104181 C118.852579,9.89374411 119.643526,9.12342042 120.845766,9.12342042 C121.5418,9.12342042 122.14292,9.40058365 122.58585,10.0166893 L127.173186,16.4257824 L131.760523,10.0166893 C132.203611,9.40058365 132.804573,9.12342042 133.532245,9.12342042 Z M81.9237496,9.21555266 C86.8592602,9.21555266 90.0228917,12.3276604 90.0228917,16.2102451 C90.0228917,19.1065088 88.3146031,21.4791058 85.4355552,22.5574057 L89.8014265,27.6720484 C90.0861675,28.0111441 90.3076327,28.4428319 90.3076327,28.9353792 C90.3076327,30.0142923 89.485205,30.8769015 88.3778789,30.8769015 C87.7133258,30.8769015 87.1440012,30.5689253 86.7959844,30.1067311 L81.1960782,23.143005 L78.0640846,23.143005 L78.0640846,28.9048729 C78.0640846,30.0447986 77.114948,31 75.9443461,31 C74.7421063,31 73.7929697,30.0447986 73.7929697,28.9048729 L73.7929697,11.4961707 C73.7929697,10.170754 74.7737442,9.21555266 76.1341734,9.21555266 L81.9237496,9.21555266 Z M59.1363794,9 C61.3510316,9 63.090958,9.55463306 64.4197494,10.3248034 C65.5903512,11.0644675 66.3180227,11.742199 66.3180227,12.7593329 C66.3180227,13.9607313 65.3372481,14.6389227 64.3248357,14.6389227 C63.5338885,14.6389227 62.9645639,14.2382011 62.6165471,13.9916975 C62.1419788,13.683568 60.9713769,12.943904 59.1996551,12.943904 C55.6247311,12.943904 52.4609423,16.0251987 52.4609423,20.000069 C52.4609423,23.9746326 55.5929359,27.0560807 59.231293,27.0560807 C61.7306862,27.0560807 64.514663,25.546093 64.8943177,22.6809487 L61.2877558,22.6809487 C60.3069812,22.6809487 59.4211204,21.9722509 59.4211204,20.98593 C59.4211204,19.9691027 60.3069812,19.2605582 61.2877558,19.2605582 L66.7609531,19.2605582 C68.3428475,19.2605582 69.1337947,20.3387048 69.0388811,21.8486925 C68.785778,27.8880303 64.1350084,30.9999847 59.231293,30.9999847 C53.5999063,30.9999847 48,26.5014476 48,20.000069 C48,13.498537 53.6315442,9 59.1363794,9 Z M104.290666,9.06141128 C105.239961,9.06141128 105.904199,9.55457174 106.378767,10.6023653 L114.224806,27.8881222 C114.383153,28.2267581 114.477909,28.6273264 114.477909,29.0590143 C114.477909,30.0756882 113.560568,30.9384508 112.453242,30.9384508 C111.440829,30.9384508 110.713158,30.4147839 110.365141,29.6136473 L108.751609,25.9467532 L99.8298816,25.9467532 L98.2163493,29.6136473 C97.8683325,30.4147839 97.1724564,30.9384508 96.1600439,30.9384508 C95.0210799,30.9384508 94.1035812,30.0756882 94.1035812,29.0590143 C94.1035812,28.6273264 94.2301327,28.2267581 94.3881648,27.8881222 L102.234361,10.6023653 C102.677292,9.55457174 103.341687,9.06141128 104.290666,9.06141128 Z M104.290666,15.686195 L101.253587,22.6499212 L107.327904,22.6499212 L104.290666,15.686195 Z M81.7339223,12.7593482 L78.0640846,12.7593482 L78.0640846,19.5996693 L81.7339223,19.5996693 C84.1067639,19.5996693 85.8784857,18.7674131 85.8784857,16.2102451 C85.8784857,13.6835834 84.1067639,12.7593482 81.7339223,12.7593482 Z" id="grax" fill="currentColor"></path>
        <path d="M12.4564739,0.265131978 C11.912103,0.722663364 11.8858477,1.53655326 12.3775526,2.02843059 L12.3775526,2.02843059 L16.4811525,6.13346932 L18.1639796,7.81673102 C18.7631916,7.72705859 19.3759196,7.67981351 19.9999887,7.67981351 L19.9999887,7.67981351 C20.6240578,7.67981351 21.2367859,7.72705859 21.8359978,7.81673102 L21.8359978,7.81673102 L23.5186696,6.13346932 L27.6222695,2.02843059 C28.1141298,1.53655326 28.0878745,0.722818776 27.5435035,0.265442801 L27.5435035,0.265442801 C27.0609647,-0.140181152 26.3342046,-0.0643403511 25.8884853,0.381535174 L25.8884853,0.381535174 L20.561449,5.70981763 C20.3748652,5.70266871 20.1882814,5.69567519 19.9999887,5.69567519 L19.9999887,5.69567519 C19.8115407,5.69567519 19.6246462,5.70266871 19.4380624,5.70981763 L19.4380624,5.70981763 L14.1114921,0.381535174 C13.8636977,0.13365387 13.5289034,0 13.1975269,0 L13.1975269,0 C12.9331092,0 12.6707113,0.0851654889 12.4564739,0.265131978 M29.8909479,3.71355722 L22.3676295,11.2388917 C22.3646777,11.242 22.3603277,11.2430878 22.3562884,11.242 L22.3562884,11.242 C21.6043605,11.039188 20.8149916,10.9290012 19.9999887,10.9290012 L19.9999887,10.9290012 C19.1849859,10.9290012 18.3953062,11.039188 17.6433783,11.242 L17.6433783,11.242 C17.639339,11.2430878 17.6348337,11.242 17.6321926,11.2388917 L17.6321926,11.2388917 L10.1090296,3.71355722 C9.66346569,3.2676817 8.93655026,3.19168549 8.45385604,3.59699862 L8.45385604,3.59699862 C7.90932973,4.05421918 7.88322975,4.86826449 8.37493468,5.3599864 L8.37493468,5.3599864 L15.2749608,12.2622763 L17.0298735,14.0181152 C17.0336021,14.0214906 17.0390396,14.0226221 17.0435449,14.0201355 L17.0435449,14.0201355 C17.8585478,13.6148224 18.765988,13.3736238 19.7267158,13.3341492 L19.7267158,13.3341492 C19.8180657,13.3304194 19.9077067,13.320473 19.9999887,13.320473 L19.9999887,13.320473 C20.0921154,13.320473 20.1816011,13.3304194 20.2727956,13.3341492 L20.2727956,13.3341492 C21.2336787,13.3733129 22.1412744,13.6148224 22.9562772,14.0201355 L22.9562772,14.0201355 C22.9607826,14.0226221 22.9662201,14.0214906 22.9699486,14.0181152 L22.9699486,14.0181152 L24.7251721,12.2622763 L31.6250428,5.3599864 C32.1167477,4.86826449 32.0904924,4.05421918 31.5461214,3.59699862 L31.5461214,3.59699862 C31.3318841,3.41718754 31.0694861,3.33201841 30.8049132,3.33201841 L30.8049132,3.33201841 C30.4735367,3.33201841 30.1387423,3.46552051 29.8909479,3.71355722 M3.68082274,8.36486729 C3.21397493,8.83187878 3.21397493,9.58873267 3.68082274,10.0557442 L3.68082274,10.0557442 L11.2476411,17.6253709 C11.2505929,17.6283237 11.2518357,17.6326753 11.2507482,17.6368714 L11.2507482,17.6368714 C11.047852,18.3890629 10.9378592,19.178864 10.9378592,19.9941526 L10.9378592,19.9941526 C10.9378592,20.8095967 11.047852,21.5993978 11.2507482,22.3517447 L11.2507482,22.3517447 C11.2518357,22.3557854 11.2505929,22.360137 11.2476411,22.3630898 L11.2476411,22.3630898 L3.68082274,29.9327165 C3.21397493,30.3994172 3.21397493,31.1565819 3.68082274,31.6232826 L3.68082274,31.6232826 C3.91432432,31.856866 4.22006691,31.97358 4.52596485,31.97358 L4.52596485,31.97358 C4.83170744,31.97358 5.13745003,31.856866 5.37095161,31.6232826 L5.37095161,31.6232826 L12.2709777,24.7211481 L14.0260458,22.9656201 C14.029619,22.9618902 14.0305511,22.9564508 14.0282208,22.9519439 L14.0282208,22.9519439 C13.6230497,22.1366553 13.3814696,21.2288968 13.3423196,20.2676768 L13.3423196,20.2676768 C13.3384357,20.1762949 13.3283375,20.0864671 13.3283375,19.9941526 L13.3283375,19.9941526 C13.3283375,19.9018382 13.3384357,19.8121658 13.3423196,19.7207839 L13.3423196,19.7207839 C13.3814696,18.7597193 13.6228943,17.8521163 14.0280654,17.0366723 L14.0280654,17.0366723 C14.0303958,17.0318545 14.029499,17.0265705 14.0258904,17.0228406 L14.0258904,17.0228406 L12.2708223,15.2673126 L5.37095161,8.36486729 C5.13760538,8.13143926 4.83170744,8.01472524 4.52596485,8.01472524 L4.52596485,8.01472524 C4.22006691,8.01472524 3.91432432,8.13143926 3.68082274,8.36486729 M34.5853705,8.40853792 L27.7293105,15.267468 L25.9742424,17.0233069 C25.9705138,17.0270367 25.9695817,17.0323207 25.9719121,17.0368277 L25.9719121,17.0368277 C26.3772385,17.8521163 26.6186633,18.7600301 26.6578132,19.7209393 L26.6578132,19.7209393 C26.6615418,19.8123212 26.67164,19.9019936 26.67164,19.9941526 L26.67164,19.9941526 C26.67164,20.0864671 26.6615418,20.1761395 26.6578132,20.2675214 L26.6578132,20.2675214 C26.6186633,21.228586 26.3770831,22.1364998 25.9719121,22.9517884 L25.9719121,22.9517884 C25.9695817,22.95614 25.9705138,22.9617348 25.9742424,22.9653092 L25.9742424,22.9653092 L27.7291552,24.7209927 L34.6288705,31.6232826 C34.8623721,31.856866 35.16827,31.97358 35.4740126,31.97358 L35.4740126,31.97358 C35.7797552,31.97358 36.0858085,31.856866 36.3191547,31.6232826 L36.3191547,31.6232826 C36.7860025,31.1565819 36.7860025,30.3994172 36.3191547,29.9327165 L36.3191547,29.9327165 L28.7523364,22.3629344 C28.7492293,22.3599815 28.7481418,22.3554746 28.7492293,22.3514339 L28.7492293,22.3514339 C28.9521255,21.5992424 29.0621183,20.8094412 29.0621183,19.9941526 L29.0621183,19.9941526 C29.0621183,19.178864 28.9521255,18.3890629 28.7493846,17.6368714 L28.7493846,17.6368714 C28.7482971,17.6328307 28.7493846,17.6284792 28.7523364,17.6255263 L28.7523364,17.6255263 L36.3191547,10.0557442 C36.811015,9.56417765 36.7846043,8.75028775 36.2403887,8.29275637 L36.2403887,8.29275637 C36.0259961,8.11263447 35.7634427,8.02731357 35.4987144,8.02731357 L35.4987144,8.02731357 C35.1676486,8.02731357 34.833165,8.16081202 34.5853705,8.40853792 M0.428889884,12.2969331 C-0.115325708,12.7546198 -0.141736399,13.5681989 0.350279239,14.0602317 L0.350279239,14.0602317 L5.71460131,19.4265899 C5.70683345,19.6172798 5.69984239,19.8081251 5.69984239,20.0005245 L5.69984239,20.0005245 C5.69984239,20.1890386 5.70683345,20.3756878 5.71429059,20.562337 L5.71429059,20.562337 L0.350279239,25.9288507 C-0.116723921,26.3957068 -0.116723921,27.1527161 0.350279239,27.6194167 L0.350279239,27.6194167 C0.583625462,27.8530002 0.889368051,27.9698696 1.19511064,27.9698696 L1.19511064,27.9698696 C1.50085323,27.9698696 1.80675117,27.8530002 2.0400974,27.6194167 L2.0400974,27.6194167 L6.13748308,23.5207499 L7.82031017,21.8373328 C7.73082453,21.2380661 7.68344064,20.6251232 7.68344064,20.0006799 L7.68344064,20.0006799 C7.68344064,19.3726622 7.73113525,18.755834 7.82170838,18.1528375 L7.82170838,18.1528375 L6.13981343,16.4703528 L2.08406343,12.4131808 C1.83611365,12.1652995 1.50147465,12.0318011 1.17009816,12.0318011 L1.17009816,12.0318011 C0.905680536,12.0318011 0.643127196,12.1169666 0.428889884,12.2969331 M37.915914,12.4133362 L33.8600087,16.4703528 L32.1782691,18.1528375 C32.2688422,18.755834 32.3165368,19.3726622 32.3165368,20.0006799 L32.3165368,20.0006799 C32.3165368,20.6251232 32.2691529,21.2380661 32.1796673,21.8373328 L32.1796673,21.8373328 L33.862339,23.5207499 L37.9597247,27.6194167 C38.1930709,27.8530002 38.4991242,27.9698696 38.8048668,27.9698696 L38.8048668,27.9698696 C39.1104541,27.9698696 39.416352,27.8530002 39.6498536,27.6194167 L39.6498536,27.6194167 C40.1167014,27.1527161 40.1167014,26.3957068 39.6498536,25.9288507 L39.6498536,25.9288507 L34.2856869,20.562337 C34.2929887,20.3756878 34.2999797,20.1890386 34.2999797,20.0005245 L34.2999797,20.0005245 C34.2999797,19.8081251 34.2929887,19.6172798 34.2853762,19.4265899 L34.2853762,19.4265899 L39.6498536,14.0602317 C40.1417139,13.5681989 40.1153032,12.7544644 39.5710876,12.2969331 L39.5710876,12.2969331 C39.3566949,12.1169666 39.0942969,12.0318011 38.829724,12.0318011 L38.829724,12.0318011 C38.4983475,12.0318011 38.1637085,12.1652995 37.915914,12.4133362 M22.9564326,25.9681698 C22.1414297,26.3736383 21.2338341,26.6149924 20.2731064,26.654156 L20.2731064,26.654156 C20.1817564,26.6580413 20.0922708,26.6682985 19.9999887,26.6682985 L19.9999887,26.6682985 C19.9077067,26.6682985 19.8179103,26.6580413 19.7265604,26.654156 L19.7265604,26.654156 C18.765988,26.6149924 17.8585478,26.3734829 17.0435449,25.9681698 L17.0435449,25.9681698 C17.0388842,25.965994 17.0334467,25.9669265 17.0297181,25.970501 L17.0297181,25.970501 L15.2748054,27.726029 L8.37493468,34.6284743 C7.88322975,35.1203516 7.90932973,35.9342415 8.45385604,36.3914621 L8.45385604,36.3914621 C8.93655026,36.7969306 9.66346569,36.7209344 10.1090296,36.2750589 L10.1090296,36.2750589 L17.6320372,28.7497244 C17.6348337,28.7466162 17.6391837,28.7453729 17.643223,28.7466162 L17.643223,28.7466162 C18.3953062,28.9492727 19.1848305,29.059304 19.9999887,29.059304 L19.9999887,29.059304 C20.8149916,29.059304 21.6043605,28.9494281 22.3564438,28.7466162 L22.3564438,28.7466162 C22.3604831,28.7453729 22.3648331,28.7467716 22.3677849,28.7498798 L22.3677849,28.7498798 L29.9350693,36.3190403 C30.1684155,36.5526238 30.4741581,36.6694932 30.7799007,36.6694932 L30.7799007,36.6694932 C31.0857986,36.6694932 31.3915412,36.5526238 31.6250428,36.3190403 L31.6250428,36.3190403 C32.0918906,35.8523397 32.0918906,35.0953304 31.6250428,34.6284743 L31.6250428,34.6284743 L24.7251721,27.7261844 L22.9702593,25.970501 C22.9677736,25.9681698 22.9646665,25.9669265 22.9617147,25.9669265 L22.9617147,25.9669265 C22.9598504,25.9669265 22.9581415,25.9673927 22.9564326,25.9681698 M19.9999887,32.3217018 C19.3720357,32.3217018 18.7552684,32.2739904 18.1527939,32.1832301 L18.1527939,32.1832301 L16.4715204,33.8649377 L12.4210525,37.9166703 C11.9753333,38.3627012 11.8998298,39.0897161 12.3053116,39.5724242 L12.3053116,39.5724242 C12.5437846,39.8560501 12.8787343,39.9990287 13.2141501,40.0013599 L13.2141501,40.0013599 L13.2307733,40.0013599 C13.5338748,39.9993395 13.8363549,39.8824701 14.0678368,39.650907 L14.0678368,39.650907 L19.4234589,34.2932517 C19.6148587,34.3008669 19.8067246,34.3056847 19.9999887,34.3056847 L19.9999887,34.3056847 C20.1924761,34.3056847 20.3832545,34.2986911 20.5738775,34.2912314 L20.5738775,34.2912314 L25.9321407,39.650907 C26.1656422,39.8846458 26.4715402,40.0012044 26.7772828,40.0012044 L26.7772828,40.0012044 C27.0830254,40.0012044 27.388768,39.8846458 27.6222695,39.650907 L27.6222695,39.650907 C28.0892727,39.1840509 28.0892727,38.4270416 27.6222695,37.9601855 L27.6222695,37.9601855 L23.5290785,33.8657148 L21.8471835,32.1832301 C21.2447091,32.2739904 20.6279418,32.3217018 19.9999887,32.3217018" id="mark" fill="url(#brandLinearGradient)"></path>
      </g>
    </g>
  </g>
</svg>
```

**Logo Usage Guidelines:**
- Maintain clear space around the logo (minimum 20px on all sides)
- Use the full-color version on light backgrounds
- Use white/light version on dark backgrounds
- Never distort, rotate, or apply effects to the logo
- Minimum size: 100px wide for digital displays

---

## Technical Requirements

### Stack

All GRAX web projects must use:

- **CSS Framework:** Tailwind CSS 3.x
- **Build Tools:** PostCSS with Autoprefixer
- **Markup:** Semantic HTML5
- **JavaScript:** ES6+ with minification and compression

### Tailwind Configuration

Use this as your base `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    './**/*.html',
    './**/*.js',
    './**/*.jsx',
    './**/*.tsx',
    './**/*.vue',
  ],
  theme: {
    screens: {
      sm: '580px',
      md: '760px',
      lg: '940px',
      xl: '1180px',
    },
    // See Color Palette section for full colors config
    // See Typography section for fonts config
    extend: {
      // See sections below for extends
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

### PostCSS Configuration

Required `postcss.config.js`:

```javascript
module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-import"),
    require("autoprefixer")
  ]
}
```

---

## Color Palette

**CRITICAL:** The GRAX color palette MUST be followed strictly. These colors define the brand identity.

### Primary Colors

| Color Name | Hex | Tailwind Class | Usage |
|------------|-----|----------------|-------|
| Purple | `#5f6fe6` | `purple-500` | Primary brand color, CTAs, interactive elements |
| Purple Dark | `#5462cc` | `purple-600` | Hover states, emphasis |
| Purple Darker | `#434ea3` | `purple-700` | Active states, pressed buttons |
| Purple Light | `#99a5ff` | `purple-400` | Subtle highlights, backgrounds |

### Secondary Colors

| Color Name | Hex | Tailwind Class | Usage |
|------------|-----|----------------|-------|
| Pink | `#c459e5` | `pink-500` | Accent color, highlights, CTAs |
| Pink Bright | `#f75aa6` | `rose-400` | Strong accents, important CTAs |
| Pink Extra Bright | `#c226cb` | `lavendar-600` | Attention-grabbing elements |
| Pink Light | `#e799ff` | `pink-300` | Subtle accents |

### Utility Colors

| Color Name | Hex | Tailwind Class | Usage |
|------------|-----|----------------|-------|
| Fire | `#f7685a` | `fire-400` | Alerts, destructive actions |
| Fire Light | `#ff8f85` | `fire-300` | Warning backgrounds |
| Green | `#15cd8d` | `green-500` | Success states |
| Green Light | `#44e3ac` | `green-400` | Success backgrounds |
| Blue (Teal) | `#61caea` | `blue-400` | Info, links |
| Blue Light | `#83e2ff` | `blue-300` | Info backgrounds |
| Salesforce Blue | `#009edb` | `sky-600` | Salesforce integration references |

### Neutral Colors

| Color Name | Hex | Tailwind Class | Usage |
|------------|-----|----------------|-------|
| Black | `#000` | `black` | Text, high contrast |
| White | `#fff` | `white` | Backgrounds, inverse text |
| Gray Extra Dark | `#111` | `gray-900` | Dark text |
| Gray Darker | `#222` | `gray-800` | Secondary text |
| Gray Dark | `#333` | `gray-700` | Body text |
| Gray | `#888` | `gray-400` | Secondary content |
| Gray Light | `#9698a3` | `periwinkle-500` | Muted text |
| Gray Medium | `#bcbdcc` | `periwinkle-400` | Borders, dividers |
| Gray Medium Light | `#dfe0de` | `gray-200` | Light borders |
| Gray Extra Light | `#ecedeb` | `gray-100` | Backgrounds |
| Gray Extra Extra Light | `#f7f7f7` | `gray-50` | Subtle backgrounds |

### Special Colors

| Color Name | Hex | Tailwind Class | Usage |
|------------|-----|----------------|-------|
| Blue Gray | `#9fb5cd` | `steel-400` | Complementary elements |
| Deep Purple | `#0a053d` | `eggplant-950` | Rich dark backgrounds |
| Read-only Input | `#d8dbe1` | `periwinkle-200` | Disabled form fields |

### Gradients

**Primary Gradient (Pink to Bright Pink):**
```css
background: linear-gradient(90deg, #f75aa6 0%, #c226cb 100%);
```
Use for: Hero CTAs, important buttons, featured cards

**Brand Gradient (Purple to Deep Purple):**
```css
background: linear-gradient(91.14%, #5f6fe6 0%, #552c98 100%);
```
Use for: Logo, brand elements, special features

### Tailwind Colors Configuration

Add this to your `tailwind.config.js`:

```javascript
colors: {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  gray: {
    50: '#f7f7f7',
    100: '#ecedeb',
    200: '#dfe0de',
    300: '#c5c5c5',
    400: '#888',
    500: '#616161',
    600: '#444',
    700: '#333',
    800: '#222',
    900: '#111',
    950: '#0a0a0a',
  },
  red: {
    50: '#fff0f0',
    100: '#ffdddd',
    200: '#ffc0c0',
    300: '#ff9494',
    400: '#ff5757',
    500: '#ff2323',
    600: '#ff0000',
    700: '#d70000',
    800: '#b10303',
    900: '#920a0a',
    950: '#500000',
  },
  green: {
    50: '#ecfdf5',
    100: '#d2f9e4',
    200: '#a6ffdf',
    300: '#70e5b5',
    400: '#44e3ac',
    500: '#15cd8d',
    600: '#079466',
    700: '#067654',
    800: '#075e44',
    900: '#074d39',
    950: '#032b21',
  },
  blue: {
    50: '#f1fafe',
    100: '#e3f3fb',
    200: '#c0e8f7',
    300: '#83e2ff',
    400: '#61caea',
    500: '#22abd5',
    600: '#148ab5',
    700: '#116f93',
    800: '#125e7a',
    900: '#154e65',
    950: '#0e3243',
  },
  sky: {
    50: '#f0faff',
    100: '#e5f6fd',
    200: '#b9eafe',
    300: '#7cdbfd',
    400: '#36cafa',
    500: '#0cb4eb',
    600: '#009edb',
    700: '#0173a3',
    800: '#066186',
    900: '#0b506f',
    950: '#07334a',
  },
  purple: {
    50: '#eff4fe',
    100: '#e2ebfd',
    200: '#cad9fb',
    300: '#aabff7',
    400: '#99a5ff',
    500: '#5f6fe6',
    600: '#5462cc',
    700: '#434ea3',
    800: '#373b9c',
    900: '#33377c',
    950: '#1e1f48',
  },
  pink: {
    50: '#fcf5fe',
    100: '#f7eafd',
    200: '#efd3fb',
    300: '#e799ff',
    400: '#d681f1',
    500: '#c459e5',
    600: '#a731c8',
    700: '#8d26a5',
    800: '#742187',
    900: '#63206f',
    950: '#3f0949',
  },
  rose: {
    50: '#fdf2f8',
    100: '#fde6f2',
    200: '#fccee6',
    300: '#fba6d1',
    400: '#f75aa6',
    500: '#f14392',
    600: '#e0226f',
    700: '#c31355',
    800: '#a11346',
    900: '#86153e',
    950: '#520521',
  },
  lavendar: {
    50: '#fef4ff',
    100: '#fbe8ff',
    200: '#f8d0fe',
    300: '#f4acfb',
    400: '#ee7af8',
    500: '#e147ee',
    600: '#c226cb',
    700: '#a91dae',
    800: '#8b1a8e',
    900: '#741b74',
    950: '#4d054c',
  },
  fire: {
    50: '#fef3f2',
    100: '#fee4e2',
    200: '#fecfca',
    300: '#ff8f85',
    400: '#f7685a',
    500: '#ef5344',
    600: '#dc3626',
    700: '#b92a1c',
    800: '#99261b',
    900: '#7f261d',
    950: '#450f0a',
  },
  steel: {
    50: '#f4f7fa',
    100: '#e7ecf2',
    200: '#d4dee9',
    300: '#b6c8da',
    400: '#9fb5cd',
    500: '#7993b8',
    600: '#677ea9',
    700: '#5b6e9a',
    800: '#4e5b7f',
    900: '#424c66',
    950: '#2b3140',
  },
  periwinkle: {
    50: '#f5f6f8',
    100: '#edeef2',
    200: '#d8dbe1',
    300: '#caccd7',
    400: '#bcbdcc',
    500: '#9698a3',
    600: '#8c89a2',
    700: '#79768c',
    800: '#636172',
    900: '#52515e',
    950: '#302f37',
  },
  eggplant: {
    50: '#e7edff',
    100: '#d4dfff',
    200: '#b1c3ff',
    300: '#829aff',
    400: '#5160ff',
    500: '#2b2aff',
    600: '#1d06ff',
    700: '#1800ff',
    800: '#1402d1',
    900: '#160da2',
    950: '#0a053d',
  },
}
```

---

## Typography

### Font Families

GRAX uses two primary typefaces:

1. **Work Sans** - Headings and display text
   - Weights: 400 (Regular), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)
   - Use for: H1-H6, navigation, buttons, emphasis

2. **Inter** - Body text and UI
   - Weights: 400 (Regular), 700 (Bold)
   - Use for: Paragraphs, lists, form inputs, general text

### Font Loading

Include in your `<head>`:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Work+Sans:wght@400;600;700;800&display=swap" type="text/css" media="all" />
```

### Tailwind Font Configuration

Add to your `tailwind.config.js`:

```javascript
fontFamily: {
  sans: [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ],
  heading: [
    'Work Sans',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ],
},
```

### Font Sizes

| Size Name | Value | Tailwind Class | Usage |
|-----------|-------|----------------|-------|
| 3xs | 0.75rem (12px) | `text-3xs` | Smallest labels, legal text |
| 2xs | 0.8125rem (13px) | `text-2xs` | Small labels, eyebrows |
| xs | 0.875rem (14px) | `text-xs` | Secondary text, captions |
| sm | 0.9375rem (15px) | `text-sm` | Small body text |
| base | 1rem (16px) | `text-base` | Default body text |
| lg | 1.125rem (18px) | `text-lg` | Large body text |
| xl | 1.25rem (20px) | `text-xl` | Lead paragraphs, subtitles |
| 2xl | 1.5rem (24px) | `text-2xl` | H4, card titles |
| 3xl | 2rem (32px) | `text-3xl` | H3 |
| 4xl | 2.5rem (40px) | `text-4xl` | H2 |
| 5xl | 3.5rem (56px) | `text-5xl` | H1 (desktop) |
| 6xl | 4rem (64px) | `text-6xl` | Large H1 |
| 7xl | 4.5rem (72px) | `text-7xl` | Hero titles |
| 8xl | 6rem (96px) | `text-8xl` | Display titles |

Add to `tailwind.config.js`:

```javascript
fontSize: {
  '3xs': '0.75rem',
  '2xs': '0.8125rem',
  xs: '0.875rem',
  sm: '0.9375rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '2rem',
  '4xl': '2.5rem',
  '5xl': '3.5rem',
  '6xl': '4rem',
  '7xl': '4.5rem',
  '8xl': '6rem',
},
```

### Line Heights

Add to `tailwind.config.js` extend:

```javascript
lineHeight: {
  none: '1',
  tighter: '1.125',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
  '3': '.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
},
```

### Letter Spacing

Add to `tailwind.config.js` extend:

```javascript
letterSpacing: {
  tightest: '-2px',
  tighter: '-1px',
  tight: '-.5px',
  normal: '0',
  wide: '.5px',
  wider: '1px',
  widest: '2px',
},
```

### Typography Usage Examples

```html
<!-- Headline -->
<h1 class="font-heading font-bold leading-tighter tracking-tighter text-4xl lg:text-5xl">
  Adapt Faster with GRAX
</h1>

<!-- Eyebrow (small label above headline) -->
<p class="font-heading text-pink-500 uppercase text-2xs font-semibold mb-3">
  Featured Solution
</p>

<!-- Lead paragraph -->
<p class="text-xl mb-3">
  Capture and act on every single change in your data over time.
</p>

<!-- Body text -->
<p class="text-base leading-normal">
  Turn historical data into a strategic asset...
</p>
```

---

## Spacing & Layout

### Breakpoints

| Breakpoint | Min Width | Tailwind Prefix | Usage |
|------------|-----------|-----------------|-------|
| Small | 580px | `sm:` | Mobile landscape, small tablets |
| Medium | 760px | `md:` | Tablets |
| Large | 940px | `lg:` | Desktop |
| Extra Large | 1180px | `xl:` | Large desktop |

### Custom Spacing Scale

Add to `tailwind.config.js` extend:

```javascript
spacing: {
  '13': '3.25rem',
  '15': '3.75rem',
  '18': '4.5rem',
  '22': '5.5rem',
  '30': '7.5rem',
  '34': '8.5rem',
  '42': '10.5rem',
  '50': '12.5rem',
  '90': '22.5rem',
  '112': '28rem',
},
```

### Max Width

Add to `tailwind.config.js` extend:

```javascript
maxWidth: {
  '2xs': '16rem',
},
```

### Border Radius

Add to `tailwind.config.js` extend:

```javascript
borderRadius: {
  none: '0',
  px: '1px',
  sm: '0.125rem',
  default: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  '4xl': '2.5rem',
  '5xl': '5rem',
  full: '9999px',
},
```

**Note:** GRAX designs favor larger border radii. Use `rounded-3xl` (1.5rem/24px) for cards and `rounded-full` for pills/badges.

### Box Shadows

Add to `tailwind.config.js` extend:

```javascript
boxShadow: {
  xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  light: '0 4px 8px rgba(0,0,0,0.12)',
  default: '0 4px 8px rgba(0,0,0,0.24)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 16px 104px 0 rgba(0,0,0,0.24)',
  'xl-light': '0 16px 104px 0 rgba(0,0,0,0.12)',
  '2xl': '0 40px 104px 0 rgba(0,0,0,0.24)',
  '2xl-light': '0 40px 104px 0 rgba(0,0,0,0.12)',
  inner: 'inset 0 4px 8px 0 rgba(0, 0, 0, 0.32)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  none: 'none',
  'blue-light': '0 0 24px 4px #83E2FF',
  'pink': '0 0 24px 4px #c459e5',
  'fire': '0 0 24px 4px #f7685a',
  'purple': '0 0 24px 4px #5f6fe6',
},
```

---

## Components

### Buttons

Buttons are critical interactive elements and should follow these patterns:

**Primary Button (Purple):**
```html
<button class="inline-block cursor-pointer rounded leading-none font-heading font-semibold text-center transition-colors duration-200 ease-in-out px-5 py-3 text-base bg-purple-600 text-white hover:bg-purple-700 active:bg-purple-700">
  <span class="relative">Get Started</span>
</button>
```

**Gradient Button (Featured CTA):**
```html
<button class="inline-block cursor-pointer rounded leading-none font-heading font-semibold text-center transition-colors duration-200 ease-in-out px-5 py-3 text-base button-gradient text-white relative overflow-hidden border-transparent hover:text-white">
  <span class="relative">Learn More</span>
</button>

<style>
.button-gradient {
  background: linear-gradient(90deg, #f75aa6 0%, #c226cb 100%);
}
.button-gradient::before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: #f75aa6;
  transition: opacity 200ms ease-in-out;
}
.button-gradient:hover::before,
.button-gradient:active::before {
  opacity: 1;
}
</style>
```

**Secondary Button (Gray):**
```html
<button class="inline-block cursor-pointer rounded leading-none font-heading font-semibold text-center transition-colors duration-200 ease-in-out px-5 py-3 text-base bg-gray-100 text-black hover:bg-gray-300 active:bg-gray-300">
  <span class="relative">Cancel</span>
</button>
```

**Black Button:**
```html
<button class="inline-block cursor-pointer rounded leading-none font-heading font-semibold text-center transition-colors duration-200 ease-in-out px-5 py-3 text-base bg-black text-white hover:bg-gray-900 active:bg-gray-900">
  <span class="relative">Submit</span>
</button>
```

**Button Sizes:**
- Extra Small: `px-4 py-1 text-2xs`
- Small: `px-4 py-2 text-xs`
- Medium (default): `px-5 py-3 text-base`
- Large: `px-5 py-4 text-base`
- Extra Large: `py-5 px-8 text-base`

**Button with Arrow:**
```html
<button class="inline-block cursor-pointer rounded leading-none font-heading font-semibold text-center transition-colors duration-200 ease-in-out arrow px-5 py-3 text-base bg-purple-600 text-white hover:bg-purple-700">
  <span class="relative">Explore</span>
</button>

<style>
.arrow::after {
  content: " ";
  position: relative;
  padding-left: 1rem;
  height: 0.5rem;
  background-size: 0.75rem;
  background-position: right center;
  background-repeat: no-repeat;
  background-image: url("/assets/img/button-arrow-white.svg");
  transition: 200ms ease-in-out;
}
.arrow:hover::after,
.arrow:active::after {
  margin-left: 0.25rem;
  margin-right: -0.25rem;
}
</style>
```

**Link-style Button:**
```html
<button class="py-3 text-base arrow arrow-pink hover:underline">
  <span class="relative">View Details</span>
</button>
```

### Cards

**Standard Card:**
```html
<article class="relative block border bg-white border-gray-200 rounded-3xl">
  <span class="relative block -mx-px -mt-px bg-center bg-cover rounded-t-3xl overflow-hidden h-40" style="background-image:url(image.jpg);"></span>
  <header class="px-8 pt-6">
    <p class="font-heading text-pink-500 uppercase text-2xs font-semibold mb-3">
      Eyebrow Text
    </p>
    <h3 class="entry-title font-heading font-bold leading-tight text-2xl">
      Card Title Goes Here
    </h3>
  </header>
  <div class="entry-summary text-xs mt-2 px-8">
    Brief description of the card content goes here.
  </div>
  <footer class="entry-meta pb-6 px-8 mt-6">
    <button class="inline-block cursor-pointer rounded leading-none font-heading font-semibold text-center transition-colors duration-200 ease-in-out w-full px-5 py-3 text-base button-gradient text-white">
      <span class="relative">Read More</span>
    </button>
  </footer>
</article>
```

**Card Grid (3 columns):**
```html
<div class="max-w-5xl mb-10">
  <div class="w-full mx-auto max-w-sm gap-y-10 flex flex-wrap flex-col md:max-w-none md:flex-row md:-mx-4 md:w-auto">
    <div class="w-full md:px-4 md:w-1/2 xl:w-1/3">
      <!-- Card 1 -->
    </div>
    <div class="w-full md:px-4 md:w-1/2 xl:w-1/3">
      <!-- Card 2 -->
    </div>
    <div class="w-full md:px-4 md:w-1/2 xl:w-1/3">
      <!-- Card 3 -->
    </div>
  </div>
</div>
```

### Typography Components

**Headline:**
```html
<h1 class="font-heading font-bold leading-tighter tracking-tighter mb-4 max-w-6xl text-4xl lg:text-5xl">
  Your Headline Text
</h1>
```

**Eyebrow (Small Label):**
```html
<p class="font-heading text-pink-500 uppercase text-2xs font-semibold mb-3">
  Category Name
</p>
```

**Lead Paragraph:**
```html
<p class="text-xl mb-3">
  Lead paragraph with larger text to introduce content.
</p>
```

### Forms

Use the `@tailwindcss/forms` plugin for consistent form styling. All forms should:
- Have clear labels
- Show validation states
- Support keyboard navigation
- Provide helpful error messages

**Read-only Input:**
```html
<input type="text" readonly class="bg-periwinkle-200" value="Read-only value">
```

---

## Accessibility

GRAX is committed to WCAG 2.1 Level AA compliance at minimum.

### Color Contrast

All color combinations must meet WCAG AA standards:
- Normal text (< 18pt): 4.5:1 contrast ratio minimum
- Large text (≥ 18pt or 14pt bold): 3:1 contrast ratio minimum
- UI components and graphics: 3:1 contrast ratio minimum

**Pre-approved Color Combinations:**

| Foreground | Background | Contrast Ratio | Pass |
|------------|------------|----------------|------|
| `gray-900` (#111) | `white` (#fff) | 17.3:1 | AAA |
| `gray-800` (#222) | `white` (#fff) | 14.7:1 | AAA |
| `gray-700` (#333) | `white` (#fff) | 12.6:1 | AAA |
| `purple-600` (#5462cc) | `white` (#fff) | 6.1:1 | AA |
| `white` (#fff) | `purple-600` (#5462cc) | 6.1:1 | AA |
| `white` (#fff) | `gray-900` (#111) | 17.3:1 | AAA |
| `purple-400` (#99a5ff) | `gray-900` (#111) | 4.8:1 | AA |

**Always test custom combinations** using tools like:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Accessible Colors](https://accessible-colors.com/)

### Semantic HTML

- Use proper heading hierarchy (only one `<h1>` per page)
- Use `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` appropriately
- Use `<button>` for actions, `<a>` for navigation
- Include `alt` text for all images
- Use `<label>` elements for form inputs
- Mark up lists with `<ul>`, `<ol>`, `<dl>` as appropriate

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Visible focus indicators required (use `focus:` utilities)
- Logical tab order (follows visual layout)
- Skip links for main content

**Focus Styles:**
```html
<button class="... focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
  Button
</button>
```

### ARIA Labels

Use ARIA attributes when semantic HTML is insufficient:

```html
<button aria-label="Close dialog">
  <svg>...</svg>
</button>

<nav aria-label="Main navigation">...</nav>

<div role="alert" aria-live="polite">...</div>
```

### Screen Reader Support

- Use visually-hidden utility for screen reader-only text:
```html
<span class="sr-only">Screen reader only text</span>
```

- Announce dynamic content changes with ARIA live regions
- Provide descriptive link text (avoid "click here")

---

## SEO Standards

### Meta Tags

Every page must include:

```html
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Page Title - GRAX</title>
  <meta name="description" content="Concise description of page content (150-160 characters)">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.grax.com/page">
  <meta property="og:title" content="Page Title - GRAX">
  <meta property="og:description" content="Concise description of page content">
  <meta property="og:image" content="https://www.grax.com/share-image.jpg">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://www.grax.com/page">
  <meta property="twitter:title" content="Page Title - GRAX">
  <meta property="twitter:description" content="Concise description of page content">
  <meta property="twitter:image" content="https://www.grax.com/share-image.jpg">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://www.grax.com/page">
</head>
```

### Title Tags

- Every page must have exactly one `<title>` tag
- Format: `Primary Keyword - Secondary Keyword | GRAX`
- Max length: 60 characters
- Include brand name at the end

### H1 Tags

- Every page must have exactly one `<h1>` tag
- Should contain primary keyword for the page
- Should match or closely align with `<title>` tag
- Must be the first heading on the page

### Heading Hierarchy

```html
<h1>Main Page Title</h1>
  <h2>Major Section</h2>
    <h3>Sub-section</h3>
    <h3>Sub-section</h3>
  <h2>Major Section</h2>
    <h3>Sub-section</h3>
      <h4>Detail</h4>
```

Never skip levels (e.g., don't jump from `<h2>` to `<h4>`).

### Structured Data

Include JSON-LD structured data when applicable:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GRAX",
  "url": "https://www.grax.com",
  "logo": "https://www.grax.com/logo.png"
}
</script>
```

### Performance

SEO rankings are influenced by page speed:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Total Blocking Time (TBT): < 200ms
- Cumulative Layout Shift (CLS): < 0.1

---

## Build Pipeline

### Required Tools

All GRAX projects must include:

1. **Tailwind CSS** - CSS framework
2. **PostCSS** - CSS processing
3. **Autoprefixer** - Browser compatibility
4. **CSS Minification** - Optimize file size
5. **JavaScript Minification** - Optimize file size

### Package.json Dependencies

Minimum required dependencies:

```json
{
  "devDependencies": {
    "@tailwindcss/forms": "^0.5.3",
    "autoprefixer": "^10.4.2",
    "postcss": "^8.4.31",
    "postcss-cli": "^10.0.0",
    "postcss-import": "^14.0.0",
    "tailwindcss": "^3.3.2"
  }
}
```

### CSS Pipeline

**Input:** `assets/css/style.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles here */
```

**Build Command:**
```bash
npx postcss assets/css/style.css -o _site/assets/css/style.css
```

For production, add minification:
```bash
NODE_ENV=production npx postcss assets/css/style.css -o _site/assets/css/style.css
```

### JavaScript Pipeline

Use modern JavaScript (ES6+) with bundling and minification:

**Recommended Tools:**
- **Webpack** - Module bundler
- **Rollup** - Library bundler
- **Vite** - Fast build tool
- **esbuild** - Fast minifier

**Minimum Requirements:**
- Transpile ES6+ to ES5 for older browser support (if needed)
- Minify JavaScript files
- Source maps for debugging
- Code splitting for large applications

### Image Optimization

All images should be:
- Compressed (use tools like ImageOptim, TinyPNG)
- Served in modern formats (WebP with fallbacks)
- Appropriately sized (no oversized images)
- Lazy loaded when below the fold

### Asset Organization

```
/assets
  /css
    style.css           # Source CSS
  /js
    main.js             # Source JS
  /img
    logo.svg            # SVG assets
    *.jpg               # Image assets
  /fonts                # Web fonts (if not using CDN)

/_site                  # Build output
  /assets
    /css
      style.css         # Minified CSS
    /js
      main.js           # Minified JS
```

### Performance Checklist

Before deploying any GRAX site:

- [ ] CSS is minified and compressed (gzip/brotli)
- [ ] JavaScript is minified and compressed
- [ ] Images are optimized and appropriately sized
- [ ] Fonts are loaded efficiently (preload, font-display)
- [ ] Critical CSS is inlined or loaded first
- [ ] Unnecessary JavaScript is deferred or removed
- [ ] Browser caching headers are set
- [ ] CDN is configured (if applicable)
- [ ] HTTP/2 is enabled
- [ ] SSL certificate is installed

### Deployment

**Build Process:**
1. Install dependencies: `npm install`
2. Run build: `npm run build`
3. Test locally: Check all pages, forms, and interactions
4. Deploy to staging environment
5. Run QA checks (accessibility, performance, cross-browser)
6. Deploy to production
7. Verify production deployment

---

## Quick Reference

### Essential Tailwind Classes

**Layout:**
- Container: `max-w-5xl mx-auto px-4`
- Flexbox: `flex flex-wrap justify-between items-center`
- Grid: `grid grid-cols-1 md:grid-cols-3 gap-4`

**Spacing:**
- Padding: `p-4`, `px-8`, `py-6`
- Margin: `m-4`, `mx-auto`, `my-8`, `mb-10`

**Typography:**
- Font: `font-heading`, `font-sans`
- Size: `text-base`, `text-2xl`, `text-5xl`
- Weight: `font-semibold`, `font-bold`
- Color: `text-gray-700`, `text-purple-600`

**Colors:**
- Background: `bg-white`, `bg-gray-50`, `bg-purple-600`
- Text: `text-black`, `text-white`, `text-pink-500`
- Border: `border-gray-200`, `border-purple-600`

**Effects:**
- Shadow: `shadow-light`, `shadow-xl`
- Rounded: `rounded-3xl`, `rounded-full`
- Transition: `transition-colors duration-200 ease-in-out`

**Responsive:**
- Mobile First: `text-base md:text-xl lg:text-2xl`
- Hidden: `hidden md:block`
- Width: `w-full md:w-1/2 xl:w-1/3`

### Code Review Checklist

Before submitting any GRAX frontend code:

- [ ] Uses Tailwind CSS configuration from this guide
- [ ] Follows GRAX color palette strictly
- [ ] Uses Work Sans for headings, Inter for body
- [ ] Has semantic HTML structure
- [ ] Includes exactly one `<h1>` per page
- [ ] Has proper meta tags (title, description, OG)
- [ ] Meets WCAG AA color contrast requirements
- [ ] Has keyboard navigation support
- [ ] Includes focus indicators on interactive elements
- [ ] Has appropriate ARIA labels where needed
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] CSS is minified
- [ ] JavaScript is minified
- [ ] Passes Lighthouse audit (90+ scores)
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] Responsive on mobile, tablet, desktop
- [ ] Tested with screen reader

---

## Version History

- **v1.0** - Initial GRAX Frontend Code & Style Guide (2025)

---

## Contact & Support

For questions about this guide or GRAX brand standards, contact the GRAX Creative Team.

**Remember:** This guide ensures consistency across all GRAX web properties. When in doubt, refer to this document or ask for clarification rather than deviating from established standards.
