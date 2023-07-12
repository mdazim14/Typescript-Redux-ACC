import Footer from "../common/Footer";
import Header from "../common/Header";
import Main from "../common/Main";

const TheLayout = () => {
    return (
        <div>
            <div> <Header></Header> </div>
            <div> <Main></Main> </div>
            <div>  <Footer></Footer> </div>
        </div>
    );
};

export default TheLayout;