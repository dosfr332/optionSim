import { getTheme } from "@/lib/utils";

export function HestonBaseFormula({ ...props }) {
  const theme = getTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      viewBox="0 -2345.9 13354.6 4191.8"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
    >
      <defs>
        <path
          id="MJX-101-TEX-I-1D451"
          d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"
        ></path>
        <path
          id="MJX-101-TEX-I-1D446"
          d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"
        ></path>
        <path
          id="MJX-101-TEX-I-1D461"
          d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"
        ></path>
        <path
          id="MJX-101-TEX-N-3D"
          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"
        ></path>
        <path
          id="MJX-101-TEX-I-1D707"
          d="M58 -216Q44 -216 34 -208T23 -186Q23 -176 96 116T173 414Q186 442 219 442Q231 441 239 435T249 423T251 413Q251 401 220 279T187 142Q185 131 185 107V99Q185 26 252 26Q261 26 270 27T287 31T302 38T315 45T327 55T338 65T348 77T356 88T365 100L372 110L408 253Q444 395 448 404Q461 431 491 431Q504 431 512 424T523 412T525 402L449 84Q448 79 448 68Q448 43 455 35T476 26Q485 27 496 35Q517 55 537 131Q543 151 547 152Q549 153 557 153H561Q580 153 580 144Q580 138 575 117T555 63T523 13Q510 0 491 -8Q483 -10 467 -10Q446 -10 429 -4T402 11T385 29T376 44T374 51L368 45Q362 39 350 30T324 12T288 -4T246 -11Q199 -11 153 12L129 -85Q108 -167 104 -180T92 -202Q76 -216 58 -216Z"
        ></path>
        <path
          id="MJX-101-TEX-N-2B"
          d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"
        ></path>
        <path
          id="MJX-101-TEX-N-221A"
          d="M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"
        ></path>
        <path
          id="MJX-101-TEX-I-1D449"
          d="M52 648Q52 670 65 683H76Q118 680 181 680Q299 680 320 683H330Q336 677 336 674T334 656Q329 641 325 637H304Q282 635 274 635Q245 630 242 620Q242 618 271 369T301 118L374 235Q447 352 520 471T595 594Q599 601 599 609Q599 633 555 637Q537 637 537 648Q537 649 539 661Q542 675 545 679T558 683Q560 683 570 683T604 682T668 681Q737 681 755 683H762Q769 676 769 672Q769 655 760 640Q757 637 743 637Q730 636 719 635T698 630T682 623T670 615T660 608T652 599T645 592L452 282Q272 -9 266 -16Q263 -18 259 -21L241 -22H234Q216 -22 216 -15Q213 -9 177 305Q139 623 138 626Q133 637 76 637H59Q52 642 52 648Z"
        ></path>
        <path
          id="MJX-101-TEX-I-1D44A"
          d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z"
        ></path>
        <path
          id="MJX-101-TEX-N-31"
          d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"
        ></path>
        <path
          id="MJX-101-TEX-N-2C"
          d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"
        ></path>
        <path
          id="MJX-101-TEX-C-1D458"
          d="M121 647Q121 657 125 670T137 683Q138 683 209 688T282 694Q294 694 294 686Q294 679 244 477Q194 279 194 272Q213 282 223 291Q247 309 292 354T362 415Q402 442 438 442Q468 442 485 423T503 369Q503 344 496 327T477 302T456 291T438 288Q418 288 406 299T394 328Q394 353 410 369T442 390L458 393Q446 405 434 405H430Q398 402 367 380T294 316T228 255Q230 254 243 252T267 246T293 238T320 224T342 206T359 180T365 147Q365 130 360 106T354 66Q354 26 381 26Q429 26 459 145Q461 153 479 153H483Q499 153 499 144Q499 139 496 130Q455 -11 378 -11Q333 -11 305 15T277 90Q277 108 280 121T283 145Q283 167 269 183T234 206T200 217T182 220H180Q168 178 159 139T145 81T136 44T129 20T122 7T111 -2Q98 -11 83 -11Q66 -11 57 -1T48 16Q48 26 85 176T158 471L195 616Q196 629 188 632T149 637H144Q134 637 131 637T124 640T121 647Z"
        ></path>
        <path
          id="MJX-101-TEX-N-28"
          d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"
        ></path>
        <path
          id="MJX-101-TEX-I-1D703"
          d="M35 200Q35 302 74 415T180 610T319 704Q320 704 327 704T339 705Q393 701 423 656Q462 596 462 495Q462 380 417 261T302 66T168 -10H161Q125 -10 99 10T60 63T41 130T35 200ZM383 566Q383 668 330 668Q294 668 260 623T204 521T170 421T157 371Q206 370 254 370L351 371Q352 372 359 404T375 484T383 566ZM113 132Q113 26 166 26Q181 26 198 36T239 74T287 161T335 307L340 324H145Q145 321 136 286T120 208T113 132Z"
        ></path>
        <path
          id="MJX-101-TEX-N-2212"
          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"
        ></path>
        <path
          id="MJX-101-TEX-N-29"
          d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"
        ></path>
        <path
          id="MJX-101-TEX-I-1D709"
          d="M268 632Q268 704 296 704Q314 704 314 687Q314 682 311 664T308 635T309 620V616H315Q342 619 360 619Q443 619 443 586Q439 548 358 546H344Q326 546 317 549T290 566Q257 550 226 505T195 405Q195 381 201 364T211 342T218 337Q266 347 298 347Q375 347 375 314Q374 297 359 288T327 277T280 275Q234 275 208 283L195 286Q149 260 119 214T88 130Q88 116 90 108Q101 79 129 63T229 20Q238 17 243 15Q337 -21 354 -33Q383 -53 383 -94Q383 -137 351 -171T273 -205Q240 -205 202 -190T158 -167Q156 -163 156 -159Q156 -151 161 -146T176 -140Q182 -140 189 -143Q232 -168 274 -168Q286 -168 292 -165Q313 -151 313 -129Q313 -112 301 -104T232 -75Q214 -68 204 -64Q198 -62 171 -52T136 -38T107 -24T78 -8T56 12T36 37T26 66T21 103Q21 149 55 206T145 301L154 307L148 313Q141 319 136 323T124 338T111 358T103 382T99 413Q99 471 143 524T259 602L271 607Q268 618 268 632Z"
        ></path>
        <path
          id="MJX-101-TEX-N-32"
          d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"
        ></path>
        <path
          id="MJX-101-TEX-I-1D70C"
          d="M58 -216Q25 -216 23 -186Q23 -176 73 26T127 234Q143 289 182 341Q252 427 341 441Q343 441 349 441T359 442Q432 442 471 394T510 276Q510 219 486 165T425 74T345 13T266 -10H255H248Q197 -10 165 35L160 41L133 -71Q108 -168 104 -181T92 -202Q76 -216 58 -216ZM424 322Q424 359 407 382T357 405Q322 405 287 376T231 300Q217 269 193 170L176 102Q193 26 260 26Q298 26 334 62Q367 92 389 158T418 266T424 322Z"
        ></path>
      </defs>
      <g fill={theme === "dark" ? "#fff" : "#000"} transform="scale(1,-1)">
        <g data-mml-node="math">
          <g data-mml-node="mtable">
            <g data-mml-node="mtr" transform="translate(0,1455.8)">
              <g data-mml-node="mtd" transform="translate(907.1,0)">
                <g data-mml-node="mi">
                  <use data-c="1D451" xlinkHref="#MJX-101-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msub" transform="translate(520,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-101-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-101-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1749,0)">
                  <use data-c="3D" xlinkHref="#MJX-101-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(2804.8,0)">
                  <use data-c="1D707" xlinkHref="#MJX-101-TEX-I-1D707"></use>
                </g>
                <g data-mml-node="msub" transform="translate(3407.8,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-101-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-101-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mi" transform="translate(4359.1,0)">
                  <use data-c="1D451" xlinkHref="#MJX-101-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4879.1,0)">
                  <use data-c="1D461" xlinkHref="#MJX-101-TEX-I-1D461"></use>
                </g>
                <g data-mml-node="mo" transform="translate(5462.3,0)">
                  <use data-c="2B" xlinkHref="#MJX-101-TEX-N-2B"></use>
                </g>
                <g data-mml-node="msqrt" transform="translate(6462.5,0)">
                  <g transform="translate(853,0)">
                    <g data-mml-node="msub">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D449"
                          xlinkHref="#MJX-101-TEX-I-1D449"
                        ></use>
                      </g>
                      <g
                        data-mml-node="mi"
                        transform="translate(616,-150) scale(0.707)"
                      >
                        <use
                          data-c="1D461"
                          xlinkHref="#MJX-101-TEX-I-1D461"
                        ></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(0,30.1)">
                    <use data-c="221A" xlinkHref="#MJX-101-TEX-N-221A"></use>
                  </g>
                  <rect width="921.3" height="60" x="853" y="770.1"></rect>
                </g>
                <g data-mml-node="msub" transform="translate(8236.8,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-101-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-101-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mi" transform="translate(9188.1,0)">
                  <use data-c="1D451" xlinkHref="#MJX-101-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msub" transform="translate(9708.1,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D44A" xlinkHref="#MJX-101-TEX-I-1D44A"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    transform="translate(977,-150) scale(0.707)"
                    data-mjx-texclass="ORD"
                  >
                    <g data-mml-node="mn">
                      <use data-c="31" xlinkHref="#MJX-101-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="2C" xlinkHref="#MJX-101-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(778,0)">
                      <use
                        data-c="1D461"
                        xlinkHref="#MJX-101-TEX-I-1D461"
                      ></use>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g data-mml-node="mtr" transform="translate(0,-121.5)">
              <g data-mml-node="mtd">
                <g data-mml-node="mi">
                  <use data-c="1D451" xlinkHref="#MJX-101-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msub" transform="translate(520,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D449" xlinkHref="#MJX-101-TEX-I-1D449"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(616,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-101-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1719,0)">
                  <use data-c="3D" xlinkHref="#MJX-101-TEX-N-3D"></use>
                </g>
                <g
                  data-mml-node="TeXAtom"
                  data-mjx-texclass="ORD"
                  transform="translate(2774.8,0)"
                >
                  <g data-mml-node="mi">
                    <use data-c="1D458" xlinkHref="#MJX-101-TEX-C-1D458"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(3295.8,0)">
                  <use data-c="28" xlinkHref="#MJX-101-TEX-N-28"></use>
                </g>
                <g data-mml-node="mi" transform="translate(3684.8,0)">
                  <use data-c="1D703" xlinkHref="#MJX-101-TEX-I-1D703"></use>
                </g>
                <g data-mml-node="mo" transform="translate(4376,0)">
                  <use data-c="2212" xlinkHref="#MJX-101-TEX-N-2212"></use>
                </g>
                <g data-mml-node="msub" transform="translate(5376.3,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D449" xlinkHref="#MJX-101-TEX-I-1D449"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(616,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-101-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(6297.5,0)">
                  <use data-c="29" xlinkHref="#MJX-101-TEX-N-29"></use>
                </g>
                <g data-mml-node="mi" transform="translate(6686.5,0)">
                  <use data-c="1D451" xlinkHref="#MJX-101-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="mi" transform="translate(7206.5,0)">
                  <use data-c="1D461" xlinkHref="#MJX-101-TEX-I-1D461"></use>
                </g>
                <g data-mml-node="mo" transform="translate(7789.8,0)">
                  <use data-c="2B" xlinkHref="#MJX-101-TEX-N-2B"></use>
                </g>
                <g data-mml-node="mi" transform="translate(8790,0)">
                  <use data-c="1D709" xlinkHref="#MJX-101-TEX-I-1D709"></use>
                </g>
                <g data-mml-node="msqrt" transform="translate(9228,0)">
                  <g transform="translate(853,0)">
                    <g data-mml-node="msub">
                      <g data-mml-node="mi">
                        <use
                          data-c="1D449"
                          xlinkHref="#MJX-101-TEX-I-1D449"
                        ></use>
                      </g>
                      <g
                        data-mml-node="mi"
                        transform="translate(616,-150) scale(0.707)"
                      >
                        <use
                          data-c="1D461"
                          xlinkHref="#MJX-101-TEX-I-1D461"
                        ></use>
                      </g>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(0,30.1)">
                    <use data-c="221A" xlinkHref="#MJX-101-TEX-N-221A"></use>
                  </g>
                  <rect width="921.3" height="60" x="853" y="770.1"></rect>
                </g>
                <g data-mml-node="mi" transform="translate(11002.2,0)">
                  <use data-c="1D451" xlinkHref="#MJX-101-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msub" transform="translate(11522.2,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D44A" xlinkHref="#MJX-101-TEX-I-1D44A"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    transform="translate(977,-150) scale(0.707)"
                    data-mjx-texclass="ORD"
                  >
                    <g data-mml-node="mn">
                      <use data-c="32" xlinkHref="#MJX-101-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="2C" xlinkHref="#MJX-101-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(778,0)">
                      <use
                        data-c="1D461"
                        xlinkHref="#MJX-101-TEX-I-1D461"
                      ></use>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g data-mml-node="mtr" transform="translate(0,-1558.7)">
              <g data-mml-node="mtd" transform="translate(2959.1,0)">
                <g data-mml-node="mi">
                  <use data-c="1D451" xlinkHref="#MJX-101-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msub" transform="translate(520,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D44A" xlinkHref="#MJX-101-TEX-I-1D44A"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    transform="translate(977,-150) scale(0.707)"
                    data-mjx-texclass="ORD"
                  >
                    <g data-mml-node="mn">
                      <use data-c="31" xlinkHref="#MJX-101-TEX-N-31"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="2C" xlinkHref="#MJX-101-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(778,0)">
                      <use
                        data-c="1D461"
                        xlinkHref="#MJX-101-TEX-I-1D461"
                      ></use>
                    </g>
                  </g>
                </g>
                <g data-mml-node="mi" transform="translate(2352.4,0)">
                  <use data-c="1D451" xlinkHref="#MJX-101-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msub" transform="translate(2872.4,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D44A" xlinkHref="#MJX-101-TEX-I-1D44A"></use>
                  </g>
                  <g
                    data-mml-node="TeXAtom"
                    transform="translate(977,-150) scale(0.707)"
                    data-mjx-texclass="ORD"
                  >
                    <g data-mml-node="mn">
                      <use data-c="32" xlinkHref="#MJX-101-TEX-N-32"></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(500,0)">
                      <use data-c="2C" xlinkHref="#MJX-101-TEX-N-2C"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(778,0)">
                      <use
                        data-c="1D461"
                        xlinkHref="#MJX-101-TEX-I-1D461"
                      ></use>
                    </g>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(4982.6,0)">
                  <use data-c="3D" xlinkHref="#MJX-101-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(6038.3,0)">
                  <use data-c="1D70C" xlinkHref="#MJX-101-TEX-I-1D70C"></use>
                </g>
                <g data-mml-node="mi" transform="translate(6555.3,0)">
                  <use data-c="1D451" xlinkHref="#MJX-101-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="mi" transform="translate(7075.3,0)">
                  <use data-c="1D461" xlinkHref="#MJX-101-TEX-I-1D461"></use>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
