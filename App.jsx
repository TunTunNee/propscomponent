import Card from "../pages/cards.jsx"
import cover from '../src/assets/cover.jpg'
import against from '../src/assets/against.jpg'
import more from '../src/assets/more.jpg'
import './App.css'
import Product from "../pages/product.jsx"
import one from '../src/assets/watchone.jpeg'
import two from '../src/assets/watchtwo.jpeg'
import three from '../src/assets/watchthree.jpeg'
import Blog from "../pages/blog.jsx"

const App = () => {
  return (
    <div className="body">
      <h2>Profile Card Component</h2>
      <div className="flex">
        <div>
        <Card 
          image={cover} 
          name="Khalifa" 
          age="25" 
          location="Lagos, Nigeria" 
        />
        </div>
        <div>
        <Card 
          image={against} 
          name="Swott" 
          age="30"
          location="Ottawa, Canada" 
        />
        </div>
        <div>
        <Card 
          image={more}
          name="NeverLack" 
          age="28" 
          location="Bucharest, Romania" 
        />
        </div>
      </div>

      <div className="line"></div>

      <h2>Product Listing Page</h2>

      <div className="diverse">
        <div>
        <Product
          image={one} 
          name="Furlan Marri" 
          price="20,000 USD"
          description="Chrono 3199-A" 
        />
        </div>
        <div>
        <Product
          image={two} 
          name="Smart Watch" 
          price= "300 USD"
          description="Tech Gadget AI 0.4" 
        />
        </div>
        <div>
        <Product
          image={three}
          name="Casio MTS-100D" 
          price="200 USD"
          description="Moon Phase and Tide Display" 
        />
        </div>

      </div>

      <div className="line"></div>

      <h2>Blog Post</h2>

      <div className="blog">
        <div>
        <Blog
        title= "Great Work of Time"
        author= "John Crowley"
        content= "An Horatian Ode upon Cromwell's Return from Ireland"
        date= "06 Jul, 1973"
        />
        </div>
        <div>
        <Blog
        title= "A Handful of Dust"
        author= "Evelyn Waugh"
        content= "The Waste Lands of Old Joseon Refugees and Da' Mul Army"
        date= "12 Feb, 1965"
        />
        </div>
        <div>
        <Blog
        title= "The Grapes of Wrath"
        author= "John Steinbeck"
        content= "Battle Hymn from the Book of Psalms, Ecclesiastes and Colossians"
        date= "20 Sep, 1805"
        />
        </div>
      </div>
    </div>
  
  );
};


export default App