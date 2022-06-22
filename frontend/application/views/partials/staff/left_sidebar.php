<!DOCTYPE html>
<html lang="en">
    

    <body class="loading" data-layout-config='{"leftSideBarTheme":"dark","layoutBoxed":false, "leftSidebarCondensed":false, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": true}'>
        <!-- Begin page -->
        <div class="wrapper">
            <!-- ========== Left Sidebar Start ========== -->
            <div class="leftside-menu">
    
                <!-- LOGO -->
                <a href="<?php echo base_url('landing')?>" class="logo text-center logo-light">
                    <span class="logo-lg">
                        <img src="<?php echo base_url('frontend/assets')?>/images/123.PNG" alt="" height="60" width="160">
                    </span>
                    <span class="logo-sm">
                        <img src="<?php echo base_url('frontend/assets')?>/images/2.PNG" alt="" height="30" width="30">
                    </span>
                </a>
    
                <div class="h-100" id="leftside-menu-container" data-simplebar="">

                    <!--- Sidemenu -->
                    <ul class="side-nav">

                        <li class="side-nav-title side-nav-item">Navigation</li>

                        <li class="side-nav-item">
                            <a href="<?php echo base_url('staff')?>" class="side-nav-link">
                                <i class="uil-home-alt"></i>
                                <span> Dashboards </span>
                            </a>
                        </li>

                        <li class="side-nav-title side-nav-item">Tables</li>


                        <li class="side-nav-item">
                            <a data-bs-toggle="collapse" href="#sidebarEcommerce" aria-expanded="false" aria-controls="sidebarEcommerce" class="side-nav-link">
                                <i class="uil-store"></i>
                                <span> Staff </span>
                                <span class="menu-arrow"></span>
                            </a>
                            <div class="collapse" id="sidebarEcommerce">
                                <ul class="side-nav-second-level">
                                    <li>
                                        <a href="<?php echo base_url('staff/appointment')?>">Appointments</a>
                                    </li>
                                    <li>
                                        <a href="<?php echo base_url('staff/calendar')?>">Calendar</a>
                                    </li>
                                    <li>
                                        <a href="<?php echo base_url('staff/invoices')?>">Invoices</a>
                                    </li> 
                                </ul>
                            </div>
                        </li> 

                    <!-- End Sidebar -->

                    <div class="clearfix"></div>

                </div>
                <!-- Sidebar -left -->

            </div>
            <!-- Left Sidebar End -->

        </div>
        <!-- END wrapper -->
        
    </body>
</html>
