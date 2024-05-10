<template>
  <footer id="footer" class="footer">
    <div class="footer-content">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <div class="d-flex align-items-left">
              <h2>Victor Essang</h2>
              <br />
            </div>

            <!-- <br /> -->
            <p><span style="color: #56b8e6">(Vee</span>spatial)</p>
            <p>
              I'm a Software Engineer and a GIS Expert (8+ years of experience),
              with a passion for revolutionizing industries through innovative
              software solutions & geospatial solutions.
            </p>
            <div class="social-links d-flex mt-3">
              <a href="https://twitter.com/victor_gis" class="twitter"
                ><i class="fa-brands fa-x-twitter"></i
              ></a>
              <a
                href="https://www.linkedin.com/in/victoressang"
                class="linkedin"
                ><i class="fa-brands fa-linkedin-in"></i
              ></a>
              <a
                href="https://www.behance.net/gallery/134518485/GIS-Portfolio"
                class="behance"
                ><i class="fa-brands fa-behance"></i
              ></a>
              <a href="https://medium.com/@victorgis" class="medium"
                ><i class="fa-brands fa-medium"></i
              ></a>
              <a href="https://github.com/victorgis" class="github"
                ><i class="fa-brands fa-github"></i
              ></a>
              <a href="https://patreon.com/veespatial" class="patreon"
                ><i class="fa-brands fa-patreon"></i
              ></a>
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="fa-solid fa-minus"></i> <a href="/">Home</a></li>
              <li>
                <i class="fa-solid fa-minus"></i>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <i class="fa-solid fa-minus"></i>
                <a href="/about">About Me</a>
              </li>
              <li>
                <i class="fa-solid fa-minus"></i>
                <a href="/resume">My Resume</a>
              </li>
              <li>
                <i class="fa-solid fa-minus"></i>
                <a href="/contact">Contact Me</a>
              </li>
            </ul>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>What I can do for you</h4>
            <ul>
              <li><i class="fa-solid fa-minus"></i> Frontend Development</li>
              <li><i class="fa-solid fa-minus"></i> Product Management</li>
              <li><i class="fa-solid fa-minus"></i> Software Engineering</li>
              <li><i class="fa-solid fa-minus"></i> GIS Map Design</li>
              <li><i class="fa-solid fa-minus"></i> Training</li>
              <li><i class="fa-solid fa-minus"></i> Monitoring & Evaluation</li>
            </ul>
          </div>

          <div
            class="col-lg-3 col-md-12 footer-contact text-center text-md-start"
          >
            <h4>Contact Me</h4>
            <p>
              lat 5.0343, long 7.9287 <br />
              <strong>Email:</strong> essangvictor@gmail.com<br />
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-legal">
      <div class="container">
        <div class="copyright">
          &copy; <strong><span>Victor Essang</span></strong
          >. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nova-bootstrap-business-template/ -->
          <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "VeespatialUpdatedFooter",
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
footer {
  background-color: #000;
  color: #f2e9e4;
  padding: 2rem 0;
}

h3 {
  color: #f2e9e4;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5rem;
}

ul li a {
  color: #f2e9e4;
  text-decoration: none;
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
.footer {
  font-size: 14px;
}

.footer .footer-content {
  /* background-color: #f7f9fc; */
  background-size: contain;
  padding: 60px 0 30px 0;
}

.footer .footer-content .footer-info {
  margin-bottom: 30px;
}

.footer .footer-content .footer-info .logo {
  line-height: 0;
  margin-bottom: 25px;
}

.footer .footer-content .footer-info .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.footer .footer-content .footer-info .logo span {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #f2e9e4;
  font-family: var(--font-secondary);
  margin-top: 3px;
}

.footer .footer-content .footer-info p {
  font-size: 15px;
  margin-bottom: 0;
  font-family: var(--font-primary);
  color: #f2e9e4;
  text-align: left;
}

.footer .footer-content .social-links a {
  font-size: 14px;
  line-height: 0;
  display: inline-block;
  width: 32px;
  height: 32px;
  color: rgba(27, 47, 69, 0.5);
  margin-right: 10px;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2e9e4;
  border-radius: 50px;
}

.footer .footer-content .social-links a:hover {
  background-color: #9a8c98;
}

.footer .footer-content h4 {
  font-size: 16px;
  font-weight: bold;
  color: #f2e9e4;
  position: relative;
  padding-bottom: 12px;
  text-align: left;
}

.footer .footer-content .footer-links {
  margin-bottom: 30px;
}

.footer .footer-content .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer .footer-content .footer-links ul i {
  margin-right: 2px;
  color: #f2e9e4;
  font-size: 16px;
  line-height: 0;
}

.footer .footer-content .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.footer .footer-content .footer-links ul li:first-child {
  padding-top: 0;
}

.footer .footer-content .footer-links ul a {
  color: #f2e9e4;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

.footer .footer-content .footer-links ul a:hover {
  color: #f2e9e4;
}

.footer .footer-content .footer-contact p {
  line-height: 26px;
  color: #f2e9e4;
  text-align: left;
}

.footer .footer-legal {
  /* background: #fff; */
  padding: 30px 0;
}

.footer .footer-legal .copyright {
  text-align: center;
  color: #f2e9e4;
}

.footer .footer-legal .credits {
  padding-top: 4px;
  text-align: center;
  font-size: 13px;
  color: #f2e9e4;
}

a {
  text-decoration: none;
  /* color: #fff; */
}
a:hover {
  text-decoration: underline #c9ada7;
  /* background-color: red; */
}
</style>
