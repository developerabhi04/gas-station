

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h4>About Us</h4>
          <p>
            Offering transparent and reliable petrol pump dealership opportunities across multiple locations. Your journey with us starts here.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Dealership Opportunities</a></li>
            <li><a href="#">Application Process</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: info@dealership.com</li>
            <li>Phone: +91-1234567890</li>
            <li>Location: 123 Dealership Street, City, Country</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Petrol Pump Dealership. All rights reserved.</p>
      </div>
    </footer>


  )
}

export default Footer