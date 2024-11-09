import Button from '../../composants/accueil/Button';
import './App.css';

function App() {
  return (
    <div className=''>
      {/* MENU */}
      <div className='menu-principal'>
        <h1 className='logo'>plano</h1>

        <div className='lien-menu-principal'>
          <Button text="Features" />
          <Button text="Pricing" />
          <Button text="About" />
          <Button text="Blog" />
        </div>

        <div>
          <button className='register-button'>
            Register
          </button>
        </div>
      </div>

      {/* BANNIERE */}
      <div className='banniere'>
        <div className='banniere-gauche'>
          <p className='banniere-paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, numquam sunt repudiandae molestiae quisquam, suscipit nihil modi non tempore eius aut provident incidunt quia odio voluptatem ex dicta dolor! Assumenda.
          </p>

          <div className='input-field'>
            <input type="text" name="" id="" placeholder='entrer le text ici' className='input-element' />
            
            <button className='input-button'>Register</button>
          </div>

          <p className='second-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, numquam sunt repudiandae molestiae quisquam</p>
        </div>
        <div className='banniere-droite'>
          <img src="https://images.unsplash.com/photo-1726554881162-ceeb7d68be8c?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='banniere-image' />
        </div>
      </div>





      <div className='menu-principal'>
        <div className='logo'>
          <div className='akissi'>
            <div className='delta'></div>
          </div>
        </div>
      </div>



      <div className='akissi'>
        <div className='delta'></div>
      </div>
    </div>
  );
}

export default App;
