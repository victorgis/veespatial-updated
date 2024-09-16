<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <!-- <img src="../assets/favicon.png" alt="" /> -->
           <h1>VS</h1>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/courses">Courses</router-link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.patreon.com/veespatial"
                target="_blank"
                >Patreon</a
              >
            </li>

            <li class="nav-item">
              <a class="nav-link" href="https://medium.com/@victorgis" target="_blank">Blog</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Find me on
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="https://www.codementor.io/@victorgis" target="_blank"
                    ><i class="bx bx-code-alt"></i>&nbsp;Code Mentor</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="https://www.joinveet.com/mentor/victor-essang" target="_blank"
                    ><i class="bx bxl-venmo"></i>&nbsp;Veet Mentorship</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="https://www.fiverr.com/victor_gis" target="_blank"
                    ><i class="fa fa-fonticons hicon" aria-hidden="true"></i
                    >&nbsp;Fiverr</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="https://www.upwork.com/freelancers/~012d233326cbb63858?mp_source=share" target="_blank"
                    ><i class="bx bxl-upwork"></i>&nbsp;Upwork</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="https://www.linkedin.com/in/victoressang/" target="_blank"
                    ><i class="bx bxl-linkedin"></i>&nbsp;Linkedin</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="https://twitter.com/victor_gis" target="_blank"
                    ><i class="bx bxl-twitter"></i>&nbsp;Twitter</a
                  >
                </li>
                
                <li>
                  <a class="dropdown-item" href="https://wa.link/ibdiqv" target="_blank"
                    ><i class="bx bxl-whatsapp"></i>&nbsp;WhatApp</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="https://t.me/victorgis" target="_blank"
                    ><i class="bx bxl-telegram"></i>&nbsp;Telegram</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="mailto:essangvictor@gmail.com" target="_blank"
                    ><i class="bx bx-envelope"></i>&nbsp;Email</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="tel:+2349077421323" target="_blank"
                    ><i class="bx bx-phone"></i>&nbsp;Phone</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/resume"
                ><div class="vee-btn">My Resume</div></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "VeespatialUpdatedHeader",
};
</script>

<style scoped>
.navbar-toggler {
  border: none;
}
.navbar-collapse {
  flex-basis: 100%;
  flex-grow: 0;
  align-items: center;
}
.navbar-nav {
  align-items: center;
}
.bg-dark {
  background-color: #000 !important;
  color: #f2e9e4 !important;
}
.nav-link {
  color: #f2e9e4 !important;
}
.dropdown-item:hover {
  background: #c9ada7;
}
@media (max-width: 991.98px) {
  .navbar-collapse {
    position: fixed;
    top: 56px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow-y: auto;
    display: none;
    background-color: #343a40;
    width: 100%;
  }

  .navbar-collapse.show {
    display: block;
  }
}
</style>
