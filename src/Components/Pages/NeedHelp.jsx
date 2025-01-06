import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { useState } from 'react';
import { server } from "../../main";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';


const NeedHelp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dropMessage, setDropMessage] = useState('');

  // Validation errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [dropMessageError, setDropMessageError] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation logic
  const validateName = (value) => {
    if (!value.trim()) return "Name is required";
    if (value.length <= 2) return "Name must be at least 3 characters";
    return "";
  };

  const validateEmail = (value) => {
    if (!value.trim()) return "Email is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return "Invalid email address";
    return "";
  };

  const validatePhoneNumber = (value) => {
    if (!value.trim()) return "Phone number is required";
    if (!/^\d{10}$/.test(value)) return "Phone number must be 10 digits";
    return "";
  };

  const validateDropMessage = (value) => {
    if (!value.trim()) return "Message is required";
    if (value.length < 5) return "Message must be at least 6 characters";
    return "";
  };

  // Live validation on input change
  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(validateName(value));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setPhoneNumberError(validatePhoneNumber(value));
  };

  const handleDropMessageChange = (e) => {
    const value = e.target.value;
    setDropMessage(value);
    setDropMessageError(validateDropMessage(value));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    // Final validation before submission
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneNumberError = validatePhoneNumber(phoneNumber);
    const dropMessageError = validateDropMessage(dropMessage);

    if (nameError || emailError || phoneNumberError || dropMessageError) {
      setNameError(nameError);
      setEmailError(emailError);
      setPhoneNumberError(phoneNumberError);
      setDropMessageError(dropMessageError);
      return;
    }

    const formData = { name, email, phoneNumber, dropMessage };

    setIsSubmitting(true);

    try {
      const response = await axios.post(`${server}/need/contact`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.success) {
        // Reset form fields
        setName("");
        setEmail("");
        setPhoneNumber("");
        setDropMessage("");

        // Show success toast notification
        toast.success("Your message has been successfully sent!");
      } else {
        // Show error toast if the server response indicates failure
        toast.error("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("There was an error submitting the form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Prime Petrol Distributors - Contact Form for Petrol Pump Dealership</title>
        <meta name="description" content="contact Form for a petrol pump dealership with Prime Petrol Distributors. View the latest updates and learn more about our services." />
        <meta name="keywords" content="petrol pump dealership, fuel station, fuel distributors, Prime Petrol, dealership application" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gas-station-front.vercel.app" />

        {/* Open Graph Metadata for Social Sharing */}
        <meta property="og:title" content="Prime Petrol Distributors - contact Form for Petrol Pump Dealership" />
        <meta property="og:description" content="contact Form for a petrol pump dealership with Prime Petrol Distributors. Learn more about our services and the latest updates." />
        <meta property="og:image" content="https://gas-station-front.vercel.app/images/pump1.jpg" />
        <meta property="og:image:alt" content="Prime Petrol pump station dealership application" />
        <meta property="og:url" content="https://gas-station-front.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Prime Petrol Distributors - contact Form for Petrol Pump Dealership" />
        <meta name="twitter:description" content="contact Form for a petrol pump dealership with Prime Petrol Distributors." />
        <meta name="twitter:image" content="https://gas-station-front.vercel.app/images/pump1.jpg" />

        {/* Structured Data: Organization Info */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Prime Petrol Distributors",
            "url": "https://gas-station-front.vercel.app",
            "logo": "https://gas-station-front.vercel.app/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/prime-petrol",
              "https://twitter.com/prime-petrol"
            ]
          })}
        </script>

        {/* Structured Data: Dealership Offer */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Petrol Pump Dealership",
            "description": "Contact Form for a petrol pump dealership with Prime Petrol Distributors.",
            "url": "https://gas-station-front.vercel.app/need-a-help",
            "eligibleRegion": "IN",
            "seller": {
              "@type": "Organization",
              "name": "Prime Petrol Distributors"
            }
          })}
        </script>

        {/* Mobile-friendly meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>


      <section className="need-help-section">
        <div className="help-container">
          <div className="help-info">
            <h2>Need Help?</h2>
            <p>We are ready to assist you! Provide your details and our support team will reach out as soon as possible. You can also call us for immediate assistance.</p>
          </div>
          <div className="help-form-container">
            <form className="help-form" onSubmit={submitForm}>
              <div className="form-group">
                <div className="icon"><PersonIcon /></div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Your Name"
                  required
                />
                {nameError && <p className="error">{nameError}</p>}
              </div>

              <div className="form-group">
                <div className="icon"><EmailIcon /></div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your Email"
                  required
                />
                {emailError && <p className="error">{emailError}</p>}
              </div>

              <div className="form-group">
                <div className="icon"><PhoneIcon /></div>
                <input
                  type="number"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="Your Phone Number"
                  required
                />
                {phoneNumberError && <p className="error">{phoneNumberError}</p>}
              </div>

              <div className="form-group">
                <div className="icon"><MessageIcon /></div>
                <textarea
                  name="dropMessage"
                  value={dropMessage}
                  onChange={handleDropMessageChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
                {dropMessageError && <p className="error">{dropMessageError}</p>}
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Send Now"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default NeedHelp;
