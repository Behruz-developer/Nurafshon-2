/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/joylashgan.jpg";

const Location = () => {
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">

          <div className="location_card1" data-aos="fade-right" data-aos-offset="-200">
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
              Majmua Urgut shahrining markazida quriladi va bu joy o‘zining baland tog‘lari va musaffo, toza havosi bilan ajralib turadi. Nurafshon majmuasi, tog‘larning qoyali manzaralari va havoning tozaligi bilan yashovchilarga alohida qulaylik va ilhom beradi.
            </p>
            <p className="location_text">
              Bu yerda yashash, shaharning jadal rivojlanishini va tabiatning go‘zalligini birgalikda his qilish imkoniyatini taqdim etadi.
            </p>
          </div>
          <div className="location_card_left" data-aos="fade-left" data-aos-offset="-200">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card2" data-aos="fade-right" data-aos-offset="-200">
            <p className="location_text2">
              <span>Nurafshon</span> - Shahar markazidagi qulayliklar va tabiiy go‘zallik birgalikda sizga yorqin va farovon hayot tarzini taqdim etadi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
