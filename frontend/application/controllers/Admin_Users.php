<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_Users extends CI_Controller {

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
	public function UserPage()
	{
		$this->load->view('users/admin/admin-users');
		$this->load->view('partials/admin/top_bar');
		$this->load->view('partials/admin/left_sidebar');
		$this->load->view('partials/admin/right_sidebar');
		//$this->load->view('partials/admin/admin-view-user');
		//$this->load->view('partials/admin/admin-modify-user');
		//$this->load->view('partials/admin/admin-delete-user');
	}
}
