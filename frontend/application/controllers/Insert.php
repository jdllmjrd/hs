<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Insert extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function insert($data) {
		// Inserting into your table
		// Calling model
		$done = $this->db->insert('sign_up', $data);
		// You can do something else here
		if($done) {
		  //You can set the message and variable name as per your need.
		  $this->session->Staff_Add_Appointment('inserted','Yes');
		  //Redirect to the desired view file
		  redirect("controller/staff/appointment");
		}
}

}