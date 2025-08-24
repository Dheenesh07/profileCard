import Name from "../Name/Name";
import './ProfileCard.css';
const ProfileCard = () => {
  return (
    <div className="card1">
      <h1>Welcome..!</h1>
      <img className="img-profile" src="/src/assets/imge.jpeg" alt="" />
      <Name firstName="Dheeneshwaran" lastName="G" />
       <h2>Software Developer</h2>
      <h2>Age 22</h2>
      <h2>Location Dharmapuri</h2>
      <h3>Address:</h3>
      <h4>2/28,Ekkandahalli(V),Gummanur(P),Palacode(Tk)</h4>
    </div>
  );
};

export default ProfileCard;
 