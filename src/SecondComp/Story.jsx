import "../SecondComp/Story.css"
import StoryImg from "../assets/Img/foodpro.jpg";

const Story = () => {
  return (
    <>
      <section className="story-sec">
        <section className="story-detail">
          <span className="story-text">
            <h3>Our Story</h3>
            <span className="story-text1">
              <h4 className="story-h41">Welcome To Royal</h4>
              <p className="story-p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit. doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                fugit.<br/> 
                <br/>
                
                 Doloremque laudantium, totam rem aperiam, eaque ipsa quae
                ab illo. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto.
              </p>
            </span>
          </span>
          <span className="story-img">
            <img src={StoryImg} alt="" />
          </span>
        </section>
      </section>
    </>
  );
}

export default Story