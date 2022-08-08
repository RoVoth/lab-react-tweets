import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";

function Tweet(props) {
  return (
    <div className="tweet">
      {/* accedemos a el atributo */}
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User userData={props.tweet.user} />

          <Timestamp time={props.tweet.timestamp} />
        </div>

        <p className="message">
          On December 7th, we will be hosting a #webinar that will introduce you
          to #SQL! Are you ready? 🚀
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i class="far fa-comment"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-share"></i>
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
