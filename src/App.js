
import './assets/css/App.css';
import adam from './assets/img/adam.jpg';
import pp from './assets/img/pp1.JPG';

const imgStyle = {
  height: '250px',
  border: '2px solid hsl(var(--p))', // Contoh: Menambahkan border
  borderRadius: '10px', // Contoh: Membuat sudut gambar menjadi melengkung
  boxShadow: '3px 3px 5px #888888', // Contoh: Menambahkan bayangan
  // Anda dapat menambahkan gaya lain sesuai keinginan Anda
};

function App() {
  return (
    // navbar
    <>
      <div className="App">
        <div className="navbar  bg-white">
          <div className="flex-1">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full" style={{ justifyContent: 'start' }}>
                  <img src={adam} alt="" />
                </div>
              </label>
            </div>
            <a href="/" className="btn btn-ghost normal-case text-xl" style={{ color: 'black' }}>Adam Fawazzaky</a>
          </div>
          <ul className="menu menu-vertical lg:menu-horizontal bg-primary rounded-box">
            <li><a href="/" style={{ color: 'white' }}>home</a></li>
            <li><a href="/" style={{ color: 'white' }}>Project</a></li>
            <li><a href="/" style={{ color: 'white' }}>About</a></li>
          </ul>
        </div>
      </div>

      <header>
        <div className="hero min-h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={pp} alt="" style={imgStyle} />
            <div>
              <h1 className="text-5xl font-bold text-black">Hello iam Adam Fawazzaky!</h1>
              <p className="py-6 text-black">I am a student of Bina Nusantara University (BINUS) majoring in Computer Science. I have expertise in various programming languages, including Javascript, Java, Golang, and PHP.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </header>

      {/* body */}
      <>
        <div className="container bg-white md:mx-auto px-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={pp} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>

      </>
    </>
  );
}

export default App;
