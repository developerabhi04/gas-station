
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';

const NeedHelp = () => {
  return (
    <section className="need-help-section">
      <div className="help-container">
        <div className="help-info">
          <h2>Need Help?</h2>
          <p>We are ready to assist you! Provide your details and our support team will reach out as soon as possible. You can also call us for immediate assistance.</p>
        </div>
        <div className="help-form-container">
          <form className="help-form">
            <div className="form-group">
              <div className="icon"><PersonIcon /></div>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <div className="icon"><EmailIcon /></div>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>

            <div className="form-group">
              <div className="icon"><PhoneIcon /></div>
              <input type="tel" id="phone" placeholder="Your Phone Number" required />
            </div>

            <div className="form-group">
              <div className="icon"><MessageIcon /></div>
              <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
