<!DOCTYPE html>

    <html lang="en">

    <head>

        <meta charset="utf-8">
        <title>Register | HappySmile </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author">
        <!-- App favicon -->
        <link rel="shortcut icon" href="<?php echo base_url('frontend/assets')?>/images/HappySmile.ico">

        <!-- App css -->
        <link href="<?php echo base_url('frontend/assets')?>/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="<?php echo base_url('frontend/assets')?>/css/app.min.css" rel="stylesheet" type="text/css" id="light-style" />
        <link href="<?php echo base_url('frontend/assets')?>/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" />

    </head>

    <body class="loading authentication-bg" data-layout-config='{"leftSideBarTheme":"dark","layoutBoxed":false, "leftSidebarCondensed":false, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": true}'>

        <div class="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-4 col-lg-5">
                        <div class="card">
                            <!-- Logo-->
                            <div class="card-header pt-4 pb-4 text-center bg-primary">
                                <a href="index.php">
                                    <span><img src="<?php echo base_url('frontend/assets')?>/images/logo.png" alt="" height="60"></span>
                                </a>
                            </div>

                            <div class="card-body p-4">
                                
                                <div class="text-center w-75 m-auto">
                                    <h4 class="text-dark-50 text-center mt-0 fw-bold">Free Sign Up</h4>
                                    <p class="text-muted mb-4">Don't have an account? Create your account, it takes less than a minute </p>
                                </div>

                                <form action="# "class="needs-validation" novalidate="">

                                    <div class="mb-3">
                                        <label for="fname" class="form-label">First Name</label>
                                        <input class="form-control" type="text" id="fname" placeholder="Enter your First name" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="mname" class="form-label">Middle Name</label>
                                        <input class="form-control" type="text" id="mname" placeholder="Enter your Middle name" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="lname" class="form-label">Last Name</label>
                                        <input class="form-control" type="text" id="lname" placeholder="Enter your Last name" required>
                                    </div>
                                    
                                    <div class="mb-3 col-md-6">
                                        <label for="example-date" class="form-label">Birth Date</label>
                                        <input class="form-control" id="example-date" type="date" name="date" required="">
                                            <div class="invalid-feedback">
                                                Please provide a Birth Date.
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label" for="validationCustom05">Phone Number</label>
                                            <input type="text" class="form-control" id="validationCustom05" placeholder="Phone Number" required="">
                                                <div class="invalid-feedback">
                                                    Please provide a Phone Number. 
                                                </div>
                                        </div>
                                        <div class="mb-3">
                                            <div class="mb-3">
                                                <label class="form-label" for="validationCustom04">Civil Status</label>
                                                <select class="form-control select2" data-toggle="select2" required="">
                                                    <option value="Single">Single</option>
                                                    <option value="Married">Married</option> 
                                                    <option value="Widowed">Widowed</option>
                                                    <option value="Divorced">Divorced</option> 
                                                </select>
                                                    <div class="invalid-feedback">
                                                        Please provide a Civil Status.  
                                                    </div>
                                            </div>
                                            </div>
                                   
                                    <div class="mb-3">
                                        <label class="form-label" for="validationCustom01" >Gender</label>
                                        <br>
                                    <div class="mb-3">
                                                <select class="form-control select2" data-toggle="select2" required="">
                                                    <option value="Single">Male</option>
                                                    <option value="Married">Female</option> 
                                                    <option value="Widowed">Others</option>
                                                    <option value="Divorced">Prefer not to say</option> 
                                                </select>
                                                    <div class="invalid-feedback">
                                                        Please provide a Civil Status.  
                                                    </div>
                                   
                                </div>
                            </div>        
                                    <div class="mb-3">
                                        <label for="emailaddress" class="form-label">Email address</label>
                                        <input class="form-control" type="email" id="emailaddress" required placeholder="Enter your email">
                                    </div>

                                    <div class="mb-3">
                                        <label for="password" class="form-label">Password</label>
                                        <div class="input-group input-group-merge">
                                            <input type="password" id="password" required=""class="form-control" placeholder="Enter your password">
                                            <div class="input-group-text" data-password="false">
                                                <span class="password-eye"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="form-label">Re-type Password</label>
                                        <div class="input-group input-group-merge">
                                            <input type="password" id="password" required=""class="form-control" placeholder="Enter your password">
                                            <div class="input-group-text" data-password="false">
                                                <span class="password-eye"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" required="" id="checkbox-signup">
                                            <label class="form-check-label" for="checkbox-signup" >I accept <a href="#" class="text-muted">Terms and Conditions</a></label>
                                        </div>
                                    </div>

                                    <div class="mb-3 text-center">
                                        <button class="btn btn-primary" type="submit"> Sign Up </button>
                                    </div>

                                </form>
                            </div> <!-- end card-body -->
                        </div>
                        <!-- end card -->

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p class="text-muted">Already have account? <a href="login" class="text-muted ms-1"><b>Log In</b></a></p>
                            </div> <!-- end col-->
                        </div>
                        <!-- end row -->

                    </div> <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end page -->

        <footer class="footer footer-alt">
            2022 © HappySmile.com
        </footer>

        <!-- bundle -->
        <script src="<?php echo base_url('frontend/assets')?>/js/vendor.min.js"></script>
        <script src="<?php echo base_url('frontend/assets')?>/js/app.min.js"></script>
        
    </body>
</html>
