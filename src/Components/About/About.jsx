import universal from "../../assets/images/loyiha_haqida.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <div className="about">
      <div className="container">
        <div className="about_box">

        <div className="about_card_left" data-aos="fade-right" data-aos-offset="-50">
            <img className="about_card_left_img" src={universal} alt="" />
            <div className="about_map_text">
              <div className="about_map_text_box">
                <svg className="about_map_text_img" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="about_map_text_img_color" d="M16.6665 19.3506V25.3332C16.6665 25.7012 16.9518 25.9999 17.3052 25.9999H24.0292C24.3812 25.9999 24.6665 25.7012 24.6665 25.3332V19.3146" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="about_map_text_img_color" d="M15.334 20.2227L20.7767 16.6667L26.0007 20.2227" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="about_map_text_img_color" fill-rule="evenodd" clip-rule="evenodd" d="M11.941 15.1559C13.7695 15.1559 15.2517 13.6737 15.2517 11.8453C15.2517 10.0168 13.7695 8.53461 11.941 8.53461C10.1126 8.53461 8.63037 10.0168 8.63037 11.8453C8.63037 13.6737 10.1126 15.1559 11.941 15.1559Z" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                  <path className="about_map_text_img_color" d="M21.852 12.5653C22.0253 9.8173 21.0707 7.01197 18.9707 4.91197C15.088 1.0293 8.79467 1.0293 4.912 4.91197C1.02933 8.79464 1.02933 15.088 4.912 18.9706L11.9413 26" stroke="black" stroke-width="2.3994" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <p className="about_map_text_text">
                Hududning o`zgacha bir muhiti, uning tarixiga hurmat bilan
                munosabatda bolish loyihaning nomini va uning konseptsiyasini
                belgilab berdi
              </p>
              <p className="about_map_text_text2">Xaritada ko‘rish</p>
            </div>
          </div>
          <div className="about_card_text" data-aos="fade-left">
            <h2 className="about_title">Loyiha haqida</h2>
            <p className="about_text">
              NRG Qorasuvda hammasi ajoyib! Joylashgan o`rnidan boshlab,
              xonadonlarni joylashtirish tartibi, xavfsiz hudud va turarjoy
              majmuasining bolg`usi aholisi uchun parkovkalarning
              mavjudligigacha puxta o`ylangan.
            </p>
            <p className="about_text">
              Yangi turarjoy majmuasining konseptini ishlab chigish davomida,
              NRG Uzbekistan rivojlantirish jamoasi, binolar, landshaft va
              xollning zamonaviy dizaynini, majmua ichidagi yashash uchun qulay
              bo`ladigan shart-sharoitlar bilan uyg`unlashtirishga muvaffaq
              bo`ldi.
            </p>
          </div>


          <div className="about_card_icons" data-aos="fade-left">
            <div className="about_card_icon">
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg className="about_icon_text_img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_42_3374)">
                      <path className="about_icon_text_img_color" d="M72.4 20.8H52C52 19.276 52.156 18.148 51.136 16.948L45.232 10.06C44.8884 9.67578 44.4664 9.36981 43.9944 9.16278C43.5223 8.95576 43.0114 8.8525 42.496 8.86H38.8C37.8452 8.86 36.9296 9.23928 36.2544 9.91442C35.5793 10.5895 35.2 11.5052 35.2 12.46V20.86H28V16C28 9.3724 22.6276 4 16 4C9.3724 4 4 9.3724 4 16V64C4 70.6276 9.3724 76 16 76H72.4C73.3548 76 74.2705 75.6207 74.9456 74.9456C75.6207 74.2705 76 73.3548 76 72.4V24.4C76 23.4452 75.6207 22.5295 74.9456 21.8544C74.2705 21.1793 73.3548 20.8 72.4 20.8ZM64 62.8H61.6V58C61.6 57.0452 61.2207 56.1296 60.5456 55.4544C59.8705 54.7793 58.9548 54.4 58 54.4C57.0452 54.4 56.1296 54.7793 55.4544 55.4544C54.7793 56.1296 54.4 57.0452 54.4 58V62.8H52V40C52 39.6817 52.1264 39.3765 52.3515 39.1515C52.5765 38.9264 52.8817 38.8 53.2 38.8H62.8C63.1183 38.8 63.4235 38.9264 63.6485 39.1515C63.8736 39.3765 64 39.6817 64 40V62.8ZM59.2 62.8H56.8V58C56.8 57.6817 56.9264 57.3765 57.1515 57.1515C57.3765 56.9264 57.6817 56.8 58 56.8C58.3183 56.8 58.6235 56.9264 58.8485 57.1515C59.0736 57.3765 59.2 57.6817 59.2 58V62.8ZM38.8 11.2H42.496C42.6693 11.2 42.8406 11.2375 42.998 11.31C43.1555 11.3825 43.2953 11.4883 43.408 11.62C49.768 19.048 49.6 18.676 49.6 19.288V62.8H47.2V58C47.2 57.0452 46.8207 56.1296 46.1456 55.4544C45.4705 54.7793 44.5548 54.4 43.6 54.4C42.6452 54.4 41.7295 54.7793 41.0544 55.4544C40.3793 56.1296 40 57.0452 40 58V62.8H37.6V53.2H42.4C42.7183 53.2 43.0235 53.0736 43.2485 52.8485C43.4736 52.6235 43.6 52.3183 43.6 52C43.6 51.6817 43.4736 51.3765 43.2485 51.1515C43.0235 50.9264 42.7183 50.8 42.4 50.8H37.6V48.4H42.4C42.7183 48.4 43.0235 48.2736 43.2485 48.0485C43.4736 47.8235 43.6 47.5183 43.6 47.2C43.6 46.8817 43.4736 46.5765 43.2485 46.3515C43.0235 46.1264 42.7183 46 42.4 46H37.6V43.6H42.4C42.7183 43.6 43.0235 43.4736 43.2485 43.2485C43.4736 43.0235 43.6 42.7183 43.6 42.4C43.6 42.0817 43.4736 41.7765 43.2485 41.5515C43.0235 41.3264 42.7183 41.2 42.4 41.2H37.6V38.8H42.4C42.7183 38.8 43.0235 38.6736 43.2485 38.4485C43.4736 38.2235 43.6 37.9183 43.6 37.6C43.6 37.2817 43.4736 36.9765 43.2485 36.7515C43.0235 36.5264 42.7183 36.4 42.4 36.4H37.6V34H42.4C42.7183 34 43.0235 33.8736 43.2485 33.6485C43.4736 33.4235 43.6 33.1183 43.6 32.8C43.6 32.4817 43.4736 32.1765 43.2485 31.9515C43.0235 31.7264 42.7183 31.6 42.4 31.6H37.6V29.2H42.4C42.7183 29.2 43.0235 29.0736 43.2485 28.8485C43.4736 28.6235 43.6 28.3183 43.6 28C43.6 27.6817 43.4736 27.3765 43.2485 27.1515C43.0235 26.9264 42.7183 26.8 42.4 26.8H37.6V24.4H42.4C42.7183 24.4 43.0235 24.2736 43.2485 24.0485C43.4736 23.8235 43.6 23.5183 43.6 23.2C43.6 22.8817 43.4736 22.5765 43.2485 22.3515C43.0235 22.1264 42.7183 22 42.4 22H37.6V19.6H42.4C42.7183 19.6 43.0235 19.4736 43.2485 19.2485C43.4736 19.0235 43.6 18.7183 43.6 18.4C43.6 18.0817 43.4736 17.7765 43.2485 17.5515C43.0235 17.3264 42.7183 17.2 42.4 17.2H37.6V12.4C37.6 12.0817 37.7264 11.7765 37.9515 11.5515C38.1765 11.3264 38.4817 11.2 38.8 11.2ZM44.8 62.8H42.4V58C42.4 57.6817 42.5264 57.3765 42.7515 57.1515C42.9765 56.9264 43.2817 56.8 43.6 56.8C43.9183 56.8 44.2235 56.9264 44.4485 57.1515C44.6736 57.3765 44.8 57.6817 44.8 58V62.8ZM6.4 16C6.4 13.4539 7.41143 11.0121 9.21178 9.21178C11.0121 7.41143 13.4539 6.4 16 6.4C18.5461 6.4 20.9879 7.41143 22.7882 9.21178C24.5886 11.0121 25.6 13.4539 25.6 16V56.8C24.4757 55.3145 23.021 54.1112 21.3511 53.2853C19.6812 52.4595 17.8419 52.0338 15.979 52.0419C14.1161 52.0501 12.2806 52.4919 10.618 53.3323C8.95534 54.1727 7.51123 55.3887 6.4 56.884V16ZM73.6 72.4C73.6 72.7183 73.4736 73.0235 73.2485 73.2485C73.0235 73.4736 72.7183 73.6 72.4 73.6H16C14.1013 73.6 12.2452 73.037 10.6665 71.9821C9.08781 70.9272 7.85736 69.4279 7.13076 67.6738C6.40416 65.9196 6.21404 63.9894 6.58446 62.1271C6.95488 60.2649 7.86919 58.5544 9.21178 57.2118C10.5544 55.8692 12.2649 54.9549 14.1271 54.5845C15.9894 54.214 17.9196 54.4042 19.6738 55.1308C21.4279 55.8574 22.9272 57.0878 23.9821 58.6665C25.037 60.2452 25.6 62.1013 25.6 64C25.6 64.3183 25.7264 64.6235 25.9515 64.8485C26.1765 65.0736 26.4817 65.2 26.8 65.2C27.1183 65.2 27.4235 65.0736 27.6485 64.8485C27.8736 64.6235 28 64.3183 28 64V23.2H35.2V62.8H32.8C32.4817 62.8 32.1765 62.9264 31.9515 63.1515C31.7264 63.3765 31.6 63.6817 31.6 64C31.6 64.3183 31.7264 64.6235 31.9515 64.8485C32.1765 65.0736 32.4817 65.2 32.8 65.2H68.8C69.1183 65.2 69.4235 65.0736 69.6485 64.8485C69.8736 64.6235 70 64.3183 70 64C70 63.6817 69.8736 63.3765 69.6485 63.1515C69.4235 62.9264 69.1183 62.8 68.8 62.8H66.4V40C66.4 39.0452 66.0207 38.1296 65.3456 37.4544C64.6705 36.7793 63.7548 36.4 62.8 36.4C52.456 36.4 52.864 36.316 52 36.616V23.2H72.4C72.7183 23.2 73.0235 23.3264 73.2485 23.5515C73.4736 23.7765 73.6 24.0817 73.6 24.4V72.4Z" />
                      <path className="about_icon_text_img_color2" d="M55.6003 41.1998H54.4003C54.082 41.1998 53.7768 41.3263 53.5518 41.5513C53.3267 41.7764 53.2003 42.0816 53.2003 42.3998C53.2003 42.7181 53.3267 43.0233 53.5518 43.2484C53.7768 43.4734 54.082 43.5998 54.4003 43.5998H55.6003C55.9186 43.5998 56.2238 43.4734 56.4488 43.2484C56.6739 43.0233 56.8003 42.7181 56.8003 42.3998C56.8003 42.0816 56.6739 41.7764 56.4488 41.5513C56.2238 41.3263 55.9186 41.1998 55.6003 41.1998ZM61.6003 41.1998H60.4003C60.082 41.1998 59.7768 41.3263 59.5518 41.5513C59.3267 41.7764 59.2003 42.0816 59.2003 42.3998C59.2003 42.7181 59.3267 43.0233 59.5518 43.2484C59.7768 43.4734 60.082 43.5998 60.4003 43.5998H61.6003C61.9186 43.5998 62.2238 43.4734 62.4488 43.2484C62.6739 43.0233 62.8003 42.7181 62.8003 42.3998C62.8003 42.0816 62.6739 41.7764 62.4488 41.5513C62.2238 41.3263 61.9186 41.1998 61.6003 41.1998ZM55.6003 45.9998H54.4003C54.082 45.9998 53.7768 46.1263 53.5518 46.3513C53.3267 46.5764 53.2003 46.8816 53.2003 47.1998C53.2003 47.5181 53.3267 47.8233 53.5518 48.0484C53.7768 48.2734 54.082 48.3998 54.4003 48.3998H55.6003C55.9186 48.3998 56.2238 48.2734 56.4488 48.0484C56.6739 47.8233 56.8003 47.5181 56.8003 47.1998C56.8003 46.8816 56.6739 46.5764 56.4488 46.3513C56.2238 46.1263 55.9186 45.9998 55.6003 45.9998ZM61.6003 45.9998H60.4003C60.082 45.9998 59.7768 46.1263 59.5518 46.3513C59.3267 46.5764 59.2003 46.8816 59.2003 47.1998C59.2003 47.5181 59.3267 47.8233 59.5518 48.0484C59.7768 48.2734 60.082 48.3998 60.4003 48.3998H61.6003C61.9186 48.3998 62.2238 48.2734 62.4488 48.0484C62.6739 47.8233 62.8003 47.5181 62.8003 47.1998C62.8003 46.8816 62.6739 46.5764 62.4488 46.3513C62.2238 46.1263 61.9186 45.9998 61.6003 45.9998ZM55.6003 50.7998H54.4003C54.082 50.7998 53.7768 50.9263 53.5518 51.1513C53.3267 51.3764 53.2003 51.6816 53.2003 51.9998C53.2003 52.3181 53.3267 52.6233 53.5518 52.8484C53.7768 53.0734 54.082 53.1998 54.4003 53.1998H55.6003C55.9186 53.1998 56.2238 53.0734 56.4488 52.8484C56.6739 52.6233 56.8003 52.3181 56.8003 51.9998C56.8003 51.6816 56.6739 51.3764 56.4488 51.1513C56.2238 50.9263 55.9186 50.7998 55.6003 50.7998ZM61.6003 50.7998H60.4003C60.082 50.7998 59.7768 50.9263 59.5518 51.1513C59.3267 51.3764 59.2003 51.6816 59.2003 51.9998C59.2003 52.3181 59.3267 52.6233 59.5518 52.8484C59.7768 53.0734 60.082 53.1998 60.4003 53.1998H61.6003C61.9186 53.1998 62.2238 53.0734 62.4488 52.8484C62.6739 52.6233 62.8003 52.3181 62.8003 51.9998C62.8003 51.6816 62.6739 51.3764 62.4488 51.1513C62.2238 50.9263 61.9186 50.7998 61.6003 50.7998ZM41.2003 67.5998H31.6003C31.282 67.5998 30.9768 67.7263 30.7518 67.9513C30.5267 68.1764 30.4003 68.4816 30.4003 68.7998C30.4003 69.1181 30.5267 69.4233 30.7518 69.6484C30.9768 69.8734 31.282 69.9998 31.6003 69.9998H41.2003C41.5186 69.9998 41.8238 69.8734 42.0488 69.6484C42.2739 69.4233 42.4003 69.1181 42.4003 68.7998C42.4003 68.4816 42.2739 68.1764 42.0488 67.9513C41.8238 67.7263 41.5186 67.5998 41.2003 67.5998ZM70.0003 67.5998H46.0003C45.682 67.5998 45.3768 67.7263 45.1518 67.9513C44.9267 68.1764 44.8003 68.4816 44.8003 68.7998C44.8003 69.1181 44.9267 69.4233 45.1518 69.6484C45.3768 69.8734 45.682 69.9998 46.0003 69.9998H70.0003C70.3186 69.9998 70.6238 69.8734 70.8488 69.6484C71.0739 69.4233 71.2003 69.1181 71.2003 68.7998C71.2003 68.4816 71.0739 68.1764 70.8488 67.9513C70.6238 67.7263 70.3186 67.5998 70.0003 67.5998ZM10.0003 17.1998C10.3186 17.1998 10.6238 17.0734 10.8488 16.8484C11.0739 16.6233 11.2003 16.3181 11.2003 15.9998V13.5998C11.2003 13.2816 11.0739 12.9764 10.8488 12.7513C10.6238 12.5263 10.3186 12.3998 10.0003 12.3998C9.68203 12.3998 9.37681 12.5263 9.15177 12.7513C8.92672 12.9764 8.80029 13.2816 8.80029 13.5998V15.9998C8.80029 16.3181 8.92672 16.6233 9.15177 16.8484C9.37681 17.0734 9.68203 17.1998 10.0003 17.1998ZM10.0003 49.5998C10.3186 49.5998 10.6238 49.4734 10.8488 49.2484C11.0739 49.0233 11.2003 48.7181 11.2003 48.3998V20.7998C11.2003 20.4816 11.0739 20.1764 10.8488 19.9513C10.6238 19.7263 10.3186 19.5998 10.0003 19.5998C9.68203 19.5998 9.37681 19.7263 9.15177 19.9513C8.92672 20.1764 8.80029 20.4816 8.80029 20.7998V48.3998C8.80029 48.7181 8.92672 49.0233 9.15177 49.2484C9.37681 49.4734 9.68203 49.5998 10.0003 49.5998Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_42_3374">
                        <rect width="72" height="72" fill="white" transform="translate(4 4)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                Rivojlangan infratuzilma
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">

                  <svg className="about_icon_text_img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_42_3398)">
                      <path className="about_icon_text_img_color" d="M70 76L10 76C8.40929 75.9981 6.88427 75.3653 5.75946 74.2405C4.63466 73.1157 4.00191 71.5907 4 70L4 10C4.00191 8.40929 4.63466 6.88427 5.75946 5.75946C6.88427 4.63466 8.40929 4.0019 10 4L70 4C71.5907 4.0019 73.1157 4.63466 74.2405 5.75946C75.3653 6.88427 75.9981 8.40929 76 10L76 70C75.9981 71.5907 75.3653 73.1157 74.2405 74.2405C73.1157 75.3653 71.5907 75.9981 70 76ZM10 73.6L70 73.6C70.9548 73.6 71.8705 73.2207 72.5456 72.5456C73.2207 71.8705 73.6 70.9548 73.6 70V58L55.6 58C53.691 57.9981 51.8608 57.2389 50.5109 55.8891C49.1611 54.5392 48.4019 52.709 48.4 50.8C48.4 49.527 47.8943 48.3061 46.9941 47.4059C46.0939 46.5057 44.873 46 43.6 46L36.4 46C35.4452 46 34.5295 45.6207 33.8544 44.9456C33.1793 44.2705 32.8 43.3548 32.8 42.4C32.8 42.0817 32.6736 41.7765 32.4485 41.5515C32.2235 41.3264 31.9183 41.2 31.6 41.2L6.4 41.2L6.4 70C6.4 70.9548 6.77928 71.8705 7.45442 72.5456C8.12955 73.2207 9.04522 73.6 10 73.6ZM41.2 20.8V31.6H65.2V20.8H41.2ZM14.8 20.8L14.8 31.6L38.8 31.6V20.8L14.8 20.8ZM50.38 48.4C50.6559 49.1702 50.7979 49.9819 50.8 50.8C50.8 52.073 51.3057 53.2939 52.2059 54.1941C53.1061 55.0943 54.327 55.6 55.6 55.6L65.2 55.6V48.4L50.38 48.4ZM48.952 46H53.2V34H26.8V38.8H31.6C32.5548 38.8 33.4705 39.1793 34.1456 39.8544C34.8207 40.5295 35.2 41.4452 35.2 42.4C35.2 42.7183 35.3264 43.0235 35.5515 43.2485C35.7765 43.4736 36.0817 43.6 36.4 43.6H43.6C44.6108 43.6008 45.61 43.8149 46.5323 44.2285C47.4546 44.6421 48.2791 45.2458 48.952 46ZM24.4 34H6.4L6.4 38.8H24.4V34ZM12.4 31.6L12.4 20.8H6.4L6.4 31.6H12.4ZM67.6 31.6L73.6 31.6V20.8L67.6 20.8V31.6ZM55.6 34V46L73.6 46V34L55.6 34ZM67.6 48.4V55.6H73.6V48.4H67.6ZM6.4 10L6.4 18.4H24.4V6.39999H10C9.04522 6.39999 8.12955 6.77928 7.45442 7.45441C6.77928 8.12955 6.4 9.04522 6.4 10ZM26.8 6.39999V18.4H53.2L53.2 6.39999L26.8 6.39999ZM70 6.39999H55.6L55.6 18.4L73.6 18.4V10C73.6 9.04522 73.2207 8.12955 72.5456 7.45441C71.8705 6.77928 70.9548 6.39999 70 6.39999Z" />
                      <path className="about_icon_text_img_color2" d="M9.9998 59.2C10.3181 59.2 10.6233 59.3264 10.8483 59.5514C11.0734 59.7765 11.1998 60.0817 11.1998 60.4L11.1998 67.6C11.1998 67.9182 11.3262 68.2234 11.5513 68.4485C11.7763 68.6735 12.0815 68.8 12.3998 68.8H15.9998C16.3181 68.8 16.6233 68.9264 16.8483 69.1514C17.0734 69.3765 17.1998 69.6817 17.1998 70C17.1998 70.3182 17.0734 70.6234 16.8483 70.8485C16.6233 71.0735 16.3181 71.2 15.9998 71.2H12.3998C11.445 71.2 10.5294 70.8207 9.85422 70.1455C9.17909 69.4704 8.7998 68.5547 8.7998 67.6L8.7998 60.4C8.7998 60.0817 8.92623 59.7765 9.15128 59.5514C9.37632 59.3264 9.68154 59.2 9.9998 59.2ZM20.7998 68.8H21.9998C22.3181 68.8 22.6233 68.9264 22.8483 69.1514C23.0734 69.3765 23.1998 69.6817 23.1998 70C23.1998 70.3182 23.0734 70.6234 22.8483 70.8485C22.6233 71.0735 22.3181 71.2 21.9998 71.2H20.7998C20.4815 71.2 20.1763 71.0735 19.9513 70.8485C19.7262 70.6234 19.5998 70.3182 19.5998 70C19.5998 69.6817 19.7262 69.3765 19.9513 69.1514C20.1763 68.9264 20.4815 68.8 20.7998 68.8Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_42_3398">
                        <rect width="72" height="72" fill="white" transform="matrix(1 0 0 -1 4 76)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                Rivojlangan infratuzilma
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg className="about_icon_text_img" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="about_icon_text_img_color" d="M61.875 5.62491H10.125C9.82663 5.62491 9.54048 5.74344 9.32951 5.95441C9.11853 6.16539 9 6.45154 9 6.74991V56.2499C9 56.5483 9.11853 56.8344 9.32951 57.0454C9.54048 57.2564 9.82663 57.3749 10.125 57.3749H61.875C62.1734 57.3749 62.4595 57.2564 62.6705 57.0454C62.8815 56.8344 63 56.5483 63 56.2499V6.74991C63 6.45154 62.8815 6.16539 62.6705 5.95441C62.4595 5.74344 62.1734 5.62491 61.875 5.62491ZM37.125 7.87491V55.1249H34.875V7.87491H37.125ZM11.25 7.87491H32.625V55.1249H11.25V7.87491ZM60.75 55.1249H39.375V7.87491H60.75V55.1249Z" />
                    <path className="about_icon_text_img_color" d="M4.5 2.24991V60.7499C4.5 61.0483 4.61853 61.3344 4.82951 61.5454C5.04048 61.7564 5.32663 61.8749 5.625 61.8749H66.375C66.6734 61.8749 66.9595 61.7564 67.1705 61.5454C67.3815 61.3344 67.5 61.0483 67.5 60.7499V2.24991C67.5 1.95154 67.3815 1.66539 67.1705 1.45441C66.9595 1.24343 66.6734 1.12491 66.375 1.12491H5.625C5.32663 1.12491 5.04048 1.24343 4.82951 1.45441C4.61853 1.66539 4.5 1.95154 4.5 2.24991ZM6.75 3.37491H65.25V59.6249H6.75V3.37491Z" />
                    <path className="about_icon_text_img_color2" d="M41.9479 30.7057L56.5706 16.0829L58.1625 17.6737L43.5386 32.2964L41.9479 30.7057ZM41.985 45.2778L56.5942 31.7632L58.122 33.4147L43.5128 46.9293L41.985 45.2778ZM13.8263 30.7034L28.449 16.0807L30.0397 17.6714L15.417 32.2942L13.8263 30.7034ZM13.8713 45.2846L28.4805 31.7699L30.0082 33.4214L15.399 46.9361L13.8713 45.2846ZM69.75 64.1249H2.25C1.95163 64.1249 1.66548 64.2435 1.4545 64.4544C1.24353 64.6654 1.125 64.9516 1.125 65.2499V69.7499C1.125 70.0483 1.24353 70.3345 1.4545 70.5454C1.66548 70.7564 1.95163 70.8749 2.25 70.8749H69.75C70.0484 70.8749 70.3345 70.7564 70.5455 70.5454C70.7565 70.3345 70.875 70.0483 70.875 69.7499V65.2499C70.875 64.9516 70.7565 64.6654 70.5455 64.4544C70.3345 64.2435 70.0484 64.1249 69.75 64.1249ZM68.625 68.6249H3.375V66.3749H68.625V68.6249Z" />
                  </svg>
                </div>
                So‘nggi qavatlardagi terrasalar
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg className="about_icon_text_img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="about_icon_text_img_color" d="M73.2309 5.38458H48.7405C47.9759 5.38458 47.3559 6.00447 47.3559 6.7692V73.2307C47.3559 73.9953 47.9759 74.6153 48.7405 74.6153H73.2309C73.9955 74.6153 74.6155 73.9953 74.6155 73.2307V6.7692C74.6155 6.00447 73.9955 5.38458 73.2309 5.38458ZM71.8463 71.8461H50.1251V8.15381H71.8463V71.8461ZM42.7694 5.38458H40.0001C39.2354 5.38458 38.6155 6.00447 38.6155 6.7692C38.6155 7.53392 39.2354 8.15381 40.0001 8.15381H42.7694C43.534 8.15381 44.154 7.53392 44.154 6.7692C44.154 6.00447 43.534 5.38458 42.7694 5.38458ZM34.4617 5.38458H31.6925C30.9277 5.38458 30.3078 6.00447 30.3078 6.7692C30.3078 7.53392 30.9277 8.15381 31.6925 8.15381H34.4617C35.2264 8.15381 35.8463 7.53392 35.8463 6.7692C35.8463 6.00447 35.2264 5.38458 34.4617 5.38458ZM26.154 5.38458H23.3848C22.62 5.38458 22.0002 6.00447 22.0002 6.7692C22.0002 7.53392 22.62 8.15381 23.3848 8.15381H26.154C26.9187 8.15381 27.5386 7.53392 27.5386 6.7692C27.5386 6.00447 26.9187 5.38458 26.154 5.38458ZM15.0771 8.15381H17.8463C18.611 8.15381 19.2309 7.53392 19.2309 6.7692C19.2309 6.00447 18.611 5.38458 17.8463 5.38458H15.0771C14.3124 5.38458 13.6925 6.00447 13.6925 6.7692C13.6925 7.53392 14.3124 8.15381 15.0771 8.15381ZM6.76938 8.15381H9.53861C10.3033 8.15381 10.9232 7.53392 10.9232 6.7692C10.9232 6.00447 10.3033 5.38458 9.53861 5.38458H6.76938C6.00466 5.38458 5.38477 6.00447 5.38477 6.7692C5.38477 7.53392 6.00466 8.15381 6.76938 8.15381ZM42.7694 71.8461H40.0001C39.2354 71.8461 38.6155 72.4661 38.6155 73.2307C38.6155 73.9953 39.2354 74.6153 40.0001 74.6153H42.7694C43.534 74.6153 44.154 73.9953 44.154 73.2307C44.154 72.4661 43.534 71.8461 42.7694 71.8461ZM34.4617 71.8461H31.6925C30.9277 71.8461 30.3078 72.4661 30.3078 73.2307C30.3078 73.9953 30.9277 74.6153 31.6925 74.6153H34.4617C35.2264 74.6153 35.8463 73.9953 35.8463 73.2307C35.8463 72.4661 35.2264 71.8461 34.4617 71.8461ZM26.154 71.8461H23.3848C22.62 71.8461 22.0002 72.4661 22.0002 73.2307C22.0002 73.9953 22.62 74.6153 23.3848 74.6153H26.154C26.9187 74.6153 27.5386 73.9953 27.5386 73.2307C27.5386 72.4661 26.9187 71.8461 26.154 71.8461ZM17.8463 71.8461H15.0771C14.3124 71.8461 13.6925 72.4661 13.6925 73.2307C13.6925 73.9953 14.3124 74.6153 15.0771 74.6153H17.8463C18.611 74.6153 19.2309 73.9953 19.2309 73.2307C19.2309 72.4661 18.611 71.8461 17.8463 71.8461ZM9.53861 71.8461H6.76938C6.00466 71.8461 5.38477 72.4661 5.38477 73.2307C5.38477 73.9953 6.00466 74.6153 6.76938 74.6153H9.53861C10.3033 74.6153 10.9232 73.9953 10.9232 73.2307C10.9232 72.4661 10.3033 71.8461 9.53861 71.8461ZM33.0771 45.798C33.8418 45.798 34.4617 45.1782 34.4617 44.4134V15.6504L37.6365 18.8252C38.177 19.3657 39.0539 19.3659 39.5947 18.8252C40.1356 18.2845 40.1354 17.4078 39.5947 16.8669C33.7089 10.9822 33.9738 11.2002 33.6647 11.0553C33.4905 10.9733 33.3011 10.9286 33.1086 10.924C32.9161 10.9194 32.7248 10.9551 32.5469 11.0287C32.2074 11.1692 32.4813 10.9495 26.5596 16.8671C26.0189 17.4078 26.0189 18.2845 26.5596 18.8253C27.1002 19.3662 27.977 19.366 28.5178 18.8253L31.6925 15.6504V44.4134C31.6925 45.1782 32.3124 45.798 33.0771 45.798ZM39.5946 61.1747C39.0539 60.6342 38.1772 60.6342 37.6363 61.1747L34.4617 64.3494V43.4615C34.4617 42.6969 33.8418 42.0769 33.0771 42.0769C32.3124 42.0769 31.6925 42.6969 31.6925 43.4615V64.3494L28.5177 61.1746C27.977 60.6341 27.1002 60.6341 26.5594 61.1746C26.0187 61.7153 26.0187 62.592 26.5594 63.1329C32.4234 68.9956 32.18 68.7997 32.4874 68.9436C32.6716 69.031 32.8731 69.0764 33.0771 69.0764C33.2811 69.0764 33.4825 69.031 33.6668 68.9436C34.0017 68.7868 33.7363 68.9742 39.5947 63.1329C40.1354 62.5922 40.1354 61.7154 39.5946 61.1747Z" />
                    <path className="about_icon_text_img_color2" d="M22.2213 52.2698C21.7738 51.9878 21.2773 51.847 20.7343 51.847C20.0439 51.847 19.4848 52.0148 19.0681 52.3615C18.7152 52.6409 18.4503 53.0117 18.2716 53.4703C18.1033 53.0565 17.858 52.7185 17.5343 52.4595L17.5333 52.4588C17.1287 52.143 16.6327 51.9876 16.0515 51.9876C15.5453 51.9876 15.0857 52.1241 14.6753 52.3974C14.2543 52.6621 13.9242 53.0524 13.6832 53.5631C13.4311 54.0774 13.3077 54.712 13.3077 55.4626C13.3077 56.2041 13.4265 56.838 13.6685 57.3609C13.9101 57.8826 14.2504 58.2829 14.6908 58.5569L14.6922 58.5577C15.132 58.8216 15.6473 58.9517 16.2343 58.9517H16.3343V58.8517V57.1642V57.0642H16.2343C15.8362 57.0642 15.5382 56.9372 15.3262 56.6917C15.1137 56.4363 14.9983 56.033 14.9983 55.4626C14.9983 54.8804 15.11 54.4833 15.3118 54.248L15.3129 54.2467C15.5139 54.0038 15.8193 53.8751 16.2483 53.8751C16.6756 53.8751 16.992 54.0075 17.2128 54.2618C17.4256 54.5177 17.5405 54.9121 17.5405 55.4626V56.447V56.547H17.6405H19.0468H19.1468V56.447V55.4626C19.1468 54.8165 19.2859 54.3805 19.5394 54.1271L19.5406 54.1259C19.7895 53.8683 20.1362 53.7345 20.5937 53.7345C21.038 53.7345 21.3737 53.8798 21.6141 54.163C21.8456 54.4374 21.9702 54.8644 21.9702 55.4626C21.9702 56.0795 21.8456 56.5151 21.6152 56.7891C21.3754 57.0537 21.0395 57.1907 20.5937 57.1907H20.4937V57.2907V58.9782V59.0782H20.5937C21.1911 59.0782 21.725 58.9383 22.1922 58.656L22.193 58.6555C22.6514 58.3727 23.0104 57.9639 23.2709 57.4332L23.2712 57.4326C23.5326 56.8906 23.6608 56.2327 23.6608 55.4626C23.6608 54.684 23.5375 54.0261 23.2856 53.4933L23.2853 53.4926C23.0252 52.9532 22.6711 52.5438 22.2213 52.2698ZM22.2213 52.2698C22.2215 52.2699 22.2218 52.2701 22.222 52.2702L22.1687 52.3548M22.2213 52.2698C22.2211 52.2696 22.2209 52.2695 22.2206 52.2694L22.1687 52.3548M22.1687 52.3548C22.5999 52.6173 22.9421 53.0111 23.1952 53.5361M22.1687 52.3548C21.7374 52.0829 21.2593 51.947 20.7343 51.947C20.0593 51.947 19.5249 52.1111 19.1312 52.4392C18.767 52.7271 18.4984 53.1184 18.3255 53.6129L23.1952 53.5361M23.1952 53.5361C23.439 54.0517 23.5608 54.6939 23.5608 55.4626C23.5608 56.222 23.4343 56.8642 23.1812 57.3892C22.928 57.9048 22.5812 58.2986 22.1405 58.5704L23.1952 53.5361ZM25.5609 50.0086L25.6858 50.0409V49.9118V49.068V49.0164L25.6437 48.9865L23.464 47.4396L23.438 47.4211H23.4062H21.6343H21.5343V47.5211V49.3493V49.4493H21.6343H23.3935L25.5609 50.0086ZM23.4062 45.3069H23.5062V45.2069L23.5062 38.035V37.935H23.4062H21.9437H21.8437V38.035L21.8437 42.5773L19.9833 40.2937C19.9831 40.2934 19.9829 40.2932 19.9827 40.2929C19.6426 39.8584 19.297 39.4795 18.9458 39.1568C18.5833 38.8229 18.2051 38.5593 17.8109 38.367L17.8101 38.3666C17.4028 38.1726 16.9709 38.0756 16.5155 38.0756C15.9011 38.0756 15.35 38.2054 14.8649 38.4673C14.378 38.7302 13.9988 39.1197 13.7276 39.6326C13.4458 40.1384 13.3077 40.7559 13.3077 41.4803C13.3077 42.2246 13.4556 42.8743 13.7555 43.4259C14.0456 43.9769 14.4621 44.4078 15.0034 44.7171L15.0039 44.7174C15.5369 45.0179 16.1591 45.1663 16.8671 45.1663H16.9671V45.0663V43.3788V43.2788H16.8671C16.2161 43.2788 15.755 43.1183 15.4623 42.8169L15.4622 42.8169C15.1569 42.5028 14.9983 42.0618 14.9983 41.4803C14.9983 40.9949 15.1414 40.6301 15.4167 40.372L15.4179 40.3709C15.6965 40.101 16.0593 39.9631 16.5155 39.9631C16.7629 39.9631 16.9963 40.016 17.2168 40.1217C17.4302 40.2285 17.6657 40.3997 17.9234 40.6389C18.1736 40.88 18.476 41.2009 18.8309 41.6024C18.831 41.6025 18.8311 41.6026 18.8312 41.6028L22.0087 45.2723L22.0386 45.3069H22.0843H23.4062ZM23.4062 31.8794H23.5062V31.7794V30.2325V30.1325H23.4062H18.9765C18.6306 30.1325 18.33 30.0779 18.0725 29.9714L18.0714 29.9709C17.8055 29.8645 17.6067 29.7117 17.4695 29.5145L17.469 29.5138C17.3241 29.3091 17.2483 29.0493 17.2483 28.7278C17.2483 28.3306 17.3794 28.0271 17.6357 27.805L17.6357 27.805L17.6384 27.8026C17.8817 27.576 18.318 27.4497 18.9765 27.4497H23.4062H23.5062V27.3497V25.8028V25.7028H23.4062H18.9765C18.6306 25.7028 18.33 25.6482 18.0725 25.5417L18.0714 25.5412C17.8055 25.4348 17.6067 25.282 17.4695 25.0848L17.4695 25.0848L17.469 25.0841C17.3241 24.8795 17.2483 24.6196 17.2483 24.2981C17.2483 23.9009 17.3794 23.5974 17.6357 23.3753L17.6357 23.3753L17.6384 23.3729C17.8817 23.1463 18.318 23.02 18.9765 23.02L23.4062 23.02H23.5062V22.92V21.3731V21.2731L23.4062 21.2731L18.6249 21.2731C17.6475 21.2731 16.9054 21.4863 16.4198 21.9323C15.9349 22.3776 15.6983 23.0073 15.6983 23.806C15.6983 24.3395 15.8345 24.8138 16.1089 25.2255L16.1089 25.2255L16.1095 25.2264C16.3401 25.5641 16.6303 25.8391 16.9792 26.0509C16.6322 26.1969 16.3427 26.4225 16.1123 26.7269C15.8322 27.0971 15.6983 27.604 15.6983 28.2356C15.6983 28.7438 15.8454 29.1964 16.1402 29.5894C16.3419 29.8583 16.5704 30.0772 16.8258 30.245H15.953H15.853V30.345V31.7794V31.8794H15.953H23.4062Z" />
                  </svg>
                </div>

                Qulay transport o‘tkazgichi
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg className="about_icon_text_img" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="about_icon_text_img_color" d="M61.875 5.62491H10.125C9.82663 5.62491 9.54048 5.74344 9.32951 5.95441C9.11853 6.16539 9 6.45154 9 6.74991V56.2499C9 56.5483 9.11853 56.8344 9.32951 57.0454C9.54048 57.2564 9.82663 57.3749 10.125 57.3749H61.875C62.1734 57.3749 62.4595 57.2564 62.6705 57.0454C62.8815 56.8344 63 56.5483 63 56.2499V6.74991C63 6.45154 62.8815 6.16539 62.6705 5.95441C62.4595 5.74344 62.1734 5.62491 61.875 5.62491ZM37.125 7.87491V55.1249H34.875V7.87491H37.125ZM11.25 7.87491H32.625V55.1249H11.25V7.87491ZM60.75 55.1249H39.375V7.87491H60.75V55.1249Z" />
                    <path className="about_icon_text_img_color" d="M4.5 2.24991V60.7499C4.5 61.0483 4.61853 61.3344 4.82951 61.5454C5.04048 61.7564 5.32663 61.8749 5.625 61.8749H66.375C66.6734 61.8749 66.9595 61.7564 67.1705 61.5454C67.3815 61.3344 67.5 61.0483 67.5 60.7499V2.24991C67.5 1.95154 67.3815 1.66539 67.1705 1.45441C66.9595 1.24343 66.6734 1.12491 66.375 1.12491H5.625C5.32663 1.12491 5.04048 1.24343 4.82951 1.45441C4.61853 1.66539 4.5 1.95154 4.5 2.24991ZM6.75 3.37491H65.25V59.6249H6.75V3.37491Z" />
                    <path className="about_icon_text_img_color2" d="M41.9479 30.7057L56.5706 16.0829L58.1625 17.6737L43.5386 32.2964L41.9479 30.7057ZM41.985 45.2778L56.5942 31.7632L58.122 33.4147L43.5128 46.9293L41.985 45.2778ZM13.8263 30.7034L28.449 16.0807L30.0397 17.6714L15.417 32.2942L13.8263 30.7034ZM13.8713 45.2846L28.4805 31.7699L30.0082 33.4214L15.399 46.9361L13.8713 45.2846ZM69.75 64.1249H2.25C1.95163 64.1249 1.66548 64.2435 1.4545 64.4544C1.24353 64.6654 1.125 64.9516 1.125 65.2499V69.7499C1.125 70.0483 1.24353 70.3345 1.4545 70.5454C1.66548 70.7564 1.95163 70.8749 2.25 70.8749H69.75C70.0484 70.8749 70.3345 70.7564 70.5455 70.5454C70.7565 70.3345 70.875 70.0483 70.875 69.7499V65.2499C70.875 64.9516 70.7565 64.6654 70.5455 64.4544C70.3345 64.2435 70.0484 64.1249 69.75 64.1249ZM68.625 68.6249H3.375V66.3749H68.625V68.6249Z" />
                  </svg>
                </div>
                Ko‘p funksiyali hovli
              </div>
              <div className="about_icon_text">
                <div className="about_icon_text_card">
                  <svg className="about_icon_text_img" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="about_icon_text_img_color" d="M73.2309 5.38458H48.7405C47.9759 5.38458 47.3559 6.00447 47.3559 6.7692V73.2307C47.3559 73.9953 47.9759 74.6153 48.7405 74.6153H73.2309C73.9955 74.6153 74.6155 73.9953 74.6155 73.2307V6.7692C74.6155 6.00447 73.9955 5.38458 73.2309 5.38458ZM71.8463 71.8461H50.1251V8.15381H71.8463V71.8461ZM42.7694 5.38458H40.0001C39.2354 5.38458 38.6155 6.00447 38.6155 6.7692C38.6155 7.53392 39.2354 8.15381 40.0001 8.15381H42.7694C43.534 8.15381 44.154 7.53392 44.154 6.7692C44.154 6.00447 43.534 5.38458 42.7694 5.38458ZM34.4617 5.38458H31.6925C30.9277 5.38458 30.3078 6.00447 30.3078 6.7692C30.3078 7.53392 30.9277 8.15381 31.6925 8.15381H34.4617C35.2264 8.15381 35.8463 7.53392 35.8463 6.7692C35.8463 6.00447 35.2264 5.38458 34.4617 5.38458ZM26.154 5.38458H23.3848C22.62 5.38458 22.0002 6.00447 22.0002 6.7692C22.0002 7.53392 22.62 8.15381 23.3848 8.15381H26.154C26.9187 8.15381 27.5386 7.53392 27.5386 6.7692C27.5386 6.00447 26.9187 5.38458 26.154 5.38458ZM15.0771 8.15381H17.8463C18.611 8.15381 19.2309 7.53392 19.2309 6.7692C19.2309 6.00447 18.611 5.38458 17.8463 5.38458H15.0771C14.3124 5.38458 13.6925 6.00447 13.6925 6.7692C13.6925 7.53392 14.3124 8.15381 15.0771 8.15381ZM6.76938 8.15381H9.53861C10.3033 8.15381 10.9232 7.53392 10.9232 6.7692C10.9232 6.00447 10.3033 5.38458 9.53861 5.38458H6.76938C6.00466 5.38458 5.38477 6.00447 5.38477 6.7692C5.38477 7.53392 6.00466 8.15381 6.76938 8.15381ZM42.7694 71.8461H40.0001C39.2354 71.8461 38.6155 72.4661 38.6155 73.2307C38.6155 73.9953 39.2354 74.6153 40.0001 74.6153H42.7694C43.534 74.6153 44.154 73.9953 44.154 73.2307C44.154 72.4661 43.534 71.8461 42.7694 71.8461ZM34.4617 71.8461H31.6925C30.9277 71.8461 30.3078 72.4661 30.3078 73.2307C30.3078 73.9953 30.9277 74.6153 31.6925 74.6153H34.4617C35.2264 74.6153 35.8463 73.9953 35.8463 73.2307C35.8463 72.4661 35.2264 71.8461 34.4617 71.8461ZM26.154 71.8461H23.3848C22.62 71.8461 22.0002 72.4661 22.0002 73.2307C22.0002 73.9953 22.62 74.6153 23.3848 74.6153H26.154C26.9187 74.6153 27.5386 73.9953 27.5386 73.2307C27.5386 72.4661 26.9187 71.8461 26.154 71.8461ZM17.8463 71.8461H15.0771C14.3124 71.8461 13.6925 72.4661 13.6925 73.2307C13.6925 73.9953 14.3124 74.6153 15.0771 74.6153H17.8463C18.611 74.6153 19.2309 73.9953 19.2309 73.2307C19.2309 72.4661 18.611 71.8461 17.8463 71.8461ZM9.53861 71.8461H6.76938C6.00466 71.8461 5.38477 72.4661 5.38477 73.2307C5.38477 73.9953 6.00466 74.6153 6.76938 74.6153H9.53861C10.3033 74.6153 10.9232 73.9953 10.9232 73.2307C10.9232 72.4661 10.3033 71.8461 9.53861 71.8461ZM33.0771 45.798C33.8418 45.798 34.4617 45.1782 34.4617 44.4134V15.6504L37.6365 18.8252C38.177 19.3657 39.0539 19.3659 39.5947 18.8252C40.1356 18.2845 40.1354 17.4078 39.5947 16.8669C33.7089 10.9822 33.9738 11.2002 33.6647 11.0553C33.4905 10.9733 33.3011 10.9286 33.1086 10.924C32.9161 10.9194 32.7248 10.9551 32.5469 11.0287C32.2074 11.1692 32.4813 10.9495 26.5596 16.8671C26.0189 17.4078 26.0189 18.2845 26.5596 18.8253C27.1002 19.3662 27.977 19.366 28.5178 18.8253L31.6925 15.6504V44.4134C31.6925 45.1782 32.3124 45.798 33.0771 45.798ZM39.5946 61.1747C39.0539 60.6342 38.1772 60.6342 37.6363 61.1747L34.4617 64.3494V43.4615C34.4617 42.6969 33.8418 42.0769 33.0771 42.0769C32.3124 42.0769 31.6925 42.6969 31.6925 43.4615V64.3494L28.5177 61.1746C27.977 60.6341 27.1002 60.6341 26.5594 61.1746C26.0187 61.7153 26.0187 62.592 26.5594 63.1329C32.4234 68.9956 32.18 68.7997 32.4874 68.9436C32.6716 69.031 32.8731 69.0764 33.0771 69.0764C33.2811 69.0764 33.4825 69.031 33.6668 68.9436C34.0017 68.7868 33.7363 68.9742 39.5947 63.1329C40.1354 62.5922 40.1354 61.7154 39.5946 61.1747Z" />
                    <path className="about_icon_text_img_color2" d="M22.2213 52.2698C21.7738 51.9878 21.2773 51.847 20.7343 51.847C20.0439 51.847 19.4848 52.0148 19.0681 52.3615C18.7152 52.6409 18.4503 53.0117 18.2716 53.4703C18.1033 53.0565 17.858 52.7185 17.5343 52.4595L17.5333 52.4588C17.1287 52.143 16.6327 51.9876 16.0515 51.9876C15.5453 51.9876 15.0857 52.1241 14.6753 52.3974C14.2543 52.6621 13.9242 53.0524 13.6832 53.5631C13.4311 54.0774 13.3077 54.712 13.3077 55.4626C13.3077 56.2041 13.4265 56.838 13.6685 57.3609C13.9101 57.8826 14.2504 58.2829 14.6908 58.5569L14.6922 58.5577C15.132 58.8216 15.6473 58.9517 16.2343 58.9517H16.3343V58.8517V57.1642V57.0642H16.2343C15.8362 57.0642 15.5382 56.9372 15.3262 56.6917C15.1137 56.4363 14.9983 56.033 14.9983 55.4626C14.9983 54.8804 15.11 54.4833 15.3118 54.248L15.3129 54.2467C15.5139 54.0038 15.8193 53.8751 16.2483 53.8751C16.6756 53.8751 16.992 54.0075 17.2128 54.2618C17.4256 54.5177 17.5405 54.9121 17.5405 55.4626V56.447V56.547H17.6405H19.0468H19.1468V56.447V55.4626C19.1468 54.8165 19.2859 54.3805 19.5394 54.1271L19.5406 54.1259C19.7895 53.8683 20.1362 53.7345 20.5937 53.7345C21.038 53.7345 21.3737 53.8798 21.6141 54.163C21.8456 54.4374 21.9702 54.8644 21.9702 55.4626C21.9702 56.0795 21.8456 56.5151 21.6152 56.7891C21.3754 57.0537 21.0395 57.1907 20.5937 57.1907H20.4937V57.2907V58.9782V59.0782H20.5937C21.1911 59.0782 21.725 58.9383 22.1922 58.656L22.193 58.6555C22.6514 58.3727 23.0104 57.9639 23.2709 57.4332L23.2712 57.4326C23.5326 56.8906 23.6608 56.2327 23.6608 55.4626C23.6608 54.684 23.5375 54.0261 23.2856 53.4933L23.2853 53.4926C23.0252 52.9532 22.6711 52.5438 22.2213 52.2698ZM22.2213 52.2698C22.2215 52.2699 22.2218 52.2701 22.222 52.2702L22.1687 52.3548M22.2213 52.2698C22.2211 52.2696 22.2209 52.2695 22.2206 52.2694L22.1687 52.3548M22.1687 52.3548C22.5999 52.6173 22.9421 53.0111 23.1952 53.5361M22.1687 52.3548C21.7374 52.0829 21.2593 51.947 20.7343 51.947C20.0593 51.947 19.5249 52.1111 19.1312 52.4392C18.767 52.7271 18.4984 53.1184 18.3255 53.6129L23.1952 53.5361M23.1952 53.5361C23.439 54.0517 23.5608 54.6939 23.5608 55.4626C23.5608 56.222 23.4343 56.8642 23.1812 57.3892C22.928 57.9048 22.5812 58.2986 22.1405 58.5704L23.1952 53.5361ZM25.5609 50.0086L25.6858 50.0409V49.9118V49.068V49.0164L25.6437 48.9865L23.464 47.4396L23.438 47.4211H23.4062H21.6343H21.5343V47.5211V49.3493V49.4493H21.6343H23.3935L25.5609 50.0086ZM23.4062 45.3069H23.5062V45.2069L23.5062 38.035V37.935H23.4062H21.9437H21.8437V38.035L21.8437 42.5773L19.9833 40.2937C19.9831 40.2934 19.9829 40.2932 19.9827 40.2929C19.6426 39.8584 19.297 39.4795 18.9458 39.1568C18.5833 38.8229 18.2051 38.5593 17.8109 38.367L17.8101 38.3666C17.4028 38.1726 16.9709 38.0756 16.5155 38.0756C15.9011 38.0756 15.35 38.2054 14.8649 38.4673C14.378 38.7302 13.9988 39.1197 13.7276 39.6326C13.4458 40.1384 13.3077 40.7559 13.3077 41.4803C13.3077 42.2246 13.4556 42.8743 13.7555 43.4259C14.0456 43.9769 14.4621 44.4078 15.0034 44.7171L15.0039 44.7174C15.5369 45.0179 16.1591 45.1663 16.8671 45.1663H16.9671V45.0663V43.3788V43.2788H16.8671C16.2161 43.2788 15.755 43.1183 15.4623 42.8169L15.4622 42.8169C15.1569 42.5028 14.9983 42.0618 14.9983 41.4803C14.9983 40.9949 15.1414 40.6301 15.4167 40.372L15.4179 40.3709C15.6965 40.101 16.0593 39.9631 16.5155 39.9631C16.7629 39.9631 16.9963 40.016 17.2168 40.1217C17.4302 40.2285 17.6657 40.3997 17.9234 40.6389C18.1736 40.88 18.476 41.2009 18.8309 41.6024C18.831 41.6025 18.8311 41.6026 18.8312 41.6028L22.0087 45.2723L22.0386 45.3069H22.0843H23.4062ZM23.4062 31.8794H23.5062V31.7794V30.2325V30.1325H23.4062H18.9765C18.6306 30.1325 18.33 30.0779 18.0725 29.9714L18.0714 29.9709C17.8055 29.8645 17.6067 29.7117 17.4695 29.5145L17.469 29.5138C17.3241 29.3091 17.2483 29.0493 17.2483 28.7278C17.2483 28.3306 17.3794 28.0271 17.6357 27.805L17.6357 27.805L17.6384 27.8026C17.8817 27.576 18.318 27.4497 18.9765 27.4497H23.4062H23.5062V27.3497V25.8028V25.7028H23.4062H18.9765C18.6306 25.7028 18.33 25.6482 18.0725 25.5417L18.0714 25.5412C17.8055 25.4348 17.6067 25.282 17.4695 25.0848L17.4695 25.0848L17.469 25.0841C17.3241 24.8795 17.2483 24.6196 17.2483 24.2981C17.2483 23.9009 17.3794 23.5974 17.6357 23.3753L17.6357 23.3753L17.6384 23.3729C17.8817 23.1463 18.318 23.02 18.9765 23.02L23.4062 23.02H23.5062V22.92V21.3731V21.2731L23.4062 21.2731L18.6249 21.2731C17.6475 21.2731 16.9054 21.4863 16.4198 21.9323C15.9349 22.3776 15.6983 23.0073 15.6983 23.806C15.6983 24.3395 15.8345 24.8138 16.1089 25.2255L16.1089 25.2255L16.1095 25.2264C16.3401 25.5641 16.6303 25.8391 16.9792 26.0509C16.6322 26.1969 16.3427 26.4225 16.1123 26.7269C15.8322 27.0971 15.6983 27.604 15.6983 28.2356C15.6983 28.7438 15.8454 29.1964 16.1402 29.5894C16.3419 29.8583 16.5704 30.0772 16.8258 30.245H15.953H15.853V30.345V31.7794V31.8794H15.953H23.4062Z" />
                  </svg>
                </div>
                Zamonaviy mualliflik landshafti
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;