function Todoitem(props) {
    const playerArr = props.playerArr
    const setPlayerArr = props.setPlayerArr
    function handleDelete(deleteid){
        var tempArr = playerArr.filter(function(i){
            if (i.id == deleteid){
                return false
            }
            else{
                return true
            }
        })
        setPlayerArr(tempArr)
    }
    return (
        <div className="flex justify-between">
             <p>{props.index + 1}. {props.player}</p>
             <button className="text-red-500" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    )
}
export default Todoitem