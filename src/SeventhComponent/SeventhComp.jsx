import "../SeventhComponent/SeventhComp.css"

const SeventhComp = () => {
  return (
    <>
      <section className="seventh-sec">
        <section className="all-form">
          <section className="seventh-form1">
            <section className="form-1-a">
              <span className="form-h">
                <h2>Hours of Operations</h2>
                <span className="form-h-1">
                  <p>MON-FRI</p>
                  <p>10:00am - 1:00pm</p>
                  <p>4:00am - 10:30pm</p>
                </span>
              </span>
              <span
                style={{
                  borderBottom: "1px solid green",
                  margin: "5px 0",
                  width: "80%",
                }}
              ></span>
              <span className="formh-2">
                <p>SAT</p>
                <p>3:00pm - 10:30pm</p>
              </span>
              <span
                style={{
                  borderBottom: "1px solid green",
                  margin: "5px 0",
                  width: "80%",
                }}
              ></span>
              <span className="formh-3">
                <p>SUN</p>
                <p>We are closed</p>
              </span>
              <button className="form-btn1">MAKE A RESERVATION</button>
            </section>
          </section>
          <section className="seventh-form2">
            <section className="form-2-a">
              <span className="form2-btn">
                <h2 className="form2-h2">Drop Us a Line</h2>
                <p>Don’t be shy. Let us know if you have any questions!</p>
                <button className="form2-btn2">CONTACT US</button>
              </span>
              <span className="form2-detail">
                <h3 className="form2-h3">Our News Letter</h3>
                <p className="form2-p1">
                  Dialogue is an essential part of any script
                </p>
              </span>
              <span className="form2-inp">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="Email" placeholder="Email" />
                <button className="form2-inp-btn">Contact Us</button>
              </span>
            </section>
          </section>
        </section>
        <div className="form-foot">
          <span className="form-fo">
            <p>Designed by Elegant Themes | Powered by WordPress</p>
            <span className="form2-icon">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-wifi"></i>
            </span>
          </span>
        </div>
      </section>
    </>
  );
}

export default SeventhComp