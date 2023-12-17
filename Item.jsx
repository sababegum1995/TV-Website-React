import '../Components/style.css'

function Item(props){
    return(
        <>
       <div className="container11">
   
        <h1>TITLE - {props.title}</h1>
        <h3>YEAR - {props.year}</h3>
         <p>DESCRIPTION - {props.description}</p>
        <h4>GENRE - {props.genre}</h4>
        <h5>DIRECTOR - {props.director}</h5>
        <h6>CAST - {props.cast}</h6>
        </div>

        </>
    )
}
export default Item;