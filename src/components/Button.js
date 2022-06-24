import {useData} from '../hooks/useData'

export default function Button() {

  const {updateShowAddForm} = useData();

  const handleClickAdd = e => {
    e.preventDefault();
    updateShowAddForm(true);
  }

  return (
    <>
      <a href="#" className="btn btn-add" onClick = {e => handleClickAdd(e)}>Add new card</a>
    </>
  )
  
}