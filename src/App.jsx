import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProducts from "./components/StarProducts";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import data from "./data/data.json";
import HotAccessories from "./components/HotAccessories";
import ProductReviews from "./components/ProductReviews";
import Videos from "./components/Videos.jsx";
import Banner from "./components/Banner.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider />
      <Offers />
      <Heading text={"STAR PRODUCTS"} />
      <StarProducts />
      <Heading text={"Hot Accessories"}></Heading>
      <HotAccessoriesMenu />

      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              music={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        ></Route>
      </Routes>

      <Heading text={"PRODUCT REVIEWS"} />

      <ProductReviews productReviews={data.productReviews} />

      <Heading text={"VIDEOS"} />
      <Videos videos={data.videos} />

      <Heading text={"IN THE PRESS"} />
      <Banner banner={data.banner} />

      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
