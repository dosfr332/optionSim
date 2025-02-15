import { getTheme } from "@/lib/utils";

// Latex used to generate this SVG
// \begin{array}\\
// dS_t = \mu S_t dt + \sigma S_t dW_t
// \end{array}

export function BSMBaseFormula({ ...props }) {
  const theme = getTheme();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      viewBox="0 -750 9787.1 1000"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
    >
      <defs>
        <path
          id="MJX-47-TEX-I-1D451"
          d="M366 683Q367 683 438 688T511 694Q523 694 523 686Q523 679 450 384T375 83T374 68Q374 26 402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487H491Q506 153 506 145Q506 140 503 129Q490 79 473 48T445 8T417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157Q33 205 53 255T101 341Q148 398 195 420T280 442Q336 442 364 400Q369 394 369 396Q370 400 396 505T424 616Q424 629 417 632T378 637H357Q351 643 351 645T353 664Q358 683 366 683ZM352 326Q329 405 277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q233 26 290 98L298 109L352 326Z"
        ></path>
        <path
          id="MJX-47-TEX-I-1D446"
          d="M308 24Q367 24 416 76T466 197Q466 260 414 284Q308 311 278 321T236 341Q176 383 176 462Q176 523 208 573T273 648Q302 673 343 688T407 704H418H425Q521 704 564 640Q565 640 577 653T603 682T623 704Q624 704 627 704T632 705Q645 705 645 698T617 577T585 459T569 456Q549 456 549 465Q549 471 550 475Q550 478 551 494T553 520Q553 554 544 579T526 616T501 641Q465 662 419 662Q362 662 313 616T263 510Q263 480 278 458T319 427Q323 425 389 408T456 390Q490 379 522 342T554 242Q554 216 546 186Q541 164 528 137T492 78T426 18T332 -20Q320 -22 298 -22Q199 -22 144 33L134 44L106 13Q83 -14 78 -18T65 -22Q52 -22 52 -14Q52 -11 110 221Q112 227 130 227H143Q149 221 149 216Q149 214 148 207T144 186T142 153Q144 114 160 87T203 47T255 29T308 24Z"
        ></path>
        <path
          id="MJX-47-TEX-I-1D461"
          d="M26 385Q19 392 19 395Q19 399 22 411T27 425Q29 430 36 430T87 431H140L159 511Q162 522 166 540T173 566T179 586T187 603T197 615T211 624T229 626Q247 625 254 615T261 596Q261 589 252 549T232 470L222 433Q222 431 272 431H323Q330 424 330 420Q330 398 317 385H210L174 240Q135 80 135 68Q135 26 162 26Q197 26 230 60T283 144Q285 150 288 151T303 153H307Q322 153 322 145Q322 142 319 133Q314 117 301 95T267 48T216 6T155 -11Q125 -11 98 4T59 56Q57 64 57 83V101L92 241Q127 382 128 383Q128 385 77 385H26Z"
        ></path>
        <path
          id="MJX-47-TEX-N-3D"
          d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"
        ></path>
        <path
          id="MJX-47-TEX-I-1D707"
          d="M58 -216Q44 -216 34 -208T23 -186Q23 -176 96 116T173 414Q186 442 219 442Q231 441 239 435T249 423T251 413Q251 401 220 279T187 142Q185 131 185 107V99Q185 26 252 26Q261 26 270 27T287 31T302 38T315 45T327 55T338 65T348 77T356 88T365 100L372 110L408 253Q444 395 448 404Q461 431 491 431Q504 431 512 424T523 412T525 402L449 84Q448 79 448 68Q448 43 455 35T476 26Q485 27 496 35Q517 55 537 131Q543 151 547 152Q549 153 557 153H561Q580 153 580 144Q580 138 575 117T555 63T523 13Q510 0 491 -8Q483 -10 467 -10Q446 -10 429 -4T402 11T385 29T376 44T374 51L368 45Q362 39 350 30T324 12T288 -4T246 -11Q199 -11 153 12L129 -85Q108 -167 104 -180T92 -202Q76 -216 58 -216Z"
        ></path>
        <path
          id="MJX-47-TEX-N-2B"
          d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"
        ></path>
        <path
          id="MJX-47-TEX-I-1D70E"
          d="M184 -11Q116 -11 74 34T31 147Q31 247 104 333T274 430Q275 431 414 431H552Q553 430 555 429T559 427T562 425T565 422T567 420T569 416T570 412T571 407T572 401Q572 357 507 357Q500 357 490 357T476 358H416L421 348Q439 310 439 263Q439 153 359 71T184 -11ZM361 278Q361 358 276 358Q152 358 115 184Q114 180 114 178Q106 141 106 117Q106 67 131 47T188 26Q242 26 287 73Q316 103 334 153T356 233T361 278Z"
        ></path>
        <path
          id="MJX-47-TEX-I-1D44A"
          d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z"
        ></path>
      </defs>
      <g fill={theme === "dark" ? "#fff" : "#000"} transform="scale(1,-1)">
        <g data-mml-node="math">
          <g data-mml-node="mtable">
            <g data-mml-node="mtr">
              <g data-mml-node="mtd">
                <g data-mml-node="mi">
                  <use data-c="1D451" xlinkHref="#MJX-47-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msub" transform="translate(520,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-47-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-47-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mo" transform="translate(1749,0)">
                  <use data-c="3D" xlinkHref="#MJX-47-TEX-N-3D"></use>
                </g>
                <g data-mml-node="mi" transform="translate(2804.8,0)">
                  <use data-c="1D707" xlinkHref="#MJX-47-TEX-I-1D707"></use>
                </g>
                <g data-mml-node="msub" transform="translate(3407.8,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-47-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-47-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mi" transform="translate(4359.1,0)">
                  <use data-c="1D451" xlinkHref="#MJX-47-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="mi" transform="translate(4879.1,0)">
                  <use data-c="1D461" xlinkHref="#MJX-47-TEX-I-1D461"></use>
                </g>
                <g data-mml-node="mo" transform="translate(5462.3,0)">
                  <use data-c="2B" xlinkHref="#MJX-47-TEX-N-2B"></use>
                </g>
                <g data-mml-node="mi" transform="translate(6462.5,0)">
                  <use data-c="1D70E" xlinkHref="#MJX-47-TEX-I-1D70E"></use>
                </g>
                <g data-mml-node="msub" transform="translate(7033.5,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D446" xlinkHref="#MJX-47-TEX-I-1D446"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(646,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-47-TEX-I-1D461"></use>
                  </g>
                </g>
                <g data-mml-node="mi" transform="translate(7984.8,0)">
                  <use data-c="1D451" xlinkHref="#MJX-47-TEX-I-1D451"></use>
                </g>
                <g data-mml-node="msub" transform="translate(8504.8,0)">
                  <g data-mml-node="mi">
                    <use data-c="1D44A" xlinkHref="#MJX-47-TEX-I-1D44A"></use>
                  </g>
                  <g
                    data-mml-node="mi"
                    transform="translate(977,-150) scale(0.707)"
                  >
                    <use data-c="1D461" xlinkHref="#MJX-47-TEX-I-1D461"></use>
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
