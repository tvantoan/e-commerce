"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/item/Header";
import BreadCrumb from "@/components/item/BreadCrumb";
import Product from "@/components/item/product/Product";
import Footer from "@/components/item/Footer";
import Unknown from "@/components/item/Unknown";
import "@/styles/detail.css";
import FloatingBanner from "@/components/item/FloatingBanner";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
export default function Detail() {
  const [product, setProduct] = React.useState(null);

  console.log(product);
  const { item } = useParams();
  console.log(item);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${item}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [item]);
  return (
    product && (
      <div id="layout-desktop" className="cps-page">
        <div id="cpsHeaderOutLine" data-fetch-key="Header:0">
          <Header />
          <div
            id="clearHeader"
            className="clear"
            style={{ paddingTop: "0px" }}
          ></div>{" "}
          <div id="menuOverlay" className="header-overlay"></div>{" "}
          <div id="modalLogin" className="modal">
            <div className="modal-background"></div>{" "}
            <div className="modal-content modal-login">
              <div className="title is-flex is-justify-content-center is-align-items-center">
                <span> Smember</span>{" "}
                <Image
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:80/q:90/plain/https://cellphones.com.vn/media/wysiwyg/chibi2.png"
                  width={46}
                  height={80}
                  alt="cps-smember-icon"
                />
              </div>{" "}
              <div className="text">
                <p>Vui lòng đăng nhập tài khoản Smember để .</p>
              </div>{" "}
              <div className="group-login-btn">
                <Link href="https://smember.com.vn/" className="register-btn">
                  Đăng ký
                </Link>{" "}
                <Link href="https://smember.com.vn/" className="login-btn">
                  Đăng nhập
                </Link>
              </div>{" "}
              <button
                aria-label="close"
                className="modal-close is-medium modal__button"
              ></button>
            </div>
          </div>{" "}
          <div className="modal-noti bannerTopHead" data-v-064d648a="">
            <div
              id="modalNotiOverlay"
              className="modal-overlay"
              style={{ display: "none" }}
              data-v-064d648a=""
            ></div>{" "}
            <div id="modalNotiMain" data-v-064d648a=""></div>
          </div>
        </div>{" "}
        <div
          id="subscriberEmail"
          style={{ display: "none" }}
          data-v-43446f1e=""
        >
          <div className="subscriber-popup box-banner" data-v-43446f1e="">
            <div className="subscriber-popup-body" data-v-43446f1e="">
              <button className="cancel-button-top" data-v-43446f1e="">
                <div className="icon" data-v-43446f1e="">
                  <svg
                    height={15}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"></path>
                  </svg>
                </div>
              </button>
            </div>{" "}
            <div className="subscriber-popup-header" data-v-43446f1e="">
              <div className="subscriber-header-image" data-v-43446f1e="">
                <Image
                  fill
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Voucher.gif"
                  alt="Pop up Email"
                  data-v-43446f1e=""
                />
              </div>
            </div>
          </div>{" "}
          <div
            id="subscriberEmailOverlay"
            className="header-overlay"
            data-v-43446f1e=""
          ></div>
        </div>{" "}
        <div className="cps-container cps-body">
          <div style={{ display: "none" }}>
            <div id="page_loader">
              <div className="logo"></div> <div className="loader"></div>
            </div>
          </div>{" "}
          <div>
            <div
              id="productDetailV2"
              data-fetch-key="product-detail:0"
              ins-init-condition="#LmNwcy1jb250YWluZXIgW2RhdGEtZmV0Y2gta2V5XTpmaXJzdA=="
            >
              <BreadCrumb />
              <Product product={product} />
              <div className="modal" data-v-ea24e476="">
                <div className="modal-background" data-v-ea24e476=""></div>{" "}
                <div className="modal-card" data-v-ea24e476="">
                  <header className="modal-card-head" data-v-ea24e476="">
                    <p className="modal-card-title" data-v-ea24e476="">
                      THÔNG BÁO
                    </p>{" "}
                    <button
                      aria-label="close"
                      className="delete"
                      data-v-ea24e476=""
                    ></button>
                  </header>{" "}
                  <section className="modal-card-body" data-v-ea24e476="">
                    <div
                      className="is-block has-text-centered"
                      data-v-ea24e476=""
                    >
                      <Image
                        alt=""
                        fill
                        src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/ant_sorry.gif"
                        className="cps-sorry m-auto"
                        data-v-ea24e476=""
                      />
                    </div>{" "}
                    <div className="container" data-v-ea24e476="">
                      <div className="noti-container" data-v-ea24e476=""></div>{" "}
                      <div
                        className="block-input is-flex is-justify-content-space-between is-flex-wrap-wrap"
                        data-v-ea24e476=""
                      >
                        <input
                          type="text"
                          placeholder="Tên công ty (bắt buộc)"
                          defaultValue=""
                          className="subscription-input"
                          data-v-ea24e476=""
                        />{" "}
                        <input
                          type="text"
                          placeholder="Tên quý khách (bắt buộc)"
                          defaultValue=""
                          className="subscription-input"
                          data-v-ea24e476=""
                        />{" "}
                        <input
                          id="inputPhone"
                          type="text"
                          placeholder="Số điện thoại (bắt buộc)"
                          maxLength={10}
                          defaultValue=""
                          className="subscription-input"
                          data-v-ea24e476=""
                        />{" "}
                        <input
                          id="inputEmail"
                          type="text"
                          placeholder="Địa chỉ email (bắt buộc)"
                          defaultValue=""
                          className="subscription-input"
                          data-v-ea24e476=""
                        />{" "}
                        <p
                          className="subscription-input__title"
                          data-v-ea24e476=""
                        >
                          Sản phẩm bạn quan tâm:
                        </p>{" "}
                        <div
                          className="full is-flex is-justify-content-space-between"
                          data-v-ea24e476=""
                        >
                          <input
                            type="text"
                            placeholder="Robot hút bụi lau nhà Ecovacs Deebot T50 PRro Gen 2-Đen"
                            className="subscription-input"
                            data-v-ea24e476=""
                          />{" "}
                          <div
                            className="add-more-product is-flex is-justify-content-space-between is-align-items-center"
                            data-v-ea24e476=""
                          >
                            Số lượng:
                            <input
                              type="number"
                              min={1}
                              placeholder="Số lượng"
                              value={0}
                              className="subscription-input"
                              data-v-ea24e476=""
                            />
                          </div>
                        </div>{" "}
                        <textarea
                          rows={3}
                          placeholder="Nhập ghi chú ..."
                          className="subscription-input full"
                          data-v-ea24e476=""
                        ></textarea>{" "}
                        <input
                          type="checkbox"
                          className="input-checkbox"
                          data-v-ea24e476=""
                        />{" "}
                        <p className="txt-checkbox" data-v-ea24e476="">
                          Nhận thông tin khuyến mãi
                        </p>
                      </div>
                    </div>
                  </section>{" "}
                  <footer className="modal-card-foot" data-v-ea24e476="">
                    <button className="button form__button" data-v-ea24e476="">
                      Đăng ký nhận tư vấn giá tốt nhất
                    </button>
                  </footer>
                </div>
              </div>{" "}
              <FloatingBanner />
              <div data-v-7f1765b3=""></div>{" "}
              <div className="modal-old-product-imei" data-v-5739f2d8="">
                <div data-v-5739f2d8=""></div>
              </div>{" "}
              <div data-v-53d9403c=""></div>
            </div>{" "}
            <div></div>
          </div>{" "}
          <div>
            <button
              id="backToTop"
              title="Back to top"
              className="btn-back-to-top button__back-to-top btn-floating"
            >
              <strong>Lên đầu</strong>{" "}
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 11L12.5 6L17.5 11"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M7.5 17L12.5 12L17.5 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>{" "}
            <div
              id="contact-floating"
              className="btn-contact-floating btn-floating show"
            >
              <strong>Liên hệ</strong>{" "}
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 14V11C4 8.87827 4.84285 6.84344 6.34315 5.34315C7.84344 3.84285 9.87827 3 12 3C14.1217 3 16.1566 3.84285 17.6569 5.34315C19.1571 6.84344 20 8.87827 20 11V14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M18 19C18 20.657 15.314 22 12 22"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M4 14C4 13.4696 4.21071 12.9609 4.58579 12.5858C4.96086 12.2107 5.46957 12 6 12H7C7.53043 12 8.03914 12.2107 8.41421 12.5858C8.78929 12.9609 9 13.4696 9 14V17C9 17.5304 8.78929 18.0391 8.41421 18.4142C8.03914 18.7893 7.53043 19 7 19H6C5.46957 19 4.96086 18.7893 4.58579 18.4142C4.21071 18.0391 4 17.5304 4 17V14Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
                <path
                  d="M15 14C15 13.4696 15.2107 12.9609 15.5858 12.5858C15.9609 12.2107 16.4696 12 17 12H18C18.5304 12 19.0391 12.2107 19.4142 12.5858C19.7893 12.9609 20 13.4696 20 14V17C20 17.5304 19.7893 18.0391 19.4142 18.4142C19.0391 18.7893 18.5304 19 18 19H17C16.4696 19 15.9609 18.7893 15.5858 18.4142C15.2107 18.0391 15 17.5304 15 17V14Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>{" "}
          <div data-v-6d614cb8=""></div> <canvas id="confetti"></canvas>
        </div>{" "}
        <div></div> <div></div> <div></div> <Footer />
        <Unknown />
        <div id="modal-root"></div> <div id="tooltip-root"></div>
      </div>
    )
  );
}
