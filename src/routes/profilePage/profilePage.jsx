import List from "../../components/list/List.jsx";
import Chat from "../../components/chat/Chat.jsx";
import "./ProfilePage.scss";

function ProfilePage() {
    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>
                            Avator:
                            <img src="https://tse3.mm.bing.net/th?id=OIP.mGs4Bg_JQ10tgPOuJ7JCDwHaFj&pid=Api&P=0&h=180.jpg" alt="" />
                        </span>
                        <span>Username: <b>Jumae Doe</b></span>
                        <span>E-mail: <b>Jumae2078@gmail.com</b></span>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatContainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;