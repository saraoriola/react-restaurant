import HeaderFunctional from '../components/Header/HeaderFunctional'
import HomeFunctional from '../components/Home/HomeFunctional'
import './App.css'

const dishes = [
  {
    id: 1,
    name: 'Steak',
    description: 'Grilled steak with a side of vegetables.',
    price: 25,
  },
  {
    id: 2,
    name: 'Pasta Carbonara',
    description: 'Classic Italian pasta with bacon and cream sauce.',
    price: 15,
  },
  {
    id: 3,
    name: 'Salmon Fillet',
    description: 'Freshly grilled salmon served with lemon and herbs.',
    price: 18,
  },
  {
    id: 4,
    name: 'Chicken Caesar Salad',
    description: 'Crisp romaine lettuce with grilled chicken and Caesar dressing.',
    price: 12,
  },
  {
    id: 5,
    name: 'Vegetarian Pizza',
    description: 'Pizza topped with a variety of fresh vegetables.',
    price: 14,
  },
];


function App() {

  return (
    <>
    <HeaderFunctional/>
    <HomeFunctional dishes = {dishes}/>
    </>
  )
};

export default App
