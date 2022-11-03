import Login from "./FirstPage/components/Login.js";
import WallpaperForLoginPage from "./FirstPage/components/Image.js";
import Quote from "./FirstPage/components/Quote.js";
import Title from "./FirstPage/components/Title.js";
import './LoginLandingPage.css'

function LoginLandingPage() {
    return (
        <div className="LoginLandingPage">
            <div className="wallpaper">
                <WallpaperForLoginPage />
            </div>
            <div id="qtl">
                <div id="q">  <Quote /></div>
                <div id="t">  <Title /></div>
                <div id="l">  <Login /></div>
            </div>
        </div>
    );
}

export default LoginLandingPage;
