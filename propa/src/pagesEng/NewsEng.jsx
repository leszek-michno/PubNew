import '../assets/styles/NewsPl.scss'
import { NewsPlListEng } from '../assets/data/NewsPlList'

const NewsEng = () => {
  return (
    <>
      <header>
        <h1>News</h1>
      </header>
        {NewsPlListEng.map((item) => (
          <div key={item.id} className='news'>
            <h2 className='titles'>{item.title}</h2>
            <div className='new'>
            <div className='photo'>
            <img src={item.img} loading='lazy'/>
            </div>
           <div className='content'>   
            {item.content}
            </div>
            </div>
          </div>
        ))}
      
    </>
  )
}

export default NewsEng