import { getTheme } from "@/lib/utils";

// Latex code for the SVG
// \begin{array}\\
// dW^Q_t = \lambda dt + dW^P_t
// \\

// dS_t = \mu S_t dt + \sigma S_t  \left( dW^Q_t - \lambda dt \right)
// \\
// dS_t = \left( \mu S_t -\lambda \sigma S_t\right)dt + \sigma S_t dW^Q_t

// \end{array}

export function BSMGirsanov1({ ...props }) {
  const theme = getTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      viewBox="0 -2814.9 14356 5129.8"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"

    >
      <defs>
        <path
          id="MJX-90-TEX-I-1D451"
          d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"
        ></path>
        <path
          id="MJX-90-TEX-I-1D44A"
          d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z"
        ></path>
        <path
          id="MJX-90-TEX-I-1D444"
          d="M399 -80Q399 -47 400 -30T402 -11V-7L387 -11Q341 -22 303 -22Q208 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435Q740 255 592 107Q529 47 461 16L444 8V3Q444 2 449 -24T470 -66T516 -82Q551 -82 583 -60T625 -3Q631 11 638 11Q647 11 649 2Q649 -6 639 -34T611 -100T557 -165T481 -194Q399 -194 399 -87V-80ZM636 468Q636 523 621 564T580 625T530 655T477 665Q429 665 379 640Q277 591 215 464T153 216Q153 110 207 59Q231 38 236 38V46Q236 86 269 120T347 155Q372 155 390 144T417 114T429 82T435 55L448 64Q512 108 557 185T619 334T636 468ZM314 18Q362 18 404 39L403 49Q399 104 366 115Q354 117 347 117Q344 117 341 117T337 118Q317 118 296 98T274 52Q274 18 314 18Z"
        ></path>
        <path
          id="MJX-90-TEX-I-1D461"
          d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"
        ></path>
        <path
          id="MJX-90-TEX-N-3D"
          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"
        ></path>
        <path
          id="MJX-90-TEX-I-1D706"
          d="M166 673Q166 685 183 694H202Q292 691 316 644Q322 629 373 486T474 207T524 67Q531 47 537 34T546 15T551 6T555 2T556 -2T550 -11H482Q457 3 450 18T399 152L354 277L340 262Q327 246 293 207T236 141Q211 112 174 69Q123 9 111 -1T83 -12Q47 -12 47 20Q47 37 61 52T199 187Q229 216 266 252T321 306L338 322Q338 323 288 462T234 612Q214 657 183 657Q166 657 166 673Z"
        ></path>
        <path
          id="MJX-90-TEX-N-2B"
          d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"
        ></path>
        <path
          id="MJX-90-TEX-I-1D443"
          d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"
        ></path>
        <path
          id="MJX-90-TEX-I-1D446"
          d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"
        ></path>
        <path
          id="MJX-90-TEX-I-1D707"
          d="M58 -216Q44 -216 34 -208T23 -186Q23 -176 96 116T173 414Q186 442 219 442Q231 441 239 435T249 423T251 413Q251 401 220 279T187 142Q185 131 185 107V99Q185 26 252 26Q261 26 270 27T287 31T302 38T315 45T327 55T338 65T348 77T356 88T365 100L372 110L408 253Q444 395 448 404Q461 431 491 431Q504 431 512 424T523 412T525 402L449 84Q448 79 448 68Q448 43 455 35T476 26Q485 27 496 35Q517 55 537 131Q543 151 547 152Q549 153 557 153H561Q580 153 580 144Q580 138 575 117T555 63T523 13Q510 0 491 -8Q483 -10 467 -10Q446 -10 429 -4T402 11T385 29T376 44T374 51L368 45Q362 39 350 30T324 12T288 -4T246 -11Q199 -11 153 12L129 -85Q108 -167 104 -180T92 -202Q76 -216 58 -216Z"
        ></path>
        <path
          id="MJX-90-TEX-I-1D70E"
          d="M184 -11Q116 -11 74 34T31 147Q31 247 104 333T274 430Q275 431 414 431H552Q553 430 555 429T559 427T562 425T565 422T567 420T569 416T570 412T571 407T572 401Q572 357 507 357Q500 357 490 357T476 358H416L421 348Q439 310 439 263Q439 153 359 71T184 -11ZM361 278Q361 358 276 358Q152 358 115 184Q114 180 114 178Q106 141 106 117Q106 67 131 47T188 26Q242 26 287 73Q316 103 334 153T356 233T361 278Z"
        ></path>
        <path
          id="MJX-90-TEX-LO-28"
          d="M180 96T180 250T205 541T266 770T353 944T444 1069T527 1150H555Q561 1144 561 1141Q561 1137 545 1120T504 1072T447 995T386 878T330 721T288 513T272 251Q272 133 280 56Q293 -87 326 -209T399 -405T475 -531T536 -609T561 -640Q561 -643 555 -649H527Q483 -612 443 -568T353 -443T266 -270T205 -41Z"
        ></path>
        <path
          id="MJX-90-TEX-N-2212"
          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"
        ></path>
        <path
          id="MJX-90-TEX-LO-29"
          d="M35 1138Q35 1150 51 1150H56H69Q113 1113 153 1069T243 944T330 771T391 541T416 250T391 -40T330 -270T243 -443T152 -568T69 -649H56Q43 -649 39 -647T35 -637Q65 -607 110 -548Q283 -316 316 56Q324 133 324 251Q324 368 316 445Q278 877 48 1123Q36 1137 35 1138Z"
        ></path>
        <path
          id="MJX-90-TEX-N-28"
          d="M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"
        ></path>
        <path
          id="MJX-90-TEX-N-29"
          d="M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"
        ></path>
      </defs>
      <g
        fill={theme === "dark" ? "white" : "black"}
        transform="scale(1,-1)"
      >
        <g data-mml-node="math">
          <g data-mml-node="mtable">
            <g data-mml-node="mtr" transform="translate(0,1826.3)">
              <g data-mml-node="mtd" transform="translate(2916.6,0)">
                <g data-mml-node="mi">
                  <use data-c="1D451" xlinkHref="#MJX-90-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msubsup" transform="translate(520,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D44A" xlinkHref="#MJX-90-TEX-I-1D44A"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(1136.2,490.8) scale(0.707)"
                  >
                    <use data-c="1D444" xlinkHref="#MJX-90-TEX-I-1D444"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(977,-269) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(2543.3,0)">
                  <use data-c="3D" xlinkHref="#MJX-90-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(3599.1,0)">
                  <use data-c="1D706" xlinkHref="#MJX-90-TEX-I-1D706"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4182.1,0)">
                  <use data-c="1D451" xlinkHref="#MJX-90-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4702.1,0)">
                  <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                </g>
                <g data-mml-node="mo" transform="translate(5285.3,0)">
                  <use data-c="2B" xlinkHref="#MJX-90-TEX-N-2B"></use>
                </g>
                <g data-mml-node="mi" transform="translate(6285.5,0)">
                  <use data-c="1D451" xlinkHref="#MJX-90-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msubsup" transform="translate(6805.5,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D44A" xlinkHref="#MJX-90-TEX-I-1D44A"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(1136.2,363) scale(0.707)"
                  >
                    <use data-c="1D443" xlinkHref="#MJX-90-TEX-I-1D443"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(977,-259.6) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                  </g>
                </g>
              </g>
            </g>
            <g data-mml-node="mtr" transform="translate(0,0)">
              <g data-mml-node="mtd" transform="translate(29.3,0)">
                <g data-mml-node="mi">
                  <use data-c="1D451" xlinkHref="#MJX-90-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msub" transform="translate(520,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-90-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1749,0)">
                  <use data-c="3D" xlinkHref="#MJX-90-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(2804.8,0)">
                  <use data-c="1D707" xlinkHref="#MJX-90-TEX-I-1D707"></use>
                </g>
                <g data-mml-node="msub" transform="translate(3407.8,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-90-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mi" transform="translate(4359.1,0)">
                  <use data-c="1D451" xlinkHref="#MJX-90-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4879.1,0)">
                  <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                </g>
                <g data-mml-node="mo" transform="translate(5462.3,0)">
                  <use data-c="2B" xlinkHref="#MJX-90-TEX-N-2B"></use>
                </g>
                <g data-mml-node="mi" transform="translate(6462.5,0)">
                  <use data-c="1D70E" xlinkHref="#MJX-90-TEX-I-1D70E"></use>
                </g>
                <g data-mml-node="msub" transform="translate(7033.5,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-90-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mrow" transform="translate(8151.5,0)">
                  <g data-mml-node="mo" transform="translate(0 -0.5)">
                    <use data-c="28" xlinkHref="#MJX-90-TEX-LO-28"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(597,0)">
                    <use data-c="1D451" xlinkHref="#MJX-90-TEX-I-1D451"></use>
                  </g>
                  <g data-mml-node="msubsup" transform="translate(1117,0)">
                    <g data-mml-node="mi">
                      <use
                        data-c="1D44A"
                        xlinkHref="#MJX-90-TEX-I-1D44A"
                      ></use>
                    </g>
                    <g
                      data-mml-node="mi"
                      transform="translate(1136.2,490.8) scale(0.707)"
                    >
                      <use
                        data-c="1D444"
                        xlinkHref="#MJX-90-TEX-I-1D444"
                      ></use>
                    </g>
                    <g
                      data-mml-node="mi"
                      transform="translate(977,-269) scale(0.707)"
                    >
                      <use
                        data-c="1D461"
                        xlinkHref="#MJX-90-TEX-I-1D461"
                      ></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(3084.7,0)">
                    <use data-c="2212" xlinkHref="#MJX-90-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(4085,0)">
                    <use data-c="1D706" xlinkHref="#MJX-90-TEX-I-1D706"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(4668,0)">
                    <use data-c="1D451" xlinkHref="#MJX-90-TEX-I-1D451"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(5188,0)">
                    <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                  </g>
                  <g
                    data-mml-node="mo"
                    transform="translate(5549,0) translate(0 -0.5)"
                  >
                    <use data-c="29" xlinkHref="#MJX-90-TEX-LO-29"></use>
                  </g>
                </g>
              </g>
            </g>
            <g data-mml-node="mtr" transform="translate(0,-2038.1)">
              <g data-mml-node="mtd">
                <g data-mml-node="mi">
                  <use data-c="1D451" xlinkHref="#MJX-90-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msub" transform="translate(520,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-90-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1749,0)">
                  <use data-c="3D" xlinkHref="#MJX-90-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mrow" transform="translate(2804.8,0)">
                  <g data-mml-node="mo">
                    <use data-c="28" xlinkHref="#MJX-90-TEX-N-28"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(389,0)">
                    <use data-c="1D707" xlinkHref="#MJX-90-TEX-I-1D707"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(992,0)">
                    <g data-mml-node="mi">
                      <use
                        data-c="1D446"
                        xlinkHref="#MJX-90-TEX-I-1D446"
                      ></use>
                    </g>
                    <g
                      data-mml-node="mi"
                      transform="translate(646,-150) scale(0.707)"
                    >
                      <use
                        data-c="1D461"
                        xlinkHref="#MJX-90-TEX-I-1D461"
                      ></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(2165.5,0)">
                    <use data-c="2212" xlinkHref="#MJX-90-TEX-N-2212"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(3165.7,0)">
                    <use data-c="1D706" xlinkHref="#MJX-90-TEX-I-1D706"></use>
                  </g>
                  <g data-mml-node="mi" transform="translate(3748.7,0)">
                    <use data-c="1D70E" xlinkHref="#MJX-90-TEX-I-1D70E"></use>
                  </g>
                  <g data-mml-node="msub" transform="translate(4319.7,0)">
                    <g data-mml-node="mi">
                      <use
                        data-c="1D446"
                        xlinkHref="#MJX-90-TEX-I-1D446"
                      ></use>
                    </g>
                    <g
                      data-mml-node="mi"
                      transform="translate(646,-150) scale(0.707)"
                    >
                      <use
                        data-c="1D461"
                        xlinkHref="#MJX-90-TEX-I-1D461"
                      ></use>
                    </g>
                  </g>
                  <g data-mml-node="mo" transform="translate(5271,0)">
                    <use data-c="29" xlinkHref="#MJX-90-TEX-N-29"></use>
                  </g>
                </g>
                <g data-mml-node="mi" transform="translate(8464.8,0)">
                  <use data-c="1D451" xlinkHref="#MJX-90-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="mi" transform="translate(8984.8,0)">
                  <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                </g>
                <g data-mml-node="mo" transform="translate(9568,0)">
                  <use data-c="2B" xlinkHref="#MJX-90-TEX-N-2B"></use>
                </g>
                <g data-mml-node="mi" transform="translate(10568.2,0)">
                  <use data-c="1D70E" xlinkHref="#MJX-90-TEX-I-1D70E"></use>
                </g>
                <g data-mml-node="msub" transform="translate(11139.2,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-90-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mi" transform="translate(12090.5,0)">
                  <use data-c="1D451" xlinkHref="#MJX-90-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msubsup" transform="translate(12610.5,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D44A" xlinkHref="#MJX-90-TEX-I-1D44A"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(1136.2,490.8) scale(0.707)"
                  >
                    <use data-c="1D444" xlinkHref="#MJX-90-TEX-I-1D444"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(977,-269) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-90-TEX-I-1D461"></use>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}



