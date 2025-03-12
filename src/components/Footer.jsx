import React from "react";
import { NavLink } from "react-router-dom";
import playStore from "../assets/images/playStore.svg";
import instagramIcon from "../assets/images/instagramIcon.svg";
import telegramIcon from "../assets/images/telegramIcon.svg";
import facebookIcon from "../assets/images/facebookIcon.svg";
import youtubeIcon from "../assets/images/youtubeIcon.svg";

function Footer() {
  return (
    <>
      <footer>
        <div className="max-w-7xl w-full mx-auto px-5 mt-14">
          <div className="grid grid-cols-4 mb-14">
            <div className="flex flex-col gap-y-4">
              <strong className="text-sm font-medium">Biz haqimizda</strong>
              <NavLink
                to={"/about/delivery-points"}
                className={"text-xs font-normal text-[#8b8e99]"}
              >
                Topshirish punktlari
              </NavLink>
              <NavLink
                to={"/about/careers"}
                className={"text-xs font-normal text-[#8b8e99]"}
              >
                Vakansiyalar
              </NavLink>
            </div>
            <div className="flex flex-col gap-y-4">
              <strong className="text-sm font-medium">
                Foydalanuvchilarga
              </strong>
              <NavLink
                to={"#contacts"}
                className={"text-xs font-normal text-[#8b8e99]"}
              >
                Biz bilan bog'lanish
              </NavLink>
              <NavLink
                to={"/faq"}
                className={"text-xs font-normal text-[#8b8e99]"}
              >
                Savol-Javob
              </NavLink>
            </div>
            <div className="flex flex-col gap-y-4">
              <strong className="text-sm font-medium">Tadbirkorlarga</strong>
              <NavLink
                to={"/seller"}
                className={"text-xs font-normal text-[#8b8e99]"}
              >
                Uzumda soting
              </NavLink>
              <NavLink
                to={"/seller/signin"}
                className={"text-xs font-normal text-[#8b8e99]"}
              >
                Sotuvchi kabineti kirish
              </NavLink>
              <NavLink
                to={"/promo/pvz"}
                className={"text-xs font-normal text-[#8b8e99]"}
              >
                Topshirish punktini ochish
              </NavLink>
            </div>
            <div>
              <strong>Ilovani yuklab olish</strong>
              <div className="flex items-center gap-x-6 mt-4 mb-12">
                <a
                  href="https://apps.apple.com/ru/app/uzum-market-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056"
                  target="_blank"
                  className="flex items-center gap-x-2"
                >
                  <svg
                    data-v-326dbf2b=""
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.1475 0.75C16.2469 2.01122 15.8492 3.27244 15.0438 4.24338C14.2583 5.22433 13.0751 5.78488 11.8223 5.77487C11.7427 4.54367 12.1504 3.3325 12.9558 2.41161C13.7711 1.4707 14.9146 0.880126 16.1475 0.75ZM20.1292 8.17598C18.6806 9.06488 17.7915 10.623 17.7715 12.3208C17.7715 14.2385 18.9204 15.9663 20.6986 16.7154C20.3589 17.814 19.8495 18.8627 19.1801 19.8016C18.291 21.1399 17.352 22.4483 15.8635 22.4683C15.1551 22.4829 14.6784 22.2802 14.1823 22.0692C13.664 21.8488 13.1244 21.6193 12.277 21.6193C11.382 21.6193 10.8176 21.8551 10.2723 22.0828C9.80114 22.2796 9.34424 22.4705 8.70063 22.4982C7.28205 22.5582 6.20313 21.08 5.27406 19.7516C3.42592 17.045 1.98736 12.1311 3.91543 8.78523C4.82452 7.15725 6.51282 6.11854 8.38095 6.05861C9.18561 6.04161 9.95812 6.35239 10.6347 6.62457C11.1509 6.83223 11.6112 7.01742 11.9873 7.01742C12.3159 7.01742 12.7611 6.84099 13.2807 6.63506C14.1041 6.30877 15.1142 5.90844 16.1432 6.01866C17.7316 6.0686 19.2101 6.86761 20.1292 8.17598Z"
                      fill="black"
                    />
                  </svg>
                  <span className="text-[13px] font-medium">AppStore</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=uz.uzum.app"
                  target="_blank"
                  className="flex items-center gap-x-2"
                >
                  <img src={playStore} alt="" />
                  <span className="text-[13px] font-medium">Google Play</span>
                </a>
              </div>
              <strong className="text-sm font-medium">
                Uzum ijtimoiy tarmoqlarda
              </strong>
              <div className="flex items-center gap-x-3 mt-4">
                <a href="#" target="_blank">
                  <img src={instagramIcon} alt="" />
                </a>
                <a href="#" target="_blank">
                  <img src={telegramIcon} alt="" />
                </a>
                <a href="#" target="_blank">
                  <img src={facebookIcon} alt="" />
                </a>
                <a href="#" target="_blank">
                  <img src={youtubeIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="py-3.5 border-t border-t-gray-300 flex justify-between items-center">
            <div className="flex items-center gap-x-4">
              <NavLink
                to={"/privacy-policy-uz.html"}
                className={"text-sm font-semibold tracking-tighter"}
              >
                Maxfiylik kelishuvi
              </NavLink>
              <NavLink
                to={"/user-agreement-uz.html"}
                className={"text-sm font-semibold tracking-tighter"}
              >
                Foydalanuvchi kelishuvi
              </NavLink>
            </div>
            <div>
              <p className="text-[11px] font-normal text-[#7e818c] tracking-tight">
                «2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
                himoyalangan»
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
