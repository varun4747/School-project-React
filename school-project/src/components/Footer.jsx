function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container text-center">

        <h4 className="fw-bold mb-2">My School</h4>

        <p className="mb-3">
          Empowering students with knowledge and discipline for a brighter future.
        </p>

        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="/" className="text-light text-decoration-none">
            Home
          </a>
          <a href="/about" className="text-light text-decoration-none">
            About
          </a>
          <a href="/academics" className="text-light text-decoration-none">
            Academics
          </a>
          <a href="/events" className="text-light text-decoration-none">
            Events
          </a>
          <a href="/gallery" className="text-light text-decoration-none">
            Gallery
          </a>
          <a href="/contact" className="text-light text-decoration-none">
            Contact
          </a>
        </div>

        <p className="text-secondary small">
          © {new Date().getFullYear()} My School. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;