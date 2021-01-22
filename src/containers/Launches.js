import {useState,useEffect} from 'react'

const Launches=(props)=>{
   
   const [favorites, setFavorites] = useState([])
   const getArray = JSON.parse(localStorage.getItem('favorites') || '0')
   const addFav=(id)=>{
        //e.preventDefault();
        let array=favorites;
        let addArray = true;
        array.map((item,i)=>{
            if(item===id){
                array.splice(i,1);
                addArray=false;
            }
        });
        if(addArray){
            array.push(id)
        }
        setFavorites([...array])
        localStorage.setItem("favorites", JSON.stringify(favorites));
   }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  },[favorites]);

  
  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray])
    } 
  }, []);

   return (
        <div className="launches">
            <h2>Upcoming - Next Launches</h2>
            <div className="launches__container">
                <div className="table__row">
                    <div className="table_col">
                        <span>Mission</span>
                    </div>
                    <div className="table_col">
                        <span>Date (UTC)</span>
                    </div>
                    <div className="table_col">
                        <span>Launchpad</span>
                    </div>
                    <div className="table_col">
                        <span>Favorite</span>
                    </div>
                </div>
                {props.launches.map(launch=>
                        <div key={launch.id} className="table__row">
                            <div className="table_col">
                                <span>{launch.name}</span>
                            </div>
                            <div className="table_col">
                                <span>{launch.date_utc}</span>
                            </div>
                            <div className="table_col">
                                <span>{launch.launchpad}</span>
                            </div>
                            <div className="table_col">
                                {
                                    favorites.includes(launch.id)?
                                    (<button onClick={() => addFav(launch.id)}><span style={{color:"#C0392B" }}>❤︎</span> Delete Favorite</button>)
                                    : 
                                    (<button onClick={() => addFav(launch.id)}><span style={{color:"#fff" }}>❤︎</span> Add Favorite</button>)
                                }
                            </div>
                        </div>
                )}
            </div>
        </div>
    )
}
export default Launches;