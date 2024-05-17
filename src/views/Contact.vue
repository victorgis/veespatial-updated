<template>
  <div class="parent">
    <Header />
    <div class="main">
      <section id="contact" class="contact">
        <div class="container position-relative" data-aos="fade-up">
          <div class="section-header">
            <h2><b>Contact</b></h2>
          </div>

          <div class="row gy-4 d-flex justify-content-end">
            <div class="col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <div class="info-item d-flex">
                <i class="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p>lat 5.0343, long 7.9287</p>
                </div>
              </div>
              <!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>essangvictor@gmail.com</p>
                </div>
              </div>
              <!-- End Info Item -->

              <div class="info-item d-flex">
                <i class="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+2349077421323</p>
                </div>
              </div>
              <!-- End Info Item -->
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="250">
              <form name="contact" method="POST" class="php-email-form" netlify>
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button class="vee-btn" type="submit">Send Message</button>
                </div>
              </form>
            </div>
            <!-- End Contact Form -->
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "VeespatialUpdatedHome",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
/*--------------------------------------------------------------
# Contact Section
--------------------------------------------------------------*/
.contact {
  color: #22223b;
  padding: 40px;
  /* background: url("../assets/img/contact-bg.png") left top no-repeat; */
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url("../assets/img/contact-bg.png") center center;
  background-size: contain;
  position: relative;
}
.section-header {
  margin-bottom: 40px;
}
.section-header h4,
.section-header p {
  color: #22223b;
}
@media (max-width: 640px) {
  .contact {
    background-position: center 50px;
  }
}

.contact:before {
  content: "";
  background: rgba(255, 255, 255, 0.7);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

.contact .info-item + .info-item {
  margin-top: 40px;
}

.contact .info-item i {
  font-size: 20px;
  background: var(--color-primary);
  color: #fff;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  margin-right: 15px;
}

.contact .info-item h4 {
  padding: 0;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
}

.contact .info-item p {
  padding: 0;
  margin-bottom: 0;
  font-size: 14px;
}

.contact .php-email-form {
  width: 100%;
}

.contact .php-email-form .form-group {
  padding-bottom: 8px;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #df1529;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #059652;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #059652;
  border-top-color: #fff;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  padding: 12px 15px;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: var(--color-primary);
}

.contact .php-email-form textarea {
  padding: 10px 12px;
}

/* .contact .php-email-form button[type="submit"] {
  background: #1f98d1;
  border: 0;
  padding: 12px 40px;
  color: #fff;
  transition: 0.4s;
} */

/* .contact .php-email-form button[type="submit"]:hover {
  background: var(--color-primary);
} */

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 991.98px) {
  .d-flex {
    display: block;
  }
}
</style>
