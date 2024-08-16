import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss"

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Your Dream Place
                        From Our listngs
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Sed, nulla mollitia!
                        Tenetur ad pariatur quam fugit autem harum maiores
                        deleniti temporibus? Sunt nisi ut doloremque ad esse sapiente quidem eveniet.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>4+</h1>
                            <h2>Years Of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>100+</h1>
                            <h2>Properties For Sale</h2>
                        </div>
                        <div className="box">
                            <h1>500+</h1>
                            <h2>Properties For Rent</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg3.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;
