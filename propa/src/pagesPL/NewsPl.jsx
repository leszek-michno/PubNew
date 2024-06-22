import '../assets/styles/NewsPl.scss'
import { NewsPlList } from '../assets/data/NewsPlList'

const NewsPl = () => {
  return (
    <>
      <header>
        <h1>Aktualności</h1>
      </header>
        {NewsPlList.map((item) => (
          <div key={item.id} className='news'>
            <h2 className='titles'>{item.title}</h2>
            <div className='new'>
            <div className='photo'>
            <img src={item.img} loading='lazy'/>
            </div>
           <div className='content'>   
            <p>{item.content}</p>
            </div>
            </div>
          </div>
        ))}
      
    </>
  )
}

export default NewsPl