export function BSMGirsanov2({...props}) {
  const theme = getTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      viewBox="0 -1578.9 7617.8 2657.8"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
    >
      <defs>
        <path
          id="MJX-140-TEX-I-1D707"
          d="M58 -216Q44 -216 34 -208T23 -186Q23 -176 96 116T173 414Q186 442 219 442Q231 441 239 435T249 423T251 413Q251 401 220 279T187 142Q185 131 185 107V99Q185 26 252 26Q261 26 270 27T287 31T302 38T315 45T327 55T338 65T348 77T356 88T365 100L372 110L408 253Q444 395 448 404Q461 431 491 431Q504 431 512 424T523 412T525 402L449 84Q448 79 448 68Q448 43 455 35T476 26Q485 27 496 35Q517 55 537 131Q543 151 547 152Q549 153 557 153H561Q580 153 580 144Q580 138 575 117T555 63T523 13Q510 0 491 -8Q483 -10 467 -10Q446 -10 429 -4T402 11T385 29T376 44T374 51L368 45Q362 39 350 30T324 12T288 -4T246 -11Q199 -11 153 12L129 -85Q108 -167 104 -180T92 -202Q76 -216 58 -216Z"
        ></path>
        <path
          id="MJX-140-TEX-I-1D446"
          d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"
        ></path>
        <path
          id="MJX-140-TEX-I-1D461"
          d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"
        ></path>
        <path
          id="MJX-140-TEX-N-2212"
          d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"
        ></path>
        <path
          id="MJX-140-TEX-I-1D706"
          d="M166 673Q166 685 183 694H202Q292 691 316 644Q322 629 373 486T474 207T524 67Q531 47 537 34T546 15T551 6T555 2T556 -2T550 -11H482Q457 3 450 18T399 152L354 277L340 262Q327 246 293 207T236 141Q211 112 174 69Q123 9 111 -1T83 -12Q47 -12 47 20Q47 37 61 52T199 187Q229 216 266 252T321 306L338 322Q338 323 288 462T234 612Q214 657 183 657Q166 657 166 673Z"
        ></path>
        <path
          id="MJX-140-TEX-I-1D70E"
          d="M184 -11Q116 -11 74 34T31 147Q31 247 104 333T274 430Q275 431 414 431H552Q553 430 555 429T559 427T562 425T565 422T567 420T569 416T570 412T571 407T572 401Q572 357 507 357Q500 357 490 357T476 358H416L421 348Q439 310 439 263Q439 153 359 71T184 -11ZM361 278Q361 358 276 358Q152 358 115 184Q114 180 114 178Q106 141 106 117Q106 67 131 47T188 26Q242 26 287 73Q316 103 334 153T356 233T361 278Z"
        ></path>
        <path
          id="MJX-140-TEX-N-3D"
          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"
        ></path>
        <path
          id="MJX-140-TEX-I-1D45F"
          d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"
        ></path>
      </defs>
      <g
        fill={theme === "dark" ? "white" : "black"}
        transform="scale(1,-1)"
      >
        <g data-mml-node="math">
          <g data-mml-node="mtable">
            <g data-mml-node="mtr" transform="translate(0,828.9)">
              <g data-mml-node="mtd">
                <g data-mml-node="mi">
                  <use data-c="1D707" xlinkHref="#MJX-140-TEX-I-1D707"></use>
                </g>
                <g data-mml-node="msub" transform="translate(603,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-140-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-140-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1776.5,0)">
                  <use data-c="2212" xlinkHref="#MJX-140-TEX-N-2212"></use>
                </g>
                <g data-mml-node="mi" transform="translate(2776.7,0)">
                  <use data-c="1D706" xlinkHref="#MJX-140-TEX-I-1D706"></use>
                </g>
                <g data-mml-node="mi" transform="translate(3359.7,0)">
                  <use data-c="1D70E" xlinkHref="#MJX-140-TEX-I-1D70E"></use>
                </g>
                <g data-mml-node="msub" transform="translate(3930.7,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-140-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-140-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(5159.8,0)">
                  <use data-c="3D" xlinkHref="#MJX-140-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(6215.5,0)">
                  <use data-c="1D45F" xlinkHref="#MJX-140-TEX-I-1D45F"></use>
                </g>
                <g data-mml-node="msub" transform="translate(6666.5,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-140-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-140-TEX-I-1D461"></use>
                  </g>
                </g>
              </g>
            </g>
            <g data-mml-node="mtr" transform="translate(0,-726.1)">
              <g data-mml-node="mtd" transform="translate(1982.9,0)">
                <g data-mml-node="mi">
                  <use data-c="1D706" xlinkHref="#MJX-140-TEX-I-1D706"></use>
                </g>
                <g data-mml-node="mo" transform="translate(860.8,0)">
                  <use data-c="3D" xlinkHref="#MJX-140-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mfrac" transform="translate(1916.6,0)">
                  <g
                    data-mml-node="mrow"
                    transform="translate(220,492.7) scale(0.707)"
                  >
                    <g data-mml-node="mi">
                      <use
                        data-c="1D45F"
                        xlinkHref="#MJX-140-TEX-I-1D45F"
                      ></use>
                    </g>
                    <g data-mml-node="mo" transform="translate(451,0)">
                      <use data-c="2212" xlinkHref="#MJX-140-TEX-N-2212"></use>
                    </g>
                    <g data-mml-node="mi" transform="translate(1229,0)">
                      <use
                        data-c="1D707"
                        xlinkHref="#MJX-140-TEX-I-1D707"
                      ></use>
                    </g>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(665.8,-345) scale(0.707)"
                  >
                    <use data-c="1D70E" xlinkHref="#MJX-140-TEX-I-1D70E"></use>
                  </g>
                  <rect width="1495.4" height="60" x="120" y="220"></rect>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function BSMGirsanov3({...props}) {
  const theme = getTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      viewBox="0 -882.7 10098.3 1265.4"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"

    >
      <defs>
        <path
          id="MJX-145-TEX-I-1D451"
          d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"
        ></path>
        <path
          id="MJX-145-TEX-I-1D446"
          d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"
        ></path>
        <path
          id="MJX-145-TEX-I-1D461"
          d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"
        ></path>
        <path
          id="MJX-145-TEX-N-3D"
          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"
        ></path>
        <path
          id="MJX-145-TEX-I-1D45F"
          d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"
        ></path>
        <path
          id="MJX-145-TEX-N-2B"
          d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"
        ></path>
        <path
          id="MJX-145-TEX-I-1D70E"
          d="M184 -11Q116 -11 74 34T31 147Q31 247 104 333T274 430Q275 431 414 431H552Q553 430 555 429T559 427T562 425T565 422T567 420T569 416T570 412T571 407T572 401Q572 357 507 357Q500 357 490 357T476 358H416L421 348Q439 310 439 263Q439 153 359 71T184 -11ZM361 278Q361 358 276 358Q152 358 115 184Q114 180 114 178Q106 141 106 117Q106 67 131 47T188 26Q242 26 287 73Q316 103 334 153T356 233T361 278Z"
        ></path>
        <path
          id="MJX-145-TEX-I-1D44A"
          d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z"
        ></path>
        <path
          id="MJX-145-TEX-I-1D444"
          d="M399 -80Q399 -47 400 -30T402 -11V-7L387 -11Q341 -22 303 -22Q208 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435Q740 255 592 107Q529 47 461 16L444 8V3Q444 2 449 -24T470 -66T516 -82Q551 -82 583 -60T625 -3Q631 11 638 11Q647 11 649 2Q649 -6 639 -34T611 -100T557 -165T481 -194Q399 -194 399 -87V-80ZM636 468Q636 523 621 564T580 625T530 655T477 665Q429 665 379 640Q277 591 215 464T153 216Q153 110 207 59Q231 38 236 38V46Q236 86 269 120T347 155Q372 155 390 144T417 114T429 82T435 55L448 64Q512 108 557 185T619 334T636 468ZM314 18Q362 18 404 39L403 49Q399 104 366 115Q354 117 347 117Q344 117 341 117T337 118Q317 118 296 98T274 52Q274 18 314 18Z"
        ></path>
      </defs>
      <g
        fill={theme === "dark" ? "white" : "black"}
        transform="scale(1,-1)"
      >
        <g data-mml-node="math">
          <g data-mml-node="mtable">
            <g data-mml-node="mtr" transform="translate(0,-105.9)">
              <g data-mml-node="mtd">
                <g data-mml-node="mi">
                  <use data-c="1D451" xlinkHref="#MJX-145-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msub" transform="translate(520,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-145-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-145-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1749,0)">
                  <use data-c="3D" xlinkHref="#MJX-145-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(2804.8,0)">
                  <use data-c="1D45F" xlinkHref="#MJX-145-TEX-I-1D45F"></use>
                </g>
                <g data-mml-node="msub" transform="translate(3255.8,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-145-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-145-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mi" transform="translate(4207.1,0)">
                  <use data-c="1D451" xlinkHref="#MJX-145-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4727.1,0)">
                  <use data-c="1D461" xlinkHref="#MJX-145-TEX-I-1D461"></use>
                </g>
                <g data-mml-node="mo" transform="translate(5310.3,0)">
                  <use data-c="2B" xlinkHref="#MJX-145-TEX-N-2B"></use>
                </g>
                <g data-mml-node="mi" transform="translate(6310.5,0)">
                  <use data-c="1D70E" xlinkHref="#MJX-145-TEX-I-1D70E"></use>
                </g>
                <g data-mml-node="msub" transform="translate(6881.5,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-145-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-145-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mi" transform="translate(7832.8,0)">
                  <use data-c="1D451" xlinkHref="#MJX-145-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msubsup" transform="translate(8352.8,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D44A" xlinkHref="#MJX-145-TEX-I-1D44A"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(1136.2,490.8) scale(0.707)"
                  >
                    <use data-c="1D444" xlinkHref="#MJX-145-TEX-I-1D444"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(977,-269) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-145-TEX-I-1D461"></use>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}