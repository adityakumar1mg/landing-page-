
import './App.css';
// import Consult from './component/card/Consult.js';
// import CorpoOffer from './component/card/CorporateOffer.js';
// import Discount from './component/card/Discount.js';
// import ImgDetail from './component/card/ImgDetail.js';
// import NameDiscount from './component/card/NameDiscount.js';
import Frame_one from './component/page/Frame_one.js';
function App() {
  return (

    <div className="App">
      {/* <div className="w-[250px]">
      <CorpoOffer name="Doctor" discount={"30% Off"} imagecop={"https://onemg.gumlet.io/marketing/7ee4faca-e7e8-4eb1-b9fd-5f90ca1c2be3.png"} back_source="card_back_gradient"/>
      <ImgDetail description="Dietician"/>
      <Consult name="General Physician" color_consult="text-blue-500"/>
      <NameDiscount name="Order Medicine" discount="20" back_source="card_background_samll"/>
      <Discount discount="20" back_source="card_background_grad"/>
      </div> */}
      <Frame_one/>
     
    </div>
  );
}

export default App;
