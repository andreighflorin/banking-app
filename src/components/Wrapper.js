import {useData} from '../hooks/useData'
import Header from '../components/Header'
import CardsList from '../components/CardsList'
import Button from '../components/Button'
import AddForm from '../components/AddForm'

export default function Wrapper() {

  const {data, showAddForm} = useData();

  return (
    <>
      <Header/>
      {data && <CardsList/>}
      {!showAddForm && <Button/>}
      {showAddForm && <AddForm/>}
    </>
  );
}