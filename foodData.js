
// Food item data with links to order pages, names, and image URLs
const foodData = [
  {
      name: "Pizza",
      link: "pizza.html",
      image: "pizza.png" // Add the image URL for Pizza
  },
  {
      name: "BBQ Chicken Pizza",
      link: "nonvegpizza.html",
      image: "BBQ-chicken.webp" // Add the image URL for BBQ Chicken Pizza
  },
  {
      name: "Jerk chicken pizza",
      link: "nonvegpizza.html",
      image: "jerkpizza.jpg" // Add the image URL for Pepperoni Pizza
  },
  {
      name: "Tandoori Chicken Pizza",
      link: "nonvegpizza.html",
      image: "TandooriPizza.jpg" // Add the image URL for Paneer Pizza
  },
  {
      name: "Pepperoni pizza",
      link:"nonvegpizza.html",
      image: "Pepperoni.jpg" // Add the image URL for Mushroom Pizza
  },
  {
      name: "Margherita Pizza",
      link: "vegpizza.html",
      image: "Margherita pizza.jpg" // Add the image URL for Burger
  },
  {
      name: "Farmhouse Pizza",
      link: "vegpizza.html",
      image: "Farmhouse.jpg" // Add the image URL for Cheese Burger
  },
  {
      name: "Paneer Pizza",
      link: "vegpizza.html",
      image: "paneer.jpeg" // Add the image URL for Veg Burger
  },
  {
      name: "Mushroom Pizza",
      link: "vegpizza.html",
      image: "Mushrooms.jpg" // Add the image URL for Pasta
  },
  {
      name: "Briyani",
      link: "briyani.html",
      image: "briyani.png" // Add the image URL for Spaghetti
  },
  {
    name: "Mutton Briyani",
    link: "nonvegbriyani.html",
    image: "muttonbriyani.jpg" // Add the image URL for Spaghetti
},
{
  name: "Chicken Briyani",
  link: "nonvegbriyani.html",
  image: "chickenbriyani.jpg" // Add the image URL for Spaghetti
},
{
  name: "Egg Briyani",
  link: "nonvegbriyani.html",
  image: "eggbriyani.jpg" // Add the image URL for Spaghetti
},
{
  name: "Prawn Briyani",
  link: "nonvegbriyani.html",
  image: "prawnbriyani.jpg" // Add the image URL for Spaghetti
},
{
  name: "Beef Briyani",
  link: "nonvegbriyani.html",
  image: "beefbriyani.jpg" // Add the image URL for Spaghetti
},
{
  name: "Fish Briyani",
  link: "nonvegbriyani.html",
  image: "fishbriyani.jpg" // Add the image URL for Spaghetti
},
{
  name: "Vegetable Briyani",
  link: "vegbriyani.html",
  image: "vegetable.jpg" // Add the image URL for Spaghetti
},
{
  name: "Jackfruit Briyani",
  link: "vegbriyani.html",
  image: "jackfruitbriyani.jpg" // Add the image URL for Spaghetti
},
{
  name: "Mushroom Briyani",
  link: "vegbriyani.html",
  image: "mushroombriyani.jpg" // Add the image URL for Spaghetti
},
{
  name: "Burger",
  link: "burger.html",
  image: "chicken burger.jpg" // Add the image URL for Spaghetti
},
{
  name: "Chicken Burger",
  link: "burger.html",
  image: "burger.png" // Add the image URL for Spaghetti
},
{
  name: "Bison Burger",
  link: "burger.html",
  image: "Bisonburger.jpg" // Add the image URL for Spaghetti
},
{
  name: "Chili Burger",
  link: "burger.html",
  image: "Chiliburger.jpg" // Add the image URL for Spaghetti
},
{
  name: "Cheese Burger",
  link: "burger.html",
  image: "Cheeseburger.jpg" // Add the image URL for Spaghetti
},
{
  name: "JuicyLucy Burger",
  link: "burger.html",
  image: "JuicyLucy.jpg" // Add the image URL for Spaghetti
},
{
  name: "Fried Rice",
  link: "friedrice.html",
  image: "friedrice.png" // Add the image URL for Spaghetti
},
{
  name: "Chicken Friedrice",
  link: "nonveg friedrice.html",
  image: "chickenfriedrice.jpg" // Add the image URL for Spaghetti
}
,
{
  name: "Mutton Friedrice",
  link: "nonveg friedrice.html",
  image: "muttonfriedrice.jpg" // Add the image URL for Spaghetti
},
{
  name: "Egg Friedrice",
  link: "nonveg friedrice.html",
  image: "eggfriedrice.jpg" // Add the image URL for Spaghetti
},
{
  name: "Chicken Schezwan rice",
  link: "nonveg friedrice.html",
  image: "chickenschezwanfriedrice.jpg",
},
{
  name: "Egg Schezwan Friedrice",
  link: "nonveg friedrice.html",
  image: "eggschezwanfriedrice.jpg" // Add the image URL for Spaghetti
},
{
  name: "prawnfriedrice.jpg",
  link: "nonveg friedrice.html",
  image: "eggfriedrice.jpg" // Add the image URL for Spaghetti
},
{
  name: "Beef Friedrice",
  link: "nonveg friedrice.html",
  image: "beeffriedrice.jpg" // Add the image URL for Spaghetti
},
{
  name: "Mushroom Friedrice",
  link: "veg friedrice.html",
  image: "mushroomfriedrice.jpg" // Add the image URL for Spaghetti
},
{
  name: "veg schezwan Friedrice",
  link: "veg friedrice.html",
  image: "vegschezwanfriedrice.jpg" // Add the image URL for Spaghetti
},
{
  name: "Veg manchurian Friedrice",
  link: "veg friedrice.html",
  image: "Vegmanchurianfriedrice.jpg" // Add the image URL for Spaghetti
},
{
  name: "Veg Friedrice",
  link: "veg friedrice.html",
  image: "vegfriedrice.jpg" // Add the image URL for Spaghetti
},
{
  name: "Paneer Friedrice",
  link: "veg friedrice.html",
  image: "paneerfriedrice.jpg" // Add the image URL for Spaghetti
},
{
  name: "Noodles",
  link: "noodles.html",
  image: "noodles.png" // Add the image URL for Spaghetti
},
{
  name: "Chicken Noodles",
  link: "nonvegnoodles.html",
  image: "chickennoodles.jpg" // Add the image URL for Spaghetti
},
{
  name: "Mutton Noodles",
  link: "nonvegnoodles.html",
  image: "muttonnoodels.jpg" // Add the image URL for Spaghetti
},
{
  name: "Egg Noodles",
  link: "nonvegnoodles.html",
  image: "eggnoodles.jpg" // Add the image URL for Spaghetti
},
{
  name: "Prawn Noodles",
  link: "nonvegnoodles.html",
  image: "prawnnoodles.jpg" // Add the image URL for Spaghetti
},
{
  name: "Beef Noodles",
  link: "nonvegnoodles.html",
  image: "beefnoodles.jpg" // Add the image URL for Spaghetti
},
{
  name: "Veg Noodles",
  link: "vegnoodles.html",
  image: "vegienoodles.jpg" // Add the image URL for Spaghetti
},
{
  name: "Mushroom Noodles",
  link: "vegnoodles.html",
  image: "mudhroomnoodles.jpg" // Add the image URL for Spaghetti
},
{
  name: "Gobi Noodles",
  link: "vegnoodles.html",
  image: "paneernoodles.jpg" // Add the image URL for Spaghetti
},
{
  name: "Maggi",
  link: "vegnoodles.html",
  image: "maggi.jpg" // Add the image URL for Spaghetti
}
];

