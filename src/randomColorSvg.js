const template = document.createElement('template');
    template.innerHTML = `
      <style>
        svg {
          display: block;
          margin: 0 auto;
        }
      </style>
      <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_96_889)">
          <path d="M87.4167 25.9619L82.6153 21.3614L82.1722 20.7763C72.8394 23.5644 58.7163 27.7766 58.3041 27.8589C57.687 27.9824 45.457 24.5994 45.457 24.5994L30.6608 18.4199H29.1879C24.2395 25.346 21.098 33.6856 20.4659 42.7298L22.1457 42.5444H38.6824L62.0064 47.9753L89.8964 42.7812V42.7604L91.7826 41.522C91.248 35.9901 89.735 30.7449 87.4167 25.9619Z" fill="#31A7FB"/>
          <path d="M30.1895 18.4199H14.0627L5.97946 26.3716L3.49726 28.3825C1.68062 32.7604 0.518582 37.4781 0.138184 42.4156L1.78538 44.2336H6.84322L21.7415 42.589C22.2618 33.6191 25.3111 25.3284 30.1895 18.4199Z" fill="#0094FD"/>
          <path d="M76.4078 13.167V11.4871C70.2046 6.01746 62.5154 2.1955 54.024 0.700684C45.0811 3.31298 37.2442 8.56866 31.3848 15.5795L44.2357 20.3251H60.8956L77.7777 14.9756L76.4078 13.167Z" fill="#B5DBFD"/>
          <path d="M54.3596 0.759719C51.6487 0.261805 48.855 0 46 0C37.0587 0 28.7153 2.55372 21.6538 6.96756V10.9523L20.8897 11.7039L32.1358 15.8569C37.8411 8.85177 45.5353 3.53176 54.3596 0.759719Z" fill="#8DCAFC"/>
          <path d="M79.5301 51.4152L64.968 55.5217L58.1807 53.3574L41.027 46.0003L30.9077 45.5464L21.282 47.2764L20.3707 47.6061C20.6246 55.9472 23.0087 63.7435 26.9909 70.4548L27.4523 70.6818L38.4355 72.9178L53.7381 71.1754L65.3384 68.0359L81.3341 73.3554L83.4857 72.667C87.9788 66.3625 90.9208 58.8763 91.7557 50.7652L90.5097 49.3475L79.5301 51.4152Z" fill="#B5DBFD"/>
          <path d="M21.6994 47.2012L21.282 47.2763L8.94124 51.739L1.37801 51.4997L0.49826 52.7787C0.968503 55.9627 1.76452 59.0404 2.85217 61.9767L3.56481 62.3375L5.11551 63.1227L5.82024 64.032L12.1497 63.1537L27.4523 70.6815L29.3872 71.0754C24.8254 64.1795 22.0451 56.0037 21.6994 47.2012Z" fill="#8DCAFC"/>
          <path d="M46.5594 77.8392L33.4992 76.9014C33.4992 76.9014 32.8877 77.0264 31.8705 77.2349C37.5608 83.8278 45.0288 88.8006 53.5164 91.3871C60.0015 90.3203 66.0296 87.8977 71.3004 84.4197L71.5926 83.5282L67.8064 81.0477L46.5594 77.8392Z" fill="#31A7FB"/>
          <path d="M33.9753 76.9355L33.4993 76.9014C33.4993 76.9014 23.4921 78.9487 17.0232 80.2874L16.8394 81.5763C24.7765 88.0894 34.9312 92 46 92C48.8669 92 51.672 91.7364 54.3935 91.2341C46.5933 87.9527 39.646 83.0458 33.9753 76.9355Z" fill="#0094FD"/>
          <path d="M76.4078 11.4868C68.8898 12.6769 62.7433 17.0823 56.7405 17.9762C48.5923 19.1898 47.9257 19.3345 34.6434 12.058C31.8004 14.8319 29.3045 17.9681 27.2268 21.3939C31.1867 20.5691 35.4308 21.2201 41.1673 24.963C55.4891 34.3078 55.6548 34.2236 63.4193 32.854C70.3971 31.6231 77.5921 24.109 87.4167 25.9617C84.7336 20.4264 80.9726 15.5118 76.4078 11.4868Z" fill="#8DCAFC"/>
          <path d="M35.2541 12.3921C34.2051 11.8187 33.0756 11.1977 31.8528 10.5238C27.9326 8.36382 24.636 7.29521 21.6538 6.96729C13.5802 12.0138 7.18552 19.494 3.49707 28.3824C6.99235 28.7109 11.2123 28.473 15.1804 26.5935C20.1289 24.2493 24.0159 21.7701 28.3705 21.1991C30.3102 17.9909 32.625 15.0353 35.2541 12.3921Z" fill="#31A7FB"/>
          <path d="M46.5543 41.0877C33.8107 37.5771 27.6518 39.8252 17.4893 41.8576C11.2506 43.1054 4.45571 42.8211 0.13818 42.4155C0.0468984 43.5983 0 44.7935 0 45.9998C0 48.303 0.171422 50.566 0.498273 52.7785C4.82335 53.4915 11.1205 53.8273 16.935 51.5015C27.0972 47.4366 33.2562 42.9404 46 49.9617C62.0181 58.7871 62.2035 58.7075 70.8876 57.4141C77.2069 56.4729 83.6855 51.6411 91.7554 50.7646C91.9166 49.1984 92 47.6089 92 45.9998C92 44.4888 91.9249 42.9956 91.7826 41.522C83.957 42.0335 77.6227 44.3537 71.442 44.814C62.7578 45.4605 62.5724 45.5004 46.5543 41.0877Z" fill="#8DCAFC"/>
          <path d="M21.659 45.3358C21.659 43.8532 21.7312 42.3878 21.8664 40.9404C20.4743 41.2373 19.0282 41.5498 17.4893 41.8576C11.2506 43.1053 4.45571 42.821 0.13818 42.4155C0.0470781 43.5984 0 44.7936 0 45.9999V46.0001C0 48.3033 0.171422 50.5663 0.498273 52.7786C4.82335 53.4916 11.1207 53.8274 16.935 51.5017C18.6694 50.808 20.2869 50.1018 21.8408 49.4423C21.723 48.0888 21.659 46.7199 21.659 45.3358Z" fill="#31A7FB"/>
          <path d="M53.7041 68.3157C42.906 72.7892 33.7821 71.4665 25.1496 67.0372C27.2776 71.4027 30.0495 75.3875 33.3417 78.8623C37.1173 78.7633 41.2688 79.2269 46.5543 80.6829C62.484 85.0712 62.7566 85.0559 71.3004 84.4196C76.0506 81.2852 80.1868 77.2956 83.4857 72.6668C75.2946 65.4441 64.1389 63.9926 53.7041 68.3157Z" fill="#8DCAFC"/>
          <path d="M27.6426 68.2211C25.0784 67.1029 22.5661 65.6957 20.0761 64.066C14.2611 60.2598 7.53968 60.8098 2.85236 61.9766C5.71334 69.7001 10.5879 76.4457 16.8396 81.576C17.0567 81.5364 17.2735 81.4957 17.4895 81.4525C24.3538 80.0797 29.3936 78.6111 35.8678 78.8826C32.6404 75.7546 29.8635 72.1656 27.6426 68.2211Z" fill="#31A7FB"/>
          <path d="M45.2767 60.7734C46.0332 57.7782 42.5977 54.3275 37.6033 53.066C32.6088 51.8046 27.9468 53.21 27.1903 56.2052C26.4337 59.2003 29.8693 62.651 34.8637 63.9125C39.8581 65.174 44.5202 63.7686 45.2767 60.7734Z" fill="#8DCAFC"/>
        </g>
        <defs>
          <clipPath id="clip0_96_889">
            <rect width="92" height="92" fill="none"/>
          </clipPath>
        </defs>
      </svg>
    `;

    class RandomColorSvg extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
      }

      connectedCallback() {
        const svgElement = this.shadowRoot.querySelector('svg');
        const allPath = svgElement.querySelectorAll('path');
        const color1 = `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")}`;
        const color2 = `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")}`;

        for (const path of allPath) {
          const color = this.randomColorBetween(color1, color2);
          path.setAttribute("fill", color);
        }
      }

      hexToRgb(hex) {
        // Convert hex to RGB
        let bigint = parseInt(hex.slice(1), 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return [r, g, b];
      }

      rgbToHex(r, g, b) {
        // Convert RGB to hex
        return (
          "#" +
          ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
        );
      }

      randomColorBetween(hex1, hex2) {
        let rgb1 = this.hexToRgb(hex1);
        let rgb2 = this.hexToRgb(hex2);

        // Generate a random RGB value between the two colors
        let r = Math.floor(Math.random() * (rgb2[0] - rgb1[0] + 1)) + rgb1[0];
        let g = Math.floor(Math.random() * (rgb2[1] - rgb1[1] + 1)) + rgb1[1];
        let b = Math.floor(Math.random() * (rgb2[2] - rgb1[2] + 1)) + rgb1[2];

        return this.rgbToHex(r, g, b);
      }
    }

    customElements.define('random-color-svg', RandomColorSvg);