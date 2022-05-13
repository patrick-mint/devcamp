import { Routes, Route, Outlet, Link, useParams,useNavigate, useLocation } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Foodie</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Foodie />} />
          <Route path="thai" element={<Thai />} />
          <Route path="western" element={<Western />} />
          <Route path="japanese" element={<Japanese />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="promotion/:id" element={<ProductDetail />} />
          <Route path="noodle" element={<Noodle />} />
          <Route path="noodle/detail" element={<NoodleDetail />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="drinks/detail" element={<DrinksDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <hr />
    </div>
  );
}
function Layout() {
  return (
    <div>
      <nav>
        <ul>
          {/* <li><Link to="/">Foodie</Link></li> */}
          <li><Link to="/thai">Thai Food</Link></li>
          <li><Link to="/western">Western Food</Link></li>
          <li><Link to="/japanese">Japanese Food</Link></li>
          <li><Link to="/promotion">Promotion</Link></li>
          <li><Link to="/noodle">Noodle</Link></li>
          <li><Link to="/drinks">Drinks</Link></li>
          <li><Link to="/nothing-here">Nothing Here</Link></li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
function Foodie() {
  return (
  <>
  <h2>Foodie <img width="40px" src="https://play-lh.googleusercontent.com/S9IiebVICFGaVHqRdj6mOcChSDJH1kjLaepKqQes4UmvQQCjNOXvua8DiES1iHdEkQ" alt="brand" /></h2>
  <p>Foodie is all about food lovers and we aim to show the famous dish of each type of cuisine</p>
  </>
  );
}

function Thai() {
  return (
  <>
  <h2>Thai Food <img width="40px" src="https://play-lh.googleusercontent.com/S9IiebVICFGaVHqRdj6mOcChSDJH1kjLaepKqQes4UmvQQCjNOXvua8DiES1iHdEkQ" alt="brand"/></h2>
  <p>Tomyum Kung</p>
  </>
  );
}

function Western() {
  return (
    <>
  <h2>Western Food <img width="40px" src="https://play-lh.googleusercontent.com/S9IiebVICFGaVHqRdj6mOcChSDJH1kjLaepKqQes4UmvQQCjNOXvua8DiES1iHdEkQ" alt="brand"/></h2>
  <p>Pizza</p>
  </>
  )
}

function Japanese() {
  return (
  <>
  <h2>Japanese Food <img width="40px" src="https://play-lh.googleusercontent.com/S9IiebVICFGaVHqRdj6mOcChSDJH1kjLaepKqQes4UmvQQCjNOXvua8DiES1iHdEkQ"alt="brand" /></h2>
  <p>Sushi</p>
  </>
  )
}

function Promotion() {
  const productList = [
    { id: '01', name: 'Tomyum Kung with Sushi' },
    { id: '02', name: 'Pizza with Sushi' },
    { id: '03', name: 'Tomyum Kung with Pizza' }
  ]
  return (<><h2>Promotion</h2><ul>
    {productList.map(x => <li><Link to={`${x.id}`}>{x.name}</Link></li>)}
  </ul></>
  );
}

function ProductDetail() {
  let param = useParams();
  console.log(param);
  return (<><h2>Promotion Detail</h2><p>You open product {param.id}</p></>);
}

function Noodle() {
  let navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault()
    let form = e.currentTarget;
    let formData = new FormData(form);
    let data = { topping: formData.getAll('toppings'), noodle: formData.get('noodle') }
    navigate('/noodle/detail', { replace: true, state: { data } })
  }
  return (<><form onSubmit={handleChange}>
    <p>What would you like?</p>
    <p>
      <label>
        <input type="radio" name="noodle" value="thin noodle" />
        เส้นเล็ก
      </label>
      <br />
      <label>
      <input type="radio" name="noodle" value="big noodle" />
        เส้นใหญ่
      </label>
      <br />        
      <label>
      <input type="radio" name="noodle" value="egg noodle" />
        บระหมี่
      </label>
      <br />
    </p>

    <p>
      <label>
        <input type="checkbox" name="toppings" value="meatBall" />
        ลูกชิ้น
      </label>
      <br />
      <label>
        <input type="checkbox" name="toppings" value="meat" />
        เนื้อสด
      </label>
      <br />
      <label>
        <input type="checkbox" name="toppings" value="meatBraised" />
        เนื้อเปื่อย
      </label>
      <br />
      <label>
        <input
          type="checkbox" name="toppings" value="morningGlory" />

ผักบุ้ง
      </label>
      <br />
      <label>
        <input
          type="checkbox" name="toppings" value="greenSprout" />

ถั่วงอก
      </label>
    </p>
    <input type='submit' />
  </form>
  </>
  );
}

function NoodleDetail() {
  const location = useLocation();
  let order = location.state.data
  return (<><h2>Noodle Detail</h2>
    <p>คุณสั่ง {order.noodle}</p>
    <p>คุณสั่ง Topping :{order.topping.map(x=> <span>{x}, </span>)}</p>
  </>);
}

// Drink datail

function Drinks() {
  let navigate = useNavigate();

  function handleChange(e) {
    e.preventDefault()
    let form = e.currentTarget;
    let formData = new FormData(form);
    let data = { topping: formData.getAll('toppings'), drinks: formData.get('drinks') }
    navigate('/drinks/detail', { replace: true, state: { data } })
  }
  return (<><form onSubmit={handleChange}>
    <p>What would you like?</p>
    <p>
      <label>
        <input type="radio" name="drinks" value="Coffee" />
        กาแฟ
      </label>
      <br />
      <label>
      <input type="radio" name="drinks" value="Milk Tea" />
        ชานม
      </label>
      <br />        
      <label>
      <input type="radio" name="drinks" value="Chocolate" />
        ช็อกโกแลต
      </label>
      <br />
    </p>

    <p>
      <label>
        <input type="checkbox" name="toppings" value="normal Sweet" />
        หวานปกติ
      </label>
      <br />
      <label>
        <input type="checkbox" name="toppings" value="less Sweet" />
        หวานน้อย
      </label>
      <br />
      <label>
        <input type="checkbox" name="toppings" value="much Sweet" />
        หวานมาก
      </label>
      <br />
      <label>
        <input
          type="checkbox" name="toppings" value="with Ice" />

ใส่น้ำแข็ง
      </label>
      <br />
      <label>
        <input
          type="checkbox" name="toppings" value="without Ice" />

แยกน้ำแข็ง
      </label>
    </p>
    <input type='submit' />
  </form>
  </>
  );
}

function DrinksDetail() {
  const location = useLocation();
  let order = location.state.data
  return (<><h2>Drinks Detail</h2>
    <p>คุณสั่ง {order.drinks}</p>
    <p>คุณสั่ง Topping :{order.topping.map(x=> <span>{x}, </span>)}</p>
  </>);
}

function NoMatch() {
  return (
    <><h2>Nothing to show here! <img width="40px" src="https://play-lh.googleusercontent.com/S9IiebVICFGaVHqRdj6mOcChSDJH1kjLaepKqQes4UmvQQCjNOXvua8DiES1iHdEkQ" alt="brand"/></h2><p><Link to="/">Go to the home page</Link></p></>
  );
}



export default App;
