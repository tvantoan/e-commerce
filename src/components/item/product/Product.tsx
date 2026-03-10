"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Left from "./Left";
import Right from "./Right";
import Description from "./Description";
import Item from "@/types/Item";
import axios from "axios";
import Comment from "@/types/Comment";
import User from "@/types/User";
import { useParams } from "next/navigation";
export default function Product({ product }: { product: Item }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(1);
  const { item } = useParams;
  const handleSubmit = async () => {
    if (!content.trim()) return;

    try {
      setLoading(true);
      console.log(1, userId, content);

      await axios.post("http://localhost:5000/comments", {
        product_id: 1,
        user_id: userId,
        content,
      });

      setContent("");
      setOpen(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="block-detail-product">
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="animate-fadeIn relative w-[420px] rounded-2xl bg-white p-6 shadow-2xl">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Viết bình luận với ID</h2>
              <input
                className="max-w-4 text-sm text-gray-500"
                value={userId}
                onChange={(e) => setUserId(Number(e.target.value))}
              />
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black"
              >
                ✕
              </button>
            </div>

            {/* Textarea */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Chia sẻ cảm nhận của bạn..."
              className="h-28 w-full resize-none rounded-xl border p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Actions */}
            <div className="mt-4 flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="rounded-xl border px-4 py-2 hover:bg-gray-100"
              >
                Huỷ
              </button>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? "Đang gửi..." : "Gửi bình luận"}
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="box-detail-product columns m-0">
        <Left product={product} />
        <Right />
      </div>{" "}
      <div>
        <div
          data-v-7496f6e0=""
          id="block-same-product"
          className="block-same-product"
        >
          <div data-v-7496f6e0="" className="same-product-head">
            <h2 data-v-7496f6e0="" className="same-product-title mt-2">
              Có thể bạn cũng thích
            </h2>
          </div>{" "}
          <div
            data-v-7496f6e0=""
            className="same-product-options-list is-flex is-justify-content-space-between"
          >
            <div
              data-v-7496f6e0=""
              className="product-options-tabs"
              style={{ display: "none" }}
            >
              <div data-v-7496f6e0="" className="item button__tab active">
                <p data-v-7496f6e0="">Sản phẩm tương tự</p>
              </div>
            </div>
          </div>{" "}
          <div data-v-7496f6e0="" className="product-list-swiper">
            <div className="swiper-container swiper-container-initialized swiper-container-horizontal p-2">
              <div
                className="swiper-wrapper"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                <div
                  className="swiper-slide swiper-slide-active"
                  style={{ width: "228.8px", marginRight: "10px" }}
                >
                  <div className="product-info-container" is-compare="true">
                    <div className="product-info">
                      <Link
                        rel=""
                        href="https://cellphones.com.vn/robot-hut-bui-roborock-q-revo-edge-5v1.html"
                        className="product__link button__link"
                      >
                        <div className="product__image">
                          <Image
                            src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/r/o/roborock-q-revo-edge-5v1.png"
                            width={358}
                            height={358}
                            alt="Robot hút bụi lau nhà Roborock Q Revo EDGE 5V1"
                            className="product__img"
                          />
                        </div>{" "}
                        <div className="product__name">
                          <h3>{product.name}</h3>
                        </div>{" "}
                        <div className="block-box-price">
                          <div
                            className="box-info__installment"
                            style={{ display: "none" }}
                          >
                            Trả góp 0%
                          </div>{" "}
                          <span
                            className="title-price"
                            style={{ display: "none" }}
                          >
                            :
                          </span>{" "}
                          <div className="box-info__box-price">
                            <p className="product__price--show">
                              {product.salePrice}đ
                            </p>{" "}
                            <p className="product__price--through">
                              {product.basePrice}đ
                            </p>{" "}
                            <div className="product__price--percent">
                              <p className="product__price--percent-detail">
                                Giảm&nbsp;<span>16%</span>
                              </p>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="product__promotions">
                          <div></div>
                        </div>{" "}
                        <div
                          className="product__promotions"
                          style={{ display: "none" }}
                        >
                          <div className="promotion">
                            <p className="gift-cont"></p>
                          </div>
                        </div>
                      </Link>{" "}
                      <div
                        className="product__sticker-doc-quyen"
                        style={{ display: "none" }}
                        data-src="https://cdn2.cellphones.com.vn/70x/media/sticker/sticker-doc-quyen-3.svg"
                      ></div>
                    </div>{" "}
                    <div className="bottom-div">
                      <div></div>{" "}
                      <div className="btn-wish-list">
                        <button id="wishListBtn">
                          <div className="btn__effect button__add-wishlist inactive">
                            <svg
                              viewBox="20 18 29 28"
                              aria-
                              focusable="false"
                              className="heart-border icon-svg icon-svg--color-cps"
                            >
                              <path d="M28.3 21.1a4.3 4.3 0 0 1 4.1 2.6 2.5 2.5 0 0 0 2.3 1.7c1 0 1.7-.6 2.2-1.7a3.7 3.7 0 0 1 3.7-2.6c2.7 0 5.2 2.7 5.3 5.8.2 4-5.4 11.2-9.3 15a2.8 2.8 0 0 1-2 1 3.4 3.4 0 0 1-2.2-1c-9.6-10-9.4-13.2-9.3-15 0-1 .6-5.8 5.2-5.8m0-3c-5.3 0-7.9 4.3-8.2 8.5-.2 3.2.4 7.2 10.2 17.4a6.3 6.3 0 0 0 4.3 1.9 5.7 5.7 0 0 0 4.1-1.9c1.1-1 10.6-10.7 10.3-17.3-.2-4.6-4-8.6-8.4-8.6a7.6 7.6 0 0 0-6 2.7 8.1 8.1 0 0 0-6.2-2.7z"></path>
                            </svg>{" "}
                            <svg
                              viewBox="0 0 19.2 18.5"
                              aria-
                              focusable="false"
                              className="heart-stroke icon-svg icon-svg--color-silver"
                            >
                              <path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path>
                            </svg>{" "}
                            <svg
                              viewBox="0 0 19.2 18.5"
                              aria-
                              focusable="false"
                              className="heart-full icon-svg icon-svg--color-cps"
                            >
                              <path d="M9.66 18.48a4.23 4.23 0 0 1-2.89-1.22C.29 10.44-.12 7.79.02 5.67.21 2.87 1.95.03 5.42.01c1.61-.07 3.16.57 4.25 1.76A5.07 5.07 0 0 1 13.6 0c2.88 0 5.43 2.66 5.59 5.74.2 4.37-6.09 10.79-6.8 11.5-.71.77-1.7 1.21-2.74 1.23z"></path>
                            </svg>{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="5.707 17 48 20"
                              className="broken-heart"
                            >
                              <g fill="#3b82f6">
                                <path
                                  d="M29.865 32.735V18.703a4.562 4.562 0 0 0-3.567-1.476c-2.916.017-4.378 2.403-4.538 4.756-.118 1.781.227 4.006 5.672 9.737a3.544 3.544 0 0 0 2.428 1.025l-.008-.008.013-.002z"
                                  className="broken-heart--left"
                                ></path>{" "}
                                <path
                                  d="M37.868 22.045c-.135-2.588-2.277-4.823-4.697-4.823a4.258 4.258 0 0 0-3.302 1.487l-.004-.003v14.035a3.215 3.215 0 0 0 2.289-1.033c.598-.596 5.882-5.99 5.714-9.663z"
                                  className="broken-heart--right"
                                ></path>
                              </g>{" "}
                              <path
                                fill="none"
                                stroke="#FFF"
                                strokeMiterlimit={10}
                                d="M29.865 18.205v14.573"
                                className="broken-heart--crack"
                              ></path>
                            </svg>{" "}
                            <span className="effect-group">
                              <span className="effect"></span>{" "}
                              <span className="effect"></span>{" "}
                              <span className="effect"></span>{" "}
                              <span className="effect"></span>{" "}
                              <span className="effect"></span>
                            </span>
                          </div>{" "}
                          <span className="text-wishlist">&nbsp;Yêu thích</span>
                        </button>
                      </div>
                    </div>{" "}
                    <div className="install-0-tag">
                      <span>
                        Trả góp <strong>0%</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-button-prev button__view-product-prev swiper-button-disabled"
                tabIndex={-1}
                role="button"
                aria-label="Previous slide"
                aria-
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width={19}
                    height={19}
                    transform="translate(0.5 0.5)"
                    fill="white"
                  ></rect>{" "}
                  <path
                    d="M12.375 5.25L7.625 10L12.375 14.75"
                    stroke="#18181B"
                    strokeWidth="1.58333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div
                className="swiper-button-next button__view-product-next"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
                aria-
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width={19}
                    height={19}
                    transform="translate(0.5 0.5)"
                    fill="white"
                  ></rect>{" "}
                  <path
                    d="M7.625 5.25L12.375 10L7.625 14.75"
                    stroke="#18181B"
                    strokeWidth="1.58333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              ></span>
            </div>
          </div>
        </div>
      </div>{" "}
      <Description />
      <div className="boxReview">
        <div className="boxReview-head is-flex is-justify-content-space-between is-align-items-center">
          <h2 className="title">
            Đánh giá Robot hút bụi lau nhà Ecovacs Deebot T50 Pro Gen 2
          </h2>
        </div>{" "}
        <div id="review">
          <div className="box-review-filter">
            <div className="title">Lọc đánh giá theo</div>{" "}
            <div className="filter-container">
              <div className="filter-item active">Tất cả</div>{" "}
              <div className="filter-item">Có hình ảnh</div>{" "}
              <div className="filter-item">Đã mua hàng</div>{" "}
              <div className="filter-item star">
                <p>5 sao</p>
              </div>
              <div className="filter-item star">
                <p>4 sao</p>
              </div>
              <div className="filter-item star">
                <p>3 sao</p>
              </div>
              <div className="filter-item star">
                <p>2 sao</p>
              </div>
              <div className="filter-item star">
                <p>1 sao</p>
              </div>
            </div>
          </div>{" "}
          <div className="boxReview-no-comment is-flex is-justify-content-center is-flex-direction-column is-align-items-center my-6">
            <Image
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:150:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/Review-empty.png"
              height={150}
              width={150}
              alt="Hiện chưa có đánh giá nào.Bạn sẽ là người đầu tiên đánh giá sản phẩm này chứ?"
              className="product__img"
            />{" "}
            <p>
              Hiện chưa có đánh giá nào. <br />
              Bạn sẽ là người đầu tiên đánh giá sản phẩm này chứ?
            </p>{" "}
            {/* <div className="button__review">Đánh giá ngay</div> */}
            <button className="button__review" onClick={() => setOpen(true)}>
              Đánh giá ngay
            </button>
          </div>
        </div>{" "}
        <div className="modal modal-review">
          <div className="modal-background"></div>{" "}
          <div className="modal-content">
            <div className="review-container">
              <div className="content__close-btn modal__button"></div>{" "}
              <div className="content__close-btn-desk modal__button">
                <div className="close-icon">
                  <svg
                    height={15}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"></path>
                  </svg>
                </div>
              </div>{" "}
              <div className="title is-6 mb-0 px-4">
                Đánh giá &amp; nhận xét
              </div>{" "}
              <div className="modal-review-title is-flex is-align-items-center px-4">
                <Image
                  alt=""
                  src="https://cdn2.cellphones.com.vn/insecure/rs:fill:100:100/q:90/plain/https://cellphones.com.vn/media/wysiwyg/cps-ant.png"
                  width={100}
                  height={100}
                />{" "}
                <p className="title-logged">
                  {" "}
                  Robot hút bụi lau nhà Ecovacs Deebot T50 Pro Gen 2
                </p>
              </div>{" "}
              <form className="modal-review-content p-4">
                <div className="title-review-star-items">Đánh giá chung</div>{" "}
                <div className="modal-review-star is-flex is-justify-content-space-between my-3">
                  <div className="star-all is-flex is-justify-content-space-evenly">
                    <div className="modal__button has-text-centered">
                      <div
                        className="icon is-active"
                        style={{ cursor: "pointer" }}
                      >
                        <svg
                          height={15}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                        </svg>
                      </div>{" "}
                      <p>Rất Tệ</p>
                    </div>
                    <div className="modal__button has-text-centered">
                      <div
                        className="icon is-active"
                        style={{ cursor: "pointer" }}
                      >
                        <svg
                          height={15}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                        </svg>
                      </div>{" "}
                      <p>Tệ</p>
                    </div>
                    <div className="modal__button has-text-centered">
                      <div
                        className="icon is-active"
                        style={{ cursor: "pointer" }}
                      >
                        <svg
                          height={15}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                        </svg>
                      </div>{" "}
                      <p>Bình thường</p>
                    </div>
                    <div className="modal__button has-text-centered">
                      <div
                        className="icon is-active"
                        style={{ cursor: "pointer" }}
                      >
                        <svg
                          height={15}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                        </svg>
                      </div>{" "}
                      <p>Tốt</p>
                    </div>
                    <div className="modal__button has-text-centered">
                      <div
                        className="icon is-active"
                        style={{ cursor: "pointer" }}
                      >
                        <svg
                          height={15}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                        </svg>
                      </div>{" "}
                      <p>Tuyệt vời</p>
                    </div>
                  </div>
                </div>{" "}
                <textarea
                  placeholder="Xin mời chia sẻ một số cảm nhận về sản phẩm (nhập tối thiểu 15 kí tự)"
                  className="textarea"
                ></textarea>{" "}
                <div className="group-input is-flex">
                  <input
                    id="image"
                    accept="image/x-png,image/gif,image/jpeg"
                    type="file"
                    className="is-hidden modal__button"
                  />{" "}
                  <label
                    htmlFor="image"
                    className="btn-add modal__button is-flex is-flex-direction-column is-align-items-center my-2"
                  >
                    <div className="input-icon">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 8C3 8.55 3.45 9 4 9C4.55 9 5 8.55 5 8V6H7C7.55 6 8 5.55 8 5C8 4.45 7.55 4 7 4H5V2C5 1.45 4.55 1 4 1C3.45 1 3 1.45 3 2V4H1C0.45 4 0 4.45 0 5C0 5.55 0.45 6 1 6H3V8Z"
                          fill="#637381"
                        ></path>
                        <circle cx={13} cy={14} r={3} fill="#637381"></circle>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.83 6H21C22.1 6 23 6.9 23 8V20C23 21.1 22.1 22 21 22H5C3.9 22 3 21.1 3 20V9.72C3.3 9.89 3.63 10 4 10C5.1 10 6 9.1 6 8V7H7C8.1 7 9 6.1 9 5C9 4.63 8.89 4.3 8.72 4H15.12C15.68 4 16.22 4.24 16.59 4.65L17.83 6ZM8 14C8 16.76 10.24 19 13 19C15.76 19 18 16.76 18 14C18 11.24 15.76 9 13 9C10.24 9 8 11.24 8 14Z"
                          fill="#637381"
                        ></path>
                      </svg>
                    </div>
                    Thêm hình ảnh
                  </label>
                </div>{" "}
                <div className="clear__review"></div>{" "}
                <div className="button-container">
                  <button
                    type="submit"
                    className="button modal__button has-text-white"
                  >
                    GỬI ĐÁNH GIÁ
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        id="block-comment-cps"
        product-id={121080}
        className="comment-container"
        data-v-0da19d40=""
      >
        <div className="comment-form" data-v-0da19d40="">
          <p
            id="total_comment"
            className="comment-form-title"
            data-v-0da19d40=""
          >
            {" "}
            Hỏi và đáp
          </p>{" "}
          <div className="comment-form-content" data-v-0da19d40="">
            <Image
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:160:0/q:90/plain/https://cellphones.com.vn/media/wysiwyg/ant-hello-2025.png"
              width={160}
              height={160}
              alt="cps ant icon"
              className="cps-ant-cmt"
              data-v-0da19d40=""
            />{" "}
            <div className="question" data-v-41878334="" data-v-0da19d40="">
              <div className="is-flex is-align-items-center" data-v-41878334="">
                <p className="question-title" data-v-41878334="">
                  Hãy đặt câu hỏi cho chúng tôi
                </p>
              </div>{" "}
              <p className="question-content" data-v-41878334="">
                CellphoneS sẽ phản hồi trong vòng 1 giờ. Nếu Quý khách gửi câu
                hỏi sau 22h, chúng tôi sẽ trả lời vào sáng hôm sau.
                <br />
                Thông tin có thể thay đổi theo thời gian, vui lòng đặt câu hỏi
                để nhận được cập nhật mới nhất!
              </p>{" "}
              <div className="textarea-wrapper" data-v-41878334="">
                <div className="textarea-comment">
                  <textarea
                    id=""
                    placeholder="Viết câu hỏi của bạn tại đây"
                    className="textarea"
                  ></textarea>{" "}
                  <button className="button button__cmt-send">
                    Gửi câu hỏi
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon-paper-plane"
                    >
                      <path
                        d="M10 14L21 3"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M21.0001 3L14.5001 21C14.4562 21.0957 14.3858 21.1769 14.2971 21.2338C14.2085 21.2906 14.1054 21.3209 14.0001 21.3209C13.8948 21.3209 13.7917 21.2906 13.703 21.2338C13.6144 21.1769 13.5439 21.0957 13.5001 21L10.0001 14L3.00007 10.5C2.90433 10.4561 2.8232 10.3857 2.76632 10.2971C2.70944 10.2084 2.6792 10.1053 2.6792 10C2.6792 9.89468 2.70944 9.79158 2.76632 9.70295C2.8232 9.61431 2.90433 9.54387 3.00007 9.5L21.0001 3Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div data-v-0da19d40="" className="block-comment__box-list-comment">
          <p style={{ opacity: "0", height: "0px" }}>
            CellphoneS sẽ trả lời trong 1 giờ (sau 22h, phản hồi vào sáng hôm
            sau). Một số thông tin có thể thay đổi, Quý khách hãy đặt câu hỏi để
            được cập nhật mới nhất.
          </p>{" "}
          <div id="page_comment_list" className="list-comment">
            {product.comments.map((comment: Comment, index) => {
              const user: User = comment.user;

              return (
                <div key={index} className="item-comment">
                  <div className="item-comment__box-cmt">
                    <div className="box-cmt__box-info">
                      <div className="box-info">
                        <div className="box-info__avatar">
                          <span>T</span>
                        </div>{" "}
                        <p className="box-info__name">
                          {" "}
                          {comment.rating_score} ----- {user.name}
                        </p>
                      </div>{" "}
                      <div className="box-time-cmt">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path
                              id="clock"
                              d="M7.72,8.78,5.25,6.31V3h1.5v2.69L8.78,7.72ZM6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM6,10.5A4.5,4.5,0,1,1,10.5,6,4.5,4.5,0,0,1,6,10.5Z"
                              fill="#707070"
                            ></path>
                          </svg>
                        </div>
                        &nbsp;{comment.date}
                      </div>
                    </div>{" "}
                    <div className="box-cmt__box-question">
                      <div className="content">
                        <p>{comment.content}</p>
                      </div>{" "}
                      <button className="btn-rep-cmt respondent button__cmt-rep">
                        <div>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.3335 6H10.6668"
                              stroke="#D70018"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M5.3335 8.6665H9.3335"
                              stroke="#D70018"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M6 11.9998H4C3.46957 11.9998 2.96086 11.7891 2.58579 11.4141C2.21071 11.039 2 10.5303 2 9.99984V4.6665C2 4.13607 2.21071 3.62736 2.58579 3.25229C2.96086 2.87722 3.46957 2.6665 4 2.6665H12C12.5304 2.6665 13.0391 2.87722 13.4142 3.25229C13.7893 3.62736 14 4.13607 14 4.6665V9.99984C14 10.5303 13.7893 11.039 13.4142 11.4141C13.0391 11.7891 12.5304 11.9998 12 11.9998H10L8 13.9998L6 11.9998Z"
                              stroke="#D70018"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                        &nbsp;Phản hồi
                      </button>{" "}
                      <div className="fieldset-bottom">
                        <div className="btn-toggle-list-comment">
                          Thu gọn phản hồi
                          <div>
                            <svg
                              height={15}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
