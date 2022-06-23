<!DOCTYPE html>

  <html lang="en">

    <head>
      
        <meta charset="utf-8">
        <title>Services | HappySmile</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description">
        <meta content="Coderthemes" name="author">
        <!-- App favicon -->
        <link rel="shortcut icon" href="<?php echo base_url('frontend/assets')?>/images/HappySmile.ico">

        <!-- App css -->
        <link href="<?php echo base_url('frontend/assets')?>/css/icons.min.css" rel="stylesheet" type="text/css">
        <link href="<?php echo base_url('frontend/assets')?>/css/app.min.css" rel="stylesheet" type="text/css" id="light-style">
        <link href="<?php echo base_url('frontend/assets')?>/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style">        

    </head>

    <body class="loading" data-layout-config='{"darkMode":false}'>

        <!-- NAVBAR START -->
        <nav class="navbar navbar-expand-lg py-lg-3 navbar-dark">
            <div class="container">

                <!-- logo -->
                <a href="index.php" class="navbar-brand me-lg-5">
                    <img src="<?php echo base_url('frontend/assets')?>/images/logo-dark.png" alt="" class="logo-dark" height="50">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="mdi mdi-menu"></i>
                </button>

                <!-- menus -->
                <div class="collapse navbar-collapse" id="navbarNavDropdown">

                    <!-- left menu -->
                    <ul class="navbar-nav me-auto align-items-center">
                      <li class="nav-item mx-lg-1">
                          <a class="nav-link " href="landing">Home</a>
                      </li>
                      <li class="nav-item mx-lg-1">
                          <a class="nav-link active" href="service">Service</a>
                      </li>
                      <li class="nav-item mx-lg-1">
                          <a class="nav-link" href="register">Register</a>
                      </li>
                  </ul>

                  <!-- right menu -->
                  <ul class="navbar-nav ms-auto align-items-center">
                      <li class="nav-item me-0">
                          <a href="frontend/application/views/access/login.php" target="_blank" class="nav-link d-lg-none">Log in</a>
                          <a href="frontend/application/views/access/login.php" target="_blank" class="btn btn-sm btn-light btn-rounded d-none d-lg-inline-flex">
                              <i class="mdi mdi-account-edit me-2"></i>Log in
                          </a>
                      </li>
                  </ul>

                </div>
            </div>
        </nav>
        <!-- NAVBAR END -->

        <!-- START HERO -->
        <section class="hero-section">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-5">
                        <div class="mt-md-4">
                            <h7 class="text-white fw-bold mb-4 mt-3 hero-title">
                                SERVICE <br><br>OFFERED
                            </h7>
                            <p></p>
                            
                        </div>
                    </div>
                    <div class="col-md-5 offset-md-2">
                        <div class="text-md-end mt-3 mt-md-0">
                            <img src="<?php echo base_url('frontend/assets')?>/images/tooth.png" alt="" class="img-fluid w-100">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- END HERO -->

        <!-- START SERVICES -->
        
        <!-- END SERVICES -->
         <!-- Prices -->
        <section class="py-5">
            <div class="row mt-sm-5 mt-3 mb-3">
                <div class="col-md-4">
                    <div class="card card-pricing">
                        <div class="card-body text-center">
                            <p class="card-pricing-plan-name fw-bold text-uppercase">Orthodontics</p>
                            <i class="card-pricing-icon dripicons-user text-primary"></i>
                            <ul class="card-pricing-features">
                               <tr>
                                <td width="70%">Mild Case -</td>
                                <td width="30%">PHP 135,000 per case</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Severe Case	-</td>
                                <td width="30%">PHP 200,000 per case                                 </td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Sapphire Braces -</td>
                                <td width="30%">PHP 250,000 per case</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Retainer (Invisible) -</td>
                                <td width="30%">PHP 40,000 U & L</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Complete Ortho Package -</td>
                                <td width="30%">PHP 4,500 complete set</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Brackets Removal/Debonding -</td>
                                <td width="30%">PHP 8,000</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Replacement of rubber elastics -</td>
                                <td width="30%">PHP 4,000</td><p></p>
                              </tr>
                            </ul>
                            <a href="login"><button class="btn btn-primary mt-4 mb-2 btn-rounded">Make Appointment</button></a>
                        </div>
                    </div> <!-- end Pricing_card -->
                </div> <!-- end col -->
                <div class="col-md-4">
                    <div class="card card-pricing">
                        <div class="card-body text-center">
                            <p class="card-pricing-plan-name fw-bold text-uppercase">Cosmetic Dentistry</p>
                            <i class="card-pricing-icon dripicons-store text-primary"></i>
                            <ul class="card-pricing-features">
                              <tr>
                                <td width="70%">All Porcelain Crown (Emax) -</td>
                                <td width="30%">PHP 31,000 per unit</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Porcelain Veneers (Emax) -</td>
                                <td width="30%">PHP 31,000 per unit</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Direct Composite Veneers -</td>
                                <td width="30%">PHP 13,500 per unit</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Prefabricated Veneers-</td>
                                <td width="30%">PHP 22,000 per unit</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Laser Bleaching/Whitening -</td>
                                <td width="30%">PHP 22,000</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Zirconia Crown or Bridge -</td>
                                <td width="30%">PHP 42,000 per unit</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Cosmetic Gum Surgery -</td>
                                <td width="30%">PHP 55,000</td><p></p>
                              </tr>
                            </ul>
                            <a href="login"><button class="btn btn-primary mt-4 mb-2 btn-rounded">Make Appointment</button></a>
                        </div>
                    </div> <!-- end Pricing_card -->
                </div> <!-- end col -->

                <div class="col-md-4">
                    <div class="card card-pricing">
                        <div class="card-body text-center">
                            <p class="card-pricing-plan-name fw-bold text-uppercase">Oral Surgery</p>
                            <i class="card-pricing-icon dripicons-store text-primary"></i>
                            <ul class="card-pricing-features">
                                <tr>
                                    <td width="70%">Apicoectomy -</td>
                                    <td width="30%">PHP 25,000 per tooth</td><p></p>
                                  </tr>
                                  <tr>
                                    <td width="70%">Impacted 3rd Molar Removal -</td>
                                    <td width="30%">PHP 25,000 per tooth</td><p></p>
                                  </tr>
                                  <tr>
                                    <td width="70%">Simple Extraction -</td>
                                    <td width="30%">PHP 3,500 per removal</td><p></p>
                                  </tr>
                                  <tr>
                                    <td width="70%">Ankylosed Tooth	-</td>
                                    <td width="30%">PHP 10,000 per removal</td><p></p>
                                  </tr>
                                  <tr>
                                    <td width="70%">Bone Augmentation Procedure -</td>
                                    <td width="30%">PHP 80,000 per area</td><p></p>
                                  </tr>
                                  <tr>
                                    <td width="70%">Socket Preservation After Extraction -</td>
                                    <td width="30%">PHP 50,000</td><p></p>
                                  </tr>
                                  <tr>
                                    <td width="70%">Gingivoplasty -</td>
                                    <td width="30%">PHP 7,500 per area</td><p></p>
                                  </tr>
                            </ul>
                            <a href="login"><button class="btn btn-primary mt-4 mb-2 btn-rounded">Make Appointment</button></a>
                        </div>
                    </div> <!-- end Pricing_card -->
                </div> <!-- end col -->
                <div class="col-md-4">
                    <div class="card card-pricing">
                        <div class="card-body text-center">
                            <p class="card-pricing-plan-name fw-bold text-uppercase">Pediatric Dentistry</p>
                            <i class="card-pricing-icon dripicons-store text-primary"></i>
                            <ul class="card-pricing-features">
                              <tr>
                                <td width="70%">Consultation -</td>
                                <td width="30%">PHP 2,800</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Oral Prophylaxis w/ Fluoride application -</td>
                                <td width="30%">PHP 5,000</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Fluoride Application -</td>
                                <td width="30%">PHP 7,500 U & L</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Simple Extraction-</td>
                                <td width="30%">PHP 4,000</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Any kind of Surgery -</td>
                                <td width="30%">PHP 25,000</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Space Maintainer -</td>
                                <td width="30%">PHP 10,000 U or L</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Pulpotomy & Pulpectomy -</td>
                                <td width="30%">PHP 6,000</td><p></p>
                              </tr>
                            </ul>
                            <a href="login"><button class="btn btn-primary mt-4 mb-2 btn-rounded">Make Appointment</button></a>
                        </div>
                    </div> <!-- end Pricing_card -->
                </div> <!-- end col -->
                <div class="col-md-4">
                    <div class="card card-pricing">
                        <div class="card-body text-center">
                            <p class="card-pricing-plan-name fw-bold text-uppercase">Periodontics</p>
                            <i class="card-pricing-icon dripicons-store text-primary"></i>
                            <ul class="card-pricing-features">
                              <tr>
                                <td width="70%">Consultation -</td>
                                <td width="30%">PHP 2,800</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Periodontal Surgery -</td>
                                <td width="30%">PHP 20,000 per quadrant</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Deep Scaling -</td>
                                <td width="30%">PHP 3,500 per quadrant</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Root Planing and Scaling-</td>
                                <td width="30%">PHP 10,000 per quadrant</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Gum Grafting -</td>
                                <td width="30%">PHP 50,000</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Gum Bleaching -</td>
                                <td width="30%">PHP 50,000</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Crown Lengthening -</td>
                                <td width="30%">PHP 25,000 per area</td><p></p>
                              </tr>
                            </ul>
                            <a href="login"><button class="btn btn-primary mt-4 mb-2 btn-rounded">Make Appointment</button></a>
                        </div>
                    </div> <!-- end Pricing_card -->
                </div> <!-- end col -->
                <div class="col-md-4">
                    <div class="card card-pricing">
                        <div class="card-body text-center">
                            <p class="card-pricing-plan-name fw-bold text-uppercase">Oral Examination</p>
                            <i class="card-pricing-icon dripicons-store text-primary"></i>
                            <ul class="card-pricing-features">
                              <tr>
                                <td width="70%">Consultation -</td>
                                <td width="30%">PHP 1,500 case to case basis</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Oral Prophylaxis w/ Tongue Scrapping -</td>
                                <td width="30%">PHP 4,000 minimum</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Oral Prophylaxis w/o Tongue Scrapping (Light) -</td>
                                <td width="30%">PHP 3,500</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Oral Prophylaxis w/o Tongue Scrapping (Medium) -</td>
                                <td width="30%">PHP 4,000</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Oral Prophylaxis w/o Tongue Scrapping (Severe) -</td>
                                <td width="30%">PHP 5,000</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Oral Prophylaxis w/ Air -Powder Polishing -</td>
                                <td width="30%">PHP 6,000</td><p></p>
                              </tr>
                              <tr>
                                <td width="70%">Deep Scaling -</td>
                                <td width="30%">PHP 3,500 per quadrant</td><p></p>
                              </tr>
                            </ul>
                            <a href="login"><button class="btn btn-primary mt-4 mb-2 btn-rounded">Make Appointment</button></a>
                        </div>
                    </div> <!-- end Pricing_card -->
                </div> <!-- end col -->

            </div>
        </section>
 <!-- END prices -->
        
        <!-- START inquiry -->
        <section class="py-5 bg-light-lighten border-top border-bottom border-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <h3>Get In <span class="text-primary">Touch</span></h3>
                            <p class="text-muted mt-2">Please fill out the following form and we will get back to you shortly. For more 
                                <br>information please contact us.</p>
                        </div>
                    </div>
                </div>

                <div class="row align-items-center mt-3">
                    <div class="col-md-4">
                        <p class="text-muted"><span class="fw-bold">Customer Support:</span><br> <span class="d-block mt-1">+1 234 56 7894</span></p>
                        <p class="text-muted mt-4"><span class="fw-bold">Email Address:</span><br> <span class="d-block mt-1">info@gmail.com</span></p>
                        <p class="text-muted mt-4"><span class="fw-bold">Office Address:</span><br> <span class="d-block mt-1">4461 Cedar Street Moro, AR 72368</span></p>
                        <p class="text-muted mt-4"><span class="fw-bold">Office Time:</span><br> <span class="d-block mt-1">9:00AM To 6:00PM</span></p>
                    </div>

                    <div class="col-md-8">
                        <form class="needs-validation" novalidate="">
                            <div class="row mt-4">
                                <div class="col-lg-6">
                                    <div class="mb-2">
                                        <label for="fullname" class="form-label">Your Name</label>
                                        <input class="form-control form-control-light" type="text" required="" id="fullname" placeholder="Name...">
                                        <div class="invalid-feedback">
                                            Please Enter your Name
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-2">
                                        <label for="emailaddress" class="form-label">Your Email</label>
                                        <input class="form-control form-control-light" type="email" required="" id="emailaddress" placeholder="Enter you email...">
                                        <div class="invalid-feedback">
                                            Please Enter valid Email
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="row mt-1">
                                <div class="col-lg-12">
                                    <div class="mb-2">
                                        <label for="subject" class="form-label">Service Inquiry</label>
                                        <select class="form-control select2" data-toggle="select2">
                                            <option value="GD">General Dentistry</option>
                                            <option value="CD">Cosmetic Dentistry</option> 
                                            <option value="PD">Pediatric Dentistry</option>
                                            <option value="OR">Orthodontics</option> 
                                            <option value="PE">Periodontics</option>
                                            <option value="OS">Oral Surgery</option> 
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-1">
                                <div class="col-lg-12">
                                    <div class="mb-2">
                                        <label for="comments" class="form-label">Message</label>
                                        <textarea id="comments" rows="4" class="form-control form-control-light" required="" placeholder="Type your message here..."></textarea>
                                        <div class="invalid-feedback">
                                            Please Enter your Message
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row mt-2">
                                <div class="col-12 text-end">
                                    <button class="btn btn-primary">Send a Message <i class="mdi mdi-telegram ms-1"></i> </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- END CONTACT -->

        <!-- START FOOTER -->
        <footer class="bg-dark py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <img src="<?php echo base_url('frontend/assets')?>/images/logo.png" alt="" class="logo-dark" height="18">
                        <p class="text-muted mt-4">Hyper makes it easier to build better websites with
                            <br> great speed. Save hundreds of hours of design
                            <br> and development by using it.</p>

                        <ul class="social-list list-inline mt-3">
                            <li class="list-inline-item text-center">
                                <a href="javascript: void(0);" class="social-list-item border-primary text-primary"><i class="mdi mdi-facebook"></i></a>
                            </li>
                            <li class="list-inline-item text-center">
                                <a href="javascript: void(0);" class="social-list-item border-danger text-danger"><i class="mdi mdi-google"></i></a>
                            </li>
                            <li class="list-inline-item text-center">
                                <a href="javascript: void(0);" class="social-list-item border-info text-info"><i class="mdi mdi-twitter"></i></a>
                            </li>
                            <li class="list-inline-item text-center">
                                <a href="javascript: void(0);" class="social-list-item border-secondary text-secondary"><i class="mdi mdi-github"></i></a>
                            </li>
                        </ul>

                    </div>

                    <div class="col-lg-2 mt-3 mt-lg-0">
                        <h5 class="text-light">Company</h5>

                        <ul class="list-unstyled ps-0 mb-0 mt-3">
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">About Us</a></li>
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">Documentation</a></li>
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">Blog</a></li>
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">Affiliate Program</a></li>
                        </ul>

                    </div>

                    <div class="col-lg-2 mt-3 mt-lg-0">
                        <h5 class="text-light">Apps</h5>

                        <ul class="list-unstyled ps-0 mb-0 mt-3">
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">Ecommerce Pages</a></li>
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">Email</a></li>
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">Social Feed</a></li>
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">Projects</a></li>
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">Tasks Management</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-2 mt-3 mt-lg-0">
                        <h5 class="text-light">Discover</h5>

                        <ul class="list-unstyled ps-0 mb-0 mt-3">
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">Help Center</a></li>
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">Our Products</a></li>
                            <li class="mt-2"><a href="javascript: void(0);" class="text-muted">Privacy</a></li>
                        </ul>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="mt-5">
                            <p class="text-muted mt-4 text-center mb-0">© 2022 HappySmile.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- END FOOTER -->

        <!-- bundle -->
        <script src="<?php echo base_url('frontend/assets')?>/js/vendor.min.js"></script>
        <script src="<?php echo base_url('frontend/assets')?>/js/app.min.js"></script>

    </body>

</html>