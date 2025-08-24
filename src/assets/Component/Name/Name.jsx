import './Name.css';
const Name=({firstName,lastName})=>{
    return (
        <div>
            <h1 className='h1-tag'>
            I'm {firstName} {lastName}
            </h1>
           
        </div>
    );
  }
  export default Name;