


function Footer() {
  return (
    <div>
   
   {/* <!-- Navbar --> */}
<nav class="navbar navbar-expand-lg navbar-default bg-default">
    {/* <!-- Container wrapper --> */}
    <div class="container-fluid">
      {/* <!-- Toggle button --> */}
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
  
      {/* <!-- Collapsible wrapper --> */}
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        {/* <!-- Navbar brand --> */}
        <a class="navbar-brand  mt-2 mt-lg-0" href="#">
          <img
          class="nav-logo"
            src="logo-pink.png"
            height="75"
            alt="MDB Logo"
            loading="lazy"  
          />
        </a>
        {/* <!-- Left links --> */}
        <ul style={{marginLeft: "35%;"}} class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a style={{color: "crimson;"}} class="nav-link active" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="beneficiaries.html">Beneficiaries</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
         
        </ul>
        {/* <!-- Left links --> */}
      </div>
      {/* <!-- Collapsible wrapper --> */}
  
      {/* <!-- Right elements --> */}
      <div class="d-flex align-items-center">
        {/* <!-- Icon --> */}
       
  
       
        {/* <!-- Avatar --> */}
        <div class="dropdown">
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              style="margin-right: 20px;"
              src="https://zamfoundation.co.za/wp-content/uploads/2021/04/image-removebg-preview-2.jpg"
              class="rounded-circle"
              height="45"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
            type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal"
          >
           
            <li>
              <a style="width: 100%;" type="button" class=" btn " data-mdb-toggle="modal" data-mdb-target="#exampleModal"  class="dropdown-item" href="/admin/startbootstrap-sb-admin-2-gh-pages/index.html">Admin</a>
            </li>
  
          </ul>
        </div>
      </div>
      {/* <!-- Right elements --> */}
    </div>
    {/* <!-- Container wrapper --> */}
  </nav>
  {/* <!-- Navbar --> */}
 
    </div>
  );
}

export default Footer;
