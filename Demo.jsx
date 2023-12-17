import '../Components/style.css'
import React,{ useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Route, Routes, Link} from 'react-router-dom'
import background1 from './pictures/bg1.jpg'
import background2 from './pictures/bg2.jpg'
import poster1 from './pictures/poster1.jpg';
import poster2 from './pictures/poster2.jpg';
import poster3 from './pictures/poster3.jpg';
import poster4 from './pictures/poster4.jpg';
import poster5 from './pictures/poster5.jpg';
import poster6 from './pictures/poster6.jpg';
import poster7 from './pictures/poster7.jpg';
import poster8 from './pictures/poster8.jpg';
import poster9 from './pictures/poster9.jpg';
import poster10 from './pictures/poster10.jpg';
import poster11 from './pictures/poster11.jpg';
import poster12 from './pictures/poster12.jpg';
import poster13 from './pictures/poster13.jpg';
import poster14 from './pictures/poster14.jpg';
import poster15 from './pictures/poster15.jpg';
const allvalues = [
  {
    id: 1,
    title: "Iron Man",
    year: 2008,
    description: "Billionaire Tony Stark builds a powered suit of armor and becomes Iron Man.",
    genre: "Action",
    director: "Jon Favreau",
    cast: ["Robert Downey Jr.", "Gwyneth Paltrow", "Jeff Bridges"],
  },
  {
    id: 2,
    title: "The Avengers",
    year: 2012,
    description: "Earth's mightiest heroes must come together and learn to fight as a team.",
    genre: "Action",
    director: "Joss Whedon",
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
  },
  {
    id: 3,
    title: "Black Panther",
    year: 2018,
    description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people.",
    genre: "Action",
    director: "Ryan Coogler",
    cast: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
  },
  {
    id: 4,
    title: "Guardians of the Galaxy",
    year: 2014,
    description: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior.",
    genre: "Action",
    director: "James Gunn",
    cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
  },
  {
    id: 5,
    title: "Thor",
    year: 2011,
    description: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans.",
    genre: "Action",
    director: "Kenneth Branagh",
    cast: ["Chris Hemsworth", "Natalie Portman", "Tom Hiddleston"],
  },
  {
    id: 6,
    title: "Doctor Strange",
    year: 2016,
    description: "A former neurosurgeon embarks on a journey of healing and discovery as the Sorcerer Supreme of the mystical arts.",
    genre: "Action",
    director: "Scott Derrickson",
    cast: ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams"],
  },
  {
    id: 7,
    title: "Captain America: The Winter Soldier",
    year: 2014,
    description: "Steve Rogers teams up with Natasha Romanoff to stop a powerful enemy known as the Winter Soldier.",
    genre: "Action",
    director: "Anthony Russo, Joe Russo",
    cast: ["Chris Evans", "Scarlett Johansson", "Sebastian Stan"],
  },
  {
    id: 8,
    title: "Ant-Man",
    year: 2015,
    description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, Scott Lang must embrace his inner hero.",
    genre: "Action",
    director: "Peyton Reed",
    cast: ["Paul Rudd", "Michael Douglas", "Evangeline Lilly"],
  },
  {
    id: 9,
    title: "Spider-Man: Homecoming",
    year: 2017,
    description: "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man.",
    genre: "Action",
    director: "Jon Watts",
    cast: ["Tom Holland", "Michael Keaton", "Robert Downey Jr."],
  },
  {
    id: 10,
    title: "Captain Marvel",
    year: 2019,
    description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war.",
    genre: "Action",
    director: "Anna Boden, Ryan Fleck",
    cast: ["Brie Larson", "Samuel L. Jackson", "Ben Mendelsohn"],
  },
  {
    id: 11,
    title: "Avengers: Infinity War",
    year: 2018,
    description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    genre: "Action",
    director: "Anthony Russo, Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
  },
  {
    id: 12,
    title: "Avengers: Endgame",
    year: 2019,
    description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    genre: "Action",
    director: "Anthony Russo, Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
  },
  {
    id: 13,
    title: "Thor: Ragnarok",
    year: 2017,
    description: "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarok, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    genre: "Action",
    director: "Taika Waititi",
    cast: ["Chris Hemsworth", "Tom Hiddleston", "Cate Blanchett"],
  },
  {
    id: 14,
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    description: "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
    genre: "Action",
    director: "James Gunn",
    cast: ["Chris Pratt", "Zoe Saldana", "Dave Bautista"],
  },
  {
    id: 15,
    title: "Ant-Man and The Wasp",
    year: 2018,
    description: "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds Ant-Man fighting alongside The Wasp to uncover secrets from their past.",
    genre: "Action",
    director: "Peyton Reed",
    cast: ["Paul Rudd", "Evangeline Lilly", "Michael Peña"],
  },
];


  function Demo() {

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    };
      

    const [searchQuery, setSearchItem] = useState('')
  const [filteredUsers, setFilteredUsers] = useState(allvalues)

  const handleSearch = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)

    const filteredItems = allvalues.filter((user) =>
     user.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

    return(
        <>
      
        <img className="background" src={background1} alt="backgroung"/>
        <div className="heading">
        <div className='movie'>
            <p className='text-light mt-2'>MOVIE</p>
        </div>
        <div className='search'>
            <input className='text-secondary mt-2 ms-2 search1' type="text" placeholder='Search for Movie' value={searchQuery} onChange={handleSearch}></input>
            <svg onClick={() => scrollToSection("section1")}  className='text-light' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
        <Carousel className='special-img' cols={4} rows={1} gap={2} loop>
      <Carousel.Item>
        <div>
        <img className='special-image' src={poster1}  alt="poster1"/>
        <img className='special-image1' src={poster2}  alt="poster2"/>
        <img className='special-image1' src={poster3}  alt="dish1"/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
      <img className='special-image1' src={poster4}  alt="dish1"/>
      <img className='special-image1' src={poster5}  alt="dish1"/>
      <img className='special-image1' src={poster6}  alt="dish1"/>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
      <img className='special-image1' src={poster7}  alt="dish1"/>
      <img className='special-image1' src={poster8}  alt="dish1"/>
      <img className='special-image1' src={poster9}  alt="dish1"/>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
      <img className='special-image1' src={poster10}  alt="dish1"/>
      <img className='special-image1' src={poster11}  alt="dish1"/>
      <img className='special-image1' src={poster12}  alt="dish1"/>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
      <img className='special-image1' src={poster13}  alt="dish1"/>
      <img className='special-image1' src={poster14}  alt="dish1"/>
      <img className='special-image1' src={poster15}  alt="dish1"/>
      </div>
      </Carousel.Item>
    </Carousel> 
    </div>
     {/* <div className="bg">
   <div className="picture1">
        <Link to="Poster1">  <img className='poster-img' src={poster1}  alt="poster1"/></Link>
        <h5>{props.title}</h5>
        </div>
        <div className="picture1">
        <Link to="Poster2">  <img className='poster-img' src={poster2}  alt="poster2"/></Link>
        <h5>The Avengers</h5>
      </div>
      <div className="picture1">
        <Link to="Poster3">  <img className='poster-img' src={poster3}  alt="poster3"/></Link>
        <h5>Black Panther</h5>
        </div>
        <div className="picture1">
        <Link to="Poster4">  <img className='poster-img' src={poster4}  alt="poster4"/></Link>
        <h5>Guardians of the Galaxy</h5>
        </div>
        </div>
        </div>
        <div className="bg">
   <div className="picture1">
        <Link to="Poster1">  <img className='poster-img' src={poster5}  alt="poster1"/></Link>
        <h5>Thor</h5>
        </div>
        <div className="picture1">
        <Link to="Poster2">  <img className='poster-img' src={poster6}  alt="poster2"/></Link>
        <h5>Doctor Strange</h5>
      </div>
      <div className="picture1">
        <Link to="Poster3">  <img className='poster-img' src={poster7}  alt="poster3"/></Link>
        <h5>Captain America: The Winter Soldier</h5>
        </div>
        <div className="picture1">
        <Link to="Poster4">  <img className='poster-img' src={poster8}  alt="poster4"/></Link>
        <h5>Ant-Man</h5>
        </div>
       </div>
       <div className="bg">
   <div className="picture1">
        <Link to="Poster1">  <img className='poster-img' src={poster9}  alt="poster1"/></Link>
        <h5>Spider-Man: Homecoming</h5>
        </div>
        <div className="picture1">
        <Link to="Poster2">  <img className='poster-img' src={poster10}  alt="poster2"/></Link>
        <h5>Captain Marvel</h5>
      </div>
      <div className="picture1">
        <Link to="Poster3">  <img className='poster-img' src={poster11}  alt="poster3"/></Link>
        <h5>Avengers: Infinity War</h5>
        </div>
        <div className="picture1">
        <Link to="Poster4">  <img className='poster-img' src={poster12}  alt="poster4"/></Link>
        <h5>Avengers: Endgame</h5>
        </div>
       </div>
       <div className="bg">
   <div className="picture1">
        <Link to="Poster1">  <img className='poster-img' src={poster13}  alt="poster1"/></Link>
        <h5>Thor: Ragnarok</h5>
        </div>
        <div className="picture1">
        <Link to="Poster2">  <img className='poster-img' src={poster14}  alt="poster2"/></Link>
        <h5>Guardians of the Galaxy Vol. 2</h5>
      </div>
       <div className="picture1">
        <Link to="Poster3">  <img className='poster-img' src={poster15}  alt="poster3"/></Link>
        <h5>Ant-Man and The Wasp</h5>
        </div>  
                  */}
                  
        </div>
        <div className="container111" id="section1">
          <h2 className='text-light'>MOVIE LIST</h2>
          <ol>
       <Link to="Poster1">{filteredUsers.filter((user)=>{
    return ( user.id==1)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

       <Link to="Poster2">{filteredUsers.filter((user)=>{
    return ( user.id==2)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

       <Link to="Poster3">{filteredUsers.filter((user)=>{
    return ( user.id==3)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster4">{filteredUsers.filter((user)=>{
    return ( user.id==4)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster5">{filteredUsers.filter((user)=>{
    return ( user.id==5)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster6">{filteredUsers.filter((user)=>{
    return ( user.id==6)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster7">{filteredUsers.filter((user)=>{
    return ( user.id==7)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster8">{filteredUsers.filter((user)=>{
    return ( user.id==8)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster9">{filteredUsers.filter((user)=>{
    return ( user.id==9)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster10">{filteredUsers.filter((user)=>{
    return ( user.id==10)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster11">{filteredUsers.filter((user)=>{
    return ( user.id==11)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster12">{filteredUsers.filter((user)=>{
    return ( user.id==12)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster13">{filteredUsers.filter((user)=>{
    return ( user.id==13)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster14">{filteredUsers.filter((user)=>{
    return ( user.id==14)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>

<Link to="Poster15">{filteredUsers.filter((user)=>{
    return ( user.id==15)
       }).map(user => <li key={user.id1}>{user.title}</li>)}</Link>
        </ol>
      </div>
   
      
        </>

    )
}

export default Demo;
