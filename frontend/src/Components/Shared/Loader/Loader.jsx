import React from "react";
import styles from "./Loader.module.css";
import Card from "../Card/Card";
const Loader = ({ message }) => {
  return (
    <div className={styles.cardWrapper}>
      <Card>
        <svg className={styles.spinner} 
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
          fill="none"
        >
          <g filter="url(#a)">
            <path
              fill="#00FFA3"
              d="M98.46 126.797c-25.714 10.065-54.719-2.622-64.783-28.337-10.065-25.715 2.622-54.72 28.337-64.784 25.714-10.065 54.719 2.622 64.784 28.337 10.065 25.715-2.622 54.72-28.337 64.784ZM66.397 44.873c-19.53 7.644-29.167 29.674-21.523 49.205 7.645 19.53 29.675 29.166 49.205 21.522 19.531-7.644 29.167-29.674 21.523-49.205-7.644-19.53-29.674-29.166-49.205-21.522Z"
            />
          </g>
          <g filter="url(#b)">
            <path
              fill="#D9D9D9"
              d="M33.471 97.926a50.006 50.006 0 0 0 26.206 27.888 49.998 49.998 0 0 0 38.25 1.189l-4.254-11.247a37.964 37.964 0 0 1-29.052-.903 37.985 37.985 0 0 1-19.903-21.181L33.47 97.926Z"
            />
          </g>
          <g filter="url(#c)">
            <path
              fill="#D9D9D9"
              d="M126.824 62.08A49.993 49.993 0 0 0 81.29 30.248a49.998 49.998 0 0 0-19.21 3.402l4.367 11.203a37.976 37.976 0 0 1 49.174 21.593l11.203-4.366Z"
            />
          </g>
          <defs>
            <filter
              id="a"
              width="108.027"
              height="108.027"
              x="26.224"
              y="30.223"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_444_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_444_2"
                result="shape"
              />
            </filter>
            <filter
              id="b"
              width="72.456"
              height="44.565"
              x="29.471"
              y="93.672"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_444_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_444_2"
                result="shape"
              />
            </filter>
            <filter
              id="c"
              width="72.743"
              height="44.21"
              x="58.08"
              y="30.236"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                result="hardAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_444_2"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_444_2"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <span className={styles.message}>{message}</span>
      </Card>
    </div>
  );
};

export default Loader;
