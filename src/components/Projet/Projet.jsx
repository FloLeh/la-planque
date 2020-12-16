import './Projet.css'

const Projet = (props) => {
  return (
    <div className='projet' style={{backgroundImage: `url(${props.background})`}}>
      <div className="projet__bottom">
        {props.title}
      </div>
    </div>
  )
}

export default Projet
