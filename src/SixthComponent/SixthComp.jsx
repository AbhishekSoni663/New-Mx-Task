import "../SixthComponent/SixthComp.css"
import SixthImg1 from "/assets/FourthImg/food1.jpg";
import SixthImg2 from "/assets/FourthImg/food2.jpg";
import SixthImg3 from "/assets/FourthImg/food3.jpg";
const SixthComp = () => {
  return (
    <>
      <section className="sixth-sec">
        <h2 className="sixth-h2">Dont Miss</h2>
        <span className="sixth-head">
          <h3 className="sixth-h3">Our News And Events</h3>
          <p className="sixth-p">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </span>
        <section className="sixth-all-detail">
          <section className="sixth-detail">
            <section className="sixth-card">
              <div className="sixth-card-img">
                <img src={SixthImg1} />
              </div>
              <span className="sixth-card-body">
                <h4 className="sixth-h4">Nunc Volutpat Venenatis</h4>
                <p className="sixth-p1">CATEGORY</p>
                <p className="sixth-p2">
                  Nulla a odio sed magna congue condimentum. Pellentesque
                  convallis enim nec libero vulputate, et rhoncus urna placerat.
                  Phasellus mattis, diam vel vehicula facilisis, erat leo
                  dapibus augue, at mollis tellus ex non nisi. Ut faucibus
                  fringilla semper. Aenean nunc ex,...
                </p>
              </span>
            </section>
            <section className="sixth-card2">
              <img src={SixthImg2} />
              <span className="sixth-card-body">
                <h4 className="sixth-h4">Vestibulum Nisl Felis</h4>
                <p className="sixth-p1">CATEGORY</p>
                <p className="sixth-p2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  aliquam justo et nibh venenatis aliquet. Morbi mollis mollis
                  pellentesque. Aenean vitae erat velit.
                </p>
              </span>
            </section>
            <section className="sixth-card3">
              <img src={SixthImg3} />
              <span className="sixth-card-body">
                <h4 className="sixth-h4">Proin Eu Augue Efficitur</h4>
                <p className="sixth-p1">CATEGORY</p>
                <p className="sixth-p2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  aliquam justo et nibh venenatis aliquet. Morbi mollis mollis
                  pellentesque. Aenean vitae erat velit.
                </p>
              </span>
            </section>
          </section>
        </section>
        <button className="sixth-btn">Read More</button>
      </section>
    </>
  );
}

export default SixthComp