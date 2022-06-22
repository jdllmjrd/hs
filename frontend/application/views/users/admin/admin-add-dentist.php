<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <title>Dentist Information | HappySmile Dental Clinic</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description">
        <meta content="Happy Smile" name="Author">
        <!-- App favicon -->
        <link rel="shortcut icon" href="<?php echo base_url('frontend/assets')?>/images/favicon.ico">

        <!-- App css -->
        <link href="<?php echo base_url('frontend/assets')?>/css/icons.min.css" rel="stylesheet" type="text/css">
        <link href="<?php echo base_url('frontend/assets')?>/css/app.min.css" rel="stylesheet" type="text/css" id="light-style">
        <link href="<?php echo base_url('frontend/assets')?>/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style">

    </head>

    <body class="loading" data-layout-config='{"leftSideBarTheme":"dark","layoutBoxed":false, "leftSidebarCondensed":false, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": true}'>
        <!-- Begin page -->
        <div class="wrapper">
            
            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">

                
                    <!-- Start Content-->
                    <div class="container-fluid">

                        <!-- start page title -->
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">HappySmile</a></li>
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">Users</a></li>
                                            <li class="breadcrumb-item active">Dentist Information</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title">DENTIST INFORMATION</h4>
                                </div>
                            </div>
                        </div>
                        <!-- end page title -->

                        <div class="row">
                            <div class="col-2lg-8">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="header-title">USER DATA</h4>
                                        <p class="text-muted font-14">
                                            Fill up with correct Information.
                                        </p>

                                        <ul class="nav nav-tabs nav-bordered mb-3">
                                            <li class="nav-item">
                                                <a href="#custom-styles-preview" data-bs-toggle="tab" aria-expanded="false" class="nav-link active">
                                                    Personal Information
                                                </a>
                                            </li>   
                                            
                                        </ul> <!-- end nav-->
                                        <div class="tab-content">
                                            <div class="tab-pane show active" id="custom-styles-preview">
                                                <form class="needs-validation" novalidate="">
                                                    <div class="row g-3">
                                                        <div class="col-sm-4">
                                                            <label class="form-label" for="validationCustom01">First Name</label>
                                                            <input type="text" class="form-control" id="validationCustom01" placeholder="First Name" required="">
                                                            <div class="invalid-feedback">
                                                                Please provide a First Name.
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <label class="form-label" for="validationCustom02">Middle Name</label>
                                                            <input type="text" class="form-control" id="validationCustom02" placeholder="Middle Name" required="">
                                                            <div class="invalid-feedback">
                                                                Please provide a Middle Name.
                                                            </div>
                                                        </div>
                                                        <div class="col-sm-4">
                                                            <label class="form-label" for="validationCustom03">Last name</label>
                                                            <input type="text" class="form-control" id="validationCustom03" placeholder="Last Name" required="">
                                                            <div class="invalid-feedback">
                                                                Please provide a Last Name.
                                                            </div>
                                                        </div> 
                                                        <div class="mb-3 col-md-6">
                                                            <label class="form-label" for="validationCustom04">Birth Date</label>
                                                            <input class="form-control" id="validationCustom04" type="date" name="date" required="">
                                                            <div class="invalid-feedback">
                                                                Please provide a Birth Date.
                                                            </div>
                                                        </div>
                                                        <div class="mb-3 col-md-6">
                                                            <label class="form-label" for="validationCustom05">Gender</label>
                                                            <select class="form-select" id="validationCustom05" required="">
                                                                <option></option>
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                                <option>Prefer not to say</option>
                                                                <option>Others</option>
                                                            </select>
                                                            <div class="invalid-feedback">
                                                                Please provide a Gender.
                                                            </div>
                                                        </div>
                                                    </div>            
                                                        
                                                    <div class="row g-2">
                                                            <div class="mb-3 col-md-6">
                                                                <label class="form-label" for="validationCustom06">Civil Status</label>
                                                                <input type="text" class="form-control" id="validationCustom06" placeholder="Civil Status" required="">
                                                                    <div class="invalid-feedback">
                                                                        Please provide a Civil Status.  
                                                                    </div>
                                                            </div>
                                                            <div class="mb-3 col-md-6">
                                                                <label class="form-label" for="validationCustom07">Phone Number</label>
                                                                <input type="text" class="form-control" id="validationCustom07" placeholder="Phone Number" required="">
                                                                    <div class="invalid-feedback">
                                                                        Please provide a Phone Number. 
                                                                    </div>
                                                            </div>
                                                        </div>  
                                                        
                                                        <div class="row g-2">
                                                            <div class="mb-3 col-md-6">
                                                                <label class="form-label" for="validationCustom08">Email</label>
                                                                <input type="text" class="form-control" id="validationCustom08" placeholder="Email" required="">
                                                                    <div class="invalid-feedback">
                                                                        Please provide a Email.  
                                                                    </div>
                                                            </div>

                                                            <div class="mb-3 col-md-6">
                                                                <label class="form-label" for="validationCustom09">Image</label>
                                                                <input type="file" id="validationCustom09" class="form-control" required>
                                                                <div class="invalid-feedback">
                                                                        Please provide an Image. 
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="row g-2">
                                                            <div class="mb-3 col-md-6">
                                                                <label for="validationCustom10" class="form-label">Specialty</label>
                                                                <input type="text" class="form-control" id="validationCustom10" placeholder="Specialty" required="">
                                                                    <div class="invalid-feedback">
                                                                        Please provide your Specialty.  
                                                                    </div>
                                                            </div>
                                                            <div class="mb-3 col-md-6">
                                                                <label for="validationCustom11" class="form-label">Password</label>
                                                                <div class="input-group input-group-merge">
                                                                    <input type="password" id="validationCustom11" class="form-control" placeholder="Password" required="">
                                                                    <div class="input-group-text" data-password="false">
                                                                        <span class="password-eye"></span>
                                                                    </div>
                                                                    <div class="invalid-feedback">
                                                                        Please provide your password.  
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="mb-3">
                                                            <div class="form-check">
                                                                <input type="checkbox" class="form-check-input" id="invalidCheck" required="">
                                                                <label class="form-check-label form-label" for="invalidCheck">I confirm that the details that I have 
                                                                provided in this Personal Information are correct, and that I have not deliberately withheld any relevant information. </label>
                                                                <div class="invalid-feedback">
                                                                    You must agree before submitting.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    <button class="btn btn-primary" type="submit">Submit form</button>
                                                </form>
                                            </div> <!-- end preview-->
                                        </div> <!-- end tab-content-->

                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div> <!-- end col-->
                        </div>

                </div> <!-- content -->


            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

        <!-- bundle -->
        <script src="<?php echo base_url('frontend/assets')?>/js/vendor.min.js"></script>
        <script src="<?php echo base_url('frontend/assets')?>/js/app.min.js"></script>

    </body>

</html>