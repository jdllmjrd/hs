<!-- Modal -->
<div class="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel2">Modify User Information</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-hidden="true"></button>
            </div> <!-- end modal header -->
            <div class="modal-body">

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
                                <label for="validationCustom10" class="form-label">Branch</label>
                                <input type="text" class="form-control" id="validationCustom10" placeholder="Branch" required="">
                                    <div class="invalid-feedback">
                                        Please provide your Branch.  
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
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" type="submit">Confirm</button>
            </div> <!-- end modal footer -->
        </div> <!-- end modal content-->
    </div> <!-- end modal dialog-->
</div> <!-- end modal-->
