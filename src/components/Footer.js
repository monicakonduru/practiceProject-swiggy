const Footer = () => {
  return(
    <div className="footer">
      <hr></hr>
      <div className="footer display-flex footer-main">
        <h3 className="footer footer-text">For better experience,download the Swiggy app now</h3>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" className="footer" style={{height:"5rem", width:"15rem"}}/>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" className="footer" style={{height:"5rem", width:"15rem"}}/>
      </div>
      <div className="footer display-flex">
        <div className="footer">
        <img className="footer"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/portal/c/logo_2022.png" style={{height:"5rem"}}/>
        <p className="footer">© 2024 Swiggy Limited</p>
        </div>
        <div className="footer">
          <h5 className="footer footer-text">Company</h5>
          <p className="footer">About Us</p>
          <p className="footer">Swiggy Corporate</p>
          <p className="footer">Careers</p>
          <p className="footer" >Team</p>
          <p className="footer">Swiggy One</p>
        </div>
        <div className="footer">
          <h5 className="footer footer-text">Legal</h5>
          <p className="footer">Terms & Conditions</p>
          <p className="footer">Cookie Policy</p>
          <p className="footer">Privacy Policy</p>
          <p className="footer">Investor Relations</p>
        </div>
        <div className="footer">
          <h5 className="footer footer-text">Life at Swiggy</h5>
          <p className="footer">Explore with Swiggy</p>
          <p className="footer">Swiggy News</p>
          <p className="footer">Snackable</p>
        </div>
      </div>
    </div>
    
  )
}

export default Footer;