

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          <div>
            <p>
              &copy; {new Date().getFullYear()} Petrol Pump Dealership.
              <br></br>
              All rights reserved.
            </p>
          </div>

          <div>
            {/* <a>Privacy Policy</a> */}
          </div>

          <div>
            <p>
              Contact us at:
              <br></br>
              support@petrolpump.com
            </p>
          </div>

          <div>
            <p>
              <b>Prime Petrol Distributors owns the website and services offered here.</b>
            </p>
          </div>

        </div>
      </div>

      {/* <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Petrol Pump Dealership. All rights reserved.</p>
      </div> */}
    </footer>


  )
}

export default Footer