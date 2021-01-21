const Launches=(props)=>{
    
    return (
        <div className="launches">
            <h2>Upcoming - Next Launches</h2>
            <div className="launches__container">
                <div className="table__header">
                    <div className="table_th">
                        <span>Mission</span>
                    </div>
                    <div className="table_th">
                        <span>Date (UTC)</span>
                    </div>
                    <div className="table_th">
                        <span>Launchpad</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Launches